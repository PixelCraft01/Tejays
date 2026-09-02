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
    Headphones,
} from "lucide-react";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


const benefits = [
    {
        icon: Network,
        title: "Structured Network Infrastructure",
    },
    {
        icon: Zap,
        title: "High-Speed Connectivity",
    },
    {
        icon: ShieldCheck,
        title: "Secure Network Environment",
    },
    {
        icon: Signal,
        title: "Reliable Network Performance",
    },
    {
        icon: Router,
        title: "Scalable Network Solutions",
    },
    {
        icon: UsersRound,
        title: "Professional Technical Support",
    },
];


const features = [
    "LAN and WAN network solutions",
    "Enterprise network infrastructure",
    "Secure wired and wireless networking",
    "Network design and deployment",
    "Scalable connectivity solutions",
    "Professional network support",
];


export default function NetworkingSolutions() {

    return (

        <>
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
                                Networking

                                <span className="text-[#e3292f]">
                                    {" "}Solutions
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
                                Professional connectivity and network
                                solutions designed for reliable, secure
                                and high-performance business communication.
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

                                {/* Glow */}

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
                                            Network Ready
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
                                        <Network size={20} />
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
                                        "
                                    >
                                        Reliable networking infrastructure
                                        designed to connect teams, systems
                                        and business operations efficiently.
                                    </p>

                                </div>


                                {/* Network Visual */}

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
                                        <Network size={23} />
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
                                        ["24/7", "Support"],
                                        ["Secure", "Network"],
                                        ["Fast", "Connectivity"],
                                    ].map(([value, label]) => (

                                        <div
                                            key={label}
                                            className="
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

            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                    <div className="grid items-center gap-14 lg:grid-cols-2">


                        {/* LEFT */}

                        <div
                            data-aos="fade-right"
                            className="text-center lg:text-left"
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
                                    WHY CHOOSE US
                                </span>

                            </div>


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
                                    lg:text-left
                                    lg:text-5xl
                                "
                            >
                                Networking Built For

                                <span className="text-[#e3292f]">
                                    {" "}Business
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
                                Build a reliable network foundation with
                                professional infrastructure designed for
                                secure communication, performance and future
                                business growth.
                            </p>


                            {/* Benefits */}

                            <div
                                data-aos="fade-up"
                                className="
        mx-auto
        mt-9
        grid
        max-w-xl
        grid-cols-2
        gap-3
        sm:gap-4
        lg:mx-0
    "
                            >

                                {benefits.map((item, index) => {

                                    const Icon = item.icon;

                                    return (

                                        <div
                                            key={item.title}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 60}
                                            className="
                    group
                    relative
                    flex
                    min-h-[92px]
                    items-center
                    justify-start
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/25
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(227,41,47,0.08)]
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
                        bg-red-50
                        opacity-0
                        blur-xl
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                                            />

                                            {/* Icon */}

                                            <div
                                                className="
                        relative
                        z-10
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-50
                        text-[#e3292f]
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-[#e3292f]
                        group-hover:text-white
                    "
                                            >
                                                <Icon size={17} />
                                            </div>

                                            {/* Text */}

                                            <span
                                                className="
                        relative
                        z-10
                        text-left
                        text-[10px]
                        font-semibold
                        leading-4
                        text-slate-700
                        sm:text-sm
                        sm:leading-5
                    "
                                            >
                                                {item.title}
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

                                    );

                                })}

                            </div>

                        </div>


                        {/* RIGHT */}

                        <div
                            data-aos="fade-left"
                            className="relative"
                        >

                            <div
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-red-100
                                    bg-white
                                    p-7
                                    shadow-[0_25px_70px_rgba(227,41,47,0.08)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-red-200
                                    hover:shadow-[0_35px_90px_rgba(227,41,47,0.12)]
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
                                        transition-transform
                                        duration-700
                                        group-hover:scale-125
                                    "
                                />


                                <div className="relative z-10">


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
                                                NETWORKING
                                            </p>

                                            <h3
                                                className="
                                                    mt-2
                                                    text-2xl
                                                    font-bold
                                                    text-slate-900
                                                "
                                            >
                                                Network Infrastructure
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
                                            <Server size={22} />
                                        </div>

                                    </div>


                                    {/* Network Line */}

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
                                            "
                                        >
                                            <Router size={15} />
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
                                            "
                                        >
                                            <Network size={15} />
                                        </div>

                                    </div>


                                    {/* Info Cards */}

                                    <div className="mt-10 grid grid-cols-2 gap-4">


                                        <div
                                            className="
                                                group/card
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-4
                                                text-center
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-red-200
                                                hover:bg-red-50
                                                sm:p-5
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
                                                    group-hover/card:scale-110
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
                                                Reliable
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-slate-500
                                                "
                                            >
                                                Stable network performance
                                                for daily operations.
                                            </p>

                                        </div>


                                        <div
                                            className="
                                                group/card
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-4
                                                text-center
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-red-200
                                                hover:bg-red-50
                                                sm:p-5
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
                                                    group-hover/card:scale-110
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
                                                Secure infrastructure
                                                for business communication.
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
                FEATURES
            ====================================================== */}

            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                    {/* SECTION HEADER */}

                    <div
                        data-aos="fade-up"
                        className="mx-auto max-w-3xl text-center"
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
                    px-3
                    py-1.5
                "
                        >

                            <span
                                className="
                        h-1.5
                        w-1.5
                        shrink-0
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
                                NETWORK SERVICES
                            </span>

                        </div>


                        <h2
                            className="
                    mt-5
                    text-3xl
                    font-black
                    leading-[1.1]
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            Everything Your Network

                            <span className="text-[#e3292f]">
                                {" "}Needs
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
                            Professional networking solutions designed to keep your
                            business connected, protected and ready for growth.
                        </p>

                    </div>


                    {/* =================================================
            FEATURE CARDS
        ================================================= */}

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

                        {[
                            {
                                title: "Structured Network Infrastructure",
                                icon: Network,
                            },
                            {
                                title: "High-Speed Connectivity",
                                icon: Zap,
                            },
                            {
                                title: "Secure Network Environment",
                                icon: ShieldCheck,
                            },
                            {
                                title: "Reliable Network Performance",
                                icon: Signal,
                            },
                            {
                                title: "Scalable Network Solutions",
                                icon: Globe2,
                            },
                            {
                                title: "Professional Technical Support",
                                icon: Headphones,
                            }
                        ].map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    className="
                            group
                            relative
                            flex
                            min-h-[120px]
                            flex-col
                            items-center
                            justify-center
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
                            hover:bg-red-50/30
                            hover:shadow-[0_25px_55px_rgba(227,41,47,0.10)]
                            sm:min-h-[140px]
                            sm:p-6
                            lg:p-7
                        "
                                >

                                    {/* Hover Glow */}

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
                                opacity-0
                                blur-2xl
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                                    />


                                    {/* ICON */}

                                    <div
                                        className="
                                relative
                                z-10
                                flex
                                h-11
                                w-11
                                shrink-0
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
                                sm:h-13
                                sm:w-13
                            "
                                    >
                                        <Icon
                                            size={21}
                                            strokeWidth={1.7}
                                        />
                                    </div>


                                    {/* TITLE */}

                                    <h3
                                        className="
                                relative
                                z-10
                                mt-4
                                max-w-xs
                                text-[11px]
                                font-bold
                                leading-5
                                text-slate-900
                                sm:mt-5
                                sm:text-lg
                                sm:leading-6
                            "
                                    >
                                        {feature.title}
                                    </h3>


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
                        bg-red-100/50
                        blur-3xl
                    "
                />


                <div
                    data-aos="fade-up"
                    className="
                        relative
                        mx-auto
                        max-w-4xl
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-red-100
                        bg-white
                        px-5
                        py-14
                        text-center
                        shadow-[0_25px_70px_rgba(227,41,47,0.08)]
                        sm:px-8
                        sm:py-16
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


                    <div className="relative z-10">

                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-[#e3292f]
                            "
                        >
                            GET CONNECTED
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Ready To Build A Better

                            <span className="text-[#e3292f]">
                                {" "}Network?
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
                            Talk to our team and find the right networking
                            solution for your business requirements.
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