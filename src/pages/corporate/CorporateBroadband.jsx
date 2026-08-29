import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Router,
    ShieldCheck,
    Signal,
    Server,
    Wifi,
    Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        title: "Dedicated Business Connectivity",
        description:
            "Reliable corporate internet connectivity designed for business-critical operations.",
        icon: Globe2,
    },
    {
        title: "High-Speed Performance",
        description:
            "Consistent network performance for cloud applications, communication and daily workflows.",
        icon: Zap,
    },
    {
        title: "Secure Network Access",
        description:
            "Professional connectivity infrastructure designed with security and reliability in mind.",
        icon: ShieldCheck,
    },
    {
        title: "Scalable Infrastructure",
        description:
            "Flexible connectivity that can grow with your organization's changing requirements.",
        icon: Server,
    },
    {
        title: "Stable Network",
        description:
            "Dependable connectivity designed to reduce interruptions and support continuous operations.",
        icon: Signal,
    },
    {
        title: "Professional Support",
        description:
            "Technical assistance to help keep your corporate connectivity running smoothly.",
        icon: Router,
    },
];


/* =========================================================
   STATS
========================================================= */

const stats = [
    {
        value: "High",
        label: "Performance",
        icon: Zap,
    },
    {
        value: "Secure",
        label: "Connectivity",
        icon: ShieldCheck,
    },
    {
        value: "Stable",
        label: "Network",
        icon: Signal,
    },
    {
        value: "24/7",
        label: "Support",
        icon: Server,
    },
];


/* =========================================================
   PAGE
========================================================= */

