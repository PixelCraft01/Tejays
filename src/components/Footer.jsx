import {
    ArrowUpRight,
    AtSign,
    BriefcaseBusiness,
    Camera,
    Globe2,
    Mail,
    MapPin,
    Phone,
    PlayCircle,
} from "lucide-react";

import { Link } from "react-router-dom";


/* =========================================================
   HOME LINKS
========================================================= */

const homeLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact-us" },
    { title: "Quick Pay", path: "/quick-pay" },
];


/* =========================================================
   ISP SERVICES
========================================================= */

const ispServices = [
    { title: "Broadband", path: "/broadband" },
    { title: "Bulk Bandwidth", path: "/bulk-bandwidth" },
    {
        title: "Point To Point Lease Line",
        path: "/point-to-point-lease-line",
    },
    {
        title: "Managed Services",
        path: "/managed-services",
    },
    {
        title: "Peering",
        path: "/peering",
    },
    {
        title: "IPTV",
        path: "/iptv",
    },
    {
        title: "OTT",
        path: "/ott",
    },
    {
        title: "DOT Compliances And Licensing",
        path: "/dot-compliances-and-licensing",
    },
];


/* =========================================================
   CORPORATE SERVICES
========================================================= */

const corporateServices = [
    {
        title: "Internet Lease Line",
        path: "/internet-lease-line",
    },
    {
        title: "Corporate Broadband",
        path: "/corporate-broadband",
    },
    {
        title: "MPLS-VPN",
        path: "/mpls-vpn",
    },
    {
        title: "Point-To-Point Lease Line",
        path: "/point-to-point-lease-line-for-corporate",
    },
    {
        title: "Managed Services",
        path: "/managed-services-for-corporate",
    },
    {
        title: "Fiber On Lease",
        path: "/fiber-on-lease",
    },
    {
        title: "Security and Surveillance",
        path: "/security-and-surveillance",
    },
    {
        title: "WiFi Solutions",
        path: "/wifi-solutions",
    },
    {
        title: "Networking Solutions",
        path: "/networking-solutions",
    },
];


/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socialLinks = [
    {
        label: "Facebook",
        icon: Globe2,
        href: "#",
    },
    {
        label: "Twitter / X",
        icon: AtSign,
        href: "#",
    },
    {
        label: "Instagram",
        icon: Camera,
        href: "#",
    },
    {
        label: "LinkedIn",
        icon: BriefcaseBusiness,
        href: "#",
    },
    {
        label: "YouTube",
        icon: PlayCircle,
        href: "#",
    },
];


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ title, path }) {
    return (
        <Link
            to={path}
            className="
                group
                flex
                items-start
                gap-2
                text-sm
                leading-6
                text-slate-400
                transition-all
                duration-200
                hover:translate-x-1
                hover:text-white
            "
        >
            <ArrowUpRight
                aria-hidden="true"
                size={14}
                className="
                    mt-1
                    shrink-0
                    text-slate-600
                    transition-colors
                    duration-200
                    group-hover:text-[#e3292f]
                "
            />

            <span>{title}</span>
        </Link>
    );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3
                className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white
                "
            >
                {title}
            </h3>

            <div className="mt-5 space-y-2.5">
                {links.map((link) => (
                    <FooterLink
                        key={link.path}
                        {...link}
                    />
                ))}
            </div>
        </div>
    );
}


/* =========================================================
   CONTACT DETAILS
========================================================= */

