import {
    ArrowRight,
    CheckCircle2,
    Globe2,
    Network,
    ShieldCheck,
    Wifi,
    Server,
    Headphones,
    MapPinned,
    Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function AboutUs() {
    const expertise = [
        {
            title: "Wide Area Networking",
            description:
                "Reliable WAN infrastructure and connectivity solutions designed for enterprise-wide communication.",
            icon: Network,
        },
        {
            title: "Wireless Networking",
            description:
                "Professional wireless LAN and MAN solutions for modern connectivity requirements.",
            icon: Wifi,
        },
        {
            title: "Network Infrastructure",
            description:
                "End-to-end infrastructure solutions covering hardware, media, network management and support.",
            icon: Server,
        },
        {
            title: "Consultancy & Support",
            description:
                "Customer-specific connectivity consultancy, maintenance and on-site technical support.",
            icon: Headphones,
        },
    ];

    const capabilities = [
        "Data, Voice & Video Communication",
        "Wireless LAN & MAN Solutions",
        "Enterprise Network Design",
        "RF Product & Connectivity Consultancy",
        "Comprehensive Maintenance",
        "Carry-In Maintenance",
        "On-Site Technical Support",
        "Networking Training Programs",
    ];

    const stats = [
        {
            value: "40+",
            label: "OFC PoPs Across India",
            icon: MapPinned,
        },
        {
            value: "24/7",
            label: "Network Support",
            icon: Headphones,
        },
        {
            value: "WAN",
            label: "Networking Expertise",
            icon: Network,
        },
        {
            value: "LAN / MAN",
            label: "Wireless Solutions",
            icon: Wifi,
        },
    ];

    return (
        <div className="relative min-h-screen overflow-x-visible bg-white">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#07111f] bg-cover bg-no-repeat bg-center py-24 sm:py-28 lg:py-24"
                style={{
                    // backgroundImage: "url('/Tejays/assets/about-tejays1-min.png')",
                    // backgroundImage: "url('/Tejays/assets/about-tejays2-min.png')",
                    // backgroundImage: "url('/Tejays/assets/ind.jpg')",
                    backgroundImage: "url('/Tejays/assets/fiber-network1.jpg')",
                    // backgroundImage: "url('/Tejays/assets/fiber-network.jpg')",
                    // backgroundImage: "url('/Tejays/assets/inff.jpg')",
                }}>

                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#e3292f]/10 blur-3xl" />

                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e3292f]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-6 lg:px-8 lg:py-14">

                    <p
                        data-aos="fade-up"
                        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-red-200
        bg-white/80
        px-4
        py-2
        text-[10px]
        font-bold
        uppercase
        tracking-[0.25em]
        text-[#e3292f]
        shadow-sm
        backdrop-blur-sm
        sm:text-xs
    "
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e3292f] shadow-[0_0_8px_rgba(227,41,47,0.5)]" />

                        About TEJAYS
                    </p>

                    <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="
                            mx-auto
                            mt-5
                            max-w-4xl
                            text-4xl
                            font-black
                            leading-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Connecting Ideas.
                        <span className="text-[#e3292f]">
                            {" "}Enabling Networks.
                        </span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-sm
                            leading-7
                            text-white
                            sm:text-base
                            sm:leading-8
                            font-semibold
                        "
                    >
                        Tejays Dynamic Ltd. is driven by a passion for cutting-edge
                        communication technology and professional networking solutions.
                    </p>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="mt-8 flex justify-center"
                    >
                        <Link
                            to="/contact-us"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                bg-[#e3292f]
                                px-7
                                py-3.5
                                text-sm
                                font-bold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-[#c91f25]
                            "
                        >
                            Talk To Us

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                </div>

            </section>


            {/* =====================================================
                WHO WE ARE
            ====================================================== */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

                <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        <div
                            data-aos="fade-right"
                            className="text-center lg:text-left"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-sm">
                                Who We Are
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                Passion for technology.
                                <span className="text-[#e3292f]">
                                    {" "}Commitment to connectivity.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                                Tejays Dynamic Ltd. is an organization with a passion
                                for cutting-edge communication technology. This passion
                                and drive has made us a pioneer provider of wireless and
                                wire-line networking infrastructure, solutions and
                                services to entities across India.
                            </p>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                                Tejays Dynamic was started by a team of professionals
                                with experience and passion in the fields of Information
                                Technology and Telecommunications.
                            </p>

                        </div>


                        {/* Visual */}

                        <div
                            data-aos="fade-left"
                            className="mx-auto w-full max-w-xl"
                        >

                            <div className="group relative overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                                <div className="relative overflow-hidden">

                                    <img
                                        src="/Tejays/assets/about-tejays3-min.png"
                                        alt="About TEJAYS"
                                        className="
                                            h-[320px]
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                            sm:h-[420px]
                                        "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#e3292f] transition-all duration-500 group-hover:w-48" />

                                    <div className="absolute bottom-5 left-5">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                                            TEJAYS DYNAMIC
                                        </p>

                                        <p className="mt-1 text-lg font-bold text-white">
                                            Network Infrastructure
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TRUSTED NETWORK PARTNER
            ====================================================== */}
            <section className="bg-slate-100 py-20 sm:py-24">

                <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">

                    <p
                        data-aos="fade-up"
                        className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]"
                    >
                        Trusted Network Partner
                    </p>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-slate-900 sm:text-4xl"
                    >
                        Networks built for organizations of every scale.
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="180"
                        className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                    >
                        Tejays Dynamic is trusted for planning, implementing and
                        maintaining access networks and WAN solutions for a wide range
                        of customers.
                    </p>

                    <div
                        className="
        mx-auto
        mt-10
        grid
        max-w-5xl

        grid-cols-2
        gap-3

        sm:gap-4

        lg:grid-cols-4
    "
                    >
                        {[
                            "Educational Institutes",
                            "Large Enterprises",
                            "SMEs",
                            "Rural Development Initiatives",
                        ].map((item, index) => (
                            <div
                                key={item}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                                className="
                group
                flex
                min-h-[145px]
                flex-col
                items-center
                justify-center

                rounded-xl

                border
                border-slate-200
                bg-white

                p-4
                text-center

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#e3292f]/40
                hover:shadow-xl

                sm:min-h-[165px]
                sm:p-6

                lg:min-h-[180px]
            "
                            >
                                <CheckCircle2
                                    size={23}
                                    className="
                    text-[#e3292f]
                    transition-transform
                    duration-300
                    group-hover:scale-110

                    sm:h-[25px]
                    sm:w-[25px]
                "
                                />

                                <p
                                    className="
                    mt-3
                    text-[11px]
                    font-semibold
                    leading-5
                    text-slate-700

                    sm:mt-4
                    sm:text-sm
                "
                                >
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p
                        data-aos="fade-up"
                        className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-slate-600"
                    >
                        ISPs, telecom majors and broadband service providers also
                        partner with Tejays Dynamic for specialized networking solutions.
                    </p>

                </div>

            </section>


            {/* =================================================
                OUR REACH
            ================================================= */}
            <section
                className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
    "
            >

                {/* =================================================
        BLURRED BACKGROUND IMAGE
    ================================================= */}
                <div className="absolute inset-0">

                    <img
                        src="/Tejays/assets/india-network-bg.jpg"
                        alt=""
                        aria-hidden="true"
                        className="
                absolute
                inset-0
                h-full
                w-full
                scale-110
                object-cover
                object-center
                blur-[7px]
            "
                    />

                    {/* White Soft Overlay */}
                    <div
                        className="
                absolute
                inset-0
                bg-white/75
            "
                    />

                    {/* Very Soft Red Tint */}
                    <div
                        className="
                absolute
                inset-0
                bg-[#e3292f]/[0.025]
            "
                    />

                </div>


                {/* =================================================
        CONTENT
    ================================================= */}
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

                    {/* =================================================
            HEADING
        ================================================= */}
                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            data-aos="fade-up"
                            className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#e3292f]
                    sm:text-sm
                "
                        >
                            Our Reach
                        </p>


                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="
                    mt-4
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                "
                        >
                            A network that reaches
                            <span className="text-[#e3292f]">
                                {" "}across India.
                            </span>
                        </h2>


                        <p
                            data-aos="fade-up"
                            data-aos-delay="180"
                            className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-600
                "
                        >
                            With OFC PoPs across India and offices in Jaipur and
                            Gurugram, we provide customers with dependable connectivity
                            and network infrastructure solutions.
                        </p>

                    </div>


                    {/* =================================================
            STATS
        ================================================= */}
                    <div
                        className="
                mt-12
                grid
                grid-cols-2
                gap-4
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
                            relative
                            overflow-hidden
                            border
                            border-white/80
                            bg-white/85
                            p-5
                            text-center
                            shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                            backdrop-blur-md
                            transition-all
                            duration-500
                            hover:-translate-y-2
                            hover:border-[#e3292f]/40
                            hover:bg-white/95
                            hover:shadow-[0_25px_55px_rgba(227,41,47,0.12)]
                            sm:p-7
                        "
                                >

                                    {/* Top Red Accent */}
                                    <div
                                        className="
                                absolute
                                left-0
                                top-0
                                h-1
                                w-0
                                bg-[#e3292f]
                                transition-all
                                duration-500
                                group-hover:w-full
                            "
                                    />


                                    {/* Soft Corner Glow */}
                                    <div
                                        className="
                                absolute
                                -right-8
                                -top-8
                                h-20
                                w-20
                                rounded-full
                                bg-[#e3292f]/5
                                blur-xl
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
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#e3292f]/15
                                bg-[#e3292f]/5
                                transition-all
                                duration-500
                                group-hover:scale-110
                                group-hover:border-[#e3292f]/30
                                group-hover:bg-[#e3292f]/10
                            "
                                    >

                                        <Icon
                                            size={23}
                                            className="
                                    text-[#e3292f]
                                "
                                        />

                                    </div>


                                    {/* Value */}
                                    <p
                                        className="
                                relative
                                mt-5
                                text-2xl
                                font-black
                                tracking-tight
                                text-slate-900
                                sm:text-3xl
                            "
                                    >
                                        {stat.value}
                                    </p>


                                    {/* Label */}
                                    <p
                                        className="
                                relative
                                mt-2
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-slate-500
                                sm:text-xs
                            "
                                    >
                                        {stat.label}
                                    </p>


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
                            );
                        })}

                    </div>


                    {/* =================================================
            NETWORK LABEL
        ================================================= */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="
                mx-auto
                mt-8
                flex
                w-fit
                items-center
                gap-2
                border
                border-white/80
                bg-white/80
                px-4
                py-2
                shadow-sm
                backdrop-blur-md
            "
                    >

                        <span
                            className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#e3292f]
                    shadow-[0_0_10px_rgba(227,41,47,0.5)]
                "
                        />

                        <span
                            className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-600
                    sm:text-[10px]
                "
                        >
                            Connected across India
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT WE DO
            ====================================================== */}

            <section className="bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            data-aos="fade-up"
                            className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]"
                        >
                            What We Do
                        </p>

                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl"
                        >
                            Complete networking solutions.
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="180"
                            className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                        >
                            We not only offer technology for connectivity, but also
                            provide real-time data, voice and video communication
                            solutions. Today, we are a total networking solutions company.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {expertise.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="
                                        group
                                        border
                                        border-slate-200
                                        bg-white
                                        p-6
                                        text-center
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-[#e3292f]/40
                                        hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                                        sm:text-left
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
                                            border-[#e3292f]/20
                                            bg-[#e3292f]/5
                                            text-[#e3292f]
                                            transition-all
                                            duration-500
                                            group-hover:rotate-3
                                            group-hover:border-[#e3292f]
                                            group-hover:bg-[#e3292f]
                                            group-hover:text-white
                                            sm:mx-0
                                        "
                                    >
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-base font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CAPABILITIES
            ====================================================== */}

            <section className="bg-slate-100 py-20 sm:py-24">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        <div
                            data-aos="fade-right"
                            className="text-center lg:text-left"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                                Our Capabilities
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                Technology backed by experience.
                            </h2>

                            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                                Our strong development and network design group enables
                                us to provide total, cost-effective solutions for
                                enterprise-wide data, voice and video connectivity.
                            </p>

                        </div>


                        <div
                            data-aos="fade-left"
                            className="grid grid-cols-2 gap-3 sm:gap-4"
                        >
                            {capabilities.map((item, index) => (
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

                p-4

                text-left

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#e3292f]/40
                hover:shadow-lg
            "
                                >
                                    <CheckCircle2
                                        size={19}
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
                SUPPORT & TRAINING
            ====================================================== */}

            <section className="bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            data-aos="fade-up"
                            className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]"
                        >
                            Beyond Connectivity
                        </p>

                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
                        >
                            Support that continues after deployment.
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="180"
                            className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                        >
                            We provide several products and services for ongoing
                            support, while also sharing our experience through
                            networking training programs.
                        </p>

                    </div>


                    <div className="mt-10 grid gap-4 sm:grid-cols-3">

                        {[
                            "Comprehensive Maintenance",
                            "Carry-In Maintenance",
                            "On-Site Support",
                        ].map((item, index) => (
                            <div
                                key={item}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="
                                    group
                                    border
                                    border-slate-200
                                    bg-white
                                    p-6
                                    text-center
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-[#e3292f]/40
                                    hover:shadow-xl
                                "
                            >

                                <ShieldCheck
                                    size={28}
                                    className="mx-auto text-[#e3292f] transition-transform duration-500 group-hover:scale-110"
                                />

                                <h3 className="mt-4 text-sm font-bold text-slate-900">
                                    {item}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="relative overflow-hidden bg-[#e3292f] py-20 sm:py-24">

                {/* Soft Red/White Glow */}
                <div
                    className="
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-3xl
        "
                />

                <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

                    <p
                        data-aos="fade-up"
                        className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-dark/80
            "
                    >
                        Let's Connect
                    </p>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="
                mt-4
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-5xl
            "
                    >
                        Ready to build a better connected future?
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="180"
                        className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/80
                sm:text-base
            "
                    >
                        Talk to our team about connectivity, networking infrastructure
                        and customized solutions for your organization.
                    </p>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="260"
                        className="mt-8 flex justify-center"
                    >

                        <Link
                            to="/contact-us"
                            className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-[#e3292f]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-slate-100
                    hover:shadow-xl
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

                </div>

            </section>


            <Footer />

        </div>
    );
}