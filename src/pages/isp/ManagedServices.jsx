import {
    ArrowRight,
    CheckCircle2,
    Headphones,
    Network,
    Router,
    Settings,
    ShieldCheck,
    Activity,
    Gauge,
} from "lucide-react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


/* =========================================================
   MANAGED SERVICES DATA
========================================================= */

const managedServices = [
    {
        title: "Network Monitoring",
        text: "Continuous network monitoring designed to identify connectivity issues and maintain dependable performance.",
        icon: Activity,
    },
    {
        title: "Network Management",
        text: "Professional management of network infrastructure to support stable and efficient business connectivity.",
        icon: Network,
    },
    {
        title: "Technical Support",
        text: "Responsive technical assistance to help businesses maintain reliable network operations.",
        icon: Headphones,
    },
    {
        title: "Infrastructure Management",
        text: "Managed network infrastructure designed around your organization's connectivity requirements.",
        icon: Router,
    },
    {
        title: "Security Management",
        text: "Network-focused security practices designed to support safer and more controlled connectivity.",
        icon: ShieldCheck,
    },
    {
        title: "Performance Optimization",
        text: "Proactive network optimization focused on improving performance, reliability and efficiency.",
        icon: Gauge,
    },
];


const managedBenefits = [
    "Proactive network monitoring",
    "Professional technical support",
    "Reliable network management",
    "Improved network visibility",
    "Secure infrastructure management",
    "Scalable business connectivity",
];


/* =========================================================
   MANAGED SERVICES PAGE
========================================================= */

