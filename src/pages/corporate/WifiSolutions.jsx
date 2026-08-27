import {
    ArrowRight,
    CheckCircle2,
    Gauge,
    Globe2,
    Network,
    Router,
    Server,
    ShieldCheck,
    Signal,
    UsersRound,
    Wifi,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


/* =====================================================
   BENEFITS
===================================================== */

const benefits = [
    {
        icon: Gauge,
        title: "High-Speed WiFi",
        description:
            "Fast and reliable wireless connectivity designed for smooth business operations and everyday productivity.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Wireless Network",
        description:
            "Secure WiFi infrastructure designed to protect business devices, users and network communication.",
    },
    {
        icon: Wifi,
        title: "Wide Coverage",
        description:
            "Reliable wireless coverage designed to provide consistent connectivity across your business environment.",
    },
    {
        icon: Signal,
        title: "Stable Performance",
        description:
            "Consistent WiFi performance with dependable connectivity for users, devices and business applications.",
    },
    {
        icon: Router,
        title: "Enterprise Ready",
        description:
            "Scalable wireless solutions suitable for offices, enterprises and growing organizations.",
    },
    {
        icon: Zap,
        title: "Easy Deployment",
        description:
            "Professional WiFi setup and deployment designed for quick and efficient business connectivity.",
    },
];


/* =====================================================
   FEATURES
===================================================== */

const features = [
    "High-speed business WiFi",
    "Reliable wireless coverage",
    "Secure WiFi infrastructure",
    "Enterprise-grade access points",
    "Scalable wireless network",
    "Professional technical support",
];


export default function WifiSolutions() {
    return (
        <>
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
                                WiFi

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
                                Professional WiFi solutions designed for
                                reliable, secure and high-performance wireless
                                connectivity across your business environment.
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
                                        shadow-[0_12px_30px_rgba(227,41,47,0.20)]
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


                                <Link
                                    to="/contact-us"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-6
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-red-200
                                        hover:bg-red-50
                                        hover:text-[#e3292f]
                                    "
                                >
                                    Talk To Our Team
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
                                            WiFi Ready
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
                                        <Wifi size={20} />
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
                                        Smart wireless infrastructure designed
                                        to provide fast connectivity, reliable
                                        coverage and secure network access.
                                    </p>

                                </div>


                                {/* WiFi Visual */}

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
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
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
                                        <Wifi size={23} />

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
                                        ["Fast", "Connectivity"],
                                        ["Wide", "Coverage"],
                                        ["Secure", "Access"],
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

                        <div data-aos="fade-right"
                        className="text-center lg:text-left">

                            <div
                                className="
        mx-auto
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
        lg:mx-0
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
                                    WHY CHOOSE US
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
                                Wireless Connectivity
                                <span className="text-[#e3292f]">
                                    {" "}Built For Business
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
                                Get dependable WiFi infrastructure designed
                                for high-performance connectivity, secure
                                communication and seamless business operations.
                            </p>


                            {/* Benefits */}

                            <div
                                data-aos="fade-up"
                                className="
                                    mt-9
                                    grid
                                    grid-cols-2
                                    gap-3
                                    sm:gap-4
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
                                                {item.title}
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
                                                WIRELESS NETWORK
                                            </p>

                                            <h3
                                                className="
                                                    mt-2
                                                    text-2xl
                                                    font-bold
                                                    text-slate-900
                                                "
                                            >
                                                WiFi Infrastructure
                                            </h3>

                                        </div>

                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-red-50
                                                text-[#e3292f]
                                            "
                                        >
                                            <Wifi size={22} />
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
                                            <Wifi size={15} />
                                        </div>

                                    </div>


                                    {/* Info Cards */}

                                    <div className="mt-10 grid grid-cols-2 gap-4">

                                        {/* CONSISTENT */}
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
                                                Consistent
                                            </p>

                                            <p
                                                className="
                mt-1
                text-xs
                leading-5
                text-slate-500
            "
                                            >
                                                Stable wireless connectivity
                                                for everyday operations.
                                            </p>

                                        </div>


                                        {/* PROTECTED */}
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
                                                Secure wireless infrastructure
                                                for business environments.
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
                CTA
            ====================================================== */}

            <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24">

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
                        bg-red-100
                        blur-3xl
                    "
                />

                <div
                    data-aos="fade-up"
                    className="
                        relative
                        mx-auto
                        max-w-5xl
                        px-5
                        sm:px-8
                    "
                >

                    <div
                        className="
                            rounded-[2rem]
                            border
                            border-red-100
                            bg-white
                            px-6
                            py-12
                            text-center
                            shadow-[0_25px_70px_rgba(227,41,47,0.08)]
                            sm:px-10
                            sm:py-14
                        "
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
                            Ready To Upgrade Your

                            <span className="text-[#e3292f]">
                                {" "}Business WiFi?
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
                            Talk to our team and find the right WiFi solution
                            for your business requirements.
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