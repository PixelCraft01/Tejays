import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        pincode: "",
        service: "",
        message: "",
    });

    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ================= WHATSAPP MESSAGE =================
        const whatsappMessage = `
*TEJAYS - New Contact Enquiry*

*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email}
*City:* ${form.city}
*Pin Code:* ${form.pincode}
*Service:* ${form.service}

*Message:*
${form.message}

-------------------------
Sent from TEJAYS Website
        `.trim();

        // Your WhatsApp number
        const whatsappNumber = "919509612559";

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

        // Success message
        setSent(true);

        // Clear form
        setForm({
            name: "",
            phone: "",
            email: "",
            city: "",
            pincode: "",
            service: "",
            message: "",
        });

        setTimeout(() => {
            setSent(false);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* ================= HEADER ================= */}
            <Header />

            <main>

                {/* ================= HERO ================= */}
                <section
                    className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-28 sm:px-6 lg:px-8"
                    style={{
                        backgroundImage: "url('/Tejays/assets/contact-hero1.jpg')",
                    }}
                >

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* RED GLOW */}
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />


                    {/* CONTENT */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="relative mx-auto max-w-7xl text-center"
                    >

                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 sm:text-sm">
                            Get In Touch
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Contact Us
                        </h1>

                        <div className="mx-auto mt-6 h-1 w-16 bg-[#e3292f]" />

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                            Have a question, requirement or need assistance?
                            Our team is here to help you with reliable connectivity
                            and professional network solutions.
                        </p>

                    </div>

                </section>


                {/* ================= CONTACT SECTION ================= */}
                <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">

                        {/* ================= LEFT DETAILS ================= */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="900"
                            className="lg:col-span-2"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                                Let's Connect
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                We’d Love To Hear From You
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                Whether you are looking for a new connection,
                                business solution or technical assistance,
                                feel free to reach out to the TEJAYS team.
                            </p>


                            {/* ================= CONTACT DETAILS ================= */}
                            <div className="mt-8 space-y-4">

                                {/* PHONE */}
                                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">

                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515L10 8a2 2 0 01-.5 1.94l-1.2 1.2a16 16 0 006.56 6.56l1.2-1.2A2 2 0 0118 16l3.485.78A2 2 0 0123 18.72V21a2 2 0 01-2 2h-1C10.82 23 3 15.18 3 6V5z"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-slate-900">
                                            Phone
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-600">
                                            0141-4556633
                                        </p>

                                    </div>

                                </div>


                                {/* EMAIL */}
                                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">

                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-slate-900">
                                            Email
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-600">
                                            info@tejays.com
                                        </p>

                                    </div>

                                </div>


                                {/* ADDRESS */}
                                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">

                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                d="M12 21s7-5.686 7-12a7 7 0 10-14 0c0 6.314 7 12 7 12z"
                                            />

                                            <circle
                                                cx="12"
                                                cy="9"
                                                r="2.5"
                                                strokeWidth="1.8"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-slate-900">
                                            Office Address
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            TEJAYS Office Address
                                            <br />
                                            Rajasthan, India
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= CONTACT FORM ================= */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            className="lg:col-span-3"
                        >
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    Send Us A Message
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Fill in the details below and our team
                                    will get back to you.
                                </p>

                                {/* SUCCESS MESSAGE */}
                                {sent && (
                                    <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                                        WhatsApp opened successfully. Please press
                                        Send in WhatsApp to send your enquiry.
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-8 space-y-5"
                                >

                                    {/* ================= NAME + PHONE ================= */}
                                    <div className="grid gap-5 sm:grid-cols-2">

                                        {/* NAME */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                Your Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                            />
                                        </div>

                                        {/* PHONE */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="Enter phone number"
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                            />
                                        </div>

                                    </div>


                                    {/* ================= EMAIL ================= */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                        />
                                    </div>


                                    {/* ================= CITY + PIN CODE ================= */}
                                    <div className="grid gap-5 sm:grid-cols-2">

                                        {/* CITY */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                City
                                            </label>

                                            <input
                                                type="text"
                                                name="city"
                                                value={form.city}
                                                onChange={handleChange}
                                                placeholder="Enter your city"
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                            />
                                        </div>


                                        {/* PIN CODE */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                PIN Code
                                            </label>

                                            <input
                                                type="text"
                                                name="pincode"
                                                value={form.pincode}
                                                onChange={handleChange}
                                                placeholder="Enter PIN code"
                                                inputMode="numeric"
                                                maxLength="6"
                                                pattern="[0-9]{6}"
                                                required
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                            />
                                        </div>

                                    </div>


                                    {/* ================= SERVICE ================= */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Select Your Service
                                        </label>

                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                        >

                                            <option value="">
                                                Select Your Service
                                            </option>

                                            <option value="General Enquiry">
                                                General Enquiry
                                            </option>

                                            <option value="Broadband">
                                                Broadband
                                            </option>

                                            <option value="Bulk Bandwidth">
                                                Bulk Bandwidth
                                            </option>

                                            <option value="Peering">
                                                Peering
                                            </option>

                                            <option value="IPTV">
                                                IPTV
                                            </option>

                                            <option value="OTT">
                                                OTT
                                            </option>

                                            <option value="Internet Lease Line (ILL)">
                                                Internet Lease Line (ILL)
                                            </option>

                                            <option value="Corporate Broadband">
                                                Corporate Broadband
                                            </option>

                                            <option value="MPLS-VPN">
                                                MPLS-VPN
                                            </option>

                                            <option value="Corporate P2P Lease Line">
                                                Corporate P2P Lease Line
                                            </option>

                                            <option value="Corporate Managed Services">
                                                Corporate Managed Services
                                            </option>

                                            <option value="Fiber On Lease">
                                                Fiber On Lease
                                            </option>

                                            <option value="Security and Surveillance">
                                                Security and Surveillance
                                            </option>

                                            <option value="WiFi Solutions">
                                                WiFi Solutions
                                            </option>

                                            <option value="Networking Solutions">
                                                Networking Solutions
                                            </option>

                                        </select>
                                    </div>


                                    {/* ================= MESSAGE ================= */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Message
                                        </label>

                                        <textarea
                                            rows="5"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Write your message..."
                                            required
                                            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e3292f] focus:bg-white focus:ring-2 focus:ring-red-100"
                                        />
                                    </div>


                                    {/* ================= BUTTON ================= */}
                                    <button
                                        type="submit"
                                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#e3292f] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c91f25] hover:shadow-xl sm:w-auto"
                                    >
                                        Send Message

                                        <svg
                                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 12h14M13 6l6 6-6 6"
                                            />
                                        </svg>
                                    </button>

                                </form>

                            </div>
                        </div>

                    </div>

                </section>


                {/* ================= FULL WIDTH MAP ================= */}
                <section className="w-full">

                    <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px] lg:h-[520px]">

                        <iframe
                            title="Tejays Dynamic Ltd Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.515783738226!2d77.0490705!3d28.464009599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f2a058d0b9%3A0x291850b1ed57627b!2sTejays%20Dynamic%20Ltd!5e0!3m2!1sen!2sin!4v1787549984121!5m2!1sen!2sin"
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                    </div>

                </section>

            </main>


            {/* ================= FOOTER ================= */}
            <Footer />

        </div>
    );
};

export default Contact;