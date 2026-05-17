import { Header } from "@/app/components/Header";
import { ContactForm } from "@/app/components/Contact";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative bg-black text-zinc-200 font-sans selection:bg-cyan-900 selection:text-cyan-50 min-h-screen">
      <Header />

      {/* HERO BAND */}
      <section
        className="relative pt-48 pb-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-geometric-focused-background.jpg')",
        }}
      >
        <div className="absolute inset-0 gradient-to-b from-black/40 via-black/30 to-black/55 mx-auto" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              New Project Inquiry
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text gradient-to-r from-cyan-400 to-blue-600">
              Something.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Tell me what you&apos;re working on — I&apos;ll come back with a
            clear path forward, not a generic pitch.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-geometric-background-play-station-2-style-design.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT — Info panel */}
            <div className="lg:col-span-5 space-y-12">
              {/* What happens next (Timeline UI matching Main Page Expertise Section) */}
              <div className="bg-black/40 border border-white/5 p-8 md:p-10">
                <h2 className="text-sm uppercase tracking-[0.25em] text-cyan-500 font-bold mb-8">
                  What happens next
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      n: "01",
                      title: "You fill in the form",
                      body: "Share your project details, timeline, and goals — as much or as little as you know.",
                    },
                    {
                      n: "02",
                      title: "I review & reply",
                      body: "Within 24–48 hours I'll come back with questions or a clear proposal.",
                    },
                    {
                      n: "03",
                      title: "We align & start",
                      body: "Once we're on the same page, work begins — no long back-and-forth.",
                    },
                  ].map(({ n, title, body }) => (
                    <div
                      key={n}
                      className="border-l-2 border-cyan-900/50 pl-6 py-1 hover:border-cyan-500 transition-colors"
                    >
                      <span className="block text-xs font-bold text-zinc-500 mb-1 tracking-widest">
                        STEP {n}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="text-center">
                <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-500 font-bold mb-6">
                  Or reach out directly
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center w-full mx-auto">
                  {[
                    {
                      href: "mailto:golemiaurel68@gmail.com",
                      src: "/Logos/Aurel_Golemi_Gmail.png",
                      alt: "Gmail",
                      label: "Email",
                      detail: "golemiaurel68@gmail.com",
                    },
                    {
                      href: "https://wa.me/+306975618389",
                      src: "/Logos/Aurel_Golemi_WhatsApp.png",
                      alt: "WhatsApp",
                      label: "WhatsApp",
                      detail: "+30 697 561 8389",
                    },
                    {
                      href: "https://instagram.com/aurelgolemi",
                      src: "/Logos/Aurel_Golemi_Instagram.png",
                      alt: "Instagram",
                      label: "Instagram",
                      detail: "@aurelgolemi",
                    },
                    {
                      href: "viber://chat?number=+306975618389",
                      src: "/Logos/Aurel_Golemi_Viber.png",
                      alt: "Viber",
                      label: "Viber",
                      detail: "+30 697 561 8389",
                    },
                  ].map(({ href, src, alt, label, detail }) => (
                    <Link
                      key={label}
                      href={href}
                      className="
                      inline-flex flex-col items-center justify-start gap-3
                      border border-white/30 rounded-xl
                    bg-white/5 backdrop-blur-sm
                    text-white px-3 py-4 sm:px-4 sm:py-5
                    hover:bg-white hover:text-black hover:border-white
                      transition-all duration-200 ease-in-out
                      hover:scale-105 hover:shadow-xl
                      text-center group
                    "
                    >
                      <Image
                        className="block mx-auto opacity-90 group-hover:opacity-100 transition-opacity"
                        width={40}
                        height={40}
                        src={src}
                        alt={`Aurel Golemi ${alt}`}
                      />
                      <div className="flex flex-col items-center gap-0.5 w-full">
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-50">
                          {label}
                        </span>
                        <span className="text-xs font-medium w-full truncate leading-snug">
                          {detail}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="border border-cyan-900/40 bg-cyan-950/20 p-6 text-center w-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-[0.15em]">
                    Available — Q3 2026
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Currently accepting new freelance projects. Slots are limited
                  — early enquiries get priority.
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-7">
              <div className="bg-black/60 border border-white/5 p-8 md:p-12 relative overflow-hidden h-full">
                {/* Subtle top glare effect */}
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative py-8 bg-cover bg-center border-t border-white/10"
        style={{
          backgroundImage: "url('/Backgrounds/modern-gradient-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Aurel Golemi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
