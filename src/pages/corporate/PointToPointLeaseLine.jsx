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

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function PointToPointLeaseLine() {

    const features = [
        {
            title: "Dedicated Connectivity",
            description:
                "Private point-to-point connectivity designed for reliable enterprise communication.",
            icon: Network,
        },
        {
            title: "High Performance",
            description:
                "Consistent network performance for business-critical applications and operations.",
            icon: Zap,
        },
        {
            title: "Secure Communication",
            description:
                "Dedicated connectivity helps maintain secure communication between business locations.",
            icon: ShieldCheck,
        },
        {
            title: "Stable Network",
            description:
                "Reliable connectivity designed to support continuous business operations.",
            icon: Signal,
        },
        {
            title: "Scalable Infrastructure",
            description:
                "Flexible network architecture that can grow with your organization's requirements.",
            icon: Server,
        },
        {
            title: "Professional Support",
            description:
                "Technical assistance to help maintain dependable enterprise connectivity.",
            icon: Router,
        },
    ];

    const benefits = [
        "Dedicated point-to-point connectivity",
        "Reliable inter-office communication",
        "Stable network performance",
        "Secure data transfer",
        "Business-ready infrastructure",
        "Scalable enterprise connectivity",
    ];

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
                                    Connect

                                    <span
                                        className="
                                            block
                                            text-[#e3292f]
                                        "
                                    >
                                        Business Locations.
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
                                    Dedicated point-to-point connectivity
                                    designed for secure, reliable and
                                    high-performance communication between
                                    business locations.
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
                                        text-center
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
                                                Enterprise Ready
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
                                            <Network size={20} />
                                        </div>

                                    </div>


                                    {/* Content */}

                                    <div
                                        className="
                                            relative
                                            z-10
                                            mt-8
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
                                                mt-4
                                                text-sm
                                                leading-7
                                                text-slate-500
                                            "
                                        >
                                            Dedicated connectivity designed
                                            to connect offices, branches and
                                            critical business locations.
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
                                                h-32
                                                w-32
                                                rounded-full
                                                border
                                                border-[#e3292f]/10
                                            "
                                        />

                                        <div
                                            className="
                                                absolute
                                                h-24
                                                w-24
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
                                            ["Dedicated", "Link"],
                                            ["Stable", "Network"],
                                            ["Secure", "Transfer"],
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
                    INTRO / BENEFITS
                ====================================================== */}

                <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

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
                                    Dedicated Business Connectivity
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
                                    One connection.
                                    <span className="block text-[#e3292f]">
                                        Multiple locations.
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
                                    TEJAYS Point-To-Point connectivity helps
                                    organizations establish dependable links
                                    between offices, branches, data centers
                                    and other critical business locations.
                                </p>

                            </div>


                            {/* RIGHT */}

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
                                    {
                                        title: "Dedicated Link",
                                        text: "Private connectivity between important business locations.",
                                        icon: Globe2,
                                    },
                                    {
                                        title: "Reliable Access",
                                        text: "Stable performance for day-to-day enterprise operations.",
                                        icon: Signal,
                                    },
                                    {
                                        title: "Secure Network",
                                        text: "Designed to support protected business communication.",
                                        icon: ShieldCheck,
                                    },
                                    {
                                        title: "Scalable",
                                        text: "Flexible infrastructure for growing organizations.",
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
                                                sm:p-5
                                            "
                                        >

                                            <div
                                                className="
                                                    mx-auto
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

                <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24 lg:py-28">

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
                                Why Choose TEJAYS
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
                                Built for
                                <span className="text-[#e3292f]">
                                    {" "}business connectivity.
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
                                A dependable point-to-point network solution
                                designed around enterprise communication,
                                performance and security requirements.
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
                                        data-aos-delay={index * 70}
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
                    BENEFITS
                ====================================================== */}

                <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

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
            bg-red-100/60
            blur-3xl
        "
                    />

                    <div
                        className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[30rem]
            w-[30rem]
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
            sm:px-8
            lg:px-10
        "
                    >

                        <div
                            className="
                grid
                items-center
                gap-14
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-20
            "
                        >

                            {/* =================================================
    LEFT CONTENT
================================================= */}

                            <div
                                data-aos="fade-right"
                                className="
        w-full
        text-center
        lg:text-left
    "
                            >

                                {/* =================================================
        LABEL
    ================================================= */}

                                <div
                                    className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-red-100
            bg-red-50
            px-3
            py-1.5
        "
                                >

                                    <span
                                        className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#e3292f]
            "
                                    />

                                    <span
                                        className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#e3292f]
            "
                                    >
                                        WHAT YOU GET
                                    </span>

                                </div>


                                {/* =================================================
        HEADING
    ================================================= */}

                                <h2
                                    className="
            mx-auto
            mt-5
            max-w-2xl
            text-center
            text-3xl
            font-black
            leading-[1.1]
            tracking-tight
            text-slate-900
            sm:text-4xl
            lg:mx-0
            lg:text-left
            lg:text-5xl
        "
                                >
                                    A Network You Can

                                    <span
                                        className="
                text-[#e3292f]
            "
                                    >
                                        {" "}Depend On
                                    </span>

                                </h2>


                                {/* =================================================
        DESCRIPTION
    ================================================= */}

                                <p
                                    className="
            mx-auto
            mt-5
            max-w-xl
            text-center
            text-sm
            leading-7
            text-slate-500
            sm:text-base
            lg:mx-0
            lg:text-left
        "
                                >
                                    Get dependable fiber connectivity designed for
                                    high-performance business communication, secure
                                    operations and long-term network growth.
                                </p>


                                {/* =================================================
        BENEFITS
    ================================================= */}

                                <div
                                    data-aos="fade-up"
                                    className="
            mx-auto
            mt-9
            grid
            w-full
            max-w-2xl
            grid-cols-2
            gap-3
            text-left
            sm:gap-4
            lg:mx-0
        "
                                >

                                    {[
                                        "Dedicated fiber connectivity",
                                        "High-speed business internet",
                                        "Reliable network performance",
                                        "Secure communication infrastructure",
                                        "Scalable bandwidth options",
                                        "Professional technical support",
                                    ].map((item, index) => (

                                        <div
                                            key={item}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 60}
                                            className="
                    group
                    relative
                    flex
                    min-h-[68px]
                    items-center
                    gap-2.5
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e3292f]/25
                    hover:bg-white
                    hover:shadow-[0_12px_30px_rgba(227,41,47,0.08)]
                    sm:gap-3
                    sm:px-4
                "
                                        >

                                            {/* Hover Glow */}

                                            <div
                                                className="
                        pointer-events-none
                        absolute
                        -right-6
                        -top-6
                        h-16
                        w-16
                        rounded-full
                        bg-red-50
                        opacity-0
                        blur-xl
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                                            />


                                            {/* Icon */}

                                            <div
                                                className="
                        relative
                        z-10
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-red-50
                        text-[#e3292f]
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:bg-[#e3292f]
                        group-hover:text-white
                    "
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    strokeWidth={2}
                                                />
                                            </div>


                                            {/* Text */}

                                            <span
                                                className="
                        relative
                        z-10
                        text-[10px]
                        font-semibold
                        leading-4
                        text-slate-700
                        transition-colors
                        duration-300
                        group-hover:text-slate-900
                        sm:text-sm
                        sm:leading-5
                    "
                                            >
                                                {item}
                                            </span>


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

                                    ))}

                                </div>

                            </div>


                            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

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
                        rounded-[2rem]
                        border
                        border-red-100
                        bg-red-100
                        p-6
                        shadow-[0_25px_70px_rgba(227,41,47,0.08)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-red-200
                        hover:shadow-[0_35px_90px_rgba(227,41,47,0.14)]
                        sm:p-8
                    "
                                >

                                    {/* =================================================
                        CARD GLOW
                    ================================================= */}

                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-56
                            w-56
                            rounded-full
                            bg-white
                            blur-3xl
                            transition-transform
                            duration-700
                            group-hover:scale-125
                        "
                                    />

                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            -bottom-24
                            -left-20
                            h-52
                            w-52
                            rounded-full
                            bg-red-50
                            blur-3xl
                        "
                                    />


                                    <div className="relative z-10">

                                        {/* =================================================
                            CARD HEADER
                        ================================================= */}

                                        <div
                                            className="
                                flex
                                items-center
                                justify-between
                            "
                                        >

                                            <div>

                                                <p
                                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#e3292f]
                                    "
                                                >
                                                    TEJAYS NETWORK
                                                </p>

                                                <h3
                                                    className="
                                        mt-2
                                        text-xl
                                        font-black
                                        tracking-tight
                                        text-slate-900
                                        sm:text-2xl
                                    "
                                                >
                                                    Fiber Infrastructure
                                                </h3>

                                            </div>


                                            <div
                                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#e3292f]
                                    text-white
                                    shadow-[0_10px_25px_rgba(227,41,47,0.20)]
                                    transition-all
                                    duration-300
                                    group-hover:rotate-6
                                    group-hover:scale-105
                                "
                                            >
                                                <Globe2 size={21} />
                                            </div>

                                        </div>


                                        {/* =================================================
                            NETWORK VISUAL
                        ================================================= */}

                                        <div
                                            className="
                                relative
                                my-10
                                flex
                                h-36
                                items-center
                                justify-center
                            "
                                        >

                                            {/* Horizontal Line */}

                                            <div
                                                className="
                                    absolute
                                    left-[12%]
                                    right-[12%]
                                    top-1/2
                                    h-[2px]
                                    -translate-y-1/2
                                    bg-gradient-to-r
                                    from-transparent
                                    via-[#e3292f]/50
                                    to-transparent
                                "
                                            />


                                            {/* Left Node */}

                                            <div
                                                className="
                                    absolute
                                    left-[7%]
                                    top-1/2
                                    flex
                                    h-10
                                    w-10
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-red-100
                                    bg-white
                                    text-[#e3292f]
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    group-hover:-translate-x-1
                                "
                                            >
                                                <Router size={17} />
                                            </div>


                                            {/* Center */}

                                            <div
                                                className="
                                    relative
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                "
                                            >

                                                {/* Outer Ring */}

                                                <div
                                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        border
                                        border-[#e3292f]/15
                                        transition-all
                                        duration-700
                                        group-hover:scale-110
                                        group-hover:border-[#e3292f]/30
                                    "
                                                />

                                                {/* Inner Ring */}

                                                <div
                                                    className="
                                        absolute
                                        inset-3
                                        rounded-full
                                        border
                                        border-[#e3292f]/20
                                    "
                                                />

                                                {/* Icon */}

                                                <div
                                                    className="
                                        relative
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#e3292f]
                                        text-white
                                        shadow-[0_10px_30px_rgba(227,41,47,0.25)]
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                    "
                                                >
                                                    <Network size={20} />
                                                </div>

                                            </div>


                                            {/* Right Node */}

                                            <div
                                                className="
                                    absolute
                                    right-[7%]
                                    top-1/2
                                    flex
                                    h-10
                                    w-10
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-red-100
                                    bg-white
                                    text-[#e3292f]
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-1
                                "
                                            >
                                                <Signal size={17} />
                                            </div>

                                        </div>


                                        {/* =================================================
                            INFO CARDS
                        ================================================= */}

                                        <div
                                            className="
                                grid
                                grid-cols-2
                                gap-3
                            "
                                        >

                                            {/* Reliable */}

                                            <div
                                                className="
                                    group/info
                                    rounded-xl
                                    border
                                    border-red-100
                                    bg-white/80
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white
                                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                                "
                                            >

                                                <Signal
                                                    size={19}
                                                    className="
                                        text-[#e3292f]
                                        transition-transform
                                        duration-300
                                        group-hover/info:scale-110
                                    "
                                                />

                                                <p
                                                    className="
                                        mt-3
                                        text-sm
                                        font-bold
                                        text-slate-900
                                    "
                                                >
                                                    Consistent
                                                </p>

                                                <p
                                                    className="
                                        mt-1
                                        text-[10px]
                                        leading-5
                                        text-slate-500
                                    "
                                                >
                                                    Stable connectivity for business.
                                                </p>

                                            </div>


                                            {/* Secure */}

                                            <div
                                                className="
                                    group/info
                                    rounded-xl
                                    border
                                    border-red-100
                                    bg-white/80
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white
                                    hover:shadow-[0_10px_25px_rgba(227,41,47,0.08)]
                                "
                                            >

                                                <ShieldCheck
                                                    size={19}
                                                    className="
                                        text-[#e3292f]
                                        transition-transform
                                        duration-300
                                        group-hover/info:scale-110
                                    "
                                                />

                                                <p
                                                    className="
                                        mt-3
                                        text-sm
                                        font-bold
                                        text-slate-900
                                    "
                                                >
                                                    Protected
                                                </p>

                                                <p
                                                    className="
                                        mt-1
                                        text-[10px]
                                        leading-5
                                        text-slate-500
                                    "
                                                >
                                                    Secure network infrastructure.
                                                </p>

                                            </div>

                                        </div>


                                        {/* =================================================
                            STATUS
                        ================================================= */}

                                        <div
                                            className="
                                mt-3
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                border
                                border-red-100
                                bg-white/70
                                px-4
                                py-3
                            "
                                        >

                                            <div className="flex items-center gap-2">

                                                <span
                                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-500
                                        shadow-[0_0_8px_rgba(16,185,129,0.45)]
                                    "
                                                />

                                                <span
                                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-slate-600
                                    "
                                                >
                                                    Network Ready
                                                </span>

                                            </div>

                                            <span
                                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-[#e3292f]
                                "
                                            >
                                                FIBER
                                            </span>

                                        </div>

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
                            -left-32
                            top-1/2
                            h-72
                            w-72
                            -translate-y-1/2
                            rounded-full
                            bg-[#e3292f]/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            top-1/2
                            h-72
                            w-72
                            -translate-y-1/2
                            rounded-full
                            bg-white
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
                                rounded-3xl
                                border
                                border-[#e3292f]/10
                                bg-white
                                p-8
                                shadow-[0_25px_70px_rgba(15,23,42,0.07)]
                                sm:p-12
                                lg:p-14
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
                                    bg-red-50
                                    text-[#e3292f]
                                "
                            >
                                <Network size={27} />
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
                                Ready to connect your
                                <span className="block text-[#e3292f]">
                                    business locations?
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
                                Talk to the TEJAYS team about your point-to-point
                                connectivity requirements and discover the
                                right corporate network solution.
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

            </main>

            <Footer />

        </div>
    );
}

export default PointToPointLeaseLine;