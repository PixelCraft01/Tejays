import {
    ArrowRight,
    CheckCircle2,
    CloudCog,
    Globe2,
    Network,
    Router,
    Server,
    ShieldCheck,
    Signal,
    UsersRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const benefits = [
    "24/7 Network Monitoring",
    "Proactive Technical Support",
    "Reliable Infrastructure",
    "Secure Network Management",
    "Performance Optimization",
    "Scalable Business Solutions",
];


const features = [
    {
        title: "Network Monitoring",
        description:
            "Continuous monitoring helps maintain stable network performance and identify issues early.",
        icon: Signal,
    },
    {
        title: "Managed Infrastructure",
        description:
            "Professional management of business-critical network infrastructure and connectivity.",
        icon: Network,
    },
    {
        title: "Security Management",
        description:
            "Security-focused network management designed to protect your business communication.",
        icon: ShieldCheck,
    },
    {
        title: "Technical Support",
        description:
            "Dedicated technical assistance for smooth and dependable business operations.",
        icon: UsersRound,
    },
    {
        title: "Performance Optimization",
        description:
            "Network performance is continuously optimized for demanding business applications.",
        icon: Server,
    },
    {
        title: "Scalable Solutions",
        description:
            "Flexible managed services that can grow with your organization's requirements.",
        icon: CloudCog,
    },
];


export default function ManagedServices() {

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
                                    Managed

                                    <span
                                        className="
                                            block
                                            text-[#e3292f]
                                        "
                                    >
                                        Network Services.
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
                                    Professional connectivity and network
                                    solutions designed for reliable, secure
                                    and high-performance business communication.
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
                                RIGHT CARD
                            ================================================== */}

                            <div
                                data-aos="fade-left"
                                data-aos-duration="900"
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
                                        text-left
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
                                            <Router size={20} />
                                        </div>

                                    </div>


                                    {/* Card Content */}

                                    <div
                                        className="
        relative
        z-10
        mt-8
        text-center
        lg:text-left
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
                                            Manage.

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
            lg:mx-0
        "
                                        >
                                            Managed network services built
                                            to support reliable connectivity,
                                            secure infrastructure and
                                            business-critical operations.
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
                                            <Network size={23} />
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
                                            ["24/7", "Monitoring"],
                                            ["Secure", "Network"],
                                            ["Proactive", "Support"],
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
                    BENEFITS
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

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div
                            className="
                                grid
                                items-center
                                gap-12
                                lg:grid-cols-2
                                lg:gap-20
                            "
                        >

                            {/* LEFT */}

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
                                    Enterprise Benefits
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
                                    Managed infrastructure

                                    <span className="block text-[#e3292f]">
                                        that works for you.
                                    </span>
                                </h2>


                                <p
                                    className="
                                        mx-auto
                                        mt-5
                                        max-w-xl
                                        text-sm
                                        leading-7
                                        text-slate-500
                                        sm:text-base
                                        sm:leading-8
                                        lg:mx-0
                                    "
                                >
                                    Let TEJAYS manage your network environment
                                    so your organization can focus on business
                                    operations, productivity and growth.
                                </p>

                            </div>


                            {/* BENEFITS */}

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
                                            items-center
                                            justify-start
                                            gap-2
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
                                            hover:shadow-md
                                            sm:gap-3
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
                            -left-32
                            top-20
                            h-80
                            w-80
                            rounded-full
                            bg-[#e3292f]/5
                            blur-3xl
                        "
                    />

                    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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
                                Managed Service Solutions
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
                                Professional management.

                                <span className="block text-[#e3292f]">
                                    Better performance.
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
                                A complete approach to managing your business
                                connectivity and network infrastructure.
                            </p>

                        </div>


                        {/* Feature Cards */}

                        <div
                            className="
        mx-auto
        mt-12
        grid
        w-full
        max-w-5xl
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
                    sm:p-6
                    lg:items-start
                    lg:p-7
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
                        shrink-0
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
                            bg-[#e3292f]/10
                            blur-3xl
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
                                rounded-3xl
                                border
                                border-[#e3292f]/10
                                bg-white
                                px-6
                                py-10
                                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                                sm:px-10
                                sm:py-14
                                lg:px-16
                                lg:py-16
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
                                Ready for smarter

                                <span className="block text-[#e3292f]">
                                    managed services?
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
                                Talk to the TEJAYS team about your corporate
                                network requirements and discover a managed
                                solution built around your organization.
                            </p>


                            <div
                                className="
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

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}