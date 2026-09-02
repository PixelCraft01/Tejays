import {
    ArrowRight,
    CheckCircle2,
    FileCheck2,
    Globe2,
    Landmark,
    Network,
    ShieldCheck,
    FileText,
    Scale,
    Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const complianceBenefits = [
    {
        icon: FileCheck2,
        title: "Regulatory Compliance",
        text: "Support for connectivity and telecom requirements with a structured compliance approach.",
    },
    {
        icon: FileText,
        title: "Documentation Support",
        text: "Organized documentation helps businesses manage important licensing and compliance records.",
    },
    {
        icon: ShieldCheck,
        title: "Compliance Focus",
        text: "Processes designed to help organizations maintain a more structured compliance environment.",
    },
    {
        icon: Landmark,
        title: "Licensing Guidance",
        text: "Professional guidance around applicable connectivity and network licensing requirements.",
    },
];

const complianceFeatures = [
    "Compliance-focused network planning",
    "Licensing requirement guidance",
    "Documentation and record support",
    "Regulatory process assistance",
    "Business connectivity compliance",
    "Structured compliance management",
];

export default function DotCompliances() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
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

                    <div
                        className="
                            pointer-events-none
                            absolute
                            bottom-[12%]
                            left-[10%]
                            hidden
                            h-24
                            w-24
                            rounded-full
                            bg-[#e3292f]/5
                            blur-2xl
                            lg:block
                        "
                    />


                    <div
                        className="
                            relative
                            z-10
                            mx-auto
                            grid
                            max-w-7xl
                            items-center
                            gap-12
                            px-5
                            sm:px-6
                            lg:grid-cols-2
                            lg:gap-16
                            lg:px-8
                        "
                    >

                        {/* Hero Content */}

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

                                <Scale
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
                                DOT Compliances
                                <span className="block text-[#e3292f]">
                                    And Licensing.
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


                        {/* Hero Visual */}

                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="relative mx-auto w-full max-w-xl"
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
                                    shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-[#e3292f]/30
                                    hover:shadow-[0_30px_80px_rgba(227,41,47,0.14)]
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
                                        bg-[#e3292f]/10
                                        blur-3xl
                                        transition-transform
                                        duration-700
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
                                        h-20
                                        w-20
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-[#e3292f]/10
                                        text-[#e3292f]
                                        transition-all
                                        duration-500
                                        group-hover:bg-[#e3292f]
                                        group-hover:text-white
                                        group-hover:scale-105
                                        lg:mx-0
                                    "
                                >
                                    <FileCheck2
                                        size={38}
                                        strokeWidth={1.5}
                                    />
                                </div>


                                <h2
                                    className="
                                        relative
                                        z-10
                                        mt-7
                                        text-center
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        sm:text-3xl
                                        lg:text-left
                                    "
                                >
                                    Compliance
                                    <span className="text-[#e3292f]">
                                        {" "}•{" "}
                                    </span>
                                    Licensing
                                </h2>


                                <p
                                    className="
                                        relative
                                        z-10
                                        mx-auto
                                        mt-4
                                        max-w-md
                                        text-center
                                        text-sm
                                        leading-7
                                        text-slate-500
                                        lg:mx-0
                                        lg:text-left
                                    "
                                >
                                    Structured support for organizations
                                    navigating connectivity, documentation
                                    and applicable licensing requirements.
                                </p>


                                {/* Mini Cards */}

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
                                        ["Compliance", ShieldCheck],
                                        ["Licensing", FileText],
                                        ["Network", Network],
                                        ["Support", Settings],
                                    ].map(([label, Icon]) => (

                                        <div
                                            key={label}
                                            className="
                                                group/item
                                                flex
                                                items-center
                                                gap-3
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-3
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-[#e3292f]/30
                                                hover:bg-red-50
                                            "
                                        >

                                            <Icon
                                                size={18}
                                                className="
                                                    shrink-0
                                                    text-[#e3292f]
                                                    transition-transform
                                                    duration-300
                                                    group-hover/item:scale-110
                                                "
                                            />

                                            <span
                                                className="
                                                    text-xs
                                                    font-bold
                                                    text-slate-700
                                                "
                                            >
                                                {label}
                                            </span>

                                        </div>

                                    ))}

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
                                        duration-700
                                        group-hover:w-full
                                    "
                                />

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
                                grid
                                max-w-6xl
                                items-center
                                gap-12
                                lg:grid-cols-2
                                lg:gap-20
                            "
                        >

                            {/* Content */}

                            <div
                                data-aos="fade-right"
                                className="text-center lg:text-left"
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
                                    Compliance & Licensing
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
                                    Navigate connectivity
                                    <span className="block text-[#e3292f]">
                                        requirements with confidence.
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
                                    TEJAYS helps organizations approach
                                    connectivity and network compliance with
                                    a more structured and professional process.
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
                                    From documentation support to licensing
                                    guidance, our approach is designed to help
                                    businesses better manage their network
                                    requirements.
                                </p>


                                {/* Benefits */}

                                <div
                                    className="
                                        mx-auto
                                        mt-8
                                        grid
                                        max-w-xl
                                        grid-cols-2
                                        gap-3
                                        lg:mx-0
                                    "
                                >

                                    {complianceFeatures.map((item, index) => (

                                        <div
                                            key={item}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 60}
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-3
                                                border
                                                border-slate-200
                                                bg-white
                                                p-3
                                                text-left
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-[#e3292f]/40
                                                hover:bg-red-50/40
                                                hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]
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
                                                    text-xs
                                                    font-semibold
                                                    leading-5
                                                    text-slate-700
                                                "
                                            >
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* Right Visual */}

                            <div
                                data-aos="fade-left"
                                className="mx-auto w-full max-w-xl"
                            >

                                <div
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        border
                                        border-slate-200
                                        bg-red-50
                                        p-6
                                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-[#e3292f]/30
                                        hover:shadow-[0_30px_80px_rgba(227,41,47,0.12)]
                                        sm:p-8
                                    "
                                >

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
                                            bg-white
                                            text-[#e3292f]
                                            shadow-sm
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            group-hover:scale-105
                                            lg:mx-0
                                        "
                                    >
                                        <Globe2
                                            size={30}
                                            strokeWidth={1.5}
                                        />
                                    </div>


                                    <h3
                                        className="
                                            relative
                                            z-10
                                            mt-7
                                            text-center
                                            text-2xl
                                            font-bold
                                            text-slate-900
                                            sm:text-3xl
                                            lg:text-left
                                        "
                                    >
                                        Structured
                                        <span className="mx-2 text-[#e3292f]">
                                            •
                                        </span>
                                        Professional
                                    </h3>


                                    <p
                                        className="
                                            relative
                                            z-10
                                            mx-auto
                                            mt-4
                                            max-w-md
                                            text-center
                                            text-sm
                                            leading-7
                                            text-slate-500
                                            lg:mx-0
                                            lg:text-left
                                        "
                                    >
                                        A compliance-focused approach helps
                                        businesses maintain better visibility
                                        across important connectivity and
                                        licensing requirements.
                                    </p>


                                    <div
                                        className="
                                            relative
                                            z-10
                                            mt-8
                                            grid
                                            grid-cols-3
                                            gap-2
                                            sm:gap-3
                                        "
                                    >

                                        {[
                                            ["Docs", "Support"],
                                            ["License", "Guidance"],
                                            ["Network", "Focus"],
                                        ].map(([value, label]) => (

                                            <div
                                                key={label}
                                                className="
                                                    border
                                                    border-slate-200
                                                    bg-white
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

                                                <p
                                                    className="
                                                        text-sm
                                                        font-bold
                                                        text-slate-900
                                                        sm:text-base
                                                    "
                                                >
                                                    {value}
                                                </p>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-[9px]
                                                        uppercase
                                                        tracking-wider
                                                        text-slate-500
                                                        sm:text-[10px]
                                                    "
                                                >
                                                    {label}
                                                </p>

                                            </div>

                                        ))}

                                    </div>


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
                    FEATURE CARDS
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
                                Our Approach
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
                                Compliance made
                                <span className="text-[#e3292f]">
                                    {" "}simpler.
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
                                Professional support designed around
                                connectivity, documentation and licensing
                                requirements.
                            </p>

                        </div>


                        <div
                            className="
                                mx-auto
                                mt-12
                                grid
                                max-w-6xl
                                grid-cols-2
                                gap-4
                                lg:grid-cols-4
                                lg:gap-5
                            "
                        >

                            {complianceBenefits.map((item, index) => {

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
                                            hover:shadow-[0_20px_50px_rgba(227,41,47,0.10)]
                                            sm:p-6
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
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#e3292f]
                                                group-hover:text-white
                                                group-hover:scale-105
                                            "
                                        >
                                            <Icon size={26} strokeWidth={1.7} />
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

                    {/* Background Glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-32
                            top-1/2
                            h-80
                            w-80
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
                            -right-32
                            top-1/2
                            h-80
                            w-80
                            -translate-y-1/2
                            rounded-full
                            bg-red-50
                            blur-[100px]
                        "
                    />


                    {/* Decorative Lines */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-[8%]
                            top-[18%]
                            hidden
                            h-24
                            w-24
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
                            right-[8%]
                            bottom-[18%]
                            hidden
                            h-32
                            w-32
                            rounded-full
                            border
                            border-[#e3292f]/10
                            lg:block
                        "
                    />


                    {/* Main CTA Card */}

                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
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
                                group
                                relative
                                overflow-hidden
                                border
                                border-slate-200
                                bg-white
                                px-6
                                py-12
                                text-center
                                shadow-[0_20px_70px_rgba(15,23,42,0.08)]
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-[#e3292f]/20
                                hover:shadow-[0_30px_90px_rgba(227,41,47,0.12)]
                                sm:px-10
                                sm:py-14
                                lg:px-16
                                lg:py-16
                            "
                        >

                            {/* Card Glow */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    left-1/2
                                    top-0
                                    h-48
                                    w-72
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-[#e3292f]/10
                                    blur-3xl
                                    transition-transform
                                    duration-700
                                    group-hover:scale-150
                                "
                            />


                            {/* Top Accent */}

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-0
                                    h-1
                                    w-20
                                    -translate-x-1/2
                                    bg-[#e3292f]
                                    transition-all
                                    duration-500
                                    group-hover:w-36
                                "
                            />


                            {/* Label */}

                            <div
                                className="
                                    relative
                                    z-10
                                    inline-flex
                                    items-center
                                    gap-3
                                    border
                                    border-[#e3292f]/15
                                    bg-red-50/70
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
                                        shadow-[0_0_0_5px_rgba(227,41,47,0.08)]
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
                                Need help with your
                                <span className="block text-[#e3292f]">
                                    connectivity requirements?
                                </span>
                            </h2>


                            {/* Description */}

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
                                Talk to the TEJAYS team about your requirements
                                and explore the right connectivity and compliance
                                solution for your organization.
                            </p>


                            {/* CTA Buttons */}

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
                                        group/btn
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
                                            group-hover/btn:translate-x-1
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
                                        px-8
                                        py-4
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
                                    Explore Services
                                </Link>

                            </div>


                            {/* Bottom Trust Points */}

                            <div
                                className="
                                    relative
                                    z-10
                                    mx-auto
                                    mt-10
                                    grid
                                    max-w-2xl
                                    grid-cols-1
                                    gap-3
                                    border-t
                                    border-slate-100
                                    pt-7
                                    sm:grid-cols-3
                                "
                            >

                                {[
                                    "Professional Support",
                                    "Reliable Connectivity",
                                    "Business-Focused Solutions",
                                ].map((item, index) => (

                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            text-xs
                                            font-semibold
                                            text-slate-500
                                            transition-colors
                                            duration-300
                                            hover:text-[#e3292f]
                                        "
                                    >

                                        <CheckCircle2
                                            size={15}
                                            className="shrink-0 text-[#e3292f]"
                                        />

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>


                            {/* Bottom Hover Line */}

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
                                    w-0
                                    bg-[#e3292f]
                                    transition-all
                                    duration-700
                                    group-hover:w-full
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