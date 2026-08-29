import React from "react";
import {
    ArrowRight,
    CheckCircle2,
    MonitorPlay,
    Network,
    ShieldCheck,
    Signal,
    Sparkles,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ottFeatures = [
    {
        title: "Reliable Delivery",
        text: "Stable connectivity designed to support consistent OTT content delivery.",
        icon: Signal,
    },
    {
        title: "Smooth Streaming",
        text: "Network performance designed for a better streaming experience.",
        icon: MonitorPlay,
    },
    {
        title: "Secure Connectivity",
        text: "Professional network infrastructure built with secure communication in mind.",
        icon: ShieldCheck,
    },
    {
        title: "Scalable Infrastructure",
        text: "Flexible connectivity designed to support changing business and traffic requirements.",
        icon: Network,
    },
];

const OTT = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <Header />

            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="
        relative
        overflow-hidden
        bg-red-100
        py-24
        sm:py-28
        lg:py-32
    "
            >
                {/* Background Glow */}

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
            bg-white
            blur-[100px]
        "
                />

                {/* Decorative Rings */}

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
            right-[10%]
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

                {/* Content */}

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
                lg:grid-cols-[1fr_0.8fr]
                lg:gap-16
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
                    w-full
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

                                <MonitorPlay
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
                                    TEJAYS SERVICES
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
                        leading-[1.05]
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                        lg:text-7xl
                    "
                            >
                                Better

                                <span
                                    className="
                            block
                            text-[#e3292f]
                        "
                                >
                                    OTT Connectivity.
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
                                Professional connectivity and network solutions
                                designed for reliable, secure and high-performance
                                business communication.
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
            ================================================== */}

                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="
                    mx-auto
                    flex
                    w-full
                    max-w-md
                    justify-center
                    lg:justify-end
                "
                        >

                            <div
                                className="
                        group
                        relative
                        w-full
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
                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.12)]
                        sm:p-8
                        lg:text-left
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
                            group-hover:bg-[#e3292f]
                            group-hover:text-white
                            lg:mx-0
                        "
                                >
                                    <MonitorPlay
                                        size={30}
                                        strokeWidth={1.5}
                                    />
                                </div>


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
                                    TEJAYS OTT
                                </p>


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
                                    Stream.
                                    <span className="text-[#e3292f]">
                                        {" "}Connect.
                                    </span>
                                </h2>


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
                                    Connectivity designed to support
                                    reliable OTT delivery and smooth
                                    digital content experiences.
                                </p>


                                {/* Connection Visual */}

                                <div
                                    className="
                            relative
                            z-10
                            mx-auto
                            mt-7
                            flex
                            max-w-xs
                            items-center
                            gap-2
                            lg:mx-0
                        "
                                >

                                    <div className="h-2 w-2 rounded-full bg-[#e3292f]" />

                                    <div
                                        className="
                                h-px
                                flex-1
                                bg-gradient-to-r
                                from-[#e3292f]
                                to-slate-200
                            "
                                    />

                                    <div className="h-3 w-3 rounded-full border-2 border-[#e3292f] bg-white" />

                                </div>


                                {/* Stats */}

                                <div
                                    className="
                            relative
                            z-10
                            mx-auto
                            mt-7
                            grid
                            max-w-sm
                            grid-cols-3
                            gap-2
                            lg:mx-0
                        "
                                >

                                    {[
                                        ["Stable", "Delivery"],
                                        ["Smooth", "Streaming"],
                                        ["Secure", "Network"],
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
                        max-w-7xl
                        px-5
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div
                        className="
                            mx-auto
                            max-w-6xl
                            text-center
                        "
                    >

                        <p
                            data-aos="fade-up"
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            OTT Connectivity
                        </p>


                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="
                                mt-4
                                text-3xl
                                font-black
                                leading-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Connectivity built for

                            <span className="block text-[#e3292f]">
                                modern digital experiences.
                            </span>
                        </h2>


                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="
                                mx-auto
                                mt-6
                                max-w-3xl
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            TEJAYS OTT connectivity is designed to support
                            organizations that depend on reliable network
                            performance for digital content, streaming and
                            connected applications.
                        </p>

                    </div>


                    {/* Feature Cards */}

                    <div
                        className="
        mt-12
        grid
        grid-cols-2
        gap-3

        sm:mt-14
        sm:gap-5

        lg:grid-cols-4
    "
                    >
                        {ottFeatures.map((feature, index) => {

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
                    hover:border-[#e3292f]/30
                    hover:shadow-[0_20px_50px_rgba(227,41,47,0.10)]

                    sm:p-6

                    lg:text-left
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

                        blur-2xl

                        transition-transform
                        duration-500

                        group-hover:scale-150
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

                        bg-[#e3292f]/10
                        text-[#e3292f]

                        transition-all
                        duration-300

                        group-hover:bg-[#e3292f]
                        group-hover:text-white

                        sm:h-12
                        sm:w-12

                        lg:mx-0
                    "
                                    >
                                        <Icon size={21} />
                                    </div>


                                    {/* Title */}

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
                        sm:leading-6
                    "
                                    >
                                        {feature.title}
                                    </h3>


                                    {/* Description */}

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
                                        {feature.text}
                                    </p>


                                    {/* Bottom Accent */}

                                    <div
                                        className="
                        absolute
                        bottom-0
                        left-1/2

                        h-[2px]
                        w-0

                        -translate-x-1/2

                        bg-[#e3292f]

                        transition-all
                        duration-500

                        group-hover:w-full

                        lg:left-0
                        lg:translate-x-0
                    "
                                    />

                                </div>
                            );
                        })}
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
                            lg:grid-cols-2
                            lg:gap-20
                        "
                    >

                        {/* Left */}

                        <div
                            data-aos="fade-right"
                            className="
                                text-center
                                lg:text-left
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
                                Why TEJAYS OTT
                            </p>


                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    font-black
                                    leading-tight
                                    text-slate-900
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Designed around

                                <span className="block text-[#e3292f]">
                                    reliable performance.
                                </span>
                            </h2>


                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                    sm:leading-8
                                    lg:mx-0
                                "
                            >
                                A dependable connectivity foundation helps
                                organizations deliver better digital
                                experiences while maintaining network
                                visibility and performance.
                            </p>

                        </div>


                        {/* Right */}

                        <div
                            data-aos="fade-left"
                            className="
        grid
        grid-cols-2
        gap-3
        sm:gap-4
    "
                        >
                            {[
                                "Reliable network connectivity",
                                "Consistent streaming performance",
                                "Secure communication infrastructure",
                                "Scalable network architecture",
                                "Professional technical support",
                                "Business-ready connectivity",
                            ].map((item, index) => (

                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 60}
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
                hover:border-[#e3292f]/30
                hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]

                sm:gap-3
                sm:p-4
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

                    sm:h-[18px]
                    sm:w-[18px]
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

                                </div>

                            ))}
                        </div>

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
                        left-1/2
                        top-1/2
                        h-[450px]
                        w-[450px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#e3292f]/5
                        blur-[100px]
                    "
                />

                <div
                    data-aos="fade-up"
                    className="
                        relative
                        z-10
                        mx-auto
                        max-w-5xl
                        px-5
                        text-center
                        sm:px-6
                    "
                >

                    <div
                        className="
                            mx-auto
                            max-w-4xl
                            border
                            border-slate-200
                            bg-white
                            p-8
                            shadow-[0_20px_60px_rgba(15,23,42,0.07)]
                            sm:p-12
                            lg:p-16
                        "
                    >

                        <div
                            className="
                                mx-auto
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#e3292f]/10
                                text-[#e3292f]
                            "
                        >
                            <Sparkles size={25} />
                        </div>


                        <p
                            className="
                                mt-6
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#e3292f]
                            "
                        >
                            Connect With TEJAYS
                        </p>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-black
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Ready for a better

                            <span className="block text-[#e3292f]">
                                OTT experience?
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
                                sm:leading-8
                            "
                        >
                            Talk to the TEJAYS team about your connectivity
                            requirements and explore the right OTT solution
                            for your organization.
                        </p>


                        <div className="mt-8">

                            <Link
                                to="/contact-us"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    bg-[#e3292f]
                                    px-8
                                    py-4
                                    text-sm
                                    font-bold
                                    text-white
                                    shadow-[0_15px_35px_rgba(227,41,47,0.20)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:bg-[#c91f25]
                                    hover:shadow-[0_20px_45px_rgba(227,41,47,0.30)]
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

                </div>

            </section>


            <Footer />

        </div>
    );
};

export default OTT;