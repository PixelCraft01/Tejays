import {
    ArrowRight,
    CheckCircle2,
    CloudCog,
    Globe2,
    Network,
    Router,
    Server,
    ShieldCheck,
    Signal,
    UsersRound,
    Gauge,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const benefits = [
    {
        icon: Gauge,
        title: "High-Speed Connectivity",
        description:
            "Dedicated bandwidth and high-performance connectivity for smooth and uninterrupted business operations.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Network",
        description:
            "Reliable network infrastructure designed to keep your business communication secure and protected.",
    },
    {
        icon: Network,
        title: "Dedicated Connectivity",
        description:
            "Get a dedicated fiber connection built around your organization's connectivity requirements.",
    },
    {
        icon: Signal,
        title: "Stable Performance",
        description:
            "Consistent network performance with reduced downtime and dependable business connectivity.",
    },
    {
        icon: Router,
        title: "Enterprise Ready",
        description:
            "Scalable connectivity solutions suitable for offices, enterprises and growing organizations.",
    },
    {
        icon: Zap,
        title: "Fast Deployment",
        description:
            "Professional deployment and network setup to get your business connected quickly and efficiently.",
    },
];

const features = [
    "Dedicated fiber connectivity",
    "High-speed business internet",
    "Reliable network performance",
    "Secure communication infrastructure",
    "Scalable bandwidth options",
    "Professional technical support",
];

export default function FiberOnLease() {
    return (
        <main className="bg-white text-slate-900">

            <Header />
            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-red-100">

                {/* Background Glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-red-300/30
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-white/60
            blur-3xl
        "
                />

                {/* Grid */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(127,29,29,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(127,29,29,.8)_1px,transparent_1px)]
            [background-size:50px_50px]
        "
                />

                <div
                    className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-10
            lg:py-32
        "
                >

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* =====================================================
                LEFT
            ====================================================== */}
                        <div
                            data-aos="fade-right"
                            className="text-center lg:text-left"
                        >

                            {/* Label */}
                            <div
                                className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-red-200
                        bg-white/70
                        px-4
                        py-2
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#e3292f]
                        shadow-sm
                        backdrop-blur
                    "
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#e3292f]" />
                                TEJAYS SERVICES
                            </div>


                            {/* Heading */}
                            <h1
                                className="
                        mt-6
                        text-4xl
                        font-extrabold
                        leading-[1.05]
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                        lg:text-6xl
                    "
                            >
                                Fiber
                                <span className="text-[#e3292f]">
                                    {" "}On Lease
                                </span>
                            </h1>


                            {/* Description */}
                            <p
                                className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        lg:mx-0
                    "
                            >
                                Professional connectivity and network solutions
                                designed for reliable, secure and high-performance
                                business communication.
                            </p>


                            {/* Buttons */}
                            <div
                                className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        sm:flex-row
                        lg:justify-start
                    "
                            >

                                {/* Primary Button */}
                                <Link
                                    to="/contact-us"
                                    className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-[#e3292f]
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            shadow-red-900/20
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#c91f25]
                        "
                                >
                                    Get Started

                                    <ArrowRight
                                        size={17}
                                        className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                                    />
                                </Link>


                                {/* Secondary Button */}
                                <Link
                                    to="/contact-us"
                                    className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-red-200
                            bg-white/70
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-slate-800
                            shadow-sm
                            backdrop-blur
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#e3292f]/30
                            hover:bg-white
                        "
                                >
                                    Talk To Our Team
                                </Link>

                            </div>

                        </div>

                        {/* =====================================================
    RIGHT VISUAL
====================================================== */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="
        flex
        w-full
        justify-center
        lg:justify-end
    "
                        >

                            <div
                                className="
            group
            relative
            w-full
            max-w-md
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-5
            text-left
            shadow-[0_25px_70px_rgba(15,23,42,0.08)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#e3292f]/30
            hover:shadow-[0_35px_90px_rgba(227,41,47,0.14)]
            sm:p-6
        "
                            >

                                {/* =================================================
            BACKGROUND GLOW
        ================================================= */}
                                <div
                                    className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-red-100
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
            "
                                />

                                <div
                                    className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-52
                w-52
                rounded-full
                bg-red-50
                blur-3xl
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
            "
                                />


                                {/* =================================================
            TOP STATUS
        ================================================= */}
                                <div
                                    className="
                relative
                z-10
                flex
                items-center
                justify-between
            "
                                >

                                    {/* Status */}
                                    <div
                                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-3
                    py-1.5
                "
                                    >

                                        <span
                                            className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-500
                        shadow-[0_0_8px_rgba(16,185,129,0.5)]
                    "
                                        />

                                        <span
                                            className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-emerald-600
                    "
                                        >
                                            Business Ready
                                        </span>

                                    </div>


                                    {/* Router Icon */}
                                    <div
                                        className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-[#e3292f]
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:bg-[#e3292f]
                    group-hover:text-white
                    group-hover:shadow-[0_10px_25px_rgba(227,41,47,0.20)]
                "
                                    >
                                        <Router size={20} />
                                    </div>

                                </div>


                                {/* =================================================
            CARD CONTENT
        ================================================= */}
                                <div
                                    className="
                relative
                z-10
                mt-6
                text-center
                lg:text-left
            "
                                >

                                    <p
                                        className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#e3292f]
                "
                                    >
                                        TEJAYS CORPORATE
                                    </p>


                                    <h2
                                        className="
                    mt-2
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-3xl
                "
                                    >
                                        Connect.

                                        <span className="text-[#e3292f]">
                                            {" "}Perform.
                                        </span>
                                    </h2>


                                    <p
                                        className="
                    mx-auto
                    mt-4
                    max-w-md
                    text-sm
                    leading-7
                    text-slate-500
                    lg:mx-0
                "
                                    >
                                        Professional fiber connectivity built to support
                                        reliable network performance, secure communication
                                        and business-critical operations.
                                    </p>

                                </div>


                                {/* =================================================
            NETWORK VISUAL
        ================================================= */}
                                <div
                                    className="
                relative
                z-10
                my-5
                flex
                h-24
                items-center
                justify-center
            "
                                >

                                    {/* Outer Ring */}
                                    <div
                                        className="
                    absolute
                    h-24
                    w-24
                    rounded-full
                    border
                    border-[#e3292f]/10
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:border-[#e3292f]/20
                "
                                    />

                                    {/* Middle Ring */}
                                    <div
                                        className="
                    absolute
                    h-24
                    w-24
                    rounded-full
                    border
                    border-[#e3292f]/15
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:border-[#e3292f]/30
                "
                                    />

                                    {/* Inner Ring */}
                                    <div
                                        className="
                    absolute
                    h-16
                    w-16
                    rounded-full
                    border
                    border-red-100
                    bg-red-50/50
                    transition-all
                    duration-500
                    group-hover:bg-red-50
                "
                                    />

                                    {/* Center Icon */}
                                    <div
                                        className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#e3292f]
                    text-white
                    shadow-[0_10px_30px_rgba(227,41,47,0.25)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:shadow-[0_15px_40px_rgba(227,41,47,0.35)]
                "
                                    >
                                        <Network
                                            size={23}
                                            className="
                        transition-transform
                        duration-500
                        group-hover:rotate-12
                    "
                                        />
                                    </div>

                                </div>


                                {/* =================================================
            STATS
        ================================================= */}
                                <div
                                    className="
                relative
                z-10
                grid
                grid-cols-3
                gap-2
            "
                                >

                                    {/* FAST */}
                                    <div
                                        className="
                    group/stat
                    cursor-default
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-3
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/20
                    hover:bg-red-50
                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                "
                                    >

                                        <div
                                            className="
                        mx-auto
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        text-[#e3292f]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover/stat:bg-[#e3292f]
                        group-hover/stat:text-white
                        group-hover/stat:scale-110
                    "
                                        >
                                            <Zap size={14} />
                                        </div>

                                        <p
                                            className="
                        mt-2
                        text-sm
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover/stat:text-[#e3292f]
                    "
                                        >
                                            Fast
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-slate-400
                    "
                                        >
                                            Speed
                                        </p>

                                    </div>


                                    {/* SECURE */}
                                    <div
                                        className="
                    group/stat
                    cursor-default
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-3
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/20
                    hover:bg-red-50
                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                "
                                    >

                                        <div
                                            className="
                        mx-auto
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        text-[#e3292f]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover/stat:bg-[#e3292f]
                        group-hover/stat:text-white
                        group-hover/stat:scale-110
                    "
                                        >
                                            <ShieldCheck size={14} />
                                        </div>

                                        <p
                                            className="
                        mt-2
                        text-sm
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover/stat:text-[#e3292f]
                    "
                                        >
                                            Secure
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-slate-400
                    "
                                        >
                                            Network
                                        </p>

                                    </div>


                                    {/* STABLE */}
                                    <div
                                        className="
                    group/stat
                    cursor-default
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-3
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/20
                    hover:bg-red-50
                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                "
                                    >

                                        <div
                                            className="
                        mx-auto
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        text-[#e3292f]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover/stat:bg-[#e3292f]
                        group-hover/stat:text-white
                        group-hover/stat:scale-110
                    "
                                        >
                                            <Signal size={14} />
                                        </div>

                                        <p
                                            className="
                        mt-2
                        text-sm
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover/stat:text-[#e3292f]
                    "
                                        >
                                            Stable
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-slate-400
                    "
                                        >
                                            Uptime
                                        </p>

                                    </div>

                                </div>


                                {/* =================================================
            BOTTOM ACCENT
        ================================================= */}
                                <div
                                    className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-[#e3292f]
                transition-all
                duration-500
                group-hover:w-full
            "
                                />

                            </div>

                        </div>


                    </div>

                </div>
            </section>


            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-[#e3292f]
                            "
                        >
                            BUSINESS CONNECTIVITY
                        </p>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Connectivity Built For
                            <span className="text-[#e3292f]">
                                {" "}Modern Business
                            </span>
                        </h2>

                        <p
                            className="
                                mt-5
                                text-sm
                                leading-7
                                text-slate-500
                                sm:text-base
                            "
                        >
                            Fiber On Lease provides businesses with dependable
                            connectivity infrastructure that supports communication,
                            cloud applications, data transfer and day-to-day
                            operations.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
                BENEFITS
            ====================================================== */}
            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24 lg:py-28">

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        top-20
                        h-96
                        w-96
                        rounded-full
                        bg-[#e3292f]/5
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        bottom-20
                        h-96
                        w-96
                        rounded-full
                        bg-blue-500/5
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                    {/* Heading */}
                    <div
                        data-aos="fade-up"
                        className="mx-auto max-w-2xl text-center"
                    >

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-[#e3292f]
                            "
                        >
                            WHY CHOOSE US
                        </p>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Reliable Fiber.
                            <br />
                            <span className="text-[#e3292f]">
                                Better Business.
                            </span>
                        </h2>

                    </div>


                    {/* Cards */}
                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-3
                            sm:mt-14
                            sm:gap-5
                            lg:grid-cols-3
                        "
                    >

                        {benefits.map((benefit, index) => {

                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        text-center
                                        shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-[#e3292f]/30
                                        hover:shadow-[0_25px_55px_rgba(227,41,47,0.10)]
                                        sm:p-6
                                        sm:text-left
                                        lg:p-7
                                    "
                                >

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-10
                                            -top-10
                                            h-28
                                            w-28
                                            rounded-full
                                            bg-red-50
                                            blur-2xl
                                            transition-transform
                                            duration-500
                                            group-hover:scale-150
                                        "
                                    />

                                    <div
                                        className="
                                            relative
                                            z-10
                                            mx-auto
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-[#e3292f]/15
                                            bg-red-50
                                            text-[#e3292f]
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            sm:mx-0
                                            sm:h-13
                                            sm:w-13
                                        "
                                    >
                                        <Icon
                                            size={21}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <h3
                                        className="
                                            relative
                                            z-10
                                            mt-5
                                            text-sm
                                            font-bold
                                            leading-5
                                            text-slate-900
                                            sm:text-lg
                                        "
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className="
                                            relative
                                            z-10
                                            mt-2
                                            text-[11px]
                                            leading-5
                                            text-slate-500
                                            sm:mt-3
                                            sm:text-sm
                                            sm:leading-6
                                        "
                                    >
                                        {benefit.description}
                                    </p>

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-[#e3292f]
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />

                                </div>
                            );

                        })}

                    </div>

                </div>
            </section>


            {/* =====================================================
                FEATURES
            ====================================================== */}

            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                {/* Background Glow */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-red-100/60
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-red-50
            blur-3xl
        "
                />


                <div
                    className="
            relative
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
        "
                >

                    <div
                        className="
                grid
                items-center
                gap-12
                lg:grid-cols-2
                lg:gap-20
            "
                    >


                        {/* =================================================
                LEFT
            ================================================= */}

                        <div
                            data-aos="fade-right"
                            className="
                    text-center
                    lg:text-left
                "
                        >

                            {/* Label */}

                            <div
                                className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-red-100
                        bg-red-50
                        px-3
                        py-1.5
                    "
                            >

                                <span
                                    className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#e3292f]
                        "
                                />

                                <span
                                    className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#e3292f]
                        "
                                >
                                    WHAT YOU GET
                                </span>

                            </div>


                            {/* Heading */}

                            <h2
                                className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        text-3xl
                        font-black
                        leading-[1.1]
                        tracking-tight
                        text-slate-900
                        sm:text-4xl
                        lg:mx-0
                        lg:text-5xl
                    "
                            >
                                A Network You Can

                                <span className="text-[#e3292f]">
                                    {" "}Depend On
                                </span>
                            </h2>


                            {/* Description */}

                            <p
                                className="
                        mx-auto
                        mt-5
                        max-w-xl
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                        lg:mx-0
                    "
                            >
                                Our Fiber On Lease solutions are designed to
                                provide the connectivity foundation your business
                                needs for reliable and efficient communication.
                            </p>


                            {/* Benefits */}

                            <div
                                data-aos="fade-up"
                                className="
                        mx-auto
                        mt-8
                        grid
                        max-w-xl
                        grid-cols-2
                        gap-3
                        text-left
                        sm:gap-4
                        lg:mx-0
                    "
                            >

                                {features.map((item, index) => (

                                    <div
                                        key={item}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 60}
                                        className="
                                group
                                relative
                                flex
                                min-h-[70px]
                                items-center
                                gap-2
                                overflow-hidden
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-3
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#e3292f]/25
                                hover:bg-white
                                hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]
                                sm:gap-3
                                sm:p-4
                            "
                                    >

                                        {/* Hover Glow */}

                                        <div
                                            className="
                                    pointer-events-none
                                    absolute
                                    -right-6
                                    -top-6
                                    h-16
                                    w-16
                                    rounded-full
                                    bg-red-100
                                    opacity-0
                                    blur-xl
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-100
                                "
                                        />


                                        {/* Icon */}

                                        <CheckCircle2
                                            size={18}
                                            className="
                                    relative
                                    z-10
                                    shrink-0
                                    text-[#e3292f]
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                                        />


                                        {/* Text */}

                                        <span
                                            className="
                                    relative
                                    z-10
                                    text-[10px]
                                    font-semibold
                                    leading-4
                                    text-slate-700
                                    sm:text-sm
                                    sm:leading-5
                                "
                                        >
                                            {item}
                                        </span>


                                        {/* Bottom Accent */}

                                        <div
                                            className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
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

                        </div>


                        {/* =================================================
                RIGHT — FIBER INFRASTRUCTURE
            ================================================= */}

                        <div
                            data-aos="fade-left"
                            className="
                    relative
                    flex
                    justify-center
                    lg:justify-end
                "
                        >

                            <div
                                className="
                        group
                        relative
                        w-full
                        max-w-lg
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-[#e3292f]/20
                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.12)]
                        sm:p-8
                    "
                            >

                                {/* Card Glow */}

                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-56
                            w-56
                            rounded-full
                            bg-red-100
                            opacity-70
                            blur-3xl
                            transition-transform
                            duration-700
                            group-hover:scale-125
                        "
                                />


                                <div className="relative z-10">


                                    {/* Header */}

                                    <div
                                        className="
                                flex
                                items-center
                                justify-between
                                gap-4
                            "
                                    >

                                        <div>

                                            <p
                                                className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#e3292f]
                                    "
                                            >
                                                CONNECTIVITY
                                            </p>

                                            <h3
                                                className="
                                        mt-2
                                        text-2xl
                                        font-black
                                        tracking-tight
                                        text-slate-900
                                    "
                                            >
                                                Fiber Infrastructure
                                            </h3>

                                        </div>


                                        {/* Globe */}

                                        <div
                                            className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-red-50
                                    text-[#e3292f]
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    group-hover:bg-[#e3292f]
                                    group-hover:text-white
                                "
                                        >
                                            <Globe2 size={22} />
                                        </div>

                                    </div>


                                    {/* Line Visual */}

                                    <div className="relative mt-10">

                                        <div
                                            className="
                                    h-px
                                    w-full
                                    bg-gradient-to-r
                                    from-[#e3292f]
                                    via-slate-200
                                    to-[#e3292f]
                                "
                                        />


                                        {/* Left Node */}

                                        <div
                                            className="
                                    absolute
                                    left-0
                                    top-1/2
                                    flex
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-4
                                    border-white
                                    bg-[#e3292f]
                                    p-2
                                    shadow-md
                                    shadow-red-200
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                                        >
                                            <Network
                                                size={15}
                                                className="text-white"
                                            />
                                        </div>


                                        {/* Right Node */}

                                        <div
                                            className="
                                    absolute
                                    right-0
                                    top-1/2
                                    flex
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-4
                                    border-white
                                    bg-[#e3292f]
                                    p-2
                                    shadow-md
                                    shadow-red-200
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                                        >
                                            <Router
                                                size={15}
                                                className="text-white"
                                            />
                                        </div>

                                    </div>


                                    {/* Bottom Cards */}

                                    <div
                                        className="
        mt-10
        grid
        grid-cols-2
        gap-4
    "
                                    >

                                        {/* Consistent */}
                                        <div
                                            className="
            group
            rounded-2xl
            border
            border-dark/10
            bg-white/5
            p-5
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#e3292f]/30
            hover:bg-white/10
            hover:shadow-[0_15px_35px_rgba(227,41,47,0.10)]
            sm:text-left
        "
                                        >

                                            <Signal
                                                size={22}
                                                className="
                mx-auto
                text-[#e3292f]
                transition-transform
                duration-300
                group-hover:scale-110
                sm:mx-0
            "
                                            />

                                            <p
                                                className="
                mt-4
                text-sm
                font-bold
                text-dark
                
            "
                                            >
                                                Consistent
                                            </p>

                                            <p
                                                className="
                mt-1
                text-xs
                leading-5
                text-slate-400
            "
                                            >
                                                Stable connectivity for everyday operations.
                                            </p>

                                        </div>


                                        {/* Protected */}
                                        <div
                                            className="
            group
            rounded-2xl
            border
            border-dark/10
            bg-white/10
            p-5
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#e3292f]/30
            hover:bg-white/10
            hover:shadow-[0_15px_35px_rgba(227,41,47,0.10)]
            sm:text-left
        "
                                        >

                                            <ShieldCheck
                                                size={22}
                                                className="
                mx-auto
                text-[#e3292f]
                transition-transform
                duration-300
                group-hover:scale-110
                sm:mx-0
            "
                                            />

                                            <p
                                                className="
                mt-4
                text-sm
                font-bold
                text-dark
            "
                                            >
                                                Protected
                                            </p>

                                            <p
                                                className="
                mt-1
                text-xs
                leading-5
                text-slate-400
            "
                                            >
                                                Secure network infrastructure for business.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* Bottom Accent */}

                                <div
                                    className="
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-0
                            bg-[#e3292f]
                            transition-all
                            duration-500
                            group-hover:w-full
                        "
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24">

                {/* Background Glow */}
                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-96
            w-96
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-100/60
            blur-3xl
        "
                />

                {/* Main CTA Card */}
                <div
                    data-aos="fade-up"
                    className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[2rem]
            border
            border-red-100
            bg-white
            px-6
            py-12
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
        "
                >

                    {/* Card Glow - Top Right */}
                    <div
                        className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-red-100/70
                blur-3xl
            "
                    />

                    {/* Card Glow - Bottom Left */}
                    <div
                        className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-64
                w-64
                rounded-full
                bg-red-50
                blur-3xl
            "
                    />

                    {/* Inner Content */}
                    <div
                        className="
                relative
                z-10
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
                    gap-2
                    rounded-full
                    border
                    border-red-100
                    bg-red-50
                    px-4
                    py-2
                "
                        >

                            <span
                                className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#e3292f]
                    "
                            />

                            <p
                                className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-[#e3292f]
                    "
                            >
                                GET CONNECTED
                            </p>

                        </div>


                        {/* Heading */}
                        <h2
                            className="
                    mt-5
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            Ready To Upgrade Your

                            <span className="text-[#e3292f]">
                                {" "}Business Connectivity?
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
                            Talk to our team and find the right Fiber On Lease
                            solution for your business requirements.
                        </p>


                        {/* Button */}
                        <div className="mt-8 flex justify-center">

                            <Link
                                to="/contact-us"
                                className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#e3292f]
                        px-7
                        py-4
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_12px_30px_rgba(227,41,47,0.20)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#c91f25]
                        hover:shadow-[0_18px_40px_rgba(227,41,47,0.25)]
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

                    </div>

                </div>

            </section>

            <Footer />
        </main>
    );
}