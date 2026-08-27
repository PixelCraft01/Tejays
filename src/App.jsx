import { Navigate, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Broadband from "./pages/isp/Broadband";
import BulkBandwidth from "./pages/isp/BulkBandwidth";
import ISPPointToPointLeaseLine from "./pages/isp/PointToPointLeaseLine";
import ISPManagedServices from "./pages/isp/ManagedServices";
import Peering from "./pages/isp/Peering";
import DotCompliances from "./pages/isp/DotCompliances";
import IPTV from "./pages/isp/IPTV";
import OTT from "./pages/isp/OTT";
import InternetLeaseLine from "./pages/corporate/InternetLeaseLine";
import CorporateBroadband from "./pages/corporate/CorporateBroadband";
import MPLSVPN from "./pages/corporate/MPLSVPN";
import CorporatePointToPointLeaseLine from "./pages/corporate/PointToPointLeaseLine";
import CorporateManagedServices from "./pages/corporate/ManagedServices";
import FiberOnLease from "./pages/corporate/FiberOnLease";
import SecurityAndSurveillance from "./pages/corporate/SecurityAndSurveillance";
import WifiSolutions from "./pages/corporate/WifiSolutions";
import NetworkingSolutions from "./pages/corporate/NetworkingSolutions";
import Contact from "./pages/Contact";
import QuickPay from "./pages/QuickPay";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import ISOCertification from "./pages/ISOCertification";
import AutoScroll from "./components/AutoScroll";

import { FaWhatsapp } from "react-icons/fa";

/* =========================================================
   COMMON PAGE LAYOUT
========================================================= */

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}

/* =========================================================
   SERVICE PAGE
========================================================= */

function ServicePage({ title }) {
  return (
    <PageLayout>

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white px-5 py-20 text-center sm:px-6">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 blur-3xl sm:h-96 sm:w-96" />

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="relative mx-auto max-w-4xl"
        >

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f] sm:text-sm">
            TEJAYS SERVICES
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
            {title}
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#e3292f] transition-all duration-500 hover:w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Professional connectivity and network solutions
            designed for reliable, secure and high-performance
            business communication.
          </p>

        </div>

      </section>

    </PageLayout>
  );
}


/* =========================================================
   APP ROUTER
========================================================= */

function App() {

  return (
    <>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= MAIN PAGES ================= */}

        <Route
          path="/about-us"
          element={<AboutUs />}
        />

        <Route
          path="/contact-us"
          element={<Contact />}
        />

        <Route
          path="/quick-pay"
          element={<QuickPay />}
        />

        <Route
          path="/terms-conditions-tc/"
          element={<TermsConditions />}
        />

        <Route
          path="/privacy-policy-2/"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/refund-return-cancellation-policy/"
          element={<RefundCancellationPolicy />}
        />

        <Route
          path="/iso-certification/"
          element={<ISOCertification />}
        />


        {/* ================= ISP SERVICES ================= */}

        <Route
          path="/broadband"
          element={<Broadband />}
        />

        <Route
          path="/bulk-bandwidth"
          element={<BulkBandwidth />
          }
        />

        <Route
          path="/point-to-point-lease-line"
          element={<ISPPointToPointLeaseLine />}
        />

        <Route
          path="/managed-services"
          element={<ISPManagedServices />}
        />

        <Route
          path="/peering"
          element={<Peering />}
        />

        <Route
          path="/dot-compliances-and-licensing"
          element={<DotCompliances />}
        />

        <Route
          path="/iptv"
          element={<IPTV />}
        />

        <Route
          path="/ott"
          element={<OTT />}
        />


        {/* ================= CORPORATE SERVICES ================= */}

        <Route
          path="/internet-lease-line"
          element={<InternetLeaseLine />}
        />

        <Route
          path="/corporate-broadband"
          element={<CorporateBroadband />}
        />

        <Route
          path="/mpls-vpn"
          element={<MPLSVPN />}
        />

        <Route
          path="/point-to-point-lease-line-for-corporate"
          element={<CorporatePointToPointLeaseLine />}
        />

        <Route
          path="/managed-services-for-corporate"
          element={<CorporateManagedServices />}
        />

        <Route
          path="/fiber-on-lease"
          element={<FiberOnLease />}
        />

        <Route
          path="/security-and-surveillance"
          element={<SecurityAndSurveillance />}
        />

        <Route
          path="/wifi-solutions"
          element={<WifiSolutions />}
        />

        <Route
          path="/networking-solutions"
          element={<NetworkingSolutions />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <AutoScroll />

      <a
        href="https://wa.me/919509612559"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[999999] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 lg:bottom-6 lg:right-6"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

    </>
  );
}

export default App;