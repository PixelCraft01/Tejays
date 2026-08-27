import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRoutes } from "../routeConfig";

const RESUME_DELAY = 4000;
const SCROLL_SPEED = 150;
const TOP_RESET_DELAY = 900;
const FRAME_TIME_CAP = 64;
const ROUTE_SEQUENCE = publicRoutes;

function isInteractiveElement(element) {
    return element instanceof HTMLElement && Boolean(
        element.closest("input, textarea, select, [contenteditable='true'], form, dialog, [role='dialog']")
    );
}

export default function AutoScroll() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const pathnameRef = useRef(pathname);
    const frameRef = useRef(null);
    const resumeTimerRef = useRef(null);
    const resetTimerRef = useRef(null);
    const lastFrameRef = useRef(0);
    const pageHeightRef = useRef(0);
    const pausedRef = useRef(false);
    const enabledRef = useRef(true);
    const reducedMotionRef = useRef(false);
    const [enabled, setEnabled] = useState(true);

    const clearResumeTimer = () => {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
    };

    const clearResetTimer = () => {
        window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
    };

    const scheduleResume = (delay) => {
        clearResumeTimer();
        resumeTimerRef.current = window.setTimeout(() => {
            resumeTimerRef.current = null;
            if (enabledRef.current && !reducedMotionRef.current && !isInteractiveElement(document.activeElement)) {
                pausedRef.current = false;
                lastFrameRef.current = 0;
            }
        }, delay);
    };

    const toggleAutoScroll = () => {
        setEnabled((current) => {
            const nextEnabled = !current;
            enabledRef.current = nextEnabled;

            if (nextEnabled) {
                pausedRef.current = false;
                lastFrameRef.current = 0;
            } else {
                pausedRef.current = true;
                clearResumeTimer();
                clearResetTimer();
            }

            return nextEnabled;
        });
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        reducedMotionRef.current = mediaQuery.matches;

        const handleMotionPreference = (event) => {
            reducedMotionRef.current = event.matches;
            if (event.matches) {
                pausedRef.current = true;
                clearResumeTimer();
            } else if (enabledRef.current) {
                pausedRef.current = false;
                lastFrameRef.current = 0;
            }
        };

        mediaQuery.addEventListener("change", handleMotionPreference);
        return () => mediaQuery.removeEventListener("change", handleMotionPreference);
    }, []);

    useEffect(() => {
        const updatePageHeight = () => {
            pageHeightRef.current = document.documentElement.scrollHeight;
        };

        updatePageHeight();
        window.addEventListener("resize", updatePageHeight, { passive: true });

        const resizeObserver = new ResizeObserver(updatePageHeight);
        resizeObserver.observe(document.documentElement);

        return () => {
            window.removeEventListener("resize", updatePageHeight);
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        pathnameRef.current = pathname;
        window.scrollTo({ top: 0, behavior: "auto" });
        pausedRef.current = true;
        lastFrameRef.current = 0;
        pageHeightRef.current = document.documentElement.scrollHeight;
        clearResumeTimer();
        clearResetTimer();

        if (enabledRef.current && !reducedMotionRef.current) {
            scheduleResume(TOP_RESET_DELAY);
        }

        return () => {
            clearResumeTimer();
            clearResetTimer();
        };
    }, [pathname]);

    useEffect(() => {
        const pauseForInteraction = (event) => {
            if (
                event.type === "keydown" &&
                !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)
            ) {
                return;
            }

            pausedRef.current = true;
            scheduleResume(RESUME_DELAY);
        };

        window.addEventListener("wheel", pauseForInteraction, { passive: true, capture: true });
        window.addEventListener("touchstart", pauseForInteraction, { passive: true, capture: true });
        window.addEventListener("pointerdown", pauseForInteraction, { passive: true, capture: true });
        window.addEventListener("keydown", pauseForInteraction, true);

        return () => {
            window.removeEventListener("wheel", pauseForInteraction, true);
            window.removeEventListener("touchstart", pauseForInteraction, true);
            window.removeEventListener("pointerdown", pauseForInteraction, true);
            window.removeEventListener("keydown", pauseForInteraction, true);
            clearResumeTimer();
        };
    }, []);

    useEffect(() => {
        const handleFocus = (event) => {
            if (isInteractiveElement(event.target)) {
                pausedRef.current = true;
                clearResumeTimer();
            }
        };

        const handleBlur = (event) => {
            if (isInteractiveElement(event.target)) {
                scheduleResume(RESUME_DELAY);
            }
        };

        document.addEventListener("focusin", handleFocus);
        document.addEventListener("focusout", handleBlur);
        return () => {
            document.removeEventListener("focusin", handleFocus);
            document.removeEventListener("focusout", handleBlur);
            clearResumeTimer();
        };
    }, []);

    useEffect(() => {
        const animate = (timestamp) => {
            if (!lastFrameRef.current) {
                lastFrameRef.current = timestamp;
            }

            const elapsed = Math.min(timestamp - lastFrameRef.current, FRAME_TIME_CAP);
            lastFrameRef.current = timestamp;

            if (
                enabledRef.current &&
                !reducedMotionRef.current &&
                !pausedRef.current &&
                !isInteractiveElement(document.activeElement)
            ) {
                const currentScroll = window.scrollY;
                const maximumScroll = Math.max(pageHeightRef.current - window.innerHeight, 0);

                if (currentScroll >= maximumScroll - 1) {
                    if (!resetTimerRef.current) {
                        const currentRouteIndex = ROUTE_SEQUENCE.indexOf(pathnameRef.current);
                        const nextRoute = currentRouteIndex >= 0
                            ? ROUTE_SEQUENCE[(currentRouteIndex + 1) % ROUTE_SEQUENCE.length]
                            : ROUTE_SEQUENCE[0];

                        pausedRef.current = true;
                        resetTimerRef.current = window.setTimeout(() => {
                            resetTimerRef.current = null;
                            if (!enabledRef.current || reducedMotionRef.current) {
                                return;
                            }

                            if (nextRoute === pathnameRef.current) {
                                window.scrollTo({ top: 0, behavior: "auto" });
                                pausedRef.current = false;
                                lastFrameRef.current = 0;
                            } else {
                                navigate(nextRoute);
                            }
                        }, TOP_RESET_DELAY);
                    }
                } else {
                    const nextScroll = Math.min(
                        currentScroll + (SCROLL_SPEED * elapsed) / 1000,
                        maximumScroll
                    );
                    window.scrollTo({ top: nextScroll, behavior: "auto" });
                }
            }

            frameRef.current = window.requestAnimationFrame(animate);
        };

        frameRef.current = window.requestAnimationFrame(animate);
        return () => {
            window.cancelAnimationFrame(frameRef.current);
            clearResumeTimer();
            clearResetTimer();
        };
    }, [navigate]);

    return (
        <button
            type="button"
            onClick={toggleAutoScroll}
            aria-label={enabled ? "Pause automatic scrolling" : "Resume automatic scrolling"}
            aria-pressed={!enabled}
            title={enabled ? "Pause automatic scrolling" : "Resume automatic scrolling"}
            className="fixed bottom-[88px] right-5 z-[999998] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg backdrop-blur transition-transform duration-300 hover:scale-105 hover:text-[#e3292f] lg:bottom-6 lg:right-24"
        >
            {enabled ? <Pause aria-hidden="true" size={24} /> : <Play aria-hidden="true" size={24} />}
        </button>
    );
}