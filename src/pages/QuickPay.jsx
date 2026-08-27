import React from "react";
import {
    CheckCircle2,
    Copy,
    IndianRupee,
    QrCode,
    ShieldCheck,
    Smartphone,
    WalletCards,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const QuickPay = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <Header />

            <main>

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#07111f] bg-cover bg-center bg-no-repeat px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
                    style={{
                        backgroundImage: "url('/assets/quickpay-hero.jpg')",
                    }}>

                    {/* Background Glow */}
                    <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#e3292f]/20 blur-3xl" />

                    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

                    {/* Decorative Circles */}
                    <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-56 w-56 rounded-full border border-white/10 lg:block" />

                    <div className="pointer-events-none absolute right-[11%] top-[22%] hidden h-40 w-40 rounded-full border border-[#e3292f]/30 lg:block" />


                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="relative z-10 mx-auto max-w-7xl text-center"
                    >

                        {/* Label */}
                        <div className="mx-auto inline-flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">

                            <QrCode
                                size={16}
                                className="text-[#e3292f]"
                            />

                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                                TEJAYS
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Quick
                            <span className="text-[#e3292f]">
                                {" "}Pay
                            </span>
                        </h1>


                        {/* Divider */}
                        <div className="mx-auto mt-6 h-1 w-16 bg-[#e3292f]" />


                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base sm:leading-8">
                            Make your TEJAYS payment quickly and securely.
                            Scan the QR code using any supported UPI app
                            and complete your payment in seconds.
                        </p>

                    </div>

                </section>


                {/* =====================================================
                    QR PAYMENT SECTION
                ====================================================== */}
                <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

                    {/* Background Decoration */}
                    <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-50 blur-3xl" />

                    <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

                    <div className="relative mx-auto max-w-6xl">

                        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                            {/* =================================================
                LEFT CONTENT
            ================================================== */}
                            <div
                                data-aos="fade-right"
                                data-aos-duration="900"
                                className="relative text-center lg:text-left"
                            >

                                {/* Small Label */}
                                <div
                                    className="
            mx-auto
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-red-100
            bg-red-50
            px-4
            py-2
            lg:mx-0
        "
                                >
                                    <span className="h-2 w-2 rounded-full bg-[#e3292f]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e3292f] sm:text-xs">
                                        Simple & Secure Payment
                                    </span>
                                </div>


                                {/* Heading */}
                                <h2
                                    className="
            mx-auto
            mt-6
            max-w-xl
            text-4xl
            font-black
            leading-[1.08]
            tracking-tight
            text-slate-900
            sm:text-5xl
            lg:mx-0
            lg:text-[54px]
        "
                                >
                                    Pay Your TEJAYS

                                    <span className="block text-[#e3292f]">
                                        Bill Easily.
                                    </span>
                                </h2>


                                {/* Description */}
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
                                    Make your payment in just a few seconds. Simply scan
                                    the TEJAYS QR code using your preferred UPI application
                                    and complete your payment securely.
                                </p>


                                {/* =================================================
        PAYMENT STEPS
    ================================================== */}
                                <div className="mx-auto mt-9 max-w-xl space-y-5 lg:mx-0">

                                    {/* STEP 1 */}
                                    <div className="group flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4 lg:items-start">

                                        <div
                                            className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#07111f]
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                "
                                        >
                                            01
                                        </div>

                                        <div className="pt-1 text-center sm:text-left">

                                            <h3 className="font-bold text-slate-900">
                                                Scan The QR Code
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                Open your UPI app and scan the TEJAYS payment QR.
                                            </p>

                                        </div>

                                    </div>


                                    {/* CONNECTOR */}
                                    <div className="mx-auto h-5 w-px bg-slate-200 sm:ml-6 lg:ml-6" />


                                    {/* STEP 2 */}
                                    <div className="group flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">

                                        <div
                                            className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-50
                    text-sm
                    font-black
                    text-[#e3292f]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#e3292f]
                    group-hover:text-white
                "
                                        >
                                            02
                                        </div>

                                        <div className="pt-1 text-center sm:text-left">

                                            <h3 className="font-bold text-slate-900">
                                                Enter Your Amount
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                Enter the amount you need to pay and verify
                                                the merchant name.
                                            </p>

                                        </div>

                                    </div>


                                    {/* CONNECTOR */}
                                    <div className="mx-auto h-5 w-px bg-slate-200 sm:ml-6 lg:ml-6" />


                                    {/* STEP 3 */}
                                    <div className="group flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">

                                        <div
                                            className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-50
                    text-sm
                    font-black
                    text-[#e3292f]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#e3292f]
                    group-hover:text-white
                "
                                        >
                                            03
                                        </div>

                                        <div className="pt-1 text-center sm:text-left">

                                            <h3 className="font-bold text-slate-900">
                                                Complete Payment
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                Confirm the transaction in your UPI app
                                                and keep the payment confirmation.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
        TRUST POINTS
    ================================================== */}
                                <div
                                    className="
            mt-9
            flex
            flex-wrap
            justify-center
            gap-3
            lg:justify-start
        "
                                >

                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">

                                        <CheckCircle2
                                            size={16}
                                            className="text-green-500"
                                        />

                                        <span className="text-xs font-semibold text-slate-600">
                                            Secure Payment
                                        </span>

                                    </div>


                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">

                                        <Smartphone
                                            size={16}
                                            className="text-[#e3292f]"
                                        />

                                        <span className="text-xs font-semibold text-slate-600">
                                            Easy UPI
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                RIGHT QR CARD
            ================================================== */}
                            <div
                                data-aos="fade-left"
                                data-aos-duration="900"
                                className="relative flex justify-center lg:justify-end"
                            >

                                {/* Red Glow Behind Card */}
                                <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-red-100/60 blur-3xl" />


                                {/* QR CARD */}
                                <div className="
                    relative
                    w-full
                    max-w-[410px]
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_30px_80px_rgba(15,23,42,0.15)]
                ">


                                    {/* =============================================
                        CARD TOP
                    ============================================== */}
                                    <div className="relative overflow-hidden bg-[#07111f] px-7 py-7">

                                        {/* Decorative Glow */}
                                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e3292f]/20 blur-2xl" />

                                        <div className="relative flex items-center justify-between">

                                            <div>

                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e3292f]">
                                                    TEJAYS
                                                </p>

                                                <h3 className="mt-2 text-2xl font-black text-white">
                                                    Scan To Pay
                                                </h3>

                                                <p className="mt-1 text-xs text-slate-400">
                                                    Tejays Dynamic Ltd
                                                </p>

                                            </div>


                                            {/* QR ICON */}
                                            <div className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/10
                                text-white
                                backdrop-blur
                            ">

                                                <QrCode size={23} />

                                            </div>

                                        </div>

                                    </div>


                                    {/* =============================================
                        QR AREA
                    ============================================== */}
                                    <div className="px-6 py-8 sm:px-8">

                                        <div className="relative mx-auto w-fit">

                                            {/* QR Outer Border */}
                                            <div className="
                                rounded-[26px]
                                border
                                border-slate-200
                                bg-slate-50
                                p-3
                                shadow-inner
                            ">

                                                {/* QR */}
                                                <div className="
                                    flex
                                    h-[250px]
                                    w-[250px]
                                    items-center
                                    justify-center
                                    rounded-[20px]
                                    bg-white
                                    p-4
                                    shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                                    sm:h-[280px]
                                    sm:w-[280px]
                                ">

                                                    <img
                                                        src="/assets/Tejays-barcode.png"
                                                        alt="TEJAYS Payment QR Code"
                                                        className="h-full w-full object-contain"
                                                    />

                                                </div>

                                            </div>


                                            {/* SCAN BADGE */}
                                            <div className="
                                absolute
                                -bottom-4
                                left-1/2
                                -translate-x-1/2
                                whitespace-nowrap
                                rounded-full
                                bg-[#e3292f]
                                px-5
                                py-2.5
                                text-xs
                                font-bold
                                text-white
                                shadow-lg
                            ">
                                                Scan & Pay
                                            </div>

                                        </div>


                                        {/* =============================================
                            MERCHANT DETAILS
                        ============================================== */}
                                        <div className="mt-9 text-center">

                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                                Pay To
                                            </p>

                                            <h4 className="mt-1 text-xl font-black text-slate-900">
                                                Tejays Dynamic Ltd
                                            </h4>

                                            <p className="mt-2 text-sm text-slate-500">
                                                Scan the QR code and pay securely
                                            </p>

                                        </div>


                                        {/* =============================================
                            UPI APPS
                        ============================================== */}
                                        <div className="mt-6 flex flex-wrap justify-center gap-2">

                                            <span className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-[11px]
                                font-bold
                                text-slate-600
                            ">
                                                Google Pay
                                            </span>

                                            <span className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-[11px]
                                font-bold
                                text-slate-600
                            ">
                                                PhonePe
                                            </span>

                                            <span className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-[11px]
                                font-bold
                                text-slate-600
                            ">
                                                Paytm
                                            </span>

                                            <span className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-[11px]
                                font-bold
                                text-slate-600
                            ">
                                                Airtel
                                            </span>

                                        </div>

                                    </div>


                                    {/* =============================================
                        SECURITY FOOTER
                    ============================================== */}
                                    <div className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        border-t
                        border-slate-100
                        bg-slate-50
                        px-6
                        py-4
                    ">

                                        <ShieldCheck
                                            size={16}
                                            className="text-green-500"
                                        />

                                        <span className="text-xs font-semibold text-slate-500">
                                            Secure UPI Payment
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    HOW TO PAY
                ====================================================== */}
                <section className="bg-slate-100 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

                    <div className="mx-auto max-w-6xl">

                        <div
                            data-aos="fade-up"
                            className="text-center"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
                                Easy Process
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                                How To Pay
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                                Follow these simple steps to complete your
                                TEJAYS payment.
                            </p>

                        </div>


                        {/* Steps */}
                        <div className="mt-12 grid gap-6 md:grid-cols-3">

                            {/* Step 1 */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#e3292f]">
                                    <QrCode size={25} />
                                </div>

                                <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-[#e3292f]">
                                    Step 01
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-slate-900">
                                    Scan QR Code
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Open your preferred UPI app and scan the
                                    TEJAYS payment QR code.
                                </p>

                            </div>


                            {/* Step 2 */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#e3292f]">
                                    <IndianRupee size={25} />
                                </div>

                                <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-[#e3292f]">
                                    Step 02
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-slate-900">
                                    Enter Amount
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Enter the amount you need to pay and
                                    verify the merchant details.
                                </p>

                            </div>


                            {/* Step 3 */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#e3292f]">
                                    <CheckCircle2 size={25} />
                                </div>

                                <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-[#e3292f]">
                                    Step 03
                                </span>

                                <h3 className="mt-2 text-lg font-bold text-slate-900">
                                    Complete Payment
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Confirm the payment in your UPI app and
                                    keep the transaction confirmation.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    TRUST BANNER
                ====================================================== */}
                <section className="px-5 py-14 bg-slate-100 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-5xl rounded-3xl bg-[#e3292f] px-6 py-10 text-center shadow-[0_20px_60px_rgba(227,41,47,0.18)] sm:px-10">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                            TEJAYS
                        </p>

                        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                            Quick Payment. Reliable Connectivity.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80">
                            Complete your payment and continue enjoying
                            reliable TEJAYS connectivity services.
                        </p>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ====================================================== */}
            <Footer />

        </div>
    );
};

export default QuickPay;

















// import React, { useState } from "react";
// import {
//     ArrowRight,
//     CheckCircle2,
//     CreditCard,
//     LockKeyhole,
//     ShieldCheck,
//     Smartphone,
//     WalletCards,
//     Wifi,
// } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const QuickPay = () => {
//     const [paymentMethod, setPaymentMethod] = useState("upi");

//     return (
//         <div className="min-h-screen bg-white text-slate-900">

//             <Header />
//             {/* =====================================================
//                 HERO
//             ====================================================== */}
//             <section
//                 className="
//                     relative
//                     overflow-hidden
//                     bg-[#07111f]
//                     px-5
//                     py-20
//                     sm:px-6
//                     sm:py-24
//                     lg:px-8
//                     lg:py-28
//                 "
//             >

//                 {/* Background Glow */}
//                 <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#e3292f]/20 blur-3xl" />

//                 <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

//                 {/* Decorative Circle */}
//                 <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-56 w-56 rounded-full border border-white/10 lg:block" />

//                 <div className="pointer-events-none absolute right-[11%] top-[22%] hidden h-40 w-40 rounded-full border border-[#e3292f]/30 lg:block" />


//                 <div className="relative z-10 mx-auto max-w-7xl text-center">

//                     {/* Label */}
//                     <div
//                         data-aos="fade-down"
//                         className="
//                             mx-auto
//                             inline-flex
//                             items-center
//                             gap-3
//                             border
//                             border-white/15
//                             bg-white/10
//                             px-4
//                             py-2
//                             backdrop-blur-md
//                         "
//                     >
//                         <WalletCards
//                             size={16}
//                             className="text-[#e3292f]"
//                         />

//                         <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
//                             TEJAYS
//                         </span>
//                     </div>


//                     {/* Heading */}
//                     <h1
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         className="
//                             mt-6
//                             text-4xl
//                             font-black
//                             tracking-tight
//                             text-white
//                             sm:text-5xl
//                             lg:text-6xl
//                         "
//                     >
//                         Quick
//                         <span className="text-[#e3292f]">
//                             {" "}Pay
//                         </span>
//                     </h1>


//                     {/* Divider */}
//                     <div
//                         data-aos="fade-up"
//                         data-aos-delay="150"
//                         className="mx-auto mt-6 h-1 w-16 bg-[#e3292f]"
//                     />


//                     {/* Description */}
//                     <p
//                         data-aos="fade-up"
//                         data-aos-delay="200"
//                         className="
//                             mx-auto
//                             mt-6
//                             max-w-2xl
//                             text-sm
//                             leading-7
//                             text-slate-300
//                             sm:text-base
//                             sm:leading-8
//                         "
//                     >
//                         Make your TEJAYS payment quickly, securely and
//                         conveniently. Stay connected without interruptions.
//                     </p>

//                 </div>
//             </section>


//             {/* =====================================================
//                 PAYMENT SECTION
//             ====================================================== */}
//             <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

//                 <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

//                     {/* =================================================
//                         LEFT INFORMATION
//                     ================================================== */}
//                     <div
//                         data-aos="fade-right"
//                         className="lg:col-span-2"
//                     >

//                         <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
//                             Secure Payment
//                         </p>

//                         <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//                             Pay Your Bill
//                             <span className="block text-[#e3292f]">
//                                 In Seconds.
//                             </span>
//                         </h2>

//                         <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
//                             Use our quick payment facility to make your
//                             TEJAYS bill payment without unnecessary steps.
//                         </p>


//                         {/* Features */}
//                         <div className="mt-8 space-y-4">

//                             {/* Feature 1 */}
//                             <div className="flex items-center gap-4">

//                                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">
//                                     <ShieldCheck size={21} />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-slate-900">
//                                         Secure Payment
//                                     </h3>

//                                     <p className="mt-1 text-sm text-slate-500">
//                                         Your payment information remains protected.
//                                     </p>
//                                 </div>

//                             </div>


//                             {/* Feature 2 */}
//                             <div className="flex items-center gap-4">

//                                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">
//                                     <Smartphone size={21} />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-slate-900">
//                                         Easy & Fast
//                                     </h3>

//                                     <p className="mt-1 text-sm text-slate-500">
//                                         Complete your payment in just a few steps.
//                                     </p>
//                                 </div>

//                             </div>


//                             {/* Feature 3 */}
//                             <div className="flex items-center gap-4">

//                                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e3292f]">
//                                     <Wifi size={21} />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-slate-900">
//                                         Stay Connected
//                                     </h3>

//                                     <p className="mt-1 text-sm text-slate-500">
//                                         Keep your TEJAYS connection active.
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>

//                     </div>


//                     {/* =================================================
//                         PAYMENT CARD
//                     ================================================== */}
//                     <div
//                         data-aos="fade-left"
//                         className="lg:col-span-3"
//                     >

//                         <div className="
//                             overflow-hidden
//                             rounded-3xl
//                             border
//                             border-slate-200
//                             bg-white
//                             shadow-[0_20px_60px_rgba(15,23,42,0.10)]
//                         ">

//                             {/* Card Header */}
//                             <div className="bg-[#07111f] px-6 py-6 sm:px-8">

//                                 <div className="flex items-center justify-between">

//                                     <div>
//                                         <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e3292f]">
//                                             TEJAYS
//                                         </p>

//                                         <h3 className="mt-1 text-xl font-bold text-white">
//                                             Payment Details
//                                         </h3>
//                                     </div>

//                                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
//                                         <CreditCard size={22} />
//                                     </div>

//                                 </div>

//                             </div>


//                             {/* Form */}
//                             <div className="p-6 sm:p-8">

//                                 <form className="space-y-5">

//                                     {/* Customer ID */}
//                                     <div>

//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Customer ID / Account Number
//                                         </label>

//                                         <input
//                                             type="text"
//                                             placeholder="Enter your customer ID"
//                                             className="
//                                                 w-full
//                                                 rounded-xl
//                                                 border
//                                                 border-slate-200
//                                                 bg-slate-50
//                                                 px-4
//                                                 py-3.5
//                                                 text-sm
//                                                 outline-none
//                                                 transition
//                                                 focus:border-[#e3292f]
//                                                 focus:bg-white
//                                                 focus:ring-2
//                                                 focus:ring-red-100
//                                             "
//                                         />

//                                     </div>


//                                     {/* Mobile */}
//                                     <div>

//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Registered Mobile Number
//                                         </label>

//                                         <input
//                                             type="tel"
//                                             placeholder="Enter registered mobile number"
//                                             className="
//                                                 w-full
//                                                 rounded-xl
//                                                 border
//                                                 border-slate-200
//                                                 bg-slate-50
//                                                 px-4
//                                                 py-3.5
//                                                 text-sm
//                                                 outline-none
//                                                 transition
//                                                 focus:border-[#e3292f]
//                                                 focus:bg-white
//                                                 focus:ring-2
//                                                 focus:ring-red-100
//                                             "
//                                         />

//                                     </div>


//                                     {/* Payment Method */}
//                                     <div>

//                                         <label className="mb-3 block text-sm font-semibold text-slate-700">
//                                             Payment Method
//                                         </label>

//                                         <div className="grid gap-3 sm:grid-cols-3">

//                                             {/* UPI */}
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setPaymentMethod("upi")}
//                                                 className={`
//                                                     flex
//                                                     items-center
//                                                     justify-center
//                                                     gap-2
//                                                     rounded-xl
//                                                     border
//                                                     px-4
//                                                     py-3
//                                                     text-sm
//                                                     font-bold
//                                                     transition-all
//                                                     ${paymentMethod === "upi"
//                                                         ? "border-[#e3292f] bg-red-50 text-[#e3292f]"
//                                                         : "border-slate-200 bg-white text-slate-600 hover:border-red-200"
//                                                     }
//                                                 `}
//                                             >
//                                                 <WalletCards size={18} />
//                                                 UPI
//                                             </button>


//                                             {/* Card */}
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setPaymentMethod("card")}
//                                                 className={`
//                                                     flex
//                                                     items-center
//                                                     justify-center
//                                                     gap-2
//                                                     rounded-xl
//                                                     border
//                                                     px-4
//                                                     py-3
//                                                     text-sm
//                                                     font-bold
//                                                     transition-all
//                                                     ${paymentMethod === "card"
//                                                         ? "border-[#e3292f] bg-red-50 text-[#e3292f]"
//                                                         : "border-slate-200 bg-white text-slate-600 hover:border-red-200"
//                                                     }
//                                                 `}
//                                             >
//                                                 <CreditCard size={18} />
//                                                 Card
//                                             </button>


