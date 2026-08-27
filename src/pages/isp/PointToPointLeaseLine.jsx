import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Globe2,
    Headphones,
    Network,
    Radio,
    Router,
    Scaling,
    Server,
    ShieldCheck,
    Signal,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


/* =========================================================
   FEATURES
========================================================= */

const leaseLineFeatures = [
    {
        title: "Dedicated Bandwidth",
        text: "Dedicated connectivity designed to provide consistent bandwidth for critical business operations.",
        icon: GaugeIcon,
    },
    {
        title: "Low Latency",
        text: "Efficient point-to-point connectivity designed for responsive business communication and applications.",
        icon: Zap,
    },
    {
        title: "Reliable Performance",
        text: "Stable network performance that helps organizations maintain dependable connectivity between locations.",
        icon: Signal,
    },
    {
        title: "Secure Connectivity",
        text: "Private connectivity infrastructure designed to support secure communication between business locations.",
        icon: ShieldCheck,
    },
    {
        title: "Scalable Infrastructure",
        text: "Connectivity solutions that can grow with changing business and network requirements.",
        icon: Scaling,
    },
    {
        title: "Professional Support",
        text: "Technical assistance focused on maintaining reliable connectivity and network performance.",
        icon: Headphones,
    },
];


/* =========================================================
   BENEFITS
========================================================= */

const leaseLineBenefits = [
    "Dedicated bandwidth",
    "Consistent network performance",
    "Secure point-to-point connectivity",
    "Low-latency communication",
    "Reliable business connectivity",
    "Scalable network infrastructure",
];


/* =========================================================
   USE CASES
========================================================= */

const suitableFor = [
    {
        title: "Corporate Offices",
        text: "Connect primary offices and business locations through dedicated connectivity.",
        icon: Building2,
    },
    {
        title: "Branch Networks",
        text: "Maintain dependable communication between branches and central locations.",
        icon: Network,
    },
    {
        title: "Data Infrastructure",
        text: "Support connectivity requirements between critical infrastructure environments.",
        icon: Server,
    },
    {
        title: "Enterprise Communication",
        text: "Enable reliable communication for business applications and internal operations.",
        icon: Globe2,
    },
    {
        title: "Critical Applications",
        text: "Support applications that depend on consistent and predictable network performance.",
        icon: Router,
    },
    {
        title: "Business Operations",
        text: "Build dependable connectivity around important day-to-day business requirements.",
        icon: Radio,
    },
];


/* =========================================================
   SIMPLE GAUGE ICON
========================================================= */

function GaugeIcon({ size = 22, strokeWidth = 1.7 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M4.93 19.07a10 10 0 1 1 14.14 0" />
            <path d="M12 12l4-4" />
            <path d="M12 2v2" />
            <path d="M4.93 4.93l1.42 1.42" />
            <path d="M19.07 4.93l-1.42 1.42" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
        </svg>
    );
}


/* =========================================================
   PAGE
========================================================= */

