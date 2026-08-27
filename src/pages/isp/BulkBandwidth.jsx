import {
    ArrowRight,
    CheckCircle2,
    Gauge,
    Globe2,
    Network,
    Server,
    ShieldCheck,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const bulkBandwidthFeatures = [
    {
        icon: Zap,
        title: "High-Speed Connectivity",
        text: "High-capacity bandwidth designed for demanding internet usage, large data transfers and business-critical applications.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable Performance",
        text: "Consistent connectivity and dependable network performance to help keep your business operations running smoothly.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        text: "Bandwidth capacity that can adapt to your requirements as your business and connectivity needs grow.",
    },
    {
        icon: Network,
        title: "Business-Ready Infrastructure",
        text: "Professional network infrastructure designed for modern businesses, offices, institutions and enterprise environments.",
    },
];

const suitableFor = [
    {
        icon: Users,
        title: "Businesses & Offices",
        text: "Reliable bandwidth for everyday business communication and digital operations.",
    },
    {
        icon: Server,
        title: "Enterprises",
        text: "High-capacity connectivity for large teams, systems and business applications.",
    },
    {
        icon: Globe2,
        title: "Institutions",
        text: "Stable internet access for connected environments with multiple users and devices.",
    },
    {
        icon: Network,
        title: "IT & Technology",
        text: "Bandwidth designed to support cloud platforms, digital services and data-intensive workflows.",
    },
    {
        icon: Gauge,
        title: "Digital Operations",
        text: "Connectivity for organizations that rely on continuous online applications and services.",
    },
    {
        icon: Zap,
        title: "High-Bandwidth Applications",
        text: "Support for applications requiring higher network capacity and consistent performance.",
    },
];

export default function BulkBandwidth() {
    return (
        <main className="overflow-x-clip bg-white">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <Header />


            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-red-50 py-20 sm:py-24 lg:py-28">

                {/* Background Glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        -top-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#e3292f]/5
                        blur-[120px]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-40
                        -left-40
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-slate-100
                        blur-[100px]
                    "
                />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

                    {/* Hero Content */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                        className="text-center lg:text-left"
                    >

                        <div className="inline-flex items-center gap-3">

                            <span className="h-px w-8 bg-[#e3292f] sm:w-12" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-xs">
                                TEJAYS Services
                            </p>

                        </div>

                        <h1
                            className="
                                mt-5
                                text-4xl
                                font-black
                                leading-[1.05]
                                tracking-tight
                                text-slate-900
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Bulk
                            <span className="text-[#e3292f]">
                                {" "}Bandwidth
                            </span>
                        </h1>

                        <p
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
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">

    <Link
        to="/contact-us"
        className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#e3292f]
            px-6
            py-3
            text-sm
            font-bold
            text-white
            shadow-[0_12px_30px_rgba(227,41,47,0.22)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#c91f25]
            hover:shadow-[0_18px_40px_rgba(227,41,47,0.28)]
        "
    >
        Get Started
        <ArrowRight size={17} />
    </Link>

    <Link
        to="/contact-us"
        className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-slate-300
            bg-white
            px-6
            py-3
            text-sm
            font-bold
            text-slate-800
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#e3292f]
            hover:text-[#e3292f]
        "
    >
        Talk to Our Team
    </Link>

</div>

                        {/* Trust Points */}
                        <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">

                            {[
                                "High Capacity",
                                "Reliable Network",
                                "Scalable Connectivity",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle2
                                        size={15}
                                        className="text-[#e3292f]"
                                    />

                                    <span className="text-xs font-semibold text-slate-600">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>


                    {/* Hero Visual */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="900"
                        className="mx-auto w-full max-w-xl"
                    >

                        <div className="group relative overflow-hidden rounded-3xl bg-[#07111f] shadow-[0_30px_80px_rgba(15,23,42,0.16)]">

                            <img
                                src="/Tejays/assets/bulk-bandwidth.jpg"
                                alt="TEJAYS Bulk Bandwidth Infrastructure"
                                className="
                                    h-[380px]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                    sm:h-[470px]
                                    lg:h-[520px]
                                "
                            />

                            {/* Overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#07111f]
                                    via-[#07111f]/30
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
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-[#e3292f]/20
                                    blur-3xl
                                "
                            />

                            {/* Top Badge */}
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
                                "
                            >
                                <span className="h-2 w-2 rounded-full bg-[#e3292f] shadow-[0_0_14px_rgba(227,41,47,0.9)]" />

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
                                    High Capacity Network
                                </span>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#e3292f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                                        TEJAYS Connectivity
                                    </span>
                                </div>

                                <h2 className="text-2xl font-black text-white sm:text-3xl">
                                    High-Capacity Connectivity
                                </h2>

                                <p className="mt-2 text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
                                    Fast
                                    <span className="mx-2 text-[#e3292f]">•</span>
                                    Reliable
                                    <span className="mx-2 text-[#e3292f]">•</span>
                                    Scalable
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
            <section className="relative bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                            Built for Business
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            High-Capacity Connectivity
                            <span className="block text-[#e3292f]">
                                Built for Business.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            TEJAYS Bulk Bandwidth provides high-capacity internet
                            connectivity designed for businesses, enterprises,
                            institutions and organizations that require consistent
                            performance, scalable bandwidth and dependable network access.
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            Whether you need connectivity for multiple users, cloud
                            applications, digital operations or high-volume data usage,
                            our solutions are designed to support demanding business
                            requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
             FEATURES
            ====================================================== */}
            <section className="relative overflow-hidden bg-slate-100 py-16 sm:py-20 sm:py-24 lg:py-28">

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#e3292f]/5 blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* =================================================
            HEADER
        ================================================== */}
                    <div
                        data-aos="fade-up"
                        className="mx-auto max-w-3xl text-center"
                    >

                        {/* Label */}
                        <div className="inline-flex items-center justify-center gap-2 sm:gap-3">

                            <span className="h-px w-6 bg-[#e3292f] sm:w-12" />

                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e3292f] sm:text-xs sm:tracking-[0.25em]">
                                Why TEJAYS
                            </p>

                            <span className="h-px w-6 bg-[#e3292f] sm:w-12" />

                        </div>


                        {/* Heading */}
                        <h2
                            className="
                    mt-4
                    text-2xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-900

                    sm:mt-5
                    sm:text-4xl

                    lg:text-5xl
                "
                        >
                            Connectivity designed

                            <span className="block text-[#e3292f]">
                                around your needs.
                            </span>
                        </h2>

                    </div>


                    {/* =================================================
            FEATURE GRID
            Mobile = 2 × 2
            Desktop = 4 × 1
        ================================================== */}
                    <div
                        className="
                mt-9

                grid
                grid-cols-2
                gap-3

                sm:mt-12
                sm:gap-5

                lg:mt-16
                lg:grid-cols-4
            "
                    >

                        {bulkBandwidthFeatures.map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="
                            group
                            relative
                            min-h-[245px]
                            overflow-hidden

                            rounded-xl
                            border
                            border-slate-200
                            bg-white

                            p-4

                            text-center

                            shadow-[0_10px_30px_rgba(15,23,42,0.05)]

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-[#e3292f]/40
                            hover:shadow-[0_20px_45px_rgba(227,41,47,0.12)]

                            sm:min-h-[280px]
                            sm:rounded-2xl
                            sm:p-6

                            lg:min-h-[320px]
                            lg:p-7
                        "
                                >

                                    {/* =================================================
                            CARD GLOW
                        ================================================== */}
                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -right-12
                                -top-12

                                h-28
                                w-28

                                rounded-full

                                bg-[#e3292f]/5

                                blur-3xl

                                transition-all
                                duration-300

                                group-hover:scale-150
                                group-hover:bg-[#e3292f]/10

                                sm:h-32
                                sm:w-32
                            "
                                    />


                                    {/* =================================================
                            ICON
                        ================================================== */}
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

                                rounded-lg

                                border
                                border-[#e3292f]/20

                                bg-[#e3292f]/10

                                text-[#e3292f]

                                transition-all
                                duration-300

                                group-hover:scale-110
                                group-hover:bg-[#e3292f]
                                group-hover:text-white
                                group-hover:shadow-[0_0_25px_rgba(227,41,47,0.25)]

                                sm:h-12
                                sm:w-12
                                sm:rounded-xl
                            "
                                    >
                                        <Icon
                                            size={19}
                                            strokeWidth={1.7}
                                            className="sm:h-[22px] sm:w-[22px]"
                                        />
                                    </div>


                                    {/* =================================================
                            NUMBER
                        ================================================== */}
                                    <span
                                        className="
                                absolute
                                right-3
                                top-3

                                text-[9px]
                                font-bold
                                tracking-widest

                                text-slate-200

                                transition-colors
                                duration-300

                                group-hover:text-[#e3292f]/30

                                sm:right-5
                                sm:top-5
                                sm:text-xs
                            "
                                    >
                                        0{index + 1}
                                    </span>


                                    {/* =================================================
                            TITLE
                        ================================================== */}
                                    <h3
                                        className="
                                relative
                                z-10

                                mt-4

                                min-h-[40px]

                                text-[13px]
                                font-bold
                                leading-5

                                text-slate-900

                                transition-transform
                                duration-300

                                group-hover:-translate-y-0.5

                                sm:mt-6
                                sm:min-h-[48px]
                                sm:text-lg
                                sm:leading-6
                            "
                                    >
                                        {feature.title}
                                    </h3>


                                    {/* =================================================
                            DESCRIPTION
                        ================================================== */}
                                    <p
                                        className="
                                relative
                                z-10

                                mt-2

                                text-[10px]
                                leading-5

                                text-slate-500

                                transition-colors
                                duration-300

                                group-hover:text-slate-700

                                sm:mt-3
                                sm:text-sm
                                sm:leading-6
                            "
                                    >
                                        {feature.text}
                                    </p>


                                    {/* =================================================
                            BOTTOM RED LINE
                        ================================================== */}
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
                 HIGH DEMAND CONNECTIVITY
            ====================================================== */}
            <section className="relative overflow-hidden bg-red-50 py-16 sm:py-20 sm:py-24 lg:py-28">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#e3292f]/5 blur-[120px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100 blur-[120px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

                    {/* =================================================
            CONTENT
        ================================================== */}
                    <div
                        data-aos="fade-right"
                        className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
                    >

                        {/* Label */}
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                            Network Capacity
                        </p>

                        {/* Heading */}
                        <h2
                            className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-900

                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            Built for

                            <span className="block text-[#e3292f]">
                                High-Demand Connectivity.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                    mx-auto
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-slate-600

                    sm:mt-6
                    sm:text-base
                    sm:leading-8

                    lg:mx-0
                "
                        >
                            From everyday business communication to
                            bandwidth-intensive operations, TEJAYS Bulk
                            Bandwidth is designed to provide the capacity
                            your organization needs.
                        </p>


                        {/* =================================================
    BENEFIT POINTS
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

        lg:mx-0
    "
                        >
                            {[
                                "Consistent network performance",
                                "High-capacity bandwidth",
                                "Scalable connectivity solutions",
                                "Business-focused infrastructure",
                            ].map((item, index) => (

                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 70}
                                    className="
                group
                flex
                min-h-[72px]
                items-center
                justify-start
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

                sm:min-h-[76px]
                sm:gap-3
                sm:p-4
            "
                                >

                                    {/* Icon */}
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
                    group-hover:shadow-[0_0_20px_rgba(227,41,47,0.20)]

                    sm:h-9
                    sm:w-9
                "
                                    >
                                        <CheckCircle2
                                            size={16}
                                            strokeWidth={2}
                                            className="sm:h-[17px] sm:w-[17px]"
                                        />
                                    </div>

                                    {/* Text */}
                                    <span
                                        className="
                    text-left

                    text-[10px]
                    font-semibold
                    leading-4
                    text-slate-700

                    transition-colors
                    duration-300

                    group-hover:text-slate-900

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
            VISUAL CARD
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
                    rounded-3xl

                    border
                    border-slate-200
                    bg-white

                    p-5

                    shadow-[0_20px_60px_rgba(15,23,42,0.08)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#e3292f]/30
                    hover:shadow-[0_30px_80px_rgba(227,41,47,0.10)]

                    sm:p-8
                "
                        >

                            {/* Soft Red Glow */}
                            <div
                                className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-72
                        w-72
                        rounded-full

                        bg-[#e3292f]/5
                        blur-3xl

                        transition-all
                        duration-500

                        group-hover:scale-125
                        group-hover:bg-[#e3292f]/10
                    "
                            />

                            {/* Decorative Rings */}
                            <div
                                className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-72
                        w-72
                        rounded-full
                        border
                        border-[#e3292f]/10
                    "
                            />

                            <div
                                className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-56
                        w-56
                        rounded-full
                        border
                        border-[#e3292f]/10
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
                        bg-[#e3292f]/10
                        text-[#e3292f]

                        transition-all
                        duration-300

                        group-hover:scale-105
                        group-hover:bg-[#e3292f]
                        group-hover:text-white
                        group-hover:shadow-[0_0_25px_rgba(227,41,47,0.20)]

                        sm:mx-0
                        sm:h-16
                        sm:w-16
                    "
                            >
                                <Network
                                    size={27}
                                    strokeWidth={1.5}
                                    className="sm:h-[30px] sm:w-[30px]"
                                />
                            </div>


                            {/* Title */}
                            <h3
                                className="
                        relative
                        z-10

                        mt-6
                        text-center

                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-900

                        sm:mt-8
                        sm:text-left
                        sm:text-3xl
                    "
                            >
                                Fast

                                <span className="mx-1.5 text-[#e3292f] sm:mx-2">
                                    •
                                </span>

                                Reliable

                                <span className="mx-1.5 text-[#e3292f] sm:mx-2">
                                    •
                                </span>

                                Scalable
                            </h3>


                            {/* Description */}
                            <p
                                className="
                        relative
                        z-10

                        mx-auto
                        mt-3
                        max-w-md

                        text-center
                        text-sm
                        leading-7
                        text-slate-500

                        sm:mt-4
                        sm:mx-0
                        sm:text-left
                    "
                            >
                                Connectivity built to support the digital
                                demands of modern organizations.
                            </p>


                            {/* =================================================
                    STATS
                ================================================== */}
                            <div
                                className="
                        relative
                        z-10

                        mt-6
                        grid
                        grid-cols-3
                        gap-2

                        sm:mt-8
                        sm:gap-3
                    "
                            >

                                {[
                                    ["High", "Capacity"],
                                    ["Reliable", "Network"],
                                    ["Business", "Ready"],
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
                                hover:border-[#e3292f]/30
                                hover:bg-[#e3292f]/5

                                sm:p-4
                            "
                                    >

                                        <p className="text-xs font-bold text-slate-900 sm:text-sm">
                                            {value}
                                        </p>

                                        <p className="mt-1 text-[8px] uppercase tracking-wider text-slate-500 sm:text-[10px]">
                                            {label}
                                        </p>

                                    </div>

                                ))}

                            </div>


                            {/* Bottom Red Line */}
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
            </section>


            {/* =====================================================
             SUITABLE FOR
            ====================================================== */}
            <section className="relative bg-white py-16 sm:py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* =================================================
            HEADER
        ================================================== */}
                    <div
                        data-aos="fade-up"
                        className="mx-auto max-w-3xl text-center"
                    >

                        {/* Label */}
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-xs">
                            Built For
                        </p>

                        {/* Heading */}
                        <h2
                            className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-900

                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            Designed for businesses

                            <span className="block text-[#e3292f]">
                                that depend on connectivity.
                            </span>
                        </h2>

                        {/* Small Description */}
                        <p
                            className="
                    mx-auto
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-500

                    sm:text-base
                    sm:leading-8
                "
                        >
                            Flexible connectivity solutions designed to support
                            different business environments, teams and digital operations.
                        </p>

                    </div>


                    {/* =================================================
            CARDS
            Mobile = 2 Columns
            Desktop = 3 Columns
        ================================================== */}
                    <div
                        className="
                mt-10
                grid
                grid-cols-2
                gap-3

                sm:mt-12
                sm:gap-5

                lg:mt-16
                lg:grid-cols-3
                lg:gap-5
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
                            rounded-2xl

                            border
                            border-slate-200
                            bg-white

                            p-4
                            text-center

                            shadow-[0_8px_25px_rgba(15,23,42,0.03)]

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-[#e3292f]/40
                            hover:shadow-[0_20px_50px_rgba(227,41,47,0.10)]

                            sm:p-6
                            sm:text-left

                            lg:p-7
                        "
                                >

                                    {/* =================================================
                            SOFT GLOW
                        ================================================== */}
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


                                    {/* =================================================
                            ICON
                        ================================================== */}
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

                                border
                                border-[#e3292f]/20

                                bg-[#e3292f]/10
                                text-[#e3292f]

                                transition-all
                                duration-300

                                group-hover:scale-110
                                group-hover:bg-[#e3292f]
                                group-hover:text-white
                                group-hover:shadow-[0_0_25px_rgba(227,41,47,0.22)]

                                sm:mx-0
                                sm:h-11
                                sm:w-11
                            "
                                    >
                                        <Icon
                                            size={19}
                                            strokeWidth={1.6}
                                            className="sm:h-[21px] sm:w-[21px]"
                                        />
                                    </div>


                                    {/* =================================================
                            NUMBER
                        ================================================== */}
                                    <span
                                        className="
                                absolute
                                right-3
                                top-3

                                text-[9px]
                                font-bold
                                tracking-widest
                                text-slate-200

                                transition-colors
                                duration-300

                                group-hover:text-[#e3292f]/30

                                sm:right-5
                                sm:top-5
                                sm:text-xs
                            "
                                    >
                                        0{index + 1}
                                    </span>


                                    {/* =================================================
                            TITLE
                        ================================================== */}
                                    <h3
                                        className="
                                relative
                                z-10

                                mt-4

                                text-sm
                                font-bold
                                leading-5
                                text-slate-900

                                transition-transform
                                duration-300

                                group-hover:translate-x-1

                                sm:mt-5
                                sm:text-lg
                                sm:leading-6
                            "
                                    >
                                        {item.title}
                                    </h3>


                                    {/* =================================================
                            DESCRIPTION
                        ================================================== */}
                                    <p
                                        className="
                                relative
                                z-10

                                mt-2

                                text-[10px]
                                leading-5
                                text-slate-500

                                transition-colors
                                duration-300

                                group-hover:text-slate-700

                                sm:mt-3
                                sm:text-sm
                                sm:leading-6
                            "
                                    >
                                        {item.text}
                                    </p>


                                    {/* =================================================
                            BOTTOM RED LINE
                        ================================================== */}
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
                FINAL CTA
            ====================================================== */}
            <section className="px-5 py-14 bg-slate-100 sm:px-6 lg:px-8">

                <div
                    data-aos="fade-up"
                    className="
                        relative
                        mx-auto
                        max-w-5xl
                        overflow-hidden
                        rounded-3xl
                        bg-[#e3292f]
                        px-6
                        py-12
                        text-center
                        shadow-[0_25px_70px_rgba(227,41,47,0.18)]
                        sm:px-10
                        sm:py-14
                    "
                >

                    {/* Decorative Glow */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

                    <div className="relative z-10">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                            TEJAYS
                        </p>

                        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                            Reliable Bandwidth. Better Business.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                            Your business depends on connectivity. TEJAYS
                            provides bandwidth solutions focused on performance,
                            reliability and scalability.
                        </p>

                        <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold text-white">
                            Need High-Capacity Connectivity?
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

                            <Link
                                to="/contact-us"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-white
                                    px-6
                                    py-3
                                    text-sm
                                    font-bold
                                    text-[#e3292f]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-slate-100
                                "
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                to="/contact-us"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/40
                                    px-6
                                    py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/10
                                "
                            >
                                Contact TEJAYS
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                            FOOTER
                        ====================================================== */}
            <Footer />

        </main>
    );
}