//                                             {/* Net Banking */}
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setPaymentMethod("netbanking")}
//                                                 className={`
//                                                     flex
//                                                     items-center
//                                                     justify-center
//                                                     gap-2
//                                                     rounded-xl
//                                                     border
//                                                     px-4
//                                                     py-3
//                                                     text-sm
//                                                     font-bold
//                                                     transition-all
//                                                     ${paymentMethod === "netbanking"
//                                                         ? "border-[#e3292f] bg-red-50 text-[#e3292f]"
//                                                         : "border-slate-200 bg-white text-slate-600 hover:border-red-200"
//                                                     }
//                                                 `}
//                                             >
//                                                 <LockKeyhole size={18} />
//                                                 Banking
//                                             </button>

//                                         </div>

//                                     </div>


//                                     {/* Amount */}
//                                     <div>

//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Payment Amount
//                                         </label>

//                                         <div className="relative">

//                                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
//                                                 ₹
//                                             </span>

//                                             <input
//                                                 type="number"
//                                                 placeholder="Enter amount"
//                                                 className="
//                                                     w-full
//                                                     rounded-xl
//                                                     border
//                                                     border-slate-200
//                                                     bg-slate-50
//                                                     py-3.5
//                                                     pl-9
//                                                     pr-4
//                                                     text-sm
//                                                     outline-none
//                                                     transition
//                                                     focus:border-[#e3292f]
//                                                     focus:bg-white
//                                                     focus:ring-2
//                                                     focus:ring-red-100
//                                                 "
//                                             />

