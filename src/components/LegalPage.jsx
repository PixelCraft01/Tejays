import { FileBadge, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const contactDetails = {
  email: "ccttl@ttsl.co.in",
  phone: "01414556633 / 01244890011",
  address: "C-84, Janpath, Lalkothi, Tonk Road, Jaipur, Rajasthan 302015, India",
};

function ContactBox() {
  return (
    <section className="mt-12 border-t border-slate-200 pt-10" aria-labelledby="support-heading">
      <div className="rounded-2xl bg-[#07111f] p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e3292f]">Support</p>
        <h2 id="support-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Need help?
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-300">For support or complaints:</p>
        <div className="mt-6 grid gap-5 text-sm leading-6 text-slate-300 md:grid-cols-3">
          <a className="flex items-start gap-3 transition-colors hover:text-white" href={`mailto:${contactDetails.email}`}>
            <Mail aria-hidden="true" size={18} className="mt-1 shrink-0 text-[#e3292f]" />
            <span><strong className="text-white">Email</strong><br />{contactDetails.email}</span>
          </a>
          <a className="flex items-start gap-3 transition-colors hover:text-white" href="tel:01414556633">
            <Phone aria-hidden="true" size={18} className="mt-1 shrink-0 text-[#e3292f]" />
            <span><strong className="text-white">Phone</strong><br />{contactDetails.phone}</span>
          </a>
          <div className="flex items-start gap-3">
            <MapPin aria-hidden="true" size={18} className="mt-1 shrink-0 text-[#e3292f]" />
            <span><strong className="text-white">Address</strong><br />{contactDetails.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LegalPage({ title, breadcrumb, subtitle, intro, sections }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="bg-[#07111f] text-white">
        <div className="container-site py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-400 sm:text-sm">
            <Link className="transition-colors hover:text-white" to="/">Home</Link>
            <span className="mx-2 text-[#e3292f]">/</span>
            <span>Legal</span>
            <span className="mx-2 text-[#e3292f]">/</span>
            <span className="text-slate-200">{breadcrumb}</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3292f]">TEJAYS LEGAL</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
            <div className="mt-6 h-1 w-16 bg-[#e3292f]" />
            {subtitle && <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>}
          </div>
        </div>
      </div>

      <main className="container-site py-10 sm:py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <aside className="hidden lg:sticky lg:top-24 lg:block" aria-label="On this page">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">On this page</p>
            <nav className="mt-4 border-l border-slate-200 pl-4">
              <ol className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a className="text-sm leading-5 text-slate-500 transition-colors hover:text-[#e3292f]" href={`#${section.id}`}>
                      <span className="mr-2 font-semibold text-[#e3292f]">{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            <p className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{intro}</p>
            <div className="mt-10 space-y-10">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-slate-100 pt-8 first:border-0 first:pt-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-sm font-bold tracking-[0.15em] text-[#e3292f]">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="text-xl font-bold tracking-tight text-[#07111f] sm:text-2xl">{section.title}</h2>
                  </div>
                  <div className="mt-4 space-y-4 pl-9 text-sm leading-7 text-slate-600 sm:text-base">
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.items && (
                      <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-[#e3292f]">
                        {section.items.map((item) => <li key={item} className="pl-2">{item}</li>)}
                      </ol>
                    )}
                    {section.bullets && (
                      <ul className="list-disc space-y-2 pl-5 marker:text-[#e3292f]">
                        {section.bullets.map((item) => <li key={item} className="pl-2">{item}</li>)}
                      </ul>
                    )}
                    {section.details && (
                      <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 sm:p-5">
                        {section.details.map((detail) => (
                          <div key={detail.label} className="border-b border-slate-200 pb-3 last:border-0 sm:last:border-b sm:nth-last-child(-n+2):border-0 sm:nth-last-child(-n+2):pb-0">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{detail.label}</p>
                            <p className="mt-1 text-sm font-semibold text-[#07111f]">{detail.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.certificate && (
                      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center sm:py-12">
                        <FileBadge aria-hidden="true" size={34} strokeWidth={1.5} className="text-[#e3292f]" />
                        <p className="mt-4 font-semibold text-[#07111f]">Official ISO Certificate</p>
                        <p className="mt-2 text-sm text-slate-500">Certificate document will be published here.</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
            <ContactBox />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