export default function ManagedServices() {
    return (
        <div className="min-h-screen overflow-x-clip bg-white text-slate-900">

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
            top-[18%]
            hidden
            h-52
            w-52
            rounded-full
            border
            border-[#e3292f]/10
            lg:block
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
                lg:gap-16
                xl:gap-20
            "
                        >

                            {/* =================================================
                LEFT — CONTENT
            ================================================== */}

                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
                                className="
                    mx-auto
                    w-full
                    max-w-2xl
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

                                    <Settings
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
                                    Managed
                                    <span className="block text-[#e3292f]">
                                        Services.
                                    </span>
                                </h1>


                                {/* Description */}

                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="200"
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
                RIGHT — IMAGE
            ================================================== */}

                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
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
                        -right-10
                        -top-10
                        h-48
                        w-48
                        rounded-full
                        bg-[#e3292f]/15
                        blur-3xl
                    "
                                />

                                <div
                                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white
                        bg-white
                        p-2
                        shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.15)]   
                    "
                                >

                                    {/* Image */}

                                    <div className="relative overflow-hidden rounded-2xl">

                                        <img
                                            src="/Tejays/assets/managed-services.jpg"
                                            alt="TEJAYS Managed Services"
                                            className="
                                h-[300px]
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-105
                                sm:h-[400px]
                                lg:h-[470px]
                            "
                                        />

                                        {/* Image Overlay */}

                                        <div
                                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#07111f]/65
                                via-transparent
                                to-transparent
                            "
                                        />

                                        {/* Bottom Label */}

                                        <div
                                            className="
                                absolute
                                bottom-5
                                left-5
                                right-5
                                border
                                border-white/20
                                bg-[#07111f]/45
                                px-4
                                py-3
                                text-left
                                backdrop-blur-md
                                sm:bottom-6
                                sm:left-6
                                sm:right-6
                            "
                                        >

                                            <p
                                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/60
                                "
                                            >
                                                TEJAYS NETWORK
                                            </p>

                                            <p
                                                className="
                                    mt-1
                                    text-sm
                                    font-bold
                                    text-white
                                    sm:text-base
                                "
                                            >
                                                Managed Network Infrastructure
                                            </p>

                                        </div>

                                    </div>


                                    {/* Red Bottom Line */}

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
                    {/* Background Glow */}

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
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-slate-100
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
                max-w-7xl
                items-center
                gap-14
                lg:grid-cols-2
                lg:gap-20
            "
                        >

                            {/* =================================================
                LEFT CONTENT
            ================================================== */}

                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
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
                                    Managed Network
                                </p>


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
                                    Network management
                                    <span className="block text-[#e3292f]">
                                        without the complexity.
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
                                    TEJAYS Managed Services helps organizations
                                    maintain reliable network operations through
                                    professional monitoring, management and
                                    technical support.
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
                                    Our managed approach is designed to reduce
                                    network complexity and give businesses better
                                    visibility, support and control over their
                                    connectivity infrastructure.
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
        sm:gap-4
    "
                                >
                                    {managedBenefits.map((item, index) => (

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
                RIGHT — MANAGED SERVICES VISUAL
            ================================================== */}

                            <div
                                data-aos="fade-left"
                                data-aos-duration="900"
                                className="mx-auto w-full max-w-xl"
                            >

                                <div
                                    className="
                        group
                        relative
                        overflow-hidden
                        border
                        border-slate-200
                        bg-slate-50
                        p-5
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-[#e3292f]/30
                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.12)]
                        sm:p-7
                    "
                                >

                                    {/* Top Header */}

                                    <div
                                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-200
                            pb-5
                        "
                                    >

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#e3292f]
                                    text-white
                                    shadow-[0_10px_25px_rgba(227,41,47,0.20)]
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                "
                                            >
                                                <Settings
                                                    size={21}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <div>

                                                <p className="text-sm font-bold text-slate-900">
                                                    Managed Network
                                                </p>

                                                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                                    TEJAYS SERVICES
                                                </p>

                                            </div>

                                        </div>


                                        {/* Status */}

                                        <div
                                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#e3292f]/15
                                bg-white
                                px-3
                                py-1.5
                            "
                                        >

                                            <span
                                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#e3292f]
                                    shadow-[0_0_10px_rgba(227,41,47,0.7)]
                                "
                                            />

                                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                                                Active
                                            </span>

                                        </div>

                                    </div>


                                    {/* Main Visual */}

                                    <div
                                        className="
                            relative
                            mt-6
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            sm:p-6
                        "
                                    >

                                        {/* Decorative Glow */}

                                        <div
                                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-1/2
                                h-48
                                w-48
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[#e3292f]/10
                                blur-3xl
                            "
                                        />


                                        {/* Center */}

                                        <div className="relative flex justify-center">

                                            <div
                                                className="
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[#e3292f]/20
                                    bg-red-50
                                    text-[#e3292f]
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:rotate-3
                                "
                                            >
                                                <Network
                                                    size={34}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                        </div>


                                        {/* Connection Line */}

                                        <div className="relative mt-5 flex items-center justify-center">

                                            <div className="h-px w-full bg-slate-200" />

                                            <div
                                                className="
                                    absolute
                                    left-1/2
                                    h-2
                                    w-2
                                    -translate-x-1/2
                                    rounded-full
                                    bg-[#e3292f]
                                    shadow-[0_0_12px_rgba(227,41,47,0.7)]
                                "
                                            />

                                        </div>


                                        {/* Service Cards */}

                                        <div
                                            className="
                                relative
                                mt-5
                                grid
                                grid-cols-3
                                gap-2
                                sm:gap-3
                            "
                                        >

                                            {[
                                                {
                                                    icon: Activity,
                                                    title: "Monitor",
                                                },
                                                {
                                                    icon: ShieldCheck,
                                                    title: "Secure",
                                                },
                                                {
                                                    icon: Headphones,
                                                    title: "Support",
                                                },
                                            ].map((item) => {

                                                const Icon = item.icon;

                                                return (
                                                    <div
                                                        key={item.title}
                                                        className="
                                            group/item
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-2
                                            py-4
                                            text-center
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#e3292f]/30
                                            hover:bg-red-50
                                        "
                                                    >

                                                        <Icon
                                                            size={20}
                                                            className="
                                                text-[#e3292f]
                                                transition-transform
                                                duration-300
                                                group-hover/item:scale-110
                                            "
                                                        />

                                                        <span
                                                            className="
                                                mt-2
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-slate-600
                                                sm:text-xs
                                            "
                                                        >
                                                            {item.title}
                                                        </span>

                                                    </div>
                                                );

                                            })}

                                        </div>

                                    </div>


                                    {/* Bottom Stats */}

                                    <div
                                        className="
                            mt-5
                            grid
                            grid-cols-3
                            gap-2
                            sm:gap-3
                        "
                                    >

                                        {[
                                            ["24/7", "Monitoring"],
                                            ["Pro", "Support"],
                                            ["Smart", "Management"],
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
                                    hover:shadow-sm
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
                                        text-[8px]
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-slate-400
                                        sm:text-[10px]
                                    "
                                                >
                                                    {label}
                                                </p>

                                            </div>

                                        ))}

                                    </div>


                                    {/* Bottom Line */}

                                    <div
                                        className="
                            absolute
                            bottom-0
                            left-0
                            h-1
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

                    </div>

                </section>


                {/* =====================================================
                    SERVICES
                ====================================================== */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-red-50
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
                            -left-40
                            top-20
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
                            bg-white
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

                        {/* Header */}

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
                                Our Capabilities
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
                                Managed services built around
                                <span className="block text-[#e3292f]">
                                    your network.
                                </span>
                            </h2>


                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                "
                            >
                                From monitoring to technical support, our
                                managed services help businesses maintain
                                dependable network performance.
                            </p>

                        </div>


                        {/* Cards */}

                        <div
                            className="
                                mt-12
                                grid
                                grid-cols-2
                                gap-3
                                sm:gap-5
                                lg:mt-16
                                lg:grid-cols-3
                            "
                        >

                            {managedServices.map((service, index) => {

                                const Icon = service.icon;

                                return (
                                    <div
                                        key={service.title}
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
                                            shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                                            transition-all
                                            duration-500
                                            hover:-translate-y-2
                                            hover:border-[#e3292f]/40
                                            hover:shadow-[0_25px_55px_rgba(227,41,47,0.12)]
                                            sm:p-6
                                            lg:text-left
                                        "
                                    >

                                        {/* Glow */}

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
                                                blur-2xl
                                                transition-all
                                                duration-500
                                                group-hover:scale-150
                                                group-hover:bg-[#e3292f]/10
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
                                                border-[#e3292f]/20
                                                bg-[#e3292f]/10
                                                text-[#e3292f]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#e3292f]
                                                group-hover:text-white
                                                group-hover:scale-105
                                                lg:mx-0
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
                                                transition-colors
                                                duration-300
                                                group-hover:text-[#e3292f]
                                                sm:text-lg
                                            "
                                        >
                                            {service.title}
                                        </h3>


                                        {/* Description */}

                                        <p
                                            className="
                                                relative
                                                z-10
                                                mt-2
                                                text-[10px]
                                                leading-5
                                                text-slate-500
                                                sm:text-sm
                                                sm:leading-6
                                            "
                                        >
                                            {service.text}
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
                    WHY MANAGED SERVICES
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
                            left-1/2
                            top-1/2
                            h-96
                            w-96
                            -translate-x-1/2
                            -translate-y-1/2
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
                                Why Managed Services
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
                                Focus on your business.
                                <span className="block text-[#e3292f]">
                                    Let your network be managed.
                                </span>
                            </h2>

                        </div>


                        {/* =====================================================
    FEATURE CARDS
====================================================== */}

                        <div
                            className="
        mx-auto
        mt-12
        grid
        max-w-7xl
        grid-cols-2
        gap-3
        sm:gap-5
        lg:mt-14
        lg:grid-cols-4
    "
                        >
                            {[
                                {
                                    title: "Proactive Monitoring",
                                    text: "Continuous visibility helps identify network issues before they become major disruptions.",
                                },
                                {
                                    title: "Reliable Support",
                                    text: "Professional technical support helps keep your network operations running smoothly.",
                                },
                                {
                                    title: "Better Visibility",
                                    text: "Managed infrastructure provides greater visibility into network performance and connectivity.",
                                },
                                {
                                    title: "Scalable Operations",
                                    text: "Solutions designed to grow alongside your organization's connectivity requirements.",
                                },
                            ].map((item, index) => (
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
                shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#e3292f]/30
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]

                sm:p-6
                lg:p-6
            "
                                >

                                    {/* Soft Red Glow */}
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
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:bg-[#e3292f]/15
                "
                                    />

                                    {/* Icon */}
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
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-[#e3292f]
                    group-hover:text-white
                    group-hover:shadow-[0_10px_25px_rgba(227,41,47,0.20)]

                    sm:h-12
                    sm:w-12
                "
                                    >
                                        <CheckCircle2
                                            size={18}
                                            strokeWidth={2}
                                            className="sm:h-5 sm:w-5"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 mt-4 sm:mt-5">

                                        <h3
                                            className="
                        text-sm
                        font-bold
                        leading-5
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#e3292f]

                        sm:text-base
                        sm:leading-6
                    "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                        mx-auto
                        mt-2
                        text-[10px]
                        leading-5
                        text-slate-500

                        sm:text-xs
                        sm:leading-6

                        lg:text-sm
                        lg:leading-6
                    "
                                        >
                                            {item.text}
                                        </p>

                                    </div>

                                    {/* Bottom Red Line */}
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
                            ))}
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
                        bg-[#e3292f]
                        py-16
                        sm:py-20
                    "
                >

                    {/* Decorative Circles */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-72
                            w-72
                            rounded-full
                            border-[45px]
                            border-white/10
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -left-20
                            h-72
                            w-72
                            rounded-full
                            border-[35px]
                            border-white/10
                        "
                    />


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

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/70
                                "
                            >
                                Let's Connect
                            </p>


                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-bold
                                    text-white
                                    sm:text-4xl
                                "
                            >
                                Ready for a better-managed network?
                            </h2>


                            <p
                                className="
                                    mt-3
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-white/80
                                "
                            >
                                Talk to our team about managed connectivity
                                and professional network solutions designed
                                around your business requirements.
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
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />

                        </Link>

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