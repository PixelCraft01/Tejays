import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Network,
    ShieldCheck,
    Zap,
    Award,
    Users,
    MapPinned,
    Headphones,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";


// =========================================================
// SERVICES
// =========================================================

const services = [
    {
        title: "Bulk Bandwidth",
        description:
            "High-capacity bandwidth solutions designed for demanding network requirements.",
        icon: Network,
        path: "/bulk-bandwidth",
    },
    {
        title: "Broadband",
        description:
            "Reliable and high-performance broadband connectivity for modern businesses.",
        icon: Globe2,
        path: "/broadband",
    },
    {
        title: "Point To Point Lease Line",
        description:
            "Dedicated connectivity for secure and dependable business communication.",
        icon: Zap,
        path: "/point-to-point-lease-line",
    },
    {
        title: "Managed Services",
        description:
            "Professionally managed network solutions with dependable support.",
        icon: ShieldCheck,
        path: "/managed-services",
    },
    {
        title: "Peering",
        description:
            "Efficient network interconnection for improved routing and performance.",
        icon: Network,
        path: "/peering",
    },
    {
        title: "IPTV",
        description:
            "Professional IPTV connectivity solutions built for modern networks.",
        icon: Globe2,
        path: "/iptv",
    },
    {
        title: "OTT",
        description:
            "Network solutions designed to support high-quality digital content delivery.",
        icon: Zap,
        path: "/ott",
    },
    {
        title: "DOT Compliances And Licensing",
        description:
            "Professional support for telecom compliance and licensing requirements.",
        icon: ShieldCheck,
        path: "/dot-compliances-and-licensing",
    },
];


// =========================================================
// BENEFITS
// =========================================================

const benefits = [
    "Cost Effective & Uninterrupted Connectivity",
    "Superior Speed and Performance",
    "SLA of 99.5% Uptime",
    "24/7 Proactive support available",
];


// =========================================================
// STATS
// =========================================================

const stats = [
    {
        value: "Class 'A'",
        label: "Service Provider",
        icon: Award,
    },
    {
        value: "10K+",
        label: "Own Subscribers",
        icon: Users,
    },
    {
        value: "18",
        label: "PoPs Across India",
        icon: MapPinned,
    },
    {
        value: "24/7",
        label: "Proactive Support",
        icon: Headphones,
    },
];


// =========================================================
// BRANDS
// =========================================================

const brands = [
    {
        id: 1,
        image: "/Tejays/assets/brands/brand-1.png",
        name: "Brand 1",
    },
    {
        id: 2,
        image: "/Tejays/assets/brands/brand-2.png",
        name: "Brand 2",
    },
    {
        id: 3,
        image: "/Tejays/assets/brands/brand-3.png",
        name: "Brand 3",
    },
    {
        id: 4,
        image: "/Tejays/assets/brands/brand-4.png",
        name: "Brand 4",
    },
    {
        id: 5,
        image: "/Tejays/assets/brands/brand-5.png",
        name: "Brand 5",
    },
    {
        id: 6,
        image: "/Tejays/assets/brands/brand-6.png",
        name: "Brand 6",
    },
    {
        id: 7,
        image: "/Tejays/assets/brands/brand-7.png",
        name: "Brand 7",
    },
    {
        id: 8,
        image: "/Tejays/assets/brands/brand-8.png",
        name: "Brand 8",
    },
    {
        id: 9,
        image: "/Tejays/assets/brands/brand-9.png",
        name: "Brand 9",
    },
];


// =========================================================
// HOME
// =========================================================

