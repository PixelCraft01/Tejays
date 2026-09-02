import {
    ArrowRight,
    CheckCircle2,
    MonitorPlay,
    Network,
    PlayCircle,
    ShieldCheck,
    Tv,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";


/* =========================================================
   IPTV PAGE
========================================================= */

export default function IPTV() {

    const features = [
        {
            icon: PlayCircle,
            title: "Reliable Streaming",
            text: "Smooth and dependable IPTV delivery for consistent viewing experiences.",
        },
        {
            icon: Network,
            title: "Network Optimized",
            text: "Designed to work efficiently across modern business network infrastructure.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Delivery",
            text: "Reliable content delivery with a focus on secure network communication.",
        },
        {
            icon: Zap,
            title: "High Performance",
            text: "Optimized connectivity helps maintain stable performance across connected devices.",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <main>

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
                        lg:py-36
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
                            bg-slate-200/70
                            blur-[120px]
                        "
                    />


                    {/* Decorative Rings */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[8%]
                            top-[15%]
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
                            right-[13%]
                            top-[22%]
                            hidden
                            h-48
                            w-48
                            rounded-full
                            border
                            border-[#e3292f]/10
                            lg:block
                        "
                    />


                    {/* Hero Content */}

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
                                lg:gap-16
                            "
                        >

                            {/* Left Content */}

                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
                                className="text-center lg:text-left"
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

                                    <Tv
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
                                    <span className="block text-[#e3292f]">
                                        IPTV Experience.
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
                                    Professional IPTV connectivity designed
                                    for reliable content delivery, smooth
                                    streaming and high-performance network
                                    communication.
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


                            {/* Right Visual */}

                            <div
                                data-aos="fade-left"
                                data-aos-duration="900"
                                className="
                                    relative
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
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-6
                                        shadow-[0_30px_80px_rgba(15,23,42,0.10)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-[#e3292f]/30
                                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.14)]
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
                                            h-64
                                            w-64
                                            rounded-full
                                            bg-[#e3292f]/10
                                            blur-3xl
                                            transition-transform
                                            duration-700
                                            group-hover:scale-125
                                        "
                                    />


                                    {/* Main Icon */}

                                    <div
                                        className="
                                            relative
                                            z-10
                                            mx-auto
                                            flex
                                            h-20
                                            w-20
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[#e3292f]
                                            text-white
                                            shadow-[0_15px_35px_rgba(227,41,47,0.25)]
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    >
                                        <MonitorPlay
                                            size={38}
                                            strokeWidth={1.6}
                                        />
                                    </div>


                                    <div className="relative z-10 mt-7 text-center">

                                        <h2
                                            className="
                                                text-2xl
                                                font-black
                                                text-slate-900
                                                sm:text-3xl
                                            "
                                        >
                                            IPTV Connectivity
                                        </h2>

                                        <p
                                            className="
                                                mx-auto
                                                mt-3
                                                max-w-md
                                                text-sm
                                                leading-7
                                                text-slate-500
                                            "
                                        >
                                            Connected entertainment and
                                            content delivery powered by
                                            dependable network infrastructure.
                                        </p>

                                    </div>


                                    {/* Mini Features */}

                                    <div
                                        className="
                                            relative
                                            z-10
                                            mt-8
                                            grid
                                            grid-cols-2
                                            gap-3
                                        "
                                    >

                                        {[
                                            ["Smooth", "Streaming"],
                                            ["Reliable", "Delivery"],
                                            ["Secure", "Network"],
                                            ["High", "Performance"],
                                        ].map(([value, label]) => (

                                            <div
                                                key={label}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-slate-200
                                                    bg-slate-50
                                                    p-4
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
                                                        text-sm
                                                        font-bold
                                                        text-slate-900
                                                    "
                                                >
                                                    {value}
                                                </p>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-[10px]
                                                        font-medium
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
                                            h-1
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
                            right-0
                            top-20
                            h-80
                            w-80
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
                            max-w-7xl
                            px-5
                            sm:px-6
                            lg:px-8
                        "
                    >

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
                                IPTV SERVICES
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
                                Entertainment powered by
                                <span className="block text-[#e3292f]">
                                    dependable connectivity.
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
                                TEJAYS IPTV solutions are designed to provide
                                reliable content delivery over modern network
                                infrastructure, helping maintain a smooth and
                                consistent viewing experience.
                            </p>

                        </div>


                        {/* Feature Cards */}

                        <div
                            className="
                                mt-12
                                grid
                                grid-cols-2
                                gap-4
                                lg:grid-cols-4
                                lg:gap-6
                            "
                        >

                            {features.map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 80}
                                        className="
                                            group
                                            border
                                            border-slate-200
                                            bg-white
                                            p-5
                                            text-center
                                            shadow-sm
                                            transition-all
                                            duration-500
                                            hover:-translate-y-2
                                            hover:border-[#e3292f]/30
                                            hover:shadow-[0_20px_45px_rgba(227,41,47,0.10)]
                                            sm:p-6
                                        "
                                    >

                                        <div
                                            className="
                                                mx-auto
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-red-50
                                                text-[#e3292f]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#e3292f]
                                                group-hover:text-white
                                                group-hover:scale-105
                                            "
                                        >
                                            <Icon size={22} />
                                        </div>


                                        <h3
                                            className="
                                                mt-5
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
                                                mt-2
                                                text-xs
                                                leading-6
                                                text-slate-500
                                                sm:text-sm
                                            "
                                        >
                                            {item.text}
                                        </p>

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
        bg-slate-100
        py-20
        sm:py-24
        lg:py-28
    "
                >

                    {/* =================================================
        BACKGROUND EFFECTS
    ================================================== */}

                    <div
                        className="
            pointer-events-none
            absolute
            -left-40
            top-1/2
            h-96
            w-96
            -translate-y-1/2
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
            top-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-white
            blur-[100px]
        "
                    />

                    {/* Decorative Grid */}

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
                                    "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
                                backgroundSize: "70px 70px",
                            }}
                        />
                    </div>


                    {/* Decorative Rings */}

                    <div
                        className="
            pointer-events-none
            absolute
            -right-24
            top-1/2
            hidden
            h-96
            w-96
            -translate-y-1/2
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
            -right-8
            top-1/2
            hidden
            h-64
            w-64
            -translate-y-1/2
            rounded-full
            border
            border-[#e3292f]/10
            lg:block
        "
                    />


                    {/* =================================================
        CONTENT
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
                            data-aos="fade-up"
                            data-aos-duration="900"
                            className="
                grid
                items-center
                gap-10
                lg:grid-cols-[1fr_380px]
                lg:gap-16
            "
                        >

                            {/* =================================================
                LEFT CONTENT
            ================================================= */}

                            <div
                                className="
                    max-w-3xl
                    text-center
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

                                    <span
                                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-[#e3292f]
                            shadow-[0_0_12px_rgba(227,41,47,0.35)]
                        "
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
                                        Connect With TEJAYS
                                    </span>

                                </div>


                                {/* Heading */}

                                <h2
                                    className="
                        mt-6
                        text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-slate-900
                        sm:text-4xl
                        lg:text-6xl
                    "
                                >
                                    Ready for a better

                                    <span
                                        className="
                            block
                            text-[#e3292f]
                        "
                                    >
                                        IPTV experience?
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
                        text-slate-600
                        sm:text-base
                        sm:leading-8
                        lg:mx-0
                    "
                                >
                                    Talk to the TEJAYS team about your connectivity
                                    requirements and explore the right IPTV solution
                                    for your organization.
                                </p>


                                {/* Button */}

                                <div
                                    className="
                        mt-8
                        flex
                        justify-center
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
                            hover:shadow-[0_20px_50px_rgba(227,41,47,0.30)]
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
                RIGHT FEATURE CARD
            ================================================== */}

                            <div
                                className="
                    mx-auto
                    w-full
                    max-w-sm
                    lg:max-w-none
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
                        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-[#e3292f]/30
                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.12)]
                        sm:p-7
                    "
                                >

                                    {/* Card Glow */}

                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-48
                            w-48
                            rounded-full
                            bg-[#e3292f]/10
                            blur-3xl
                            transition-transform
                            duration-500
                            group-hover:scale-125
                        "
                                    />


                                    {/* Top */}

                                    <div
                                        className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-between
                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#e3292f]
                                "
                                            >
                                                TEJAYS IPTV
                                            </p>

                                            <h3
                                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    text-slate-900
                                "
                                            >
                                                Connected.
                                            </h3>

                                        </div>


                                        <div
                                            className="
                                flex
                                h-12
                                w-12
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
                            "
                                        >

                                            <Zap size={21} />

                                        </div>

                                    </div>


                                    {/* Divider */}

                                    <div
                                        className="
                            relative
                            z-10
                            my-6
                            h-px
                            w-full
                            bg-slate-200
                        "
                                    />


                                    {/* Features */}

                                    <div
                                        className="
                            relative
                            z-10
                            space-y-3
                        "
                                    >

                                        {[
                                            ["Stable", "Connection"],
                                            ["Smooth", "Streaming"],
                                            ["Reliable", "Network"],
                                        ].map(([value, label]) => (

                                            <div
                                                key={label}
                                                className="
                                    flex
                                    items-center
                                    justify-between
                                    border
                                    border-slate-100
                                    bg-slate-50
                                    px-4
                                    py-3
                                    transition-all
                                    duration-300
                                    hover:border-[#e3292f]/20
                                    hover:bg-red-50/50
                                "
                                            >

                                                <div className="flex items-center gap-3">

                                                    <div
                                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-[#e3292f]
                                        "
                                                    />

                                                    <span
                                                        className="
                                            text-xs
                                            font-semibold
                                            text-slate-700
                                        "
                                                    >
                                                        {label}
                                                    </span>

                                                </div>

                                                <span
                                                    className="
                                        text-xs
                                        font-bold
                                        text-slate-900
                                    "
                                                >
                                                    {value}
                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    {/* Bottom Message */}

                                    <div
                                        className="
                            relative
                            z-10
                            mt-6
                            border-t
                            border-slate-100
                            pt-5
                        "
                                    >

                                        <p
                                            className="
                                text-center
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                            "
                                        >
                                            Reliable • Smooth • Connected
                                        </p>

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

            </main>


            {/* =====================================================
                FOOTER
            ====================================================== */}

            <Footer />

        </div>
    );
}