function ContactDetails() {
    return (
        <div>

            <h3
                className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white
                "
            >
                Contact
            </h3>

            <div
                className="
                    mt-5
                    space-y-5
                    text-sm
                    leading-6
                    text-slate-400
                "
            >

                {/* REGISTERED OFFICE */}

                <div className="flex items-start gap-3">

                    <MapPin
                        aria-hidden="true"
                        size={17}
                        className="
                            mt-1
                            shrink-0
                            text-[#e3292f]
                        "
                    />

                    <div>
                        <p className="font-semibold text-slate-200">
                            Registered Office
                        </p>

                        <p className="mt-1">
                            C-84, Janpath, Lalkothi,
                            Tonk Road, Jaipur,
                            Rajasthan - 302015
                        </p>
                    </div>

                </div>


                {/* CORPORATE OFFICE */}

                <div className="flex items-start gap-3">

                    <MapPin
                        aria-hidden="true"
                        size={17}
                        className="
                            mt-1
                            shrink-0
                            text-[#e3292f]
                        "
                    />

                    <div>
                        <p className="font-semibold text-slate-200">
                            Corporate Office
                        </p>

                        <p className="mt-1">
                            112 A-B, JMD Pacific Square,
                            Sec-15, Gurugram,
                            Haryana - 122001
                        </p>
                    </div>

                </div>


                {/* CONTACT INFORMATION */}

                <div
                    className="
                        grid
                        gap-3
                        border-t
                        border-white/10
                        pt-4
                    "
                >

                    <a
                        href="tel:01414556633"
                        className="
                            flex
                            items-center
                            gap-3
                            transition-colors
                            hover:text-white
                        "
                    >
                        <Phone
                            aria-hidden="true"
                            size={16}
                            className="shrink-0 text-[#e3292f]"
                        />

                        <span>
                            <strong className="text-slate-200">
                                Support:
                            </strong>{" "}
                            0141-4556633
                        </span>
                    </a>


                    <a
                        href="tel:01244890011"
                        className="
                            flex
                            items-center
                            gap-3
                            transition-colors
                            hover:text-white
                        "
                    >
                        <Phone
                            aria-hidden="true"
                            size={16}
                            className="shrink-0 text-[#e3292f]"
                        />

                        <span>
                            <strong className="text-slate-200">
                                Sales:
                            </strong>{" "}
                            0124-4890011
                        </span>
                    </a>


                    <a
                        href="mailto:ccttl@ttsl.co.in"
                        className="
                            flex
                            items-start
                            gap-3
                            break-all
                            transition-colors
                            hover:text-white
                        "
                    >
                        <Mail
                            aria-hidden="true"
                            size={16}
                            className="
                                mt-1
                                shrink-0
                                text-[#e3292f]
                            "
                        />

                        <span>
                            <strong className="text-slate-200">
                                Helpdesk:
                            </strong>{" "}
                            ccttl@ttsl.co.in
                        </span>
                    </a>


                    <a
                        href="mailto:sales@tejays.in"
                        className="
                            flex
                            items-start
                            gap-3
                            break-all
                            transition-colors
                            hover:text-white
                        "
                    >
                        <Mail
                            aria-hidden="true"
                            size={16}
                            className="
                                mt-1
                                shrink-0
                                text-[#e3292f]
                            "
                        />

                        <span>
                            <strong className="text-slate-200">
                                Sales:
                            </strong>{" "}
                            sales@tejays.in
                        </span>
                    </a>


                    <a
                        href="mailto:hrd@ttsl.co.in"
                        className="
                            flex
                            items-start
                            gap-3
                            break-all
                            transition-colors
                            hover:text-white
                        "
                    >
                        <Mail
                            aria-hidden="true"
                            size={16}
                            className="
                                mt-1
                                shrink-0
                                text-[#e3292f]
                            "
                        />

                        <span>
                            <strong className="text-slate-200">
                                Career:
                            </strong>{" "}
                            hrd@ttsl.co.in
                        </span>
                    </a>

                </div>

            </div>

        </div>
    );
}


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {

    return (

        <footer
            className="
                border-t-2
                border-[#e3292f]
                bg-[#07111f]
                text-white
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-5
                    sm:px-8
                    lg:px-10
                    xl:px-12
                "
            >

                {/* =================================================
                    TOP BRAND + SOCIAL
                ================================================== */}

                <section
                    className="
                        flex
                        min-h-[210px]
                        flex-col
                        justify-between
                        gap-12
                        py-14
                        sm:py-16
                        lg:flex-row
                        lg:items-center
                        lg:gap-16
                        lg:py-20
                    "
                >

                    {/* =================================================
                        LEFT - BRAND
                    ================================================= */}

                    <div
                        className="
                            w-full
                            max-w-xl
                            text-left
                            sm:text-left
                        "
                    >

                        <Link
                            to="/"
                            className="
                                group
                                inline-flex
                                items-center
                            "
                        >

                            <img
                                src="/Tejays/assets/tejays-logo.png"
                                alt="TEJAYS Network"
                                className="
                                    h-12
                                    w-auto
                                    max-w-[200px]
                                    object-contain
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                "
                            />

                        </Link>


                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-sm
                                leading-7
                                text-slate-400
                            "
                        >
                            Professional connectivity and
                            network infrastructure solutions
                            built around performance,
                            reliability and business
                            continuity.
                        </p>

                    </div>


                    {/* =================================================
    RIGHT - FOLLOW US
================================================= */}

                    <div
                        className="
        w-full
        text-left
        lg:w-auto
        lg:min-w-[300px]
    "
                    >
                        {/* FOLLOW US */}

                        <p
                            className="
            m-0
            text-left
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-white
        "
                        >
                            Follow Us
                        </p>

                        {/* SOCIAL ICONS */}

                        <div
                            className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-start
            gap-3
        "
                        >
                            {socialLinks.map(
                                ({
                                    label,
                                    icon: Icon,
                                    href,
                                }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={label}
                                        aria-label={label}
                                        className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-slate-400
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#e3292f]
                        hover:bg-[#e3292f]
                        hover:text-white
                        hover:shadow-lg
                        hover:shadow-red-500/20
                    "
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                </section>


                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div className="h-px bg-white/10" />


                {/* =================================================
                    NAVIGATION
                ================================================== */}

                <section
                    className="
                        py-14
                        sm:py-16
                        lg:py-20
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-12
                            sm:grid-cols-2
                            sm:gap-14
                            lg:grid-cols-4
                            lg:gap-10
                            xl:gap-14
                        "
                    >

                        <FooterColumn
                            title="Home"
                            links={homeLinks}
                        />

                        <FooterColumn
                            title="ISP Services"
                            links={ispServices}
                        />

                        <FooterColumn
                            title="Corporate Services"
                            links={corporateServices}
                        />

                        <ContactDetails />

                    </div>

                </section>


                {/* =================================================
                    BOTTOM COPYRIGHT
                ================================================== */}

                <div
                    className="
                        border-t
                        border-white/10
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            px-2
                            py-7
                            text-center
                            text-xs
                            text-slate-500
                        "
                    >

                        <p>
                            © {new Date().getFullYear()} TEJAYS.
                            All rights reserved.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}