export default function Home() {

    // =====================================================
    // BRAND SLIDER STATE
    // =====================================================

    const [currentIndex, setCurrentIndex] = useState(0);

    const [visibleSlides, setVisibleSlides] = useState(6);

    // =====================================================
    // RESPONSIVE SLIDES
    // =====================================================

    useEffect(() => {

        const updateSlides = () => {

            const nextVisibleSlides = window.innerWidth < 640
                ? 2
                : window.innerWidth < 1024
                    ? 3
                    : 6;

            setVisibleSlides(nextVisibleSlides);

            const maxIndex = Math.max(brands.length - nextVisibleSlides, 0);

            setCurrentIndex((previous) => Math.min(previous, maxIndex));

        };


        updateSlides();


        window.addEventListener(
            "resize",
            updateSlides
        );


        return () => {

            window.removeEventListener(
                "resize",
                updateSlides
            );

        };

    }, []);


    // =====================================================
    // AUTO BRAND SLIDER
    // =====================================================

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((previous) => {

                const maxIndex = Math.max(brands.length - visibleSlides, 0);


                if (previous >= maxIndex) {

                    return 0;

                }


                return previous + 1;

            });

        }, 3000);


        return () => {

            clearInterval(interval);

        };

    }, [
        visibleSlides,
    ]);


    // =====================================================
    // NEXT BRAND
    // =====================================================

    const nextSlide = () => {

        setCurrentIndex((previous) => {

            const maxIndex = Math.max(brands.length - visibleSlides, 0);


            if (previous >= maxIndex) {

                return 0;

            }


            return previous + 1;

        });

    };


    // =====================================================
    // PREVIOUS BRAND
    // =====================================================

    const prevSlide = () => {

        setCurrentIndex((previous) => {

            const maxIndex = Math.max(brands.length - visibleSlides, 0);


            if (previous <= 0) {

                return maxIndex;

            }


            return previous - 1;

        });

    };

    return (
        <div className="min-h-screen overflow-x-clip bg-white text-slate-900">
            <Header />

            {/* ========    PREMIUM HERO     ======== */}
            <section className="relative isolate min-h-[650px] overflow-hidden bg-[#07111f]">

                {/* Background Image */}
                <div
                    className="
            absolute
            inset-0
            bg-cover
            bg-center
            scale-105
            transition-transform
            duration-[8000ms]
            ease-out
            hover:scale-110
        "
                    style={{
                        // backgroundImage: "url('/Tejays/assets/bulk-bandwidth.jpg')",
                        backgroundImage: "url('/Tejays/assets/broadband-hero.jpg')",
                        // backgroundImage: "url('/Tejays/assets/home-hero.jpg')",
                        // backgroundImage: "url('/Tejays/assets/bg-img2.jpg')",
                        // backgroundImage: "url('/Tejays/assets/bg-img4.jpg')",
                        // backgroundImage: "url('/Tejays/assets/bg-img5.jpg')",
                        // backgroundImage: "url('/Tejays/assets/bg-img6.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#1503062c]" />

                {/* Red Gradient Accent */}
                <div className="absolute inset-y-0 left-0 w-1 bg-[#e3292f]" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.06]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                            backgroundSize: "70px 70px",
                        }}
                    />
                </div>

                {/* Decorative Glow */}
                <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#e3292f]/10 blur-3xl" />

                {/* Content */}
                <div
                    className="
            relative
            mx-auto
            flex
            min-h-[650px]
            max-w-7xl
            items-center
            justify-center
            px-5
            py-20
            text-center
            sm:px-6
            lg:justify-start
            lg:px-8
            lg:text-left
        "
                >

                    <div className="w-full max-w-3xl">

                        {/* Small Brand Label */}
                        <div
                            data-aos="fade-down"
                            data-aos-duration="800"
                            className="
                    mx-auto
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-white/15
                    bg-white/[0.06]
                    px-5
                    py-2.5
                    backdrop-blur-md
                    lg:mx-0
                "
                        >
                            <span
                                className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#e3292f]
                        shadow-[0_0_18px_rgba(227,41,47,0.9)]
                    "
                            />

                            <span
                                className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.28em]
                        text-white/80
                        sm:text-xs
                    "
                            >
                                TEJAYS Dynamic Ltd.
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="900"
                            className="
                    mt-7
                    text-4xl
                    font-bold
                    leading-[1.08]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                "
                        >
                            We Enable

                            <span
                                className="
                        block
                        text-[#e3292f]
                    "
                            >
                                Network Anywhere...
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="900"
                            className="
                    mx-auto
                    mt-7
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-300
                    sm:text-base
                    sm:leading-8
                    lg:mx-0
                    lg:text-lg
                "
                        >
                            Enterprise-grade connectivity and network infrastructure
                            solutions designed for reliable, secure and
                            high-performance communication.
                        </p>

                        {/* Buttons */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="900"
                            className="
                    mt-9
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    sm:flex-row
                    lg:justify-start
                "
                        >

                            {/* Quick Pay */}
                            <Link
                                to="/quick-pay"
                                className="
                        group
                        inline-flex
                        w-full
                        max-w-[220px]
                        items-center
                        justify-center
                        gap-3
                        bg-[#e3292f]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_15px_35px_rgba(227,41,47,0.25)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#c91f25]
                        hover:shadow-[0_20px_45px_rgba(227,41,47,0.4)]
                        sm:w-auto
                    "
                            >
                                Quick Pay

                                <ArrowRight
                                    size={17}
                                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                />
                            </Link>

                            {/* Contact */}
                            <Link
                                to="/contact-us"
                                className="
                        group
                        inline-flex
                        w-full
                        max-w-[220px]
                        items-center
                        justify-center
                        gap-3
                        border
                        border-white/25
                        bg-white/[0.04]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-white
                        hover:bg-white
                        hover:text-[#07111f]
                        sm:w-auto
                    "
                            >
                                Contact Us

                                <ArrowRight
                                    size={17}
                                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                />
                            </Link>

                        </div>

                        {/* Bottom Mini Trust */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="450"
                            className="
                    mx-auto
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-6
                    gap-y-3
                    text-xs
                    text-white/50
                    lg:mx-0
                    lg:justify-start
                "
                        >
                            <span>Enterprise Connectivity</span>

                            <span className="hidden h-1 w-1 rounded-full bg-[#e3292f] sm:block" />

                            <span>Network Infrastructure</span>

                            <span className="hidden h-1 w-1 rounded-full bg-[#e3292f] sm:block" />

                            <span>24/7 Support</span>
                        </div>

                    </div>
                </div>

                {/* Bottom Fade */}
                <div
                    className="
            absolute
            bottom-0
            left-0
            h-28
            w-full
            bg-gradient-to-t
            from-[#07111f]
            to-transparent
        "
                />

            </section>


            {/* =========================================================
                NETWORK / INTRO — PREMIUM
            ========================================================= */}
            <section className="relative overflow-hidden bg-red-800 py-20 sm:py-24 lg:py-32">

                {/* =====================================================
        BACKGROUND GLOW
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-red-50/80
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-slate-100/70
            blur-3xl
        "
                />


                {/* =====================================================
        MAIN CONTAINER
    ====================================================== */}
                <div
                    className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            px-5
            sm:px-6
            lg:grid-cols-2
            lg:gap-20
            lg:px-8
        "
                >


                    {/* =================================================
            IMAGE SIDE
        ================================================== */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out-cubic"
                        className="
                group
                relative
                mx-auto
                w-full
                max-w-xl
                lg:mx-0
            "
                    >

                        {/* =================================================
                OUTER PREMIUM FRAME
            ================================================== */}
                        <div
                            className="
                    relative
                    overflow-hidden
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_35px_100px_rgba(15,23,42,0.18)]
                    sm:p-3
                "
                        >

                            {/* =================================================
                    IMAGE CONTAINER
                ================================================== */}
                            <div
                                className="
                        relative
                        aspect-[4/5]
                        overflow-hidden
                        bg-slate-100
                        sm:aspect-[4/4.5]
                    "
                            >

                                {/* =================================================
                        YOUR ORIGINAL IMAGE
                    ================================================== */}
                                <img
                                    src="/Tejays/assets/network.jpg"
                                    alt="TEJAYS Network"
                                    className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1200ms]
                            ease-out
                            group-hover:scale-[1.06]
                        "
                                />


                                {/* =================================================
                        VERY LIGHT OVERLAY

                        Dark overlay नहीं है ताकि आपकी image
                        का original black text clearly दिखाई दे।
                    ================================================== */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-white/[0.02]
                            transition-all
                            duration-700
                            group-hover:bg-transparent
                        "
                                />


                                {/* =================================================
                        SOFT EDGE VIGNETTE
                    ================================================== */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/[0.08]
                            via-transparent
                            to-transparent
                            opacity-40
                            transition-opacity
                            duration-700
                            group-hover:opacity-20
                        "
                                />


                                {/* =================================================
                        PREMIUM SHINE EFFECT
                    ================================================== */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -left-[120%]
                            top-0
                            h-full
                            w-[55%]
                            rotate-[18deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/30
                            to-transparent
                            transition-all
                            duration-[1400ms]
                            ease-out
                            group-hover:left-[135%]
                        "
                                />


                                {/* =================================================
                        RED BOTTOM ACCENT
                    ================================================== */}
                                <div
                                    className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-24
                            bg-[#e3292f]
                            transition-all
                            duration-700
                            ease-out
                            group-hover:w-52
                        "
                                />


                                {/* =================================================
                        IMAGE LABEL
                    ================================================== */}
                                <div
                                    className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                            border
                            border-white/25
                            bg-black/25
                            px-5
                            py-4
                            backdrop-blur-sm
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:bg-black/30
                        "
                                >

                                    <p
                                        className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-white/75
                            "
                                    >
                                        TEJAYS NETWORK
                                    </p>


                                    <div
                                        className="
                                mt-1
                                flex
                                items-center
                                justify-between
                                gap-3
                            "
                                    >

                                        <p
                                            className="
                                    text-sm
                                    font-bold
                                    text-white
                                    sm:text-base
                                "
                                        >
                                            Reliable Connectivity
                                        </p>


                                        {/* Network Icon */}
                                        <div
                                            className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/30
                                    bg-white/10
                                    transition-all
                                    duration-500
                                    group-hover:rotate-6
                                    group-hover:scale-110
                                    group-hover:bg-[#e3292f]
                                "
                                        >
                                            <Network
                                                size={15}
                                                strokeWidth={1.8}
                                                className="text-white"
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* =================================================
                FLOATING CONNECTIVITY BADGE
            ================================================== */}
                        <div
                            className="
                    absolute
                    -bottom-6
                    -right-3
                    hidden
                    border
                    border-slate-200
                    bg-white/95
                    px-6
                    py-4
                    shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    sm:block
                "
                        >

                            <div className="flex items-center gap-3">

                                {/* Badge Icon */}
                                <div
                                    className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            bg-red-50
                            transition-all
                            duration-300
                            group-hover:bg-red-100
                        "
                                >
                                    <ShieldCheck
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#e3292f]"
                                    />
                                </div>


                                {/* Badge Text */}
                                <div>

                                    <p
                                        className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                            "
                                    >
                                        Connectivity
                                    </p>

                                    <p
                                        className="
                                mt-0.5
                                text-sm
                                font-bold
                                text-slate-900
                            "
                                    >
                                        Built for Business
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
            CONTENT SIDE
        ================================================== */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out-cubic"
                        className="
                text-center
                lg:text-left
            "
                    >

                        {/* =================================================
                EYEBROW
            ================================================== */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    lg:justify-start
                "
                        >

                            <span className="h-px w-8 bg-[#e3292f]" />

                            <p
                                className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#e3292f]
                        sm:text-sm
                    "
                            >
                                Our Network
                            </p>

                            <span className="h-px w-8 bg-[#e3292f] lg:hidden" />

                        </div>


                        {/* =================================================
                HEADING
            ================================================== */}
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-3xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:mx-0
                    lg:text-5xl
                    xl:text-[52px]
                "
                        >
                            Connectivity that keeps your

                            <span className="block text-[#e3292f]">
                                business moving.
                            </span>
                        </h2>


                        {/* =================================================
                DESCRIPTION
            ================================================== */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="180"
                            className="
                    mx-auto
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                    sm:leading-8
                    lg:mx-0
                "
                        >
                            TEJAYS delivers professional connectivity and network
                            infrastructure solutions focused on performance,
                            reliability and business continuity.
                        </p>


                        {/* =================================================
                BENEFITS
            ================================================== */}
                        <div
                            className="
                    mx-auto
                    mt-9
                    max-w-xl
                    space-y-3
                    lg:mx-0
                "
                        >

                            {benefits.map((benefit, index) => (

                                <div
                                    key={benefit}
                                    data-aos="fade-up"
                                    data-aos-delay={250 + index * 90}
                                    className="
                            group
                            flex
                            items-center
                            gap-4
                            border
                            border-slate-100
                            bg-white
                            px-4
                            py-3.5
                            text-left
                            shadow-[0_8px_25px_rgba(15,23,42,0.04)]
                            transition-all
                            duration-400
                            hover:-translate-y-1
                            hover:border-[#e3292f]/25
                            hover:shadow-[0_15px_35px_rgba(15,23,42,0.09)]
                        "
                                >

                                    {/* Benefit Icon */}
                                    <div
                                        className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-red-50
                                transition-all
                                duration-300
                                group-hover:scale-105
                                group-hover:bg-[#e3292f]
                            "
                                    >
                                        <CheckCircle2
                                            size={18}
                                            strokeWidth={2}
                                            className="
                                    text-[#e3292f]
                                    transition-all
                                    duration-300
                                    group-hover:text-white
                                "
                                        />
                                    </div>


                                    {/* Benefit Text */}
                                    <span
                                        className="
                                text-sm
                                font-medium
                                leading-6
                                text-slate-700
                                transition-colors
                                duration-300
                                group-hover:text-slate-900
                                sm:text-base
                            "
                                    >
                                        {benefit}
                                    </span>

                                </div>

                            ))}

                        </div>


                        {/* =================================================
                DISCOVER BUTTON
            ================================================== */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="650"
                            className="mt-9"
                        >

                            <Link
                                to="/about-us"
                                className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        bg-[#e3292f]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_12px_30px_rgba(227,41,47,0.20)]
                        transition-all
                        duration-400
                        hover:-translate-y-1
                        hover:bg-[#c91f25]
                        hover:shadow-[0_18px_40px_rgba(227,41,47,0.30)]
                    "
                            >

                                Discover More

                                <ArrowRight
                                    size={17}
                                    strokeWidth={2}
                                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
               PREMIUM STATISTICS — REDESIGNED
            ========================================================= */}

            <section
                className="
        relative
        overflow-hidden
        bg-slate-100
        py-12
        sm:py-16
        lg:py-20
    "
            >
                {/* =====================================================
        BACKGROUND AMBIENT EFFECTS
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-48
            top-1/2
            h-[520px]
            w-[520px]
            -translate-y-1/2
            rounded-full
            bg-[#e3292f]/[0.035]
            blur-[140px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -right-48
            top-1/2
            h-[520px]
            w-[520px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.025]
            blur-[140px]
        "
                />

                {/* =====================================================
        SUBTLE GRID
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
        "
                >
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                `
                    linear-gradient(
                        rgba(15,23,42,0.35) 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        rgba(15,23,42,0.35) 1px,
                        transparent 1px
                    )
                    `,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>


                {/* =====================================================
        TOP LABEL
    ====================================================== */}

                <div
                    className="
            relative
            mx-auto
            mb-8
            flex
            items-center
            justify-center
            gap-3
            px-4

            sm:mb-10
        "
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                    <span
                        className="
                h-px
                w-8
                bg-[#e3292f]/40
                sm:w-12
            "
                    />

                    <span
                        className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#e3292f]

                sm:text-[10px]
            "
                    >
                        Our Numbers
                    </span>

                    <span
                        className="
                h-px
                w-8
                bg-[#e3292f]/40
                sm:w-12
            "
                    />
                </div>


                {/* =====================================================
        STATS GRID

        MOBILE  : 2 × 2
        DESKTOP : 4 × 1
    ====================================================== */}

                <div
                    className="
            relative
            mx-auto
            grid
            max-w-7xl
            grid-cols-2

            gap-px

            overflow-hidden

            rounded-2xl

            border
            border-slate-200

            bg-slate-200

            shadow-[0_20px_70px_rgba(15,23,42,0.07)]

            sm:rounded-3xl

            lg:grid-cols-4
        "
                >

                    {stats.map((stat, index) => {

                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}

                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="800"

                                className="
                        group
                        relative

                        flex
                        min-h-[185px]

                        flex-col
                        items-center
                        justify-center

                        overflow-hidden

                        bg-white

                        px-4
                        py-8

                        text-center

                        transition-all
                        duration-500
                        ease-out

                        hover:bg-[#fffafa]

                        sm:min-h-[215px]
                        sm:px-6
                        sm:py-10

                        lg:min-h-[240px]
                    "
                            >

                                {/* =================================================
                        HOVER GLOW
                    ================================================= */}

                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -right-16
                            -top-16

                            h-36
                            w-36

                            rounded-full

                            bg-[#e3292f]/[0.035]

                            blur-3xl

                            transition-all
                            duration-700

                            group-hover:scale-[1.8]

                            group-hover:bg-[#e3292f]/[0.08]
                        "
                                />


                                {/* =================================================
                        INDEX
                    ================================================= */}

                                <span
                                    className="
                            absolute
                            right-4
                            top-4

                            text-[9px]
                            font-bold
                            tracking-[0.2em]

                            text-slate-300

                            transition-colors
                            duration-300

                            group-hover:text-[#e3292f]/40

                            sm:right-5
                            sm:top-5
                            sm:text-[10px]
                        "
                                >
                                    0{index + 1}
                                </span>


                                {/* =================================================
                        ICON
                    ================================================= */}

                                <div
                                    className="
                            relative
                            z-10

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-slate-200

                            bg-slate-50

                            text-slate-700

                            shadow-sm

                            transition-all
                            duration-500

                            group-hover:-translate-y-2
                            group-hover:scale-110

                            group-hover:border-[#e3292f]/20

                            group-hover:bg-[#e3292f]

                            group-hover:text-white

                            group-hover:shadow-[0_12px_30px_rgba(227,41,47,0.20)]

                            sm:h-13
                            sm:w-13
                        "
                                >
                                    <Icon
                                        size={20}
                                        strokeWidth={1.7}
                                        className="
                                transition-transform
                                duration-500

                                group-hover:scale-105

                                sm:h-[23px]
                                sm:w-[23px]
                            "
                                    />
                                </div>


                                {/* =================================================
                        VALUE
                    ================================================= */}

                                <h3
                                    className="
                            relative
                            z-10

                            mt-5

                            text-2xl
                            font-extrabold
                            leading-none
                            tracking-[-0.03em]

                            text-slate-900

                            transition-all
                            duration-500

                            group-hover:-translate-y-1

                            group-hover:text-[#e3292f]

                            sm:mt-6
                            sm:text-3xl

                            lg:text-[34px]
                        "
                                >
                                    {stat.value}
                                </h3>


                                {/* =================================================
                        LABEL
                    ================================================= */}

                                <p
                                    className="
                            relative
                            z-10

                            mt-2

                            max-w-[180px]

                            text-[9px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.16em]

                            text-slate-500

                            transition-all
                            duration-300

                            group-hover:text-slate-700

                            sm:mt-3
                            sm:text-[10px]
                            sm:tracking-[0.19em]

                            lg:text-[11px]
                        "
                                >
                                    {stat.label}
                                </p>


                                {/* =================================================
                        RED ACCENT LINE
                    ================================================= */}

                                <div
                                    className="
                            absolute
                            bottom-0
                            left-1/2

                            h-[3px]

                            w-0

                            -translate-x-1/2

                            rounded-full

                            bg-[#e3292f]

                            shadow-[0_0_18px_rgba(227,41,47,0.35)]

                            transition-all
                            duration-500

                            group-hover:w-16

                            sm:group-hover:w-20
                        "
                                />


                                {/* =================================================
                        CORNER ACCENT
                    ================================================= */}

                                <div
                                    className="
                            pointer-events-none
                            absolute
                            bottom-0
                            right-0

                            h-12
                            w-12

                            opacity-0

                            transition-all
                            duration-500

                            group-hover:opacity-100
                        "
                                >
                                    <div
                                        className="
                                absolute
                                bottom-0
                                right-0

                                h-px
                                w-8

                                bg-[#e3292f]/30
                            "
                                    />

                                    <div
                                        className="
                                absolute
                                bottom-0
                                right-0

                                h-8
                                w-px

                                bg-[#e3292f]/30
                            "
                                    />
                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* =====================================================
        BOTTOM MICRO LABEL
    ====================================================== */}

                <div
                    className="
            relative
            mx-auto
            mt-7
            flex
            max-w-2xl
            items-center
            justify-center
            gap-3
            px-4

            sm:mt-9
        "
                >
                    <span
                        className="
                h-px
                flex-1
                bg-slate-200
            "
                    />

                    <span
                        className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400

                sm:text-[9px]
            "
                    >
                        Built for modern connectivity
                    </span>

                    <span
                        className="
                h-px
                flex-1
                bg-slate-200
            "
                    />
                </div>

            </section>


            {/* =========================================================
                 PREMIUM SERVICES SECTION
            ========================================================= */}
            <section
                id="services"
                className="
        relative
        overflow-hidden
        bg-red-50/70
        py-20
        sm:py-24
        lg:py-28
    "
            >
                {/* =====================================================
        PREMIUM AMBIENT BACKGROUND
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            -right-48
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#e3292f]/[0.055]
            blur-[140px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -left-48
            bottom-[-120px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[140px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#e3292f]/[0.018]
            blur-[120px]
        "
                />


                {/* =====================================================
        PREMIUM GRID
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
        "
                >
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                `
                    linear-gradient(
                        rgba(15,23,42,0.20) 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        rgba(15,23,42,0.20) 1px,
                        transparent 1px
                    )
                    `,
                            backgroundSize: "72px 72px",
                        }}
                    />
                </div>


                {/* =====================================================
        DECORATIVE TOP LINE
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-px
            w-[85%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#e3292f]/20
            to-transparent
        "
                />


                <div
                    className="
            relative
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
        "
                >

                    {/* =====================================================
            SECTION HEADER
        ====================================================== */}

                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="
                mx-auto
                max-w-3xl
                text-center
            "
                    >

                        {/* Label */}

                        <div
                            className="
                    inline-flex
                    items-center
                    gap-3
                "
                        >

                            <span
                                className="
                        h-px
                        w-8
                        bg-[#e3292f]
                        sm:w-12
                    "
                            />

                            <p
                                className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-[#e3292f]
                        sm:text-xs
                    "
                            >
                                What We Offer
                            </p>

                            <span
                                className="
                        h-px
                        w-8
                        bg-[#e3292f]
                        sm:w-12
                    "
                            />

                        </div>


                        {/* Heading */}

                        <h2
                            className="
                    mt-5
                    text-3xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-[#111827]
                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            Network solutions

                            <span
                                className="
                        block
                        text-[#e3292f]
                    "
                            >
                                built around your business.
                            </span>

                        </h2>


                        {/* Description */}

                        <p
                            className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-500
                    sm:text-base
                "
                        >
                            Explore TEJAYS connectivity and network services designed
                            for modern business requirements with performance,
                            reliability and scalability.
                        </p>

                    </div>


                    {/* =====================================================
            SERVICES GRID
        ====================================================== */}

                    <div
                        className="
                mt-12
                grid
                grid-cols-2
                gap-3

                sm:mt-14
                sm:gap-5

                lg:grid-cols-4
                lg:gap-5
            "
                    >

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <Link
                                    key={service.title}
                                    to={service.path}

                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    data-aos-duration="800"


                                    /* =================================================
                                       CURSOR FOLLOW / 3D TILT
                                    ================================================= */

                                    onMouseMove={(e) => {

                                        const card = e.currentTarget;

                                        const rect =
                                            card.getBoundingClientRect();

                                        const x =
                                            e.clientX - rect.left;

                                        const y =
                                            e.clientY - rect.top;

                                        const centerX =
                                            rect.width / 2;

                                        const centerY =
                                            rect.height / 2;

                                        const rotateY =
                                            ((x - centerX) / centerX) * 10;

                                        const rotateX =
                                            ((centerY - y) / centerY) * 10;

                                        card.style.transform = `
                                perspective(1000px)
                                rotateX(${rotateX}deg)
                                rotateY(${rotateY}deg)
                                translateY(-8px)
                                scale(1.02)
                            `;
                                    }}


                                    onMouseLeave={(e) => {

                                        e.currentTarget.style.transform = `
                                perspective(1000px)
                                rotateX(0deg)
                                rotateY(0deg)
                                translateY(0)
                                scale(1)
                            `;
                                    }}


                                    className="
                            group
                            relative
                            min-h-[245px]
                            overflow-hidden

                            rounded-2xl

                            border
                            border-slate-200/70

                            bg-white/55

                            backdrop-blur-xl

                            p-4

                            shadow-[0_18px_55px_rgba(15,23,42,0.055)]

                            transition-all
                            duration-300
                            ease-out

                            hover:border-[#e3292f]/30

                            hover:bg-white/70

                            hover:shadow-[0_25px_70px_rgba(227,41,47,0.10)]

                            sm:min-h-[290px]
                            sm:p-6

                            lg:min-h-[320px]
                            lg:p-7
                        "


                                    style={{
                                        transformStyle: "preserve-3d",
                                        willChange: "transform",
                                    }}
                                >

                                    {/* =================================================
                            GLASS HIGHLIGHT
                        ================================================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                top-0
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-white
                                to-transparent
                                opacity-80
                            "
                                    />


                                    {/* =================================================
                            CARD RED GLOW
                        ================================================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -right-20
                                -top-20
                                h-48
                                w-48
                                rounded-full
                                bg-[#e3292f]/[0.045]
                                blur-3xl

                                transition-all
                                duration-500

                                group-hover:scale-150
                                group-hover:bg-[#e3292f]/[0.10]
                            "
                                    />


                                    {/* =================================================
                            CARD BLUE GLOW
                        ================================================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -bottom-20
                                -left-20
                                h-40
                                w-40
                                rounded-full
                                bg-blue-500/[0.025]
                                blur-3xl

                                transition-all
                                duration-500

                                group-hover:scale-125
                            "
                                    />


                                    {/* =================================================
                            NUMBER
                        ================================================= */}

                                    <span
                                        className="
                                absolute
                                right-4
                                top-4

                                text-[10px]
                                font-bold
                                tracking-[0.2em]

                                text-slate-300

                                transition-all
                                duration-300

                                group-hover:text-[#e3292f]/40

                                sm:right-5
                                sm:top-5
                                sm:text-xs
                            "
                                    >
                                        0{index + 1}
                                    </span>


                                    {/* =================================================
                            ICON
                        ================================================= */}

                                    <div
                                        className="
                                relative
                                z-10

                                mx-auto

                                flex
                                h-10
                                w-10
                                items-center
                                justify-center

                                rounded-xl

                                border
                                border-[#e3292f]/20

                                bg-[#e3292f]/[0.07]

                                text-[#e3292f]

                                shadow-[0_8px_25px_rgba(227,41,47,0.06)]

                                transition-all
                                duration-300

                                group-hover:scale-110
                                group-hover:rotate-3

                                group-hover:border-[#e3292f]/50

                                group-hover:bg-[#e3292f]

                                group-hover:text-white

                                group-hover:shadow-[0_12px_30px_rgba(227,41,47,0.22)]

                                sm:mx-0
                                sm:h-12
                                sm:w-12
                            "
                                    >

                                        <Icon
                                            size={20}
                                            strokeWidth={1.7}
                                            className="
                                    sm:h-[23px]
                                    sm:w-[23px]
                                "
                                        />

                                    </div>


                                    {/* =================================================
                            TITLE
                        ================================================= */}

                                    <h3
                                        className="
                                relative
                                z-10

                                mt-5

                                min-h-[42px]

                                text-center
                                text-sm
                                font-bold
                                leading-5

                                text-[#111827]

                                transition-all
                                duration-300

                                group-hover:translate-x-1
                                group-hover:text-[#e3292f]

                                sm:mt-7
                                sm:min-h-[48px]

                                sm:text-left
                                sm:text-lg
                                sm:leading-6
                            "
                                    >
                                        {service.title}
                                    </h3>


                                    {/* =================================================
                            DESCRIPTION
                        ================================================= */}

                                    <p
                                        className="
                                relative
                                z-10

                                mt-2

                                text-center
                                text-[11px]
                                leading-5

                                text-slate-500

                                transition-colors
                                duration-300

                                group-hover:text-slate-600

                                sm:mt-3

                                sm:text-left
                                sm:text-sm
                                sm:leading-6
                            "
                                    >
                                        {service.description}
                                    </p>


                                    {/* =================================================
                            EXPLORE
                        ================================================= */}

                                    <div
                                        className="
                                relative
                                z-10

                                mt-4

                                flex
                                items-center
                                justify-center

                                gap-1.5

                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]

                                text-[#e3292f]

                                transition-all
                                duration-300

                                group-hover:gap-3

                                sm:mt-6

                                sm:justify-start
                                sm:gap-2

                                sm:text-xs
                            "
                                    >

                                        <span>
                                            Explore
                                        </span>

                                        <ArrowRight
                                            size={13}
                                            className="
                                    transition-transform
                                    duration-300

                                    group-hover:translate-x-1

                                    sm:h-[15px]
                                    sm:w-[15px]
                                "
                                        />

                                    </div>


                                    {/* =================================================
                            BOTTOM RED LINE
                        ================================================= */}

                                    <div
                                        className="
                                absolute
                                bottom-0
                                left-1/2

                                h-[2px]
                                w-0

                                -translate-x-1/2

                                rounded-full

                                bg-[#e3292f]

                                shadow-[0_0_15px_rgba(227,41,47,0.30)]

                                transition-all
                                duration-300

                                group-hover:w-[70%]
                            "
                                    />


                                    {/* =================================================
                            INNER BORDER
                        ================================================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                inset-0

                                rounded-2xl

                                border
                                border-transparent

                                transition-all
                                duration-300

                                group-hover:border-[#e3292f]/[0.08]
                            "
                                    />

                                </Link>
                            );
                        })}

                    </div>


                    {/* =====================================================
            BOTTOM LABEL
        ====================================================== */}

                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="
                mt-10
                text-center
                sm:mt-12
            "
                    >

                        <div
                            className="
                    mx-auto
                    flex
                    max-w-2xl
                    items-center
                    justify-center
                    gap-3
                "
                        >

                            <span
                                className="
                        h-px
                        flex-1
                        bg-slate-200
                    "
                            />

                            <p
                                className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-slate-400
                        sm:text-xs
                    "
                            >
                                Enterprise Connectivity
                            </p>

                            <span
                                className="
                        h-px
                        flex-1
                        bg-slate-200
                    "
                            />

                        </div>

                    </div>

                </div>


                {/* =====================================================
        PREMIUM BOTTOM LINE
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-[85%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-slate-200
            to-transparent
        "
                />

            </section>


            {/* =========================================================
                WHY TEJAYS — PREMIUM SECTION
            ========================================================= */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                {/* Background Glows */}
                <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-red-50/80 blur-3xl" />
                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100/80 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

                    {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
                    >

                        {/* Section Label */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="flex items-center justify-center gap-3 lg:justify-start"
                        >
                            <span className="h-px w-8 bg-[#e3292f]" />

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-sm">
                                Why TEJAYS
                            </p>

                            <span className="h-px w-8 bg-[#e3292f] lg:hidden" />
                        </div>


                        {/* Heading */}
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="180"
                            className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-3xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:mx-0
                    lg:text-5xl
                "
                        >
                            Built around

                            <span className="text-[#e3292f]">
                                {" "}performance,
                            </span>

                            <span>
                                {" "}reliability and support.
                            </span>
                        </h2>


                        {/* Description */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="260"
                            className="
                    mx-auto
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                    sm:leading-8
                    lg:mx-0
                "
                        >
                            From connectivity to managed network infrastructure, our
                            solutions are designed to help organizations stay connected
                            and productive.
                        </p>


                        {/* =================================================
                BENEFIT CARDS
            ================================================= */}
                        <div
                            className="
                    mx-auto
                    mt-9
                    grid
                    max-w-2xl
                    grid-cols-2
                    gap-3
                    sm:gap-4
                    lg:mx-0
                "
                        >

                            {[
                                "High Speed Connectivity",
                                "User Friendly Solutions",
                                "Flexibility & Scalability",
                                "Secured & Reliable Network",
                                "Affordable Pricing",
                                "Fast Support 24/7",
                            ].map((item, index) => (

                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80 + 300}
                                    className="
                            group
                            relative
                            overflow-hidden
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-4
                            text-center
                            shadow-[0_8px_25px_rgba(15,23,42,0.04)]
                            transition-all
                            duration-500
                            ease-out
                            hover:-translate-y-2
                            hover:border-[#e3292f]/40
                            hover:shadow-[0_18px_40px_rgba(227,41,47,0.12)]
                            sm:px-4
                            sm:py-5
                        "
                                >

                                    {/* Card Glow */}
                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -right-12
                                -top-12
                                h-24
                                w-24
                                rounded-full
                                bg-red-50
                                opacity-0
                                blur-2xl
                                transition-all
                                duration-500
                                group-hover:opacity-100
                            "
                                    />

                                    <div
                                        className="
                                relative
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-2
                                sm:flex-row
                                sm:justify-start
                                sm:gap-3
                            "
                                    >

                                        {/* Icon */}
                                        <div
                                            className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    border
                                    border-[#e3292f]/20
                                    bg-[#e3292f]/5
                                    text-[#e3292f]
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:rotate-3
                                    group-hover:border-[#e3292f]
                                    group-hover:bg-[#e3292f]
                                    group-hover:text-white
                                    sm:h-10
                                    sm:w-10
                                "
                                        >
                                            <CheckCircle2
                                                size={18}
                                                strokeWidth={2}
                                                className="transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>


                                        {/* Text */}
                                        <span
                                            className="
                                    text-[11px]
                                    font-semibold
                                    leading-4
                                    text-slate-700
                                    transition-colors
                                    duration-300
                                    group-hover:text-slate-900
                                    sm:text-sm
                                    sm:leading-5
                                "
                                        >
                                            {item}
                                        </span>

                                    </div>


                                    {/* Bottom Accent */}
                                    <div
                                        className="
                                absolute
                                bottom-0
                                left-0
                                h-0.5
                                w-0
                                bg-[#e3292f]
                                transition-all
                                duration-500
                                group-hover:w-full
                            "
                                    />

                                </div>
                            ))}

                        </div>


                        {/* =================================================
                CTA
            ================================================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="800"
                            className="mt-9 flex justify-center lg:justify-start"
                        >

                            <Link
                                to="/contact-us"
                                className="
                        group
                        relative
                        inline-flex
                        items-center
                        gap-3
                        overflow-hidden
                        bg-[#e3292f]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_12px_30px_rgba(227,41,47,0.20)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:bg-[#c91f25]
                        hover:shadow-[0_20px_45px_rgba(227,41,47,0.30)]
                    "
                            >

                                {/* Button Shine */}
                                <span
                                    className="
                            pointer-events-none
                            absolute
                            -left-20
                            top-0
                            h-full
                            w-12
                            rotate-12
                            bg-white/20
                            transition-all
                            duration-700
                            group-hover:left-[120%]
                        "
                                />

                                <span className="relative">
                                    Get Started Now
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="
                            relative
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                />

                            </Link>

                        </div>

                    </div>


                    {/* =====================================================
            RIGHT — NETWORK TECHNOLOGY VISUAL
        ====================================================== */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="150"
                        className="mx-auto w-full max-w-[520px]"
                    >
                        {/* =================================================
        MAIN NETWORK CIRCLE
    ================================================= */}

                        <div
                            className="
            group
            relative
            mx-auto
            aspect-square
            w-full
            overflow-hidden
            rounded-full

            border-[8px]
            border-gray-800

            bg-gradient-to-br
            from-[#e3292f]
            via-[#d9232a]
            to-[#b91c22]

            shadow-[0_30px_80px_rgba(227,41,47,0.22)]

            transition-all
            duration-700

            hover:border-red-50
            hover:shadow-[0_35px_100px_rgba(227,41,47,0.30)]
        "
                        >

                            {/* =================================================
            SOFT WHITE GLOW
        ================================================= */}

                            <div
                                className="
                pointer-events-none
                absolute
                -right-20
                -top-20

                h-72
                w-72

                rounded-full

                bg-white/10

                blur-3xl

                transition-all
                duration-700

                group-hover:scale-125
                group-hover:bg-white/15
            "
                            />

                            {/* =================================================
            BOTTOM SOFT GLOW
        ================================================= */}

                            <div
                                className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24

                h-72
                w-72

                rounded-full

                bg-black/10

                blur-3xl
            "
                            />


                            {/* =================================================
            SUBTLE GRID
        ================================================= */}

                            <div
                                className="
                pointer-events-none
                absolute
                inset-0

                opacity-[0.08]
            "
                            >
                                <div
                                    className="h-full w-full"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
                                        backgroundSize: "32px 32px",
                                    }}
                                />
                            </div>


                            {/* =================================================
            OUTER RING
        ================================================= */}

                            <div
                                className="
                absolute
                inset-[5%]

                rounded-full

                border
                border-white/30

                transition-transform
                duration-[2000ms]
                ease-out

                group-hover:rotate-180
            "
                            />


                            {/* =================================================
            SECOND RING
        ================================================= */}

                            <div
                                className="
                absolute
                inset-[12%]

                rounded-full

                border
                border-white/20

                transition-transform
                duration-[1600ms]
                ease-out

                group-hover:-rotate-180
            "
                            />


                            {/* =================================================
            INNER RING
        ================================================= */}

                            <div
                                className="
                absolute
                inset-[23%]

                rounded-full

                border
                border-white/30

                transition-all
                duration-700

                group-hover:scale-110
                group-hover:border-white/50
            "
                            />


                            {/* =================================================
            CENTER GLOW
        ================================================= */}

                            <div
                                className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-48
                w-48

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white/10

                blur-3xl

                transition-all
                duration-700

                group-hover:scale-125
                group-hover:bg-white/15
            "
                            />


                            {/* =================================================
            CENTER NETWORK ICON
        ================================================= */}

                            <div
                                className="
                absolute
                inset-0

                flex
                items-center
                justify-center
            "
                            >

                                <div
                                    className="
                    relative

                    flex
                    h-28
                    w-28

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/40

                    bg-white

                    text-[#e3292f]

                    shadow-[0_15px_50px_rgba(0,0,0,0.15)]

                    transition-all
                    duration-700

                    group-hover:scale-110
                    group-hover:border-white

                    group-hover:shadow-[0_0_70px_rgba(255,255,255,0.25)]

                    sm:h-36
                    sm:w-36
                "
                                >

                                    {/* Center Inner Glow */}

                                    <div
                                        className="
                        pointer-events-none
                        absolute
                        inset-3

                        rounded-full

                        bg-[#e3292f]/5

                        blur-xl
                    "
                                    />

                                    <Network
                                        size={55}
                                        strokeWidth={1.3}
                                        className="
                        relative
                        z-10

                        text-[#e3292f]

                        transition-all
                        duration-700

                        group-hover:rotate-12
                        group-hover:scale-110

                        sm:h-[65px]
                        sm:w-[65px]
                    "
                                    />

                                </div>

                            </div>


                            {/* =================================================
            ORBIT DOT 1
        ================================================= */}

                            <span
                                className="
                absolute

                left-[17%]
                top-[27%]

                h-2.5
                w-2.5

                rounded-full

                bg-white

                shadow-[0_0_20px_rgba(255,255,255,0.75)]

                transition-transform
                duration-500

                group-hover:scale-150
            "
                            />


                            {/* =================================================
            ORBIT DOT 2
        ================================================= */}

                            <span
                                className="
                absolute

                right-[20%]
                top-[24%]

                h-2
                w-2

                rounded-full

                bg-white/70

                shadow-[0_0_12px_rgba(255,255,255,0.45)]

                transition-transform
                duration-500

                group-hover:scale-150
            "
                            />


                            {/* =================================================
            ORBIT DOT 3
        ================================================= */}

                            <span
                                className="
                absolute

                bottom-[23%]
                left-[23%]

                h-2
                w-2

                rounded-full

                bg-white/70

                shadow-[0_0_12px_rgba(255,255,255,0.45)]

                transition-transform
                duration-500

                group-hover:scale-150
            "
                            />


                            {/* =================================================
            ORBIT DOT 4
        ================================================= */}

                            <span
                                className="
                absolute

                bottom-[27%]
                right-[18%]

                h-2.5
                w-2.5

                rounded-full

                bg-white

                shadow-[0_0_20px_rgba(255,255,255,0.75)]

                transition-transform
                duration-500

                group-hover:scale-150
            "
                            />


                            {/* =================================================
            NETWORK LABEL
        ================================================= */}

                            <div
                                className="
                absolute

                bottom-8
                left-0
                right-0

                text-center

                transition-transform
                duration-500

                group-hover:-translate-y-1
            "
                            >

                                <p
                                    className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    text-white/75

                    sm:text-xs
                "
                                >
                                    Network Infrastructure
                                </p>

                                <p
                                    className="
                    mt-1

                    text-xs
                    font-bold

                    text-white
                "
                                >
                                    Reliable

                                    <span className="mx-1.5 text-white/70">
                                        •
                                    </span>

                                    Secure

                                    <span className="mx-1.5 text-white/70">
                                        •
                                    </span>

                                    Scalable
                                </p>

                            </div>


                            {/* =================================================
            OUTER HIGHLIGHT
        ================================================= */}

                            <div
                                className="
                pointer-events-none
                absolute
                inset-0

                rounded-full

                border
                border-white/20
            "
                            />

                        </div>


                        {/* =================================================
        INFO CARDS
    ================================================= */}

                        <div
                            className="
            mt-6

            grid
            grid-cols-2

            gap-3

            sm:gap-4
        "
                        >

                            {/* =================================================
            UPTIME CARD
        ================================================= */}

                            <div
                                data-aos="fade-up"
                                data-aos-delay="700"
                                className="
                group
                relative
                overflow-hidden

                border
                border-slate-200

                bg-white

                p-4

                text-center

                shadow-[0_10px_30px_rgba(15,23,42,0.05)]

                transition-all
                duration-500

                hover:-translate-y-2

                hover:border-[#e3292f]/30

                hover:shadow-[0_18px_40px_rgba(227,41,47,0.10)]
            "
                            >

                                {/* Top Accent */}

                                <div
                                    className="
                    absolute
                    left-1/2
                    top-0

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    bg-[#e3292f]

                    transition-all
                    duration-500

                    group-hover:w-16
                "
                                />

                                <p
                                    className="
                    text-xl
                    font-bold

                    text-[#e3292f]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                "
                                >
                                    99.5%
                                </p>

                                <p
                                    className="
                    mt-1

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-widest

                    text-slate-400
                "
                                >
                                    Uptime SLA
                                </p>

                            </div>


                            {/* =================================================
            SUPPORT CARD
        ================================================= */}

                            <div
                                data-aos="fade-up"
                                data-aos-delay="780"
                                className="
                group
                relative
                overflow-hidden

                border
                border-slate-200

                bg-white

                p-4

                text-center

                shadow-[0_10px_30px_rgba(15,23,42,0.05)]

                transition-all
                duration-500

                hover:-translate-y-2

                hover:border-[#e3292f]/30

                hover:shadow-[0_18px_40px_rgba(227,41,47,0.10)]
            "
                            >

                                {/* Top Accent */}

                                <div
                                    className="
                    absolute
                    left-1/2
                    top-0

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    bg-[#e3292f]

                    transition-all
                    duration-500

                    group-hover:w-16
                "
                                />

                                <p
                                    className="
                    text-xl
                    font-bold

                    text-[#e3292f]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                "
                                >
                                    24/7
                                </p>

                                <p
                                    className="
                    mt-1

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-widest

                    text-slate-400
                "
                                >
                                    Support
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BRANDS SECTION
            ========================================================= */}
            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24 lg:py-28 ">

                {/* Background Glow */}

                <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />


                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="mx-auto max-w-3xl text-center"
                    >

                        <div className="flex items-center justify-center gap-3">

                            <span className="h-px w-10 bg-[#e3292f]" />

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-sm">
                                Our Partners
                            </p>

                            <span className="h-px w-10 bg-[#e3292f]" />

                        </div>


                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

                            Trusted by leading brands

                        </h2>


                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">

                            We work with trusted technology and network partners
                            to deliver reliable connectivity and high-performance
                            infrastructure.

                        </p>

                    </div>


                    {/* =================================================
                        SLIDER
                    ================================================= */}

                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="relative mt-12"
                    >


                        {/* =================================================
                            LEFT BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous brands"
                            className="
                                absolute
                                left-0
                                top-1/2
                                z-20
                                flex
                                h-10
                                w-10
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white
                                text-slate-700
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:border-[#e3292f]
                                hover:bg-[#e3292f]
                                hover:text-white
                                sm:h-11
                                sm:w-11
                            "
                        >

                            <ChevronLeft size={20} />

                        </button>


                        {/* =================================================
                            RIGHT BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next brands"
                            className="
                                absolute
                                right-0
                                top-1/2
                                z-20
                                flex
                                h-10
                                w-10
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white
                                text-slate-700
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:border-[#e3292f]
                                hover:bg-[#e3292f]
                                hover:text-white
                                sm:h-11
                                sm:w-11
                            "
                        >

                            <ChevronRight size={20} />

                        </button>


                        {/* =================================================
                            SLIDER VIEWPORT
                        ================================================= */}

                        <div className="mx-12 overflow-hidden sm:mx-14">


                            {/* =================================================
                                SLIDER TRACK
                            ================================================= */}

                            <div
                                className="
                                    flex
                                    transition-transform
                                    duration-700
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                "
                                style={{
                                    transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
                                }}
                            >

                                {brands.map((brand) => (

                                    <div
                                        key={brand.id}
                                        className="shrink-0 px-2 sm:px-3"
                                        style={{
                                            width: `${100 / visibleSlides}%`,
                                        }}
                                    >

                                        {/* =================================================
                                            BRAND CARD
                                        ================================================= */}

                                        <div
                                            className="
                                                group
                                                relative
                                                flex
                                                h-28
                                                w-full
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                border
                                                border-slate-200
                                                bg-white
                                                px-5
                                                shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                                                transition-all
                                                duration-500
                                                hover:-translate-y-2
                                                hover:border-[#e3292f]/30
                                                hover:shadow-[0_20px_45px_rgba(227,41,47,0.12)]
                                                sm:h-32
                                                lg:h-36
                                            "
                                        >

                                            {/* Hover Glow */}

                                            <div
                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    -right-10
                                                    -top-10
                                                    h-24
                                                    w-24
                                                    rounded-full
                                                    bg-red-50
                                                    opacity-0
                                                    blur-2xl
                                                    transition-all
                                                    duration-500
                                                    group-hover:opacity-100
                                                "
                                            />


                                            {/* Brand Image */}

                                            <img
                                                src={brand.image}
                                                alt={brand.name}
                                                className="
                                                    relative
                                                    z-10
                                                    max-h-16
                                                    max-w-[85%]
                                                    object-contain
                                                    opacity-80
                                                    grayscale
                                                    transition-all
                                                    duration-500
                                                    group-hover:scale-110
                                                    group-hover:opacity-100
                                                    group-hover:grayscale-0
                                                    sm:max-h-20
                                                "
                                            />


                                            {/* Bottom Accent */}

                                            <span
                                                className="
                                                    absolute
                                                    bottom-0
                                                    left-1/2
                                                    h-0.5
                                                    w-0
                                                    -translate-x-1/2
                                                    bg-[#e3292f]
                                                    transition-all
                                                    duration-500
                                                    group-hover:w-2/3
                                                "
                                            />

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* =================================================
                            SLIDER DOTS
                        ================================================= */}

                        <div className="mt-7 flex justify-center gap-2">

                            {Array.from({
                                length: Math.max(
                                    brands.length - visibleSlides + 1,
                                    1
                                ),
                            }).map((_, index) => (

                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`
                                        h-1.5
                                        rounded-full
                                        transition-all
                                        duration-300
                                        ${currentIndex === index
                                            ? "w-7 bg-[#e3292f]"
                                            : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                        }
                                    `}
                                />

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            <Footer />

        </div >
    );
}