import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Gauge,
    Headphones,
    Network,
    Router,
    ShieldCheck,
    Wifi,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const broadbandFeatures = [
    {
        title: "High Speed Connectivity",
        description:
            "Reliable broadband connectivity designed for smooth browsing, communication and digital services.",
        icon: Gauge,
    },
    {
        title: "Reliable Network",
        description:
            "Stable connectivity supported by professional network infrastructure and monitoring.",
        icon: Network,
    },
    {
        title: "Flexible Solutions",
        description:
            "Connectivity options designed around different customer requirements and usage needs.",
        icon: Wifi,
    },
    {
        title: "Easy Connectivity",
        description:
            "Simple and dependable internet access for modern homes, professionals and organizations.",
        icon: Router,
    },
    {
        title: "Secure Infrastructure",
        description:
            "Professional network infrastructure focused on dependable and secure connectivity.",
        icon: ShieldCheck,
    },
    {
        title: "24/7 Support",
        description:
            "Proactive technical support to help keep your connectivity experience reliable.",
        icon: Headphones,
    },
];

const broadbandBenefits = [
    "High-speed internet connectivity",
    "Reliable and uninterrupted network",
    "Flexible connectivity solutions",
    "Professional technical support",
    "Scalable network infrastructure",
    "Designed for modern digital requirements",
];

