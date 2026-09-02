import {
    ArrowRight,
    CheckCircle2,
    Camera,
    Eye,
    Globe2,
    Network,
    Router,
    Server,
    ShieldCheck,
    Signal,
    LockKeyhole,
    MonitorCheck,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";


/* =====================================================
   BENEFITS
===================================================== */

const benefits = [
    {
        icon: Camera,
        title: "Advanced Surveillance",
        description:
            "Modern surveillance solutions designed to monitor and protect your business premises effectively.",
    },
    {
        icon: ShieldCheck,
        title: "Enhanced Security",
        description:
            "Reliable security infrastructure built to help protect people, property and critical business assets.",
    },
    {
        icon: MonitorCheck,
        title: "Centralized Monitoring",
        description:
            "Monitor your security environment through organized and easy-to-manage surveillance systems.",
    },
    {
        icon: Eye,
        title: "Real-Time Visibility",
        description:
            "Maintain better visibility across important areas with dependable monitoring and surveillance.",
    },
    {
        icon: LockKeyhole,
        title: "Secure Infrastructure",
        description:
            "Security-focused infrastructure designed to support safer and more controlled business operations.",
    },
    {
        icon: Zap,
        title: "Fast Deployment",
        description:
            "Professional installation and deployment to get your surveillance environment operational efficiently.",
    },
];


/* =====================================================
   FEATURES
===================================================== */

const features = [
    "HD & IP surveillance solutions",
    "Real-time security monitoring",
    "Smart camera infrastructure",
    "Secure video management",
    "Scalable surveillance systems",
    "Professional technical support",
];


export default function SecurityAndSurveillance() {

    return (

        <>
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-red-100">

                {/* =====================================================
        BACKGROUND GLOW
    ====================================================== */}

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


                {/* =====================================================
        SUBTLE GRID
    ====================================================== */}

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


                {/* =====================================================
        HERO CONTAINER
    ====================================================== */}

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


                        {/* =================================================
                LEFT CONTENT
            ================================================= */}

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

                                <span
                                    className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#e3292f]
                        "
                                >
                                    TEJAYS SERVICES
                                </span>

                            </div>


                            {/* Heading */}

                            <h1
                                className="
                        mt-6
                        text-4xl
                        font-black
                        leading-[1.05]
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                        lg:text-6xl
                    "
                            >
                                Security

                                <span className="text-[#e3292f]">
                                    {" "}and Surveillance
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
                        text-slate-500
                        sm:text-base
                        lg:mx-0
                    "
                            >
                                Professional security and surveillance
                                solutions designed for reliable monitoring,
                                enhanced protection and secure business
                                operations.
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


                                <Link
                                    to="/contact-us"
                                    className="
                                            inline-flex
                                            w-full
                                            items-center
                                            justify-center
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
                                    Get Started
                                </Link>

                            </div>

                        </div>


                        {/* =================================================
                RIGHT VISUAL
            ================================================= */}

                        <div
                            data-aos="fade-left"
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
                        p-6
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-red-200
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
                            blur-3xl
                            transition-transform
                            duration-700
                            group-hover:scale-125
                        "
                                />


                                {/* Status */}

                                <div
                                    className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-between
                        "
                                >

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
                                            Security Ready
                                        </span>

                                    </div>


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
                            "
                                    >
                                        <Camera size={20} />
                                    </div>

                                </div>


                                {/* Card Content */}

                                <div
                                    className="
                            relative
                            z-10
                            mt-8
                            text-center
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
                                        Monitor.

                                        <span className="text-[#e3292f]">
                                            {" "}Protect.
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
                            "
                                    >
                                        Smart surveillance and security
                                        infrastructure designed to provide
                                        better visibility, protection and
                                        control.
                                    </p>

                                </div>


                                {/* Security Visual */}

                                <div
                                    className="
                            relative
                            z-10
                            my-8
                            flex
                            items-center
                            justify-center
                        "
                                >

                                    <div
                                        className="
                                absolute
                                h-28
                                w-28
                                rounded-full
                                border
                                border-red-100
                                transition-transform
                                duration-500
                                group-hover:scale-110
                            "
                                    />

                                    <div
                                        className="
                                absolute
                                h-20
                                w-20
                                rounded-full
                                border
                                border-red-200
                            "
                                    />

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
                                transition-transform
                                duration-500
                                group-hover:scale-110
                            "
                                    >
                                        <ShieldCheck size={23} />
                                    </div>

                                </div>


                                {/* Stats */}

                                <div
                                    className="
                            relative
                            z-10
                            grid
                            grid-cols-3
                            gap-2
                        "
                                >

                                    {[
                                        ["24/7", "Monitoring"],
                                        ["HD", "Surveillance"],
                                        ["Secure", "Protection"],
                                    ].map(([value, label]) => (

                                        <div
                                            key={label}
                                            className="
                                    group/stat
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-3
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-red-200
                                    hover:bg-red-50
                                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                                "
                                        >

                                            <p
                                                className="
                                        text-[11px]
                                        font-bold
                                        text-slate-900
                                    "
                                            >
                                                {value}
                                            </p>

                                            <p
                                                className="
                                        mt-1
                                        text-[8px]
                                        uppercase
                                        tracking-wider
                                        text-slate-400
                                    "
                                            >
                                                {label}
                                            </p>

                                        </div>

                                    ))}

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
                BENEFITS
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
                            gap-14
                            lg:grid-cols-2
                        "
                    >

                        {/* LEFT */}

                        <div
                            data-aos="fade-right"
                            className="text-center lg:text-left"
                        >

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


                            <h2
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-2xl
                                    text-center
                                    text-3xl
                                    font-black
                                    leading-[1.1]
                                    tracking-tight
                                    text-slate-900
                                    sm:text-4xl
                                    lg:mx-0
                                    lg:text-left
                                    lg:text-5xl
                                "
                            >
                                Smarter Security You Can

                                <span className="text-[#e3292f]">
                                    {" "}Rely On
                                </span>
                            </h2>


                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-xl
                                    text-center
                                    text-sm
                                    leading-7
                                    text-slate-500
                                    sm:text-base
                                    lg:mx-0
                                    lg:text-left
                                "
                            >
                                Protect your business with professional
                                surveillance and security solutions built
                                for better visibility, reliable monitoring
                                and long-term operational safety.
                            </p>


                            {/* Feature Boxes */}

                            <div
                                className="
                                    mt-9
                                    grid
                                    grid-cols-2
                                    gap-3
                                    sm:gap-4
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
                                            min-h-[68px]
                                            items-center
                                            gap-2.5
                                            overflow-hidden
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-3
                                            py-3
                                            text-left
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-red-200
                                            hover:bg-white
                                            hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]
                                            sm:gap-3
                                            sm:px-4
                                        "
                                    >

                                        <CheckCircle2
                                            size={18}
                                            className="
                                                shrink-0
                                                text-[#e3292f]
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                            "
                                        />

                                        <span
                                            className="
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


                        {/* RIGHT */}

                        <div
                            data-aos="fade-left"
                            className="relative"
                        >

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-red-100
                                    bg-white
                                    p-7
                                    shadow-[0_25px_70px_rgba(15,23,42,0.07)]
                                    sm:p-9
                                "
                            >

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
                                    "
                                />

                                <div className="relative">


                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p
                                                className="
                                                    text-[10px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.25em]
                                                    text-slate-400
                                                "
                                            >
                                                SECURITY
                                            </p>

                                            <h3
                                                className="
                                                    mt-2
                                                    text-2xl
                                                    font-bold
                                                    text-slate-900
                                                "
                                            >
                                                Surveillance Infrastructure
                                            </h3>

                                        </div>


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
                                            "
                                        >
                                            <Camera size={22} />
                                        </div>

                                    </div>


                                    {/* Security Line */}

                                    <div className="relative mt-10">

                                        <div
                                            className="
                                                h-px
                                                w-full
                                                bg-gradient-to-r
                                                from-[#e3292f]
                                                via-red-100
                                                to-[#e3292f]
                                            "
                                        />

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
                                                text-white
                                                shadow-md
                                            "
                                        >
                                            <Camera size={15} />
                                        </div>


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
                                                text-white
                                                shadow-md
                                            "
                                        >
                                            <MonitorCheck size={15} />
                                        </div>

                                    </div>


                                    {/* Security Cards */}

                                    <div
                                        className="
                                            mt-10
                                            grid
                                            grid-cols-2
                                            gap-4
                                        "
                                    >

                                        <div
                                            className="
                                                group
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-5
                                                text-center
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-red-200
                                                hover:bg-white
                                                hover:shadow-md
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
                                                    text-slate-900
                                                "
                                            >
                                                Real-Time
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-slate-500
                                                "
                                            >
                                                Monitor important areas with
                                                reliable live visibility.
                                            </p>

                                        </div>


                                        <div
                                            className="
                                                group
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-5
                                                text-center
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-red-200
                                                hover:bg-white
                                                hover:shadow-md
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
                                                    text-slate-900
                                                "
                                            >
                                                Protected
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-slate-500
                                                "
                                            >
                                                Security infrastructure built
                                                for business protection.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BENEFIT CARDS
            ====================================================== */}

            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24 lg:py-28">

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-5
                        sm:px-8
                        lg:px-10
                    "
                >

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
                            OUR CAPABILITIES
                        </p>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-black
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Security Built For

                            <span className="text-[#e3292f]">
                                {" "}Modern Business
                            </span>
                        </h2>

                    </div>


                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-3
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
                                        hover:border-red-200
                                        hover:shadow-[0_25px_55px_rgba(227,41,47,0.10)]
                                        sm:p-6
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
                                            bg-red-100
                                            opacity-0
                                            blur-2xl
                                            transition-all
                                            duration-500
                                            group-hover:scale-150
                                            group-hover:opacity-100
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
                                            border-red-100
                                            bg-red-50
                                            text-[#e3292f]
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            sm:h-13
                                            sm:w-13
                                        "
                                    >
                                        <Icon
                                            size={21}
                                            strokeWidth={1.7}
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
                CTA
            ====================================================== */}

            <section className="relative overflow-hidden bg-white py-20 sm:py-24">

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


                    <div
                        className="
                            relative
                            z-10
                            mx-auto
                            max-w-3xl
                            text-center
                        "
                    >

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
                                SECURE YOUR BUSINESS
                            </p>

                        </div>


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
                            Ready To Strengthen Your

                            <span className="text-[#e3292f]">
                                {" "}Business Security?
                            </span>
                        </h2>


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
                            Talk to our team and find the right security
                            and surveillance solution for your business
                            requirements.
                        </p>


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

        </>

    );

}