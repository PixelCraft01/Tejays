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
        title: "Reliable Connectivity",
        description:
            "Stable MPLS connectivity designed for business-critical communication.",
        icon: Network,
    },
    {
        title: "Secure Network",
        description:
            "Private and controlled network infrastructure for secure business traffic.",
        icon: ShieldCheck,
    },
    {
        title: "Consistent Performance",
        description:
            "Optimized connectivity for predictable application and network performance.",
        icon: Zap,
    },
    {
        title: "Scalable Infrastructure",
        description:
            "Flexible network architecture that grows with your business requirements.",
        icon: Server,
    },
    {
        title: "Multi-Location Access",
        description:
            "Connect offices and business locations through a unified network.",
        icon: Globe2,
    },
    {
        title: "Professional Support",
        description:
            "Dedicated technical assistance for dependable enterprise connectivity.",
        icon: Signal,
    },
];


/* =========================================================
   MPLS VPN
========================================================= */

export default function MPLSVPN() {

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
                                    Secure

                                    <span
                                        className="
                                            block
                                            text-[#e3292f]
                                        "
                                    >
                                        MPLS VPN Connectivity.
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
                                    Enterprise-grade MPLS VPN connectivity
                                    designed to securely connect multiple
                                    business locations with reliable,
                                    scalable and high-performance networking.
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
                                            <Router size={20} />
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
                                                {" "}Secure.
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
                                            Private network connectivity
                                            designed to connect offices,
                                            applications and business
                                            locations efficiently.
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
                                            ["Secure", "Network"],
                                            ["Stable", "Performance"],
                                            ["Multi", "Location"],
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
                    FEATURES
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
                            top-20
                            h-72
                            w-72
                            -translate-x-1/2
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
                                MPLS VPN BENEFITS
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
                                    {" "}Business Networks.
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
                                Reliable MPLS VPN infrastructure that helps
                                businesses connect locations, applications
                                and teams through a secure network.
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
                        bg-slate-100
                        py-20
                        sm:py-24
                        lg:py-28
                    "
                >

                    {/* Decorative Background */}

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
                            sm:px-6
                            lg:px-8
                        "
                    >

                        <div
                            className="
                                overflow-hidden
                                rounded-3xl
                                border
                                border-[#e3292f]/10
                                bg-white
                                p-7
                                text-center
                                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                                sm:p-10
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
                                <Network size={26} />
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
                                CONNECT WITH TEJAYS
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
                                Ready for a smarter
                                <span className="block text-[#e3292f]">
                                    business network?
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
                                Talk to the TEJAYS team about your MPLS VPN
                                requirements and build a secure, reliable
                                network for your organization.
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


            {/* =====================================================
                FOOTER
            ====================================================== */}

            <Footer />

        </div>
    );
}