export default function Broadband() {
    return (
        <div className="min-h-screen overflow-x-clip bg-white">

            {/* =====================================================
                HEADER
            ====================================================== */}
            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="
        relative
        overflow-hidden
        bg-red-100
        py-20
        sm:py-24
        lg:py-32
    "
            >

                {/* =================================================
        BACKGROUND GLOW
    ================================================== */}

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
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-white/80
            blur-[120px]
        "
                />


                {/* =================================================
        DECORATIVE RINGS
    ================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            right-[5%]
            top-[12%]
            hidden
            h-72
            w-72
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
            right-[9%]
            top-[20%]
            hidden
            h-48
            w-48
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
            bottom-[8%]
            left-[8%]
            hidden
            h-24
            w-24
            rounded-full
            bg-[#e3292f]/5
            blur-2xl
            lg:block
        "
                />


                {/* =================================================
        MAIN CONTAINER
    ================================================== */}

                <div
                    className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            sm:px-6
            lg:px-8
        "
                >

                    <div
                        className="
                grid
                items-center
                gap-12
                lg:grid-cols-[1fr_0.75fr]
                lg:gap-16
            "
                    >


                        {/* =================================================
                LEFT CONTENT
            ================================================= */}

                        <div
                            data-aos="fade-right"
                            data-aos-duration="900"
                            className="
                    mx-auto
                    w-full
                    max-w-3xl
                    text-center
                    lg:mx-0
                    lg:text-left
                "
                        >

                            {/* Label */}

                            <div
                                data-aos="fade-down"
                                data-aos-delay="100"
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

                                <Wifi
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
                                    ISP SERVICES
                                </span>

                            </div>


                            {/* Heading */}

                            <h1
                                data-aos="fade-up"
                                data-aos-delay="150"
                                className="
                        mt-6
                        text-4xl
                        font-black
                        leading-[1.05]
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                        lg:text-7xl
                    "
                            >
                                Fast. Reliable.

                                <span
                                    className="
                            block
                            text-[#e3292f]
                        "
                                >
                                    Always Connected.
                                </span>

                            </h1>


                            {/* Description */}

                            <p
                                data-aos="fade-up"
                                data-aos-delay="250"
                                className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-center
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        sm:leading-8
                        lg:mx-0
                        lg:text-left
                    "
                            >
                                High-performance broadband connectivity built to keep
                                you connected with reliable speed, professional
                                infrastructure and dependable support.
                            </p>


                            {/* Buttons */}

                            <div
                                data-aos="fade-up"
                                data-aos-delay="350"
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
                                    to="/quick-pay"
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
                                    Quick Pay
                                </Link>

                            </div>

                        </div>


                        {/* =================================================
                RIGHT PREMIUM CARD
            ================================================== */}

                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="
                    mx-auto
                    w-full
                    max-w-md
                "
                        >

                            <div
                                className="
                        group
                        relative
                        overflow-hidden
                        border
                        border-slate-200
                        bg-white
                        p-6
                        text-center
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-[#e3292f]/30
                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.14)]
                        sm:p-8
                        lg:text-left
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
                            bg-[#e3292f]/10
                            blur-3xl
                            transition-transform
                            duration-500
                            group-hover:scale-125
                        "
                                />


                                {/* Icon */}

                                <div
                                    className="
                            relative
                            z-10
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-[#e3292f]/15
                            bg-[#e3292f]/10
                            text-[#e3292f]
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-[#e3292f]
                            group-hover:text-white
                            lg:mx-0
                        "
                                >

                                    <Wifi
                                        size={30}
                                        strokeWidth={1.5}
                                    />

                                </div>


                                {/* Small Label */}

                                <p
                                    className="
                            relative
                            z-10
                            mt-7
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#e3292f]
                        "
                                >
                                    TEJAYS BROADBAND
                                </p>


                                {/* Card Heading */}

                                <h2
                                    className="
                            relative
                            z-10
                            mt-2
                            text-2xl
                            font-black
                            text-slate-900
                            sm:text-3xl
                        "
                                >
                                    Stay Connected.
                                </h2>


                                {/* Card Description */}

                                <p
                                    className="
                            relative
                            z-10
                            mx-auto
                            mt-4
                            max-w-md
                            text-sm
                            leading-7
                            text-slate-500
                            lg:mx-0
                        "
                                >
                                    Reliable broadband connectivity designed for
                                    smooth browsing, business communication and
                                    everyday digital needs.
                                </p>


                                {/* Connection Status */}

                                <div
                                    className="
                            relative
                            z-10
                            mx-auto
                            mt-7
                            flex
                            max-w-sm
                            items-center
                            gap-3
                            text-left
                            lg:mx-0
                        "
                                >

                                    <span
                                        className="
                                h-2.5
                                w-2.5
                                shrink-0
                                rounded-full
                                bg-[#e3292f]
                                shadow-[0_0_12px_rgba(227,41,47,0.5)]
                            "
                                    />

                                    <span
                                        className="
                                text-xs
                                font-semibold
                                text-slate-600
                            "
                                    >
                                        Network Ready
                                    </span>

                                    <span
                                        className="
                                ml-auto
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-[#e3292f]
                            "
                                    >
                                        Active
                                    </span>

                                </div>


                                {/* Divider */}

                                <div
                                    className="
                            relative
                            z-10
                            my-6
                            h-px
                            bg-slate-200
                        "
                                />


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
                                        ["Fast", "Speed"],
                                        ["Stable", "Network"],
                                        ["24/7", "Support"],
                                    ].map(([value, label]) => (

                                        <div
                                            key={label}
                                            className="
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-3
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[#e3292f]/30
                                    hover:bg-red-50
                                "
                                        >

                                            <p
                                                className="
                                        text-xs
                                        font-bold
                                        text-slate-900
                                        sm:text-sm
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
                                        text-slate-500
                                        sm:text-[9px]
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
                INTRODUCTION
            ====================================================== */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

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
                                duration-700
                                hover:-translate-y-2
                                hover:shadow-[0_35px_90px_rgba(15,23,42,0.18)]
                            "
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src="/Tejays/assets/broadband.jpg"
                                    alt="TEJAYS Broadband"
                                    className="
                                        h-[360px]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-[1200ms]
                                        group-hover:scale-110
                                        sm:h-[460px]
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-transparent" />

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

                                <div className="absolute bottom-5 left-5 border border-white/20 bg-black/30 px-4 py-3 backdrop-blur-md">

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                                        TEJAYS NETWORK
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-white">
                                        Broadband Connectivity
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

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                            Broadband
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
                            Experience better connectivity with TEJAYS.
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
                            Our broadband connectivity solutions are designed
                            around speed, reliability and flexibility to support
                            modern digital requirements.
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
                            Whether you need dependable internet for everyday
                            activities or connectivity for professional
                            requirements, TEJAYS provides network solutions
                            focused on performance and support.
                        </p>

                        {/* Benefits */}
                        <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 lg:mx-0">

                            {broadbandBenefits.map((item, index) => (
                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        border
                                        border-slate-200
                                        bg-white
                                        p-3
                                        text-left
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#e3292f]/40
                                        hover:shadow-md
                                    "
                                >
                                    <CheckCircle2
                                        size={17}
                                        className="
                                            shrink-0
                                            text-[#e3292f]
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />

                                    <span className="text-xs font-semibold leading-5 text-slate-700">
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
            <section className="relative overflow-hidden bg-red-50 py-20 sm:py-24 lg:py-28">

                {/* =================================================
        BACKGROUND DECORATION
    ================================================= */}
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


                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* =================================================
            HEADING
        ================================================= */}
                    <div
                        data-aos="fade-up"
                        className="mx-auto max-w-3xl text-center"
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
                            Why TEJAYS Broadband
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
                            Built for speed.
                            <span className="text-[#e3292f]">
                                {" "}Designed for reliability.
                            </span>
                        </h2>


                        <p
                            className="
                    mt-5
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                "
                        >
                            Connectivity solutions designed to provide a
                            dependable experience across different requirements.
                        </p>

                    </div>


                    {/* =================================================
            FEATURES CARDS
        ================================================= */}
                    <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">

                        {broadbandFeatures.map((feature, index) => {

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
                            duration-500
                            hover:-translate-y-2
                            hover:border-[#e3292f]/40
                            hover:bg-[#e3292f]
                            hover:shadow-[0_20px_45px_rgba(227,41,47,0.15)]
                            sm:p-6
                        "
                                >

                                    {/* =================================================
                            SOFT GLOW
                        ================================================= */}
                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -right-10
                                -top-10
                                h-24
                                w-24
                                rounded-full
                                bg-[#e3292f]/10
                                blur-2xl
                                transition-opacity
                                duration-500
                                group-hover:opacity-0
                            "
                                    />


                                    {/* =================================================
                            ICON
                        ================================================= */}
                                    <div
                                        className="
                                relative
                                mx-auto
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                border
                                border-[#e3292f]/20
                                bg-[#e3292f]/5
                                text-[#e3292f]
                                transition-all
                                duration-500
                                group-hover:scale-110
                                group-hover:border-white/30
                                group-hover:bg-white/10
                                group-hover:text-white
                                sm:h-14
                                sm:w-14
                            "
                                    >

                                        <Icon
                                            size={21}
                                            className="sm:h-6 sm:w-6"
                                        />

                                    </div>


                                    {/* =================================================
                            TITLE
                        ================================================= */}
                                    <h3
                                        className="
                                relative
                                mt-4
                                text-xs
                                font-bold
                                leading-5
                                text-slate-900
                                transition-colors
                                duration-300
                                group-hover:text-white
                                sm:text-base
                            "
                                    >
                                        {feature.title}
                                    </h3>


                                    {/* =================================================
                            DESCRIPTION
                        ================================================= */}
                                    <p
                                        className="
                                relative
                                mt-2
                                text-[10px]
                                leading-5
                                text-slate-500
                                transition-colors
                                duration-300
                                group-hover:text-white/80
                                sm:text-sm
                                sm:leading-6
                            "
                                    >
                                        {feature.description}
                                    </p>


                                    {/* =================================================
                            BOTTOM LINE
                        ================================================= */}
                                    <div
                                        className="
                                absolute
                                bottom-0
                                left-0
                                h-1
                                w-0
                                bg-[#e3292f]
                                transition-all
                                duration-500
                                group-hover:w-full
                                group-hover:bg-white
                            "
                                    />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                NETWORK VISUAL
            ====================================================== */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

                    {/* =====================================================
            CONTENT
        ====================================================== */}
                    <div
                        data-aos="fade-right"
                        className="text-center lg:text-left"
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                            Connected Infrastructure
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            A network designed to keep you moving.
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                            From access connectivity to network infrastructure,
                            TEJAYS focuses on delivering dependable solutions
                            that help customers stay connected.
                        </p>

                        {/* Features */}
                        <div className="mt-8 space-y-4">

                            {[
                                {
                                    title: "Performance",
                                    text: "Reliable connectivity for demanding digital requirements.",
                                },
                                {
                                    title: "Reliability",
                                    text: "Professional infrastructure designed around dependable service.",
                                },
                                {
                                    title: "Support",
                                    text: "Proactive assistance whenever you need network support.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
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

                                    {/* Icon */}
                                    <div
                                        className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                bg-[#e3292f]/10
                                text-[#e3292f]
                                transition-all
                                duration-300
                                group-hover:bg-[#e3292f]
                                group-hover:text-white
                            "
                                    >
                                        <Zap size={18} />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                                            {item.text}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =====================================================
            BROADBAND INFRASTRUCTURE IMAGE
        ====================================================== */}
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
                    bg-[#07111f]
                    shadow-[0_30px_80px_rgba(15,23,42,0.18)]
                "
                        >

                            {/* =================================================
                    IMAGE
                ================================================== */}
                            <img
                                src="/Tejays/assets/broadband-infrastructure.jpg"
                                alt="Broadband Infrastructure"
                                className="
                        h-[400px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        sm:h-[470px]
                        lg:h-[520px]
                    "
                            />


                            {/* =================================================
                    DARK GRADIENT OVERLAY
                ================================================== */}
                            <div
                                className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#07111f]
                        via-[#07111f]/35
                        to-transparent
                    "
                            />


                            {/* =================================================
                    RED GLOW
                ================================================== */}
                            <div
                                className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-72
                        w-72
                        rounded-full
                        bg-[#e3292f]/20
                        blur-3xl
                    "
                            />


                            {/* =================================================
                    TOP RIGHT STATUS
                ================================================== */}
                            <div
                                className="
                        absolute
                        right-5
                        top-5
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-[#07111f]/60
                        px-4
                        py-2
                        backdrop-blur-md
                        sm:right-6
                        sm:top-6
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
                            text-white/80
                            sm:text-[10px]
                        "
                                >
                                    High Speed Network
                                </span>

                            </div>


                            {/* =================================================
                    BOTTOM CONTENT
                ================================================== */}
                            <div
                                className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                        sm:p-8
                    "
                            >

                                {/* Small Label */}
                                <div className="mb-4 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#e3292f]" />

                                    <span
                                        className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-white/80
                                sm:text-xs
                            "
                                    >
                                        Connected Infrastructure
                                    </span>

                                </div>


                                {/* Main Title */}
                                <h3
                                    className="
                            text-2xl
                            font-bold
                            leading-tight
                            text-white
                            sm:text-3xl
                        "
                                >
                                    Broadband Infrastructure
                                </h3>


                                {/* Subtitle */}
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
                                    Fast
                                    <span className="mx-2 text-[#e3292f]">•</span>
                                    Reliable
                                    <span className="mx-2 text-[#e3292f]">•</span>
                                    Connected
                                </p>

                            </div>


                            {/* =================================================
                    HOVER BORDER
                ================================================== */}
                            <div
                                className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-3xl
                        border
                        border-transparent
                        transition-all
                        duration-500
                        group-hover:border-[#e3292f]/30
                    "
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#e3292f] py-16 sm:py-20">

                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-white/10" />

                <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[35px] border-white/10" />

                <div
                    data-aos="fade-up"
                    className="
                        relative
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        items-center
                        justify-between
                        gap-7
                        px-5
                        text-center
                        sm:px-6
                        lg:flex-row
                        lg:px-8
                        lg:text-left
                    "
                >

                    <div>

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                            Let's Connect
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            Ready for better broadband?
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                            Talk to our team about reliable broadband connectivity
                            and solutions designed around your requirements.
                        </p>

                    </div>

                    <Link
                        to="/contact-us"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
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
                            className="transition-transform duration-300 group-hover:translate-x-1"
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