//                                         </div>

//                                     </div>


//                                     {/* Submit */}
//                                     <button
//                                         type="submit"
//                                         className="
//                                             group
//                                             inline-flex
//                                             w-full
//                                             items-center
//                                             justify-center
//                                             gap-3
//                                             rounded-xl
//                                             bg-[#e3292f]
//                                             px-6
//                                             py-4
//                                             text-sm
//                                             font-bold
//                                             text-white
//                                             shadow-[0_15px_35px_rgba(227,41,47,0.20)]
//                                             transition-all
//                                             duration-300
//                                             hover:-translate-y-1
//                                             hover:bg-[#c91f25]
//                                             hover:shadow-[0_20px_45px_rgba(227,41,47,0.30)]
//                                         "
//                                     >
//                                         Proceed To Payment

//                                         <ArrowRight
//                                             size={18}
//                                             className="transition-transform duration-300 group-hover:translate-x-1"
//                                         />

//                                     </button>

//                                 </form>


//                                 {/* Security */}
//                                 <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">

//                                     <CheckCircle2
//                                         size={15}
//                                         className="text-green-500"
//                                     />

//                                     Secure & protected payment

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/* =====================================================
//                 BOTTOM TRUST SECTION
//             ====================================================== */}
//             <section className="border-t border-slate-100 bg-slate-50 px-5 py-14 sm:px-6 lg:px-8">

//                 <div className="mx-auto max-w-5xl text-center">

//                     <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">
//                         TEJAYS
//                     </p>

//                     <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
//                         Fast Payment. Seamless Connectivity.
//                     </h2>

//                     <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
//                         Make your payment on time and enjoy uninterrupted
//                         access to reliable TEJAYS connectivity services.
//                     </p>

//                 </div>

//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default QuickPay;