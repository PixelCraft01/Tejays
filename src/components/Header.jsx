import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
} from "lucide-react";
import { corporateServices, ispServices } from "../routeConfig";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState("");

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileMenu("");
  };

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
    setMobileMenu("");
  };

  const toggleDropdown = (menu) => {
    setMobileMenu((current) => (
      current === menu ? "" : menu
    ));
  };

  return (
    <header
      className="
                sticky
                top-0
                z-[999999]
                w-full
                border-b
                border-slate-200/70
                bg-white/95
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
            "
    >

      {/* =====================================================
                MAIN HEADER
            ====================================================== */}

      <div
        className="
                    container-site
                    flex
                    h-[68px]
                    items-center
                    justify-between
                    gap-2
                    sm:h-[72px]
                    sm:gap-4
                "
      >

        {/* =================================================
                    MOBILE MENU BUTTON
                ================================================== */}

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className="
                        group
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        ease-out
                        hover:border-[#e3292f]/30
                        hover:bg-red-50
                        hover:text-[#e3292f]
                        active:scale-95
                        lg:hidden
                    "
        >
          <span
            className="
                            transition-transform
                            duration-300
                            ease-out
                        "
          >
            {mobileOpen ? (
              <X
                size={21}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={2}
              />
            )}
          </span>
        </button>


        {/* =================================================
                    LOGO
                ================================================== */}

        <Link
          to="/"
          onClick={closeMobile}
          aria-label="TEJAYS Home"
          className="
                        group
                        flex
                        min-w-0
                        shrink-0
                        items-center
                        justify-center
                        transition-transform
                        duration-300
                        hover:scale-[1.02]
                    "
        >
          <img
            src="/assets/tejays-logo1.png"
            alt="TEJAYS"
            className="
                            h-12
                            w-auto
                            object-contain
                            sm:h-14
                        "
          />
        </Link>


        {/* =================================================
                    DESKTOP NAVIGATION
                ================================================== */}

        <nav
          className="
                        hidden
                        items-center
                        gap-5
                        lg:flex
                        xl:gap-6
                    "
        >

          <NavItem to="/">
            HOME
          </NavItem>

          <NavItem to="/about-us">
            ABOUT US
          </NavItem>

          <DesktopDropdown
            title="ISP SERVICES"
            items={ispServices}
          />

          <DesktopDropdown
            title="CORPORATE SERVICES"
            items={corporateServices}
          />

          <NavItem to="/contact-us">
            CONTACT US
          </NavItem>

          <NavItem to="/quick-pay">
            <span className="flex items-center gap-1.5">
              <CreditCard
                size={15}
                strokeWidth={2}
              />
              QUICK PAY
            </span>
          </NavItem>

        </nav>


        {/* =================================================
                    QUICK PAY
                ================================================== */}

        <Link
          to="/quick-pay"
          onClick={closeMobile}
          className="
                        group
                        relative
                        flex
                        h-10
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        bg-[#e3292f]
                        px-3.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-white
                        shadow-[0_8px_20px_rgba(227,41,47,0.18)]
                        transition-all
                        duration-300
                        ease-out
                        hover:-translate-y-0.5
                        hover:bg-[#c91f25]
                        hover:shadow-[0_12px_28px_rgba(227,41,47,0.25)]
                        active:translate-y-0
                        active:scale-[0.97]
                        sm:h-11
                        sm:px-5
                        sm:text-xs
                        lg:h-11
                    "
        >
          <span
            className="
                            relative
                            z-10
                        "
          >
            Quick Pay
          </span>

          <span
            className="
                            pointer-events-none
                            absolute
                            inset-0
                            -translate-x-full
                            bg-gradient-to-r
                            from-transparent
                            via-white/15
                            to-transparent
                            transition-transform
                            duration-700
                            group-hover:translate-x-full
                        "
          />
        </Link>

      </div>


      {/* =====================================================
                MOBILE NAVIGATION
            ====================================================== */}

      <div
        className={`
                    overflow-hidden
                    border-t
                    border-slate-100
                    bg-white
                    transition-all
                    duration-400
                    ease-out
                    lg:hidden
                    ${mobileOpen
            ? "max-h-[calc(100vh-68px)] opacity-100"
            : "max-h-0 opacity-0"
          }
                `}
      >

        <div
          className="
                        container-site
                        max-h-[calc(100vh-68px)]
                        overflow-y-auto
                        overscroll-contain
                        py-2
                        sm:py-3
                    "
        >

          {/* HOME */}

          <MobileLink
            to="/"
            onClick={closeMobile}
          >
            HOME
          </MobileLink>


          {/* ABOUT */}

          <MobileLink
            to="/about-us"
            onClick={closeMobile}
          >
            ABOUT US
          </MobileLink>


          {/* =================================================
                        ISP SERVICES
                    ================================================== */}

          <MobileDropdown
            title="ISP SERVICES"
            open={mobileMenu === "isp"}
            onClick={() => toggleDropdown("isp")}
            id="mobile-isp-menu"
          >
            {ispServices.map((service) => (
              <MobileLink
                key={service.slug}
                to={`/${service.slug}`}
                nested
                onClick={closeMobile}
              >
                {service.name}
              </MobileLink>
            ))}
          </MobileDropdown>


          {/* =================================================
                        CORPORATE SERVICES
                    ================================================== */}

          <MobileDropdown
            title="CORPORATE SERVICES"
            open={mobileMenu === "corporate"}
            onClick={() => toggleDropdown("corporate")}
            id="mobile-corporate-menu"
          >
            {corporateServices.map((service) => (
              <MobileLink
                key={service.slug}
                to={`/${service.slug}`}
                nested
                onClick={closeMobile}
              >
                {service.name}
              </MobileLink>
            ))}
          </MobileDropdown>


          {/* CONTACT */}

          <MobileLink
            to="/contact-us"
            onClick={closeMobile}
          >
            CONTACT US
          </MobileLink>


          {/* QUICK PAY */}

          <MobileLink
            to="/quick-pay"
            onClick={closeMobile}
            accent
          >
            <span className="flex items-center gap-2">
              <CreditCard
                size={16}
              />
              QUICK PAY
            </span>
          </MobileLink>

        </div>

      </div>

    </header>
  );
}


/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
                    group
                    relative
                    flex
                    items-center
                    py-2
                    text-[12px]
                    font-bold
                    tracking-[0.04em]
                    transition-colors
                    duration-300

                    ${isActive
          ? "text-[#e3292f]"
          : "text-slate-800 hover:text-[#e3292f]"
        }
                `
      }
    >
      {children}

      <span
        className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#e3292f]
                    transition-all
                    duration-300
                    group-hover:w-full
                "
      />
    </NavLink>
  );
}


/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({ title, items }) {
  return (
    <div className="group relative">

      <button
        type="button"
        className="
                    flex
                    items-center
                    gap-1.5
                    py-2
                    text-[12px]
                    font-bold
                    tracking-[0.04em]
                    text-slate-800
                    transition-colors
                    duration-300
                    hover:text-[#e3292f]
                "
      >
        {title}

        <ChevronDown
          size={15}
          strokeWidth={2}
          className="
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:rotate-180
                    "
        />
      </button>


      <div
        className="
                    invisible
                    absolute
                    left-1/2
                    top-full
                    w-[320px]
                    -translate-x-1/2
                    translate-y-2
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/98
                    p-2
                    opacity-0
                    shadow-[0_25px_70px_rgba(15,23,42,0.14)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ease-out

                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
      >

        <div
          className="
                        mb-1
                        px-3
                        py-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-slate-400
                    "
        >
          Explore Services
        </div>

        {items.map((service) => (
          <Link
            key={service.slug}
            to={`/${service.slug}`}
            className="
                            group/item
                            relative
                            flex
                            items-center
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-200
                            hover:translate-x-1
                            hover:bg-red-50
                            hover:text-[#e3292f]
                        "
          >

            <span
              className="
                                mr-3
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-slate-200
                                transition-all
                                duration-200
                                group-hover/item:bg-[#e3292f]
                                group-hover/item:scale-125
                            "
            />

            {service.name}

          </Link>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   MOBILE LINK
========================================================= */

function MobileLink({
  to,
  children,
  onClick,
  nested = false,
  accent = false,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
                    group
                    relative
                    flex
                    min-h-[50px]
                    items-center
                    border-b
                    border-slate-100
                    py-3
                    text-sm
                    font-bold
                    tracking-wide
                    transition-all
                    duration-300
                    active:scale-[0.99]

                    ${nested
          ? "pl-9 pr-4 text-[13px] font-semibold text-slate-600"
          : "px-3 text-slate-800"
        }

                    ${accent
          ? "text-[#e3292f]"
          : ""
        }

                    ${isActive
          ? "bg-red-50/70 text-[#e3292f]"
          : "hover:bg-red-50/60 hover:text-[#e3292f]"
        }
                `
      }
    >

      {/* Active / Hover Indicator */}

      <span
        className="
                    absolute
                    left-0
                    top-1/2
                    h-0
                    w-[3px]
                    -translate-y-1/2
                    rounded-r-full
                    bg-[#e3292f]
                    transition-all
                    duration-300
                    group-hover:h-6
                    group-[.active]:h-6
                "
      />

      {children}

      {!nested && (
        <span
          className="
                        pointer-events-none
                        ml-auto
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-transparent
                        transition-all
                        duration-300
                        group-hover:bg-[#e3292f]/40
                    "
        />
      )}

    </NavLink>
  );
}


/* =========================================================
   MOBILE DROPDOWN
========================================================= */

function MobileDropdown({
  title,
  open,
  onClick,
  children,
  id,
}) {
  return (
    <div
      className="
                border-b
                border-slate-100
            "
    >

      {/* Dropdown Toggle */}

      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={id}
        className={`
                    group
                    relative
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-3
                    py-3
                    text-left
                    text-sm
                    font-bold
                    tracking-wide
                    transition-all
                    duration-300
                    active:scale-[0.99]

                    ${open
            ? "bg-red-50/70 text-[#e3292f]"
            : "text-slate-800 hover:bg-red-50/60 hover:text-[#e3292f]"
          }
                `}
      >

        <span className="flex items-center gap-3">

          <span
            className={`
                            h-2
                            w-2
                            rounded-full
                            transition-all
                            duration-300

                            ${open
                ? "scale-125 bg-[#e3292f] shadow-[0_0_12px_rgba(227,41,47,0.35)]"
                : "bg-slate-200 group-hover:bg-[#e3292f]/50"
              }
                        `}
          />

          {title}

        </span>


        <span
          className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        transition-all
                        duration-300

                        ${open
              ? "border-[#e3292f]/20 bg-white text-[#e3292f] shadow-sm"
              : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-[#e3292f]/20 group-hover:text-[#e3292f]"
            }
                    `}
        >
          <ChevronDown
            size={17}
            strokeWidth={2}
            className={`
                            transition-transform
                            duration-300
                            ease-out

                            ${open
                ? "rotate-180"
                : "rotate-0"
              }
                        `}
          />
        </span>

      </button>


      {/* =================================================
                SMOOTH SUBMENU
            ================================================== */}

      <div
        id={id}
        className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-out

                    ${open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }
                `}
      >

        <div className="min-h-0 overflow-hidden">

          <div
            className="
                            mx-2
                            mb-2
                            overflow-hidden
                            rounded-xl
                            border
                            border-slate-100
                            bg-slate-50/70
                            p-1
                        "
          >
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}