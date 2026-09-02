import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Network,
    Router,
    ShieldCheck,
    Signal,
    Server,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";


/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        icon: Signal,
        title: "Dedicated Connectivity",
        description:
            "Dedicated internet connectivity designed for consistent business performance.",
    },
    {
        icon: Zap,
        title: "High Performance",
        description:
            "Reliable bandwidth for demanding business applications and operations.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Network",
        description:
            "Professional connectivity with a strong focus on network security and reliability.",
    },
    {
        icon: Globe2,
        title: "Business Ready",
        description:
            "Built to support modern enterprises, offices and mission-critical workloads.",
    },
    {
        icon: Network,
        title: "Stable Routing",
        description:
            "Optimized connectivity for dependable communication and data transfer.",
    },
    {
        icon: Server,
        title: "Professional Infrastructure",
        description:
            "Enterprise-focused network infrastructure backed by professional support.",
    },
];


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
    "Dedicated business connectivity",
    "Consistent network performance",
    "Reliable bandwidth availability",
    "Secure enterprise communication",
    "Scalable connectivity architecture",
    "Professional technical support",
];


/* =========================================================
   PAGE
========================================================= */

export default function InternetLeaseLine() {

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* =================================================
                HEADER
            ================================================= */}
            <main>

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

                    {/* Container */}

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
                justify-items-center
                gap-10
                lg:grid-cols-[1fr_0.8fr]
                lg:gap-20
            "
                        >

                            {/* =================================================
                LEFT CONTENT
            ================================================== */}

                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
                                className="
                    w-full
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
                        justify-center
                        gap-3
                        border
                        border-[#e3292f]/15
                        bg-white
                        px-4
                        py-2
                        shadow-sm
                    "
                                >
                                    <Globe2
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
                                        CORPORATE SERVICES
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
                                    Dedicated

                                    <span
                                        className="
                            block
                            text-[#e3292f]
                        "
                                    >
                                        Internet Connectivity.
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
                                    Enterprise-grade internet connectivity
                                    designed for reliable, secure and
                                    high-performance business communication.
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
                RIGHT VISUAL CARD
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
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        text-left
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-[#e3292f]/30
                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.12)]
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
                            bg-red-50
                            text-[#e3292f]
                            transition-all
                            duration-300
                            group-hover:bg-[#e3292f]
                            group-hover:text-white
                            lg:mx-0
                        "
                                    >
                                        <Router
                                            size={30}
                                            strokeWidth={1.5}
                                        />
                                    </div>


                                    <p
                                        className="
                            relative
                            z-10
                            mt-7
                            text-center
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#e3292f]
                            lg:text-left
                        "
                                    >
                                        TEJAYS CORPORATE
                                    </p>


                                    <h2
                                        className="
                            relative
                            z-10
                            mt-2
                            text-center
                            text-2xl
                            font-black
                            text-slate-900
                            sm:text-3xl
                            lg:text-left
                        "
                                    >
                                        Connect.
                                        <span className="text-[#e3292f]">
                                            {" "}Perform.
                                        </span>
                                    </h2>


                                    <p
                                        className="
                            relative
                            z-10
                            mt-4
                            text-center
                            text-sm
                            leading-7
                            text-slate-500
                            lg:text-left
                        "
                                    >
                                        Dedicated connectivity designed
                                        to support business-critical
                                        applications and communication.
                                    </p>


                                    {/* Connection Line */}

                                    <div
                                        className="
                            relative
                            z-10
                            mt-7
                            flex
                            items-center
                            gap-2
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

                                        <div
                                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#e3292f]
                                bg-white
                            "
                                        />
                                    </div>


                                    {/* Stats */}

                                    <div
                                        className="
                            relative
                            z-10
                            mt-7
                            grid
                            grid-cols-3
                            gap-2
                        "
                                    >

                                        {[
                                            ["Stable", "Network"],
                                            ["Fast", "Connectivity"],
                                            ["Secure", "Access"],
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
                                grid
                                items-center
                                gap-12
                                lg:grid-cols-2
                                lg:gap-20
                            "
                        >

                            {/* Left Content */}

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
                                    Internet Lease Line
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
                                    Connectivity built for
                                    <span className="block text-[#e3292f]">
                                        business performance.
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
                                    TEJAYS provides professional internet
                                    connectivity solutions designed to help
                                    organizations maintain dependable access
                                    to critical digital services.
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
                                        sm:leading-8
                                        lg:mx-0
                                    "
                                >
                                    From everyday business communication to
                                    cloud applications and data-intensive
                                    operations, our connectivity approach
                                    focuses on stability, performance and
                                    scalability.
                                </p>

                            </div>


                            {/* Right Benefits */}

                            <div
                                data-aos="fade-left"
                                className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                    sm:gap-4
                                "
                            >

                                {benefits.map((item, index) => (

                                    <div
                                        key={item}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 60}
                                        className="
                                            group
                                            flex
                                            min-h-[90px]
                                            items-center
                                            gap-3
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            p-3
                                            text-left
                                            shadow-sm
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#e3292f]/30
                                            hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]
                                            sm:min-h-[100px]
                                            sm:p-4
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
                                                text-[11px]
                                                font-semibold
                                                leading-5
                                                text-slate-700
                                                sm:text-sm
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
                    FEATURES
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
                                    font-black
                                    tracking-tight
                                    text-slate-900
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Built around your
                                <span className="block text-[#e3292f]">
                                    connectivity needs.
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
                                Enterprise connectivity designed to deliver
                                dependable performance and a better network
                                experience.
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
        lg:grid-cols-3
    "
                        >
                            {features.map((feature, index) => {

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
                    lg:p-7
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
                        bg-red-50
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
                                                strokeWidth={1.6}
                                            />
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
                        mx-auto
                        mt-2
                        max-w-xs
                        text-[11px]
                        leading-5
                        text-slate-500

                        sm:mt-3
                        sm:text-sm
                        sm:leading-6
                    "
                                        >
                                            {feature.description}
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
                    {/* =================================================
        BACKGROUND DECORATIONS
    ================================================== */}

                    <div
                        className="
            pointer-events-none
            absolute
            -left-24
            top-1/2
            h-72
            w-72
            -translate-y-1/2
            rounded-full
            bg-[#e3292f]/10
            blur-[100px]
        "
                    />

                    <div
                        className="
            pointer-events-none
            absolute
            -right-24
            top-0
            h-80
            w-80
            rounded-full
            bg-white
            blur-[100px]
        "
                    />

                    {/* Decorative Circle */}

                    <div
                        className="
            pointer-events-none
            absolute
            -left-20
            top-10
            hidden
            h-44
            w-44
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
            -right-16
            bottom-10
            hidden
            h-52
            w-52
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
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#e3292f]/10
                bg-white
                px-6
                py-10
                text-center
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                sm:px-10
                sm:py-14
                lg:px-16
                lg:py-16
            "
                        >

                            {/* Inner Glow */}

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
                "
                            />

                            <div
                                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-20
                    h-64
                    w-64
                    rounded-full
                    bg-red-50
                    blur-3xl
                "
                            />


                            {/* =================================================
                TOP LABEL
            ================================================== */}

                            <div
                                className="
                    relative
                    z-10
                    mx-auto
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#e3292f]/15
                    bg-red-50
                    px-4
                    py-2
                "
                            >

                                <span
                                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#e3292f]
                        shadow-[0_0_12px_rgba(227,41,47,0.45)]
                    "
                                />

                                <span
                                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#e3292f]
                        sm:text-xs
                    "
                                >
                                    Connect With TEJAYS
                                </span>

                            </div>


                            {/* =================================================
                HEADING
            ================================================== */}

                            <h2
                                className="
                    relative
                    z-10
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-3xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                "
                            >
                                Ready for better

                                <span
                                    className="
                        block
                        text-[#e3292f]
                    "
                                >
                                    business connectivity?
                                </span>
                            </h2>


                            {/* =================================================
                DESCRIPTION
            ================================================== */}

                            <p
                                className="
                    relative
                    z-10
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
                                Talk to the TEJAYS team about your internet
                                connectivity requirements and explore the right
                                solution for your organization.
                            </p>


                            {/* =================================================
                BUTTONS
            ================================================== */}

                            <div
                                className="
                    relative
                    z-10
                    mt-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    sm:flex-row
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
                        rounded-xl
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
                                    to="/quick-pay"
                                    className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-7
                        py-3.5
                        text-sm
                        font-bold
                        text-slate-700
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#e3292f]/30
                        hover:bg-white
                        hover:text-[#e3292f]
                        hover:shadow-md
                        sm:w-auto
                    "
                                >
                                    Quick Pay
                                </Link>

                            </div>


                            {/* =================================================
                BOTTOM FEATURES
            ================================================== */}

                            <div
                                className="
                    relative
                    z-10
                    mx-auto
                    mt-10
                    grid
                    max-w-2xl
                    grid-cols-1
                    gap-2
                    sm:grid-cols-3
                "
                            >

                                {[
                                    "Reliable Connectivity",
                                    "Secure Infrastructure",
                                    "Professional Support",
                                ].map((item, index) => (

                                    <div
                                        key={item}
                                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-100
                            bg-slate-50
                            px-3
                            py-3
                            text-[10px]
                            font-semibold
                            text-slate-600
                            transition-all
                            duration-300
                            hover:border-[#e3292f]/20
                            hover:bg-red-50
                            hover:text-[#e3292f]
                            sm:text-xs
                        "
                                    >

                                        <CheckCircle2
                                            size={15}
                                            className="shrink-0 text-[#e3292f]"
                                        />

                                        {item}

                                    </div>

                                ))}

                            </div>


                            {/* Bottom Accent */}

                            <div
                                className="
                    absolute
                    bottom-0
                    left-1/2
                    h-1
                    w-24
                    -translate-x-1/2
                    rounded-full
                    bg-[#e3292f]
                "
                            />

                        </div>

                    </div>

                </section>

            </main>


            {/* =================================================
                FOOTER
            ================================================= */}

            <Footer />

        </div>
    );
}