export default function CorporateBroadband() {

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <Header />


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
                                gap-12
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
                                        rounded-full
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
                                    Corporate

                                    <span
                                        className="
                                            block
                                            text-[#e3292f]
                                        "
                                    >
                                        Broadband.
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
                                    Business-focused broadband connectivity
                                    designed for reliable, secure and
                                    high-performance communication.
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


                                    <Link
                                        to="/quick-pay"
                                        className="
                                            inline-flex
                                            w-full
                                            items-center
                                            justify-center
                                            rounded-xl
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
                                RIGHT CARD
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
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-6
                                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
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
                                                Business Ready
                                            </span>

                                        </div>


                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
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
        sm:text-left
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
            max-w-sm
            text-sm
            leading-7
            text-slate-500
            sm:mx-0
        "
                                        >
                                            Corporate broadband built to support cloud applications,
                                            communication and everyday business operations.
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
                                                border-[#e3292f]/10
                                            "
                                        />

                                        <div
                                            className="
                                                absolute
                                                h-20
                                                w-20
                                                rounded-full
                                                border
                                                border-[#e3292f]/15
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
                                            "
                                        >
                                            <Router size={23} />
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
                                            ["Fast", "Access"],
                                            ["Stable", "Network"],
                                            ["Secure", "Connection"],
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
                                                    hover:border-[#e3292f]/20
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
                    INTRO
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
                                    Built For Business
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
                                    Connectivity that keeps your

                                    <span
                                        className="
                                            block
                                            text-[#e3292f]
                                        "
                                    >
                                        business moving.
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
                                        lg:mx-0
                                    "
                                >
                                    Corporate broadband from TEJAYS is
                                    designed around the connectivity needs
                                    of modern organizations, helping teams
                                    stay connected to customers, cloud
                                    services and business applications.
                                </p>

                            </div>


                            {/* Right */}

                            <div
                                data-aos="fade-left"
                                className="
        grid
        grid-cols-2
        gap-3
        text-center
        sm:gap-4
        sm:text-left
    "
                            >
                                {[
                                    {
                                        title: "Business Ready",
                                        text: "Connectivity designed around professional requirements.",
                                        icon: Globe2,
                                    },
                                    {
                                        title: "Reliable Access",
                                        text: "Stable network performance for daily operations.",
                                        icon: Signal,
                                    },
                                    {
                                        title: "Secure Network",
                                        text: "Infrastructure designed with security in mind.",
                                        icon: ShieldCheck,
                                    },
                                    {
                                        title: "Scalable",
                                        text: "Flexible connectivity for growing organizations.",
                                        icon: Server,
                                    },
                                ].map((item, index) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 70}
                                            className="
                    group
                    flex
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/25
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(227,41,47,0.08)]
                    sm:items-start
                    sm:p-5
                    sm:text-left
                "
                                        >

                                            {/* Icon */}
                                            <div
                                                className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-50
                        text-[#e3292f]
                        transition-all
                        duration-300
                        group-hover:bg-[#e3292f]
                        group-hover:text-white
                    "
                                            >
                                                <Icon size={19} />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="
                        mt-4
                        text-sm
                        font-bold
                        text-slate-900
                        sm:text-base
                    "
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="
                        mt-2
                        text-[11px]
                        leading-5
                        text-slate-500
                        sm:text-xs
                        sm:leading-6
                    "
                                            >
                                                {item.text}
                                            </p>

                                        </div>
                                    );
                                })}
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
                        bg-slate-50
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
                            top-0
                            h-80
                            w-80
                            rounded-full
                            bg-red-100
                            blur-[100px]
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

                        {/* Heading */}

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
                                Corporate Connectivity
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
                                Everything your business needs

                                <span
                                    className="
                                        block
                                        text-[#e3292f]
                                    "
                                >
                                    from its network.
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
                                Professional connectivity designed to
                                support productivity, communication and
                                business-critical applications.
                            </p>

                        </div>


                        {/* Feature Cards */}

                        <div
                            className="
        mt-12
        grid
        grid-cols-2
        gap-3
        text-center
        sm:mt-14
        sm:gap-5
        sm:text-left
        lg:grid-cols-3
    "
                        >
                            {features.map((feature, index) => {

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
                    flex-col
                    items-center
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
                    sm:items-start
                    sm:p-6
                    sm:text-left
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
                    STATISTICS
                ====================================================== */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-[#e3292f]
                    "
                >

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-32
                            top-1/2
                            h-72
                            w-72
                            -translate-y-1/2
                            rounded-full
                            bg-white/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            bottom-0
                            h-80
                            w-80
                            rounded-full
                            bg-black/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            relative
                            mx-auto
                            grid
                            max-w-7xl
                            grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {stats.map((stat, index) => {

                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="
                                        group
                                        flex
                                        min-h-[180px]
                                        flex-col
                                        items-center
                                        justify-center
                                        border-b
                                        border-white/20
                                        px-4
                                        py-8
                                        text-center
                                        transition-all
                                        duration-500
                                        hover:bg-[#c91f25]
                                        lg:border-b-0
                                        lg:border-r
                                        lg:last:border-r-0
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/30
                                            bg-white/10
                                            text-white
                                            transition-all
                                            duration-500
                                            group-hover:-translate-y-2
                                            group-hover:bg-white
                                            group-hover:text-[#e3292f]
                                        "
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            text-2xl
                                            font-black
                                            text-white
                                            sm:text-3xl
                                        "
                                    >
                                        {stat.value}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.16em]
                                            text-white/75
                                            sm:text-xs
                                        "
                                    >
                                        {stat.label}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </section>


                {/* =====================================================
                    PREMIUM CTA
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
                            -left-24
                            top-0
                            h-80
                            w-80
                            rounded-full
                            bg-red-100
                            blur-[100px]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            bottom-0
                            h-96
                            w-96
                            rounded-full
                            bg-white
                            blur-[100px]
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
                                    corporate connectivity?
                                </span>
                            </h2>


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
                                Talk to the TEJAYS team about your
                                corporate broadband requirements and
                                discover the right connectivity solution
                                for your organization.
                            </p>


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


                            {/* Bottom Features */}

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
                                ].map((item) => (

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


            {/* =====================================================
                FOOTER
            ====================================================== */}

            <Footer />

        </div>
    );
}