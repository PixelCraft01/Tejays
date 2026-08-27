import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Network,
    Route,
    ShieldCheck,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


/* =========================================================
   PEERING BENEFITS
========================================================= */

const peeringBenefits = [
    {
        icon: Network,
        title: "Direct Network Connectivity",
        text: "Efficient connectivity between participating networks with fewer unnecessary routing paths.",
    },
    {
        icon: Zap,
        title: "Improved Network Performance",
        text: "Direct traffic exchange can help improve routing efficiency and overall network performance.",
    },
    {
        icon: Globe2,
        title: "Better Internet Reach",
        text: "Connect with multiple networks and improve access to important destinations and services.",
    },
    {
        icon: Route,
        title: "Optimized Routing",
        text: "Efficient traffic paths designed to support reliable and predictable network communication.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable Infrastructure",
        text: "Professional network infrastructure designed for dependable connectivity requirements.",
    },
    {
        icon: CheckCircle2,
        title: "Business Ready",
        text: "Connectivity solutions designed around the performance needs of modern organizations.",
    },
];


/* =========================================================
   PAGE
========================================================= */

export default function Peering() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <Header />

            <main>

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
            right-[5%]
            top-[10%]
            hidden
            h-80
            w-80
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
            top-[18%]
            hidden
            h-56
            w-56
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
            left-[8%]
            bottom-[10%]
            hidden
            h-24
            w-24
            rounded-full
            bg-[#e3292f]/5
            blur-2xl
            lg:block
        "
                    />


                    {/* =====================================================
        HERO CONTAINER
    ====================================================== */}

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
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-14
                xl:gap-20
            "
                        >


                            {/* =================================================
                LEFT CONTENT
            ================================================= */}

                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
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
                        leading-[1.08]
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                        lg:text-6xl
                        xl:text-7xl
                    "
                                >
                                    Smarter

                                    <span className="block text-[#e3292f]">
                                        Peering.
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

                                    {/* Primary */}

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


                                    {/* Secondary */}

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
                RIGHT IMAGE
            ================================================= */}

                            <div
                                data-aos="fade-left"
                                data-aos-duration="900"
                                data-aos-delay="150"
                                className="
                    relative
                    mx-auto
                    w-full
                    max-w-xl
                "
                            >

                                {/* Image Glow */}

                                <div
                                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-72
                        w-72
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#e3292f]/10
                        blur-[80px]
                    "
                                />


                                {/* Image Wrapper */}

                                <div
                                    className="
                        group
                        relative
                        overflow-hidden
                        border
                        border-white/80
                        bg-white
                        p-2
                        shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.16)]
                    "
                                >

                                    <img
                                        src="/assets/peering1.jpg"
                                        alt="TEJAYS network peering connectivity"
                                        className="
                            relative
                            z-10
                            h-[280px]
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                            sm:h-[350px]
                            lg:h-[420px]
                        "
                                    />


                                    {/* Image Overlay */}

                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-20
                            bg-gradient-to-tr
                            from-[#e3292f]/10
                            via-transparent
                            to-white/10
                            opacity-70
                        "
                                    />


                                    {/* Bottom Badge */}

                                    <div
                                        className="
                            absolute
                            bottom-5
                            left-5
                            z-30
                            flex
                            items-center
                            gap-3
                            border
                            border-white/60
                            bg-white/95
                            px-4
                            py-3
                            shadow-xl
                            backdrop-blur
                            transition-all
                            duration-300
                            group-hover:-translate-y-1
                            sm:bottom-7
                            sm:left-7
                        "
                                    >

                                        <div
                                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                bg-[#e3292f]
                                text-white
                            "
                                        >
                                            <Network size={17} />
                                        </div>

                                        <div>

                                            <p
                                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-[#e3292f]
                                "
                                            >
                                                Network
                                            </p>

                                            <p
                                                className="
                                    text-xs
                                    font-bold
                                    text-slate-900
                                    sm:text-sm
                                "
                                            >
                                                Peering Connectivity
                                            </p>

                                        </div>

                                    </div>


                                    {/* Bottom Hover Line */}

                                    <div
                                        className="
                            absolute
                            bottom-0
                            left-0
                            z-30
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
                    INTRODUCTION — PREMIUM NETWORK PEERING
                ====================================================== */}

                <section
                    className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
    "
                >
                    {/* =================================================
        BACKGROUND GLOW
    ================================================== */}

                    <div
                        className="
            pointer-events-none
            absolute
            -right-48
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#e3292f]/[0.035]
            blur-[120px]
        "
                    />

                    <div
                        className="
            pointer-events-none
            absolute
            -left-48
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[120px]
        "
                    />

                    {/* =================================================
        SUBTLE GRID
    ================================================== */}

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
                                backgroundImage: `
                    linear-gradient(
                        rgba(15,23,42,0.25) 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        rgba(15,23,42,0.25) 1px,
                        transparent 1px
                    )
                `,
                                backgroundSize: "65px 65px",
                            }}
                        />
                    </div>


                    {/* =================================================
        MAIN CONTAINER
    ================================================== */}

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

                        <div
                            className="
                mx-auto
                grid
                max-w-6xl
                items-center
                gap-10

                lg:grid-cols-2
                lg:gap-16
                xl:gap-20
            "
                        >

                            {/* =================================================
                LEFT — CONTENT
            ================================================= */}

                            <div
                                data-aos="fade-right"
                                className="text-left"
                            >

                                {/* Label */}

                                <div
                                    className="
        flex
        items-center
        justify-center
        gap-3

        lg:justify-start
    "
                                >
                                    <span
                                        className="
            h-px
            w-8
            bg-[#e3292f]

            sm:w-10
        "
                                    />

                                    <p
                                        className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#e3292f]

            sm:text-xs
        "
                                    >
                                        Network Peering
                                    </p>

                                    <span
                                        className="
            h-px
            w-8
            bg-[#e3292f]

            sm:w-10
        "
                                    />
                                </div>


                                {/* Heading */}

                                <h2
                                    className="
        mt-5
        max-w-xl

        mx-auto
        text-center

        text-3xl
        font-extrabold
        leading-[1.12]
        tracking-tight
        text-slate-900

        sm:text-4xl

        lg:mx-0
        lg:text-left
        lg:text-[46px]
    "
                                >
                                    Efficient connectivity.

                                    <span
                                        className="
            block
            text-[#e3292f]
        "
                                    >
                                        Better network reach.
                                    </span>
                                </h2>


                                {/* Description */}

                                <p
                                    className="
        mt-6
        max-w-xl

        mx-auto
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
                                    TEJAYS Peering solutions help networks exchange
                                    traffic efficiently, supporting better routing,
                                    improved reachability and dependable network
                                    communication.
                                </p>


                                {/* Description 2 */}

                                <p
                                    className="
        mt-4
        max-w-xl

        mx-auto
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
                                    Designed for organizations that require efficient
                                    network connectivity and reliable access to important
                                    destinations and services.
                                </p>


                                {/* =================================================
                    BENEFITS
                ================================================== */}

                                <div
    className="
        mx-auto
        mt-7
        grid
        max-w-xl
        grid-cols-2
        gap-3

        sm:mt-8
        sm:gap-4
    "
>
    {[
        "Efficient Routing",
        "Better Reachability",
        "Reliable Connectivity",
        "Network Performance",
    ].map((item, index) => (

        <div
            key={item}
            data-aos="fade-up"
            data-aos-delay={index * 70}
            className="
                group

                flex
                min-h-[58px]
                items-center
                gap-2.5

                border
                border-slate-200
                bg-white

                px-3
                py-3

                text-left

                shadow-[0_8px_25px_rgba(15,23,42,0.035)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#e3292f]/35
                hover:bg-[#e3292f]/[0.025]
                hover:shadow-[0_15px_35px_rgba(227,41,47,0.08)]

                sm:min-h-[64px]
                sm:px-4
            "
        >

            <CheckCircle2
                size={17}
                strokeWidth={2}
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

                    sm:text-xs
                    sm:leading-5
                "
            >
                {item}
            </span>

        </div>

    ))}
</div>
                            </div>


                            {/* =================================================
                RIGHT — NETWORK VISUAL
            ================================================== */}

                            <div
                                data-aos="fade-left"
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

                        rounded-2xl

                        border
                        border-slate-200

                        bg-slate-50

                        p-5

                        shadow-[0_25px_70px_rgba(15,23,42,0.07)]

                        transition-all
                        duration-500

                        hover:-translate-y-2

                        hover:border-[#e3292f]/25

                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.10)]

                        sm:rounded-3xl
                        sm:p-8
                    "
                                >

                                    {/* Glow */}

                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-24

                            h-72
                            w-72

                            rounded-full

                            bg-[#e3292f]/[0.06]

                            blur-3xl

                            transition-transform
                            duration-700

                            group-hover:scale-125
                        "
                                    />


                                    {/* Top Accent */}

                                    <div
                                        className="
                            absolute
                            left-0
                            top-0

                            h-[3px]
                            w-24

                            bg-[#e3292f]

                            transition-all
                            duration-500

                            group-hover:w-40
                        "
                                    />


                                    {/* Icon */}

                                    <div
                                        className="
                            relative
                            z-10

                            mx-auto

                            flex
                            h-14
                            w-14

                            items-center
                            justify-center

                            rounded-2xl

                            border
                            border-[#e3292f]/20

                            bg-white

                            text-[#e3292f]

                            shadow-[0_10px_30px_rgba(15,23,42,0.06)]

                            transition-all
                            duration-500

                            group-hover:scale-110
                            group-hover:bg-[#e3292f]
                            group-hover:text-white
                            group-hover:shadow-[0_15px_35px_rgba(227,41,47,0.20)]

                            sm:h-16
                            sm:w-16
                        "
                                    >
                                        <Globe2
                                            size={27}
                                            strokeWidth={1.5}
                                            className="sm:h-[30px] sm:w-[30px]"
                                        />
                                    </div>


                                    {/* Heading */}

                                    <h3
                                        className="
                            relative
                            z-10

                            mt-6

                            text-center

                            text-xl
                            font-extrabold
                            leading-tight
                            tracking-tight
                            text-slate-900

                            sm:text-3xl
                        "
                                    >
                                        Connected
                                        <span className="mx-1.5 text-[#e3292f] sm:mx-2">
                                            •
                                        </span>
                                        Efficient
                                        <span className="mx-1.5 text-[#e3292f] sm:mx-2">
                                            •
                                        </span>
                                        Reliable
                                    </h3>


                                    {/* Description */}

                                    <p
                                        className="
                            relative
                            z-10

                            mx-auto
                            mt-4
                            max-w-md

                            text-center

                            text-xs
                            leading-6
                            text-slate-500

                            sm:text-sm
                            sm:leading-7
                        "
                                    >
                                        Professional peering infrastructure designed
                                        to support efficient traffic exchange and
                                        dependable network communication.
                                    </p>


                                    {/* =================================================
                        MINI STATS
                    ================================================== */}

                                    <div
                                        className="
                            relative
                            z-10

                            mt-7

                            grid
                            grid-cols-3

                            gap-2

                            sm:mt-8
                            sm:gap-3
                        "
                                    >
                                        {[
                                            ["Direct", "Connectivity"],
                                            ["Optimized", "Routing"],
                                            ["Reliable", "Infrastructure"],
                                        ].map(([value, label]) => (

                                            <div
                                                key={label}
                                                className="
                                    group/stat

                                    flex
                                    min-h-[78px]
                                    flex-col
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border
                                    border-slate-200

                                    bg-white

                                    px-2
                                    py-3

                                    text-center

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-[#e3292f]/30
                                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]

                                    sm:min-h-[88px]
                                    sm:px-3
                                "
                                            >

                                                <p
                                                    className="
                                        text-[10px]
                                        font-bold
                                        leading-4
                                        text-slate-900

                                        sm:text-sm
                                    "
                                                >
                                                    {value}
                                                </p>

                                                <p
                                                    className="
                                        mt-1
                                        text-[7px]
                                        font-medium
                                        uppercase
                                        leading-3
                                        tracking-[0.12em]
                                        text-slate-500

                                        sm:text-[9px]
                                        sm:tracking-wider
                                    "
                                                >
                                                    {label}
                                                </p>

                                            </div>

                                        ))}
                                    </div>


                                    {/* =================================================
                        BOTTOM STATUS
                    ================================================== */}

                                    <div
                                        className="
                            relative
                            z-10

                            mt-6

                            flex
                            items-center
                            justify-center
                            gap-2

                            sm:mt-7
                        "
                                    >
                                        <span
                                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#e3292f]
                                shadow-[0_0_10px_rgba(227,41,47,0.5)]
                            "
                                        />

                                        <span
                                            className="
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400

                                sm:text-[9px]
                            "
                                        >
                                            Network Ready
                                        </span>
                                    </div>


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
                            top-0
                            h-80
                            w-80
                            -translate-x-1/2
                            rounded-full
                            bg-red-100/50
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
                                Why Peering
                            </p>

                            <h2
                                className="
                                    mt-4
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Built for efficient
                                <span className="text-[#e3292f]">
                                    {" "}network connectivity.
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
                                Professional peering capabilities designed to
                                help organizations improve routing efficiency,
                                reachability and network performance.
                            </p>

                        </div>


                        {/* Cards */}

                        <div
                            className="
                                mx-auto
                                mt-12
                                grid
                                max-w-6xl
                                grid-cols-2
                                gap-3
                                sm:gap-5
                                lg:grid-cols-3
                            "
                        >

                            {peeringBenefits.map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 70}
                                        className="
                                            group
                                            relative
                                            overflow-hidden
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
                                            hover:shadow-[0_20px_50px_rgba(227,41,47,0.10)]
                                            sm:p-7
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
                                                border
                                                border-[#e3292f]/15
                                                bg-red-50
                                                text-[#e3292f]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#e3292f]
                                                group-hover:text-white
                                                group-hover:scale-110
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
                                                sm:text-lg
                                            "
                                        >
                                            {item.title}
                                        </h3>


                                        <p
                                            className="
                                                mt-2
                                                text-[11px]
                                                leading-5
                                                text-slate-500
                                                sm:text-sm
                                                sm:leading-6
                                            "
                                        >
                                            {item.text}
                                        </p>


                                        {/* Hover Line */}

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
                                                group-hover:w-1/2
                                            "
                                        />

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA — NETWORK CONNECT
                ===================================================== */}

                <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                    {/* Background */}

                    <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#e3292f]/10 blur-[100px]" />

                    <div className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-100 blur-[100px]" />


                    {/* Decorative Network Lines */}

                    <div className="pointer-events-none absolute left-[8%] top-1/2 hidden h-px w-40 bg-gradient-to-r from-transparent via-[#e3292f]/30 to-transparent lg:block" />

                    <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-px w-40 bg-gradient-to-r from-transparent via-[#e3292f]/30 to-transparent lg:block" />


                    <div
                        data-aos="fade-up"
                        className="
            relative
            z-10
            mx-auto
            max-w-6xl
            px-5
            sm:px-6
            lg:px-8
        "
                    >

                        <div
                            className="
                relative
                overflow-hidden
                border
                border-slate-200
                bg-white
                px-6
                py-12
                text-center
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                sm:px-10
                sm:py-16
                lg:px-16
                lg:py-20
            "
                        >

                            {/* Top Accent */}

                            <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 bg-[#e3292f] sm:w-32" />


                            {/* Decorative Circles */}

                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#e3292f]/10" />

                            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#e3292f]/10" />

                            <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full border border-slate-200" />


                            {/* Content */}

                            <div className="relative z-10 mx-auto max-w-3xl">

                                <p
                                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-[#e3292f]
                        sm:text-xs
                    "
                                >
                                    Connect With TEJAYS
                                </p>


                                <h2
                                    className="
                        mt-4
                        text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-slate-900
                        sm:text-4xl
                        lg:text-5xl
                    "
                                >
                                    Ready to build a
                                    <span className="block text-[#e3292f]">
                                        better connected network?
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
                                    requirements and discover a network solution designed
                                    around your organization.
                                </p>


                                {/* CTA */}

                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

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
                            border-slate-200
                            bg-white
                            px-8
                            py-4
                            text-sm
                            font-bold
                            text-slate-700
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#e3292f]/30
                            hover:text-[#e3292f]
                            hover:shadow-lg
                            sm:w-auto
                        "
                                    >
                                        Get Started
                                    </Link>

                                </div>

                            </div>


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
                    duration-700
                    hover:w-1/2
                "
                            />

                        </div>

                    </div>

                </section>
            </main>

            <Footer />

        </div>
    );
}