export default function PointToPointLeaseLine() {
    return (
        <div className="min-h-screen overflow-x-clip bg-white">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <Header />


            {/* =====================================================
                HERO
            ====================================================== */}
            <section
                className="
        relative
        overflow-hidden
        bg-red-50
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
    "
            >
                {/* =====================================================
        DECORATIVE BACKGROUND
    ====================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            top-0
            h-96
            w-96
            rounded-full
            bg-[#e3292f]/10
            blur-[120px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-slate-200/70
            blur-[120px]
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            right-[8%]
            top-[15%]
            hidden
            h-64
            w-64
            rounded-full
            border
            border-[#e3292f]/10
            lg:block
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            right-[12%]
            top-[21%]
            hidden
            h-44
            w-44
            rounded-full
            border
            border-[#e3292f]/10
            lg:block
        "
                />


                {/* =====================================================
        MAIN CONTAINER
    ====================================================== */}

                <div
                    className="
            relative
            z-10
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-5
            sm:px-6
            lg:grid-cols-2
            lg:gap-16
            lg:px-8
            xl:gap-20
        "
                >

                    {/* =================================================
            LEFT CONTENT
        ================================================== */}

                    <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                        className="
                mx-auto
                max-w-3xl
                text-center
                lg:mx-0
                lg:text-left
            "
                    >

                        {/* Label */}

                        <div
                            className="
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-[#e3292f]/15
                    bg-white
                    px-4
                    py-2
                    shadow-sm
                "
                        >

                            <Network
                                size={15}
                                className="text-[#e3292f]"
                            />

                            <span
                                className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-slate-600
                        sm:text-xs
                    "
                            >
                                Point-to-Point Connectivity
                            </span>

                        </div>


                        {/* Heading */}

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="
                    mt-6
                    text-4xl
                    font-black
                    leading-[1.08]
                    tracking-tight
                    text-slate-900
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                "
                        >
                            Dedicated Connectivity.

                            <span className="block text-[#e3292f]">
                                Built for Business.
                            </span>
                        </h1>


                        {/* Description */}

                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="
                    mx-auto
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                    sm:leading-8
                    lg:mx-0
                "
                        >
                            Private, high-performance connectivity designed to
                            securely connect business locations with consistent
                            speed, reliability and predictable network performance.
                        </p>


                        {/* Buttons */}

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="
                    mt-9
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    sm:flex-row
                    lg:justify-start
                "
                        >

                            <Link
                                to="/contact-us"
                                className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        bg-[#e3292f]
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_15px_35px_rgba(227,41,47,0.20)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:bg-[#c91f25]
                        hover:shadow-[0_20px_45px_rgba(227,41,47,0.30)]
                        sm:w-auto
                    "
                            >
                                Get Connected

                                <ArrowRight
                                    size={17}
                                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                />
                            </Link>


                            <Link
                                to="/contact-us"
                                className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        border
                        border-slate-300
                        bg-white
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-slate-800
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#e3292f]/40
                        hover:text-[#e3292f]
                        hover:shadow-md
                        sm:w-auto
                    "
                            >
                                Talk To Our Team

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


                    {/* =================================================
            RIGHT IMAGE
        ================================================== */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="
                mx-auto
                w-full
                max-w-xl
            "
                    >

                        <div
                            className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white
                    bg-white
                    p-2
                    shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#e3292f]/30
                    hover:shadow-[0_35px_90px_rgba(227,41,47,0.15)]
                    
                "
                        >

                            {/* Image */}

                            <div className="relative overflow-hidden rounded-2xl">

                                <img
                                    src="/Tejays/assets/point-to-point1.jpg"
                                    alt="TEJAYS Point-to-Point Connectivity"
                                    className="
                            h-[300px]
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                            sm:h-[380px]
                            lg:h-[490px]
                        "
                                />

                                {/* Image Overlay */}

                                <div
                                    className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#07111f]/75
                            via-[#07111f]/10
                            to-transparent
                        "
                                />


                                {/* Red Glow */}

                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-56
                            w-56
                            rounded-full
                            bg-[#e3292f]/20
                            blur-3xl
                            transition-transform
                            duration-700
                            group-hover:scale-125
                        "
                                />


                                {/* Status */}

                                <div
                                    className="
                            absolute
                            right-4
                            top-4
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/20
                            bg-[#07111f]/65
                            px-3
                            py-2
                            backdrop-blur-md
                            sm:right-5
                            sm:top-5
                            sm:px-4
                        "
                                >

                                    <span
                                        className="
                                h-2
                                w-2
                                rounded-full
                                bg-[#e3292f]
                                shadow-[0_0_12px_rgba(227,41,47,0.9)]
                            "
                                    />

                                    <span
                                        className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white/90
                                sm:text-[10px]
                            "
                                    >
                                        Dedicated Network
                                    </span>

                                </div>


                                {/* Bottom Content */}

                                <div
                                    className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            p-5
                            sm:p-7
                        "
                                >

                                    <div className="mb-3 flex items-center gap-3">

                                        <span className="h-px w-8 bg-[#e3292f] sm:w-10" />

                                        <span
                                            className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.22em]
                                    text-white/75
                                    sm:text-[10px]
                                "
                                        >
                                            TEJAYS CONNECTIVITY
                                        </span>

                                    </div>


                                    <h3
                                        className="
                                text-xl
                                font-bold
                                text-white
                                sm:text-2xl
                            "
                                    >
                                        Point-to-Point Network
                                    </h3>


                                    <p
                                        className="
                                mt-2
                                text-xs
                                font-medium
                                text-white/70
                                sm:text-sm
                            "
                                    >
                                        Private
                                        <span className="mx-2 text-[#e3292f]">
                                            •
                                        </span>
                                        Secure
                                        <span className="mx-2 text-[#e3292f]">
                                            •
                                        </span>
                                        Reliable
                                    </p>

                                </div>

                            </div>


                            {/* Bottom Red Line */}

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

            </section>


            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-white
                    py-20
                    sm:py-24
                    lg:py-28
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-10
                        h-96
                        w-96
                        rounded-full
                        bg-red-50
                        blur-3xl
                    "
                />


                <div
                    className="
                        relative
                        mx-auto
                        grid
                        max-w-7xl
                        items-center
                        gap-12
                        px-5
                        sm:px-6
                        lg:grid-cols-2
                        lg:gap-20
                        lg:px-8
                    "
                >

                    {/* IMAGE */}

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="mx-auto w-full max-w-xl"
                    >

                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                border
                                border-slate-200
                                bg-white
                                p-3
                                shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-[0_35px_90px_rgba(227,41,47,0.12)]
                            "
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src="/Tejays/assets/lease-line.jpg"
                                    alt="TEJAYS Point-to-Point Lease Line"
                                    className="
                                        h-[330px]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-1000
                                        group-hover:scale-105
                                        sm:h-[490px]
                                    "
                                    onError={(event) => {
                                        event.currentTarget.style.display = "none";
                                    }}
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-slate-900/70
                                        via-transparent
                                        to-transparent
                                    "
                                />


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
                                        group-hover:w-48
                                    "
                                />


                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        left-5
                                        right-5
                                        border
                                        border-white/20
                                        bg-slate-900/40
                                        px-4
                                        py-3
                                        text-center
                                        backdrop-blur-md
                                        sm:text-left
                                    "
                                >

                                    <p
                                        className="
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.25em]
                                            text-white/60
                                        "
                                    >
                                        TEJAYS CONNECTIVITY
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-white">
                                        Point-to-Point Lease Line
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* CONTENT */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="text-center lg:text-left"
                    >

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            Dedicated Connectivity
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Dedicated connectivity between your business
                            locations.
                        </h2>


                        <p
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
                            TEJAYS Point-to-Point Lease Line connectivity
                            provides a dedicated communication path between
                            two locations, helping organizations maintain
                            reliable and predictable connectivity for critical
                            business operations.
                        </p>


                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                                lg:mx-0
                            "
                        >
                            Designed for organizations that require dependable
                            communication, dedicated bandwidth and consistent
                            network performance between important locations.
                        </p>


                        {/* Benefits */}

                        <div
                            className="
                                mx-auto
                                mt-8
                                grid
                                max-w-xl
                                grid-cols-2
                                gap-3
                                lg:mx-0
                            "
                        >

                            {leaseLineBenefits.map((item, index) => (

                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    className="
                                        group
                                        flex
                                        min-h-[62px]
                                        items-center
                                        gap-2
                                        border
                                        border-slate-200
                                        bg-white
                                        p-3
                                        text-left
                                        shadow-[0_8px_25px_rgba(15,23,42,0.04)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#e3292f]/40
                                        hover:shadow-[0_15px_35px_rgba(227,41,47,0.10)]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-[#e3292f]/10
                                            text-[#e3292f]
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                        "
                                    >
                                        <CheckCircle2
                                            size={16}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <span
                                        className="
                                            text-[11px]
                                            font-semibold
                                            leading-5
                                            text-slate-700
                                            transition-colors
                                            duration-300
                                            group-hover:text-slate-900
                                            sm:text-xs
                                        "
                                    >
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>


                        <Link
                            to="/contact-us"
                            className="
                                group
                                mt-8
                                inline-flex
                                items-center
                                gap-3
                                text-sm
                                font-bold
                                text-slate-900
                                transition-colors
                                duration-300
                                hover:text-[#e3292f]
                            "
                        >
                            Talk To Our Team

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

            </section>


            {/* =====================================================
                FEATURES
            ====================================================== */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-red-50
                    py-20
                    sm:py-24
                    lg:py-28
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        top-10
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
                        bottom-0
                        h-96
                        w-96
                        rounded-full
                        bg-[#e3292f]/5
                        blur-3xl
                    "
                />


                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-5
                        sm:px-6
                        lg:px-8
                    "
                >

                    {/* Header */}

                    <div
                        data-aos="fade-up"
                        className="
                            mx-auto
                            max-w-3xl
                            text-center
                        "
                    >

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            Why TEJAYS
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Connectivity designed for
                            <span className="block text-[#e3292f]">
                                critical business communication.
                            </span>
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            Dedicated connectivity solutions designed around
                            reliability, performance, security and scalability.
                        </p>

                    </div>


                    {/* Feature Grid */}

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

                        {leaseLineFeatures.map((feature, index) => {

                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        text-center
                                        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-[#e3292f]/40
                                        hover:shadow-[0_20px_50px_rgba(227,41,47,0.12)]
                                        sm:p-6
                                    "
                                >

                                    {/* Glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-10
                                            -top-10
                                            h-28
                                            w-28
                                            rounded-full
                                            bg-[#e3292f]/5
                                            blur-3xl
                                            transition-all
                                            duration-300
                                            group-hover:scale-150
                                            group-hover:bg-[#e3292f]/10
                                        "
                                    />


                                    {/* Icon */}

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
                                            border-[#e3292f]/20
                                            bg-[#e3292f]/10
                                            text-[#e3292f]
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:border-[#e3292f]
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            group-hover:shadow-[0_0_25px_rgba(227,41,47,0.25)]
                                            sm:h-14
                                            sm:w-14
                                        "
                                    >
                                        <Icon
                                            size={21}
                                            className="sm:h-6 sm:w-6"
                                            strokeWidth={1.7}
                                        />
                                    </div>


                                    {/* Number */}

                                    <span
                                        className="
                                            absolute
                                            right-4
                                            top-4
                                            text-[10px]
                                            font-bold
                                            tracking-widest
                                            text-slate-200
                                            transition-colors
                                            duration-300
                                            group-hover:text-[#e3292f]/30
                                        "
                                    >
                                        0{index + 1}
                                    </span>


                                    {/* Content */}

                                    <h3
                                        className="
                                            relative
                                            z-10
                                            mt-4
                                            text-xs
                                            font-bold
                                            leading-5
                                            text-slate-900
                                            sm:mt-6
                                            sm:text-lg
                                        "
                                    >
                                        {feature.title}
                                    </h3>


                                    <p
                                        className="
                                            relative
                                            z-10
                                            mt-2
                                            text-[10px]
                                            leading-5
                                            text-slate-500
                                            sm:mt-3
                                            sm:text-sm
                                            sm:leading-6
                                        "
                                    >
                                        {feature.text}
                                    </p>


                                    {/* Bottom Line */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-[#e3292f]
                                            transition-all
                                            duration-300
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
                NETWORK INFRASTRUCTURE
            ====================================================== */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-white
                    py-20
                    sm:py-24
                    lg:py-28
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-0
                        h-96
                        w-96
                        rounded-full
                        bg-red-50
                        blur-[120px]
                    "
                />


                <div
                    className="
                        relative
                        mx-auto
                        grid
                        max-w-7xl
                        items-center
                        gap-12
                        px-5
                        sm:px-6
                        lg:grid-cols-2
                        lg:gap-20
                        lg:px-8
                    "
                >

                    {/* CONTENT */}

                    <div
                        data-aos="fade-right"
                        className="text-center lg:text-left"
                    >

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            Network Infrastructure
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Built for dependable
                            <span className="block text-[#e3292f]">
                                business connectivity.
                            </span>
                        </h2>


                        <p
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
                            TEJAYS Point-to-Point connectivity is designed to
                            provide dependable communication between locations,
                            helping businesses maintain reliable access to
                            critical systems and applications.
                        </p>


                        {/* Points */}

                        <div className="mx-auto mt-8 max-w-xl space-y-4 lg:mx-0">

                            {[
                                {
                                    title: "Predictable Performance",
                                    text: "Consistent connectivity for important business operations.",
                                    icon: GaugeIcon,
                                },
                                {
                                    title: "Dedicated Connectivity",
                                    text: "A dedicated communication path between connected locations.",
                                    icon: Network,
                                },
                                {
                                    title: "Business-Ready Infrastructure",
                                    text: "Professional network infrastructure designed around business requirements.",
                                    icon: Server,
                                },
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 90}
                                        className="
                                            group
                                            flex
                                            items-start
                                            gap-4
                                            border-b
                                            border-slate-200
                                            pb-4
                                            text-left
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-[#e3292f]/10
                                                text-[#e3292f]
                                                transition-all
                                                duration-300
                                                group-hover:scale-110
                                                group-hover:bg-[#e3292f]
                                                group-hover:text-white
                                            "
                                        >
                                            <Icon size={18} />
                                        </div>


                                        <div>

                                            <h3
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-slate-900
                                                    sm:text-base
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-6
                                                    text-slate-500
                                                    sm:text-sm
                                                "
                                            >
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>


                    {/* VISUAL */}

                    <div
                        data-aos="fade-left"
                        className="mx-auto w-full max-w-xl"
                    >

                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-3
                                shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:border-[#e3292f]/30
                                hover:shadow-[0_35px_90px_rgba(227,41,47,0.12)]
                            "
                        >

                            <div className="relative overflow-hidden rounded-2xl">

                                <img
                                    src="/Tejays/assets/lease-line-infrastructure2.jpg"
                                    alt="TEJAYS Lease Line Infrastructure"
                                    className="
                                        h-[380px]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                        sm:h-[500px]
                                    "
                                    onError={(event) => {
                                        event.currentTarget.style.display = "none";
                                    }}
                                />


                                {/* Overlay */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-slate-900/75
                                        via-slate-900/10
                                        to-transparent
                                    "
                                />


                                {/* Status */}

                                <div
                                    className="
                                        absolute
                                        right-4
                                        top-4
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/20
                                        bg-slate-900/40
                                        px-3
                                        py-2
                                        backdrop-blur-md
                                        sm:right-5
                                        sm:top-5
                                    "
                                >

                                    <span
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#e3292f]
                                            shadow-[0_0_14px_rgba(227,41,47,0.9)]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.2em]
                                            text-white/90
                                        "
                                    >
                                        Dedicated Network
                                    </span>

                                </div>


                                {/* Bottom Content */}

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        p-5
                                        text-center
                                        sm:p-7
                                        sm:text-left
                                    "
                                >

                                    <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start">

                                        <span className="h-px w-8 bg-[#e3292f]" />

                                        <span
                                            className="
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-[0.25em]
                                                text-white/80
                                            "
                                        >
                                            TEJAYS CONNECTIVITY
                                        </span>

                                    </div>


                                    <h3
                                        className="
                                            text-2xl
                                            font-bold
                                            text-white
                                            sm:text-3xl
                                        "
                                    >
                                        Point-to-Point Network
                                    </h3>


                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            text-white/75
                                            sm:text-sm
                                        "
                                    >
                                        Dedicated
                                        <span className="mx-2 text-[#e3292f]">
                                            •
                                        </span>
                                        Reliable
                                        <span className="mx-2 text-[#e3292f]">
                                            •
                                        </span>
                                        Scalable
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SUITABLE FOR
            ====================================================== */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-slate-100
                    py-20
                    sm:py-24
                    lg:py-28
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        top-20
                        h-80
                        w-80
                        rounded-full
                        bg-[#e3292f]/5
                        blur-[100px]
                    "
                />


                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-5
                        sm:px-6
                        lg:px-8
                    "
                >

                    {/* Header */}

                    <div
                        data-aos="fade-up"
                        className="
                            mx-auto
                            max-w-3xl
                            text-center
                        "
                    >

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            Built For
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Built for organizations
                            <span className="block text-[#e3292f]">
                                that depend on connectivity.
                            </span>
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            Dedicated connectivity designed to support
                            organizations, infrastructure and business
                            applications.
                        </p>

                    </div>


                    {/* Cards */}

                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-3
                            sm:mt-16
                            sm:gap-5
                            lg:grid-cols-3
                        "
                    >

                        {suitableFor.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        text-center
                                        shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#e3292f]/40
                                        hover:shadow-[0_20px_50px_rgba(227,41,47,0.10)]
                                        sm:p-7
                                    "
                                >

                                    {/* Glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-10
                                            -top-10
                                            h-24
                                            w-24
                                            rounded-full
                                            bg-[#e3292f]/5
                                            blur-2xl
                                            transition-all
                                            duration-300
                                            group-hover:scale-150
                                            group-hover:bg-[#e3292f]/10
                                        "
                                    />


                                    {/* Icon */}

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
                                            bg-[#e3292f]/10
                                            text-[#e3292f]
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            sm:h-12
                                            sm:w-12
                                        "
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={1.7}
                                        />
                                    </div>


                                    <h3
                                        className="
                                            relative
                                            z-10
                                            mt-4
                                            text-xs
                                            font-bold
                                            leading-5
                                            text-slate-900
                                            sm:mt-5
                                            sm:text-lg
                                        "
                                    >
                                        {item.title}
                                    </h3>


                                    <p
                                        className="
                                            relative
                                            z-10
                                            mt-2
                                            text-[10px]
                                            leading-5
                                            text-slate-500
                                            sm:text-sm
                                            sm:leading-6
                                        "
                                    >
                                        {item.text}
                                    </p>


                                    {/* Bottom Line */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-[#e3292f]
                                            transition-all
                                            duration-300
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
                CTA
            ====================================================== */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-[#e3292f]
                    py-16
                    sm:py-20
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-72
                        w-72
                        rounded-full
                        border-[45px]
                        border-white/10
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-32
                        -left-20
                        h-72
                        w-72
                        rounded-full
                        border-[35px]
                        border-white/10
                    "
                />


                <div
                    data-aos="fade-up"
                    className="
                        relative
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        items-center
                        gap-7
                        px-5
                        text-center
                        sm:px-6
                        lg:flex-row
                        lg:justify-between
                        lg:px-8
                        lg:text-left
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-white/70
                            "
                        >
                            Let's Connect
                        </p>


                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-bold
                                text-white
                                sm:text-4xl
                            "
                        >
                            Ready for dedicated connectivity?
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-7
                                text-white/80
                                lg:mx-0
                            "
                        >
                            Talk to TEJAYS about a Point-to-Point Lease Line
                            solution designed around your business requirements.
                        </p>

                    </div>


                    <Link
                        to="/contact-us"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-3
                            bg-white
                            px-7
                            py-3.5
                            text-sm
                            font-bold
                            text-[#e3292f]
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:shadow-2xl
                        "
                    >
                        Contact TEJAYS

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

            </section>


            {/* =====================================================
                FOOTER
            ====================================================== */}

            <Footer />

        </div>
    );
}