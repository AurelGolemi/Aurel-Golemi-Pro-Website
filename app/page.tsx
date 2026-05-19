import React from "react";
import { Header } from "@/app/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="bg-black text-zinc-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      <Header />

      {/* HOME SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-geometric-focused-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Engineering High-Performance Web Applications.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Helping businesses launch fast, polished websites that hold up as
            they grow — built to look sharp, load fast, and adapt to whatever
            comes next.
          </p>
          <Link
            href="/Contact/"
            className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-zinc-200 transition-colors"
          >
            Initiate Project
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-geometric-background-play-station-2-style-design.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Architecting the Website.
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                {
                  "I take the technical weight off your plate. Whether you're starting from scratch or need something that connects the dots between your data and your users, I handle the complexity so the end result just works — and makes sense to the people using it."
                }
              </p>
              <p>
                {
                  "Every site I build is set up to stay fast and easy to update long after launch — no bloated code, no mystery maintenance. You get something that performs well from day one and doesn't become a headache down the road."
                }
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Stat Cards */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <span className="block text-4xl font-bold text-white mb-2">
                1+
              </span>
              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                Years Experience
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <span className="block text-4xl font-bold text-white mb-2">
                5+
              </span>
              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                Projects Shipped
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors col-span-2">
              <span className="block text-4xl font-bold text-white mb-2">
                100%
              </span>
              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section
        id="expertise"
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-multi-gradient-line-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            What Goes Into Every Build
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill Nodes */}
            {[
              {
                tech: "Fast Loading Pages",
                desc: "Your visitors won't wait. Pages appear instantly, keeping people on your site longer and ranking higher on Google.",
              },
              {
                tech: "Smooth Interactions",
                desc: "Every click, scroll, and action feels responsive. No freezing, no lag — just a site that behaves exactly how users expect.",
              },
              {
                tech: "Fewer Bugs, Less Maintenance",
                desc: "Built to stay stable. Your site won't randomly break, and future updates won't create new problems.",
              },
              {
                tech: "Top-Tier Design",
                desc: "Every spacing, color, and element is exactly where it should be — on every screen, every device, every browser.",
              },
              {
                tech: "Reliable Under The Hood",
                desc: "Forms, bookings, contact requests — everything that needs to work behind the scenes, works. Every time.",
              },
              {
                tech: "Secure Data Storage",
                desc: "Your business data and customer information is stored safely, organized, and never at risk of being lost.",
              },
              {
                tech: "Premium & Professional Feel",
                desc: "Subtle transitions that make your site feel expensive. First impressions matter — yours will hold up.",
              },
              {
                tech: "Your Site, Your Domain, Fully Managed",
                desc: "Your domain, your hosting, fully set up. No technical back-and-forth — you get a live website you actually own.",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="border-l-2 border-cyan-900/50 pl-6 py-2 hover:border-cyan-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {skill.tech}
                </h3>
                <p className="text-sm text-zinc-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Backgrounds/modern-3d-black-paper-style-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Services Offered.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-white/5 p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Complete Website Builds
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You get a fully working website — not just the visuals, but
                everything behind it. Forms that submit, pages that load your
                content, and data that flows securely without you ever having to
                think about it.
              </p>
            </div>

            <div className="bg-black/40 border border-white/5 p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Design That Works on Every Screen
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your design becomes a real, working website that looks exactly
                right on every screen — phone, tablet, or desktop. Every button,
                section, and detail is built to match what you envisioned,
                nothing left half-done.
              </p>
            </div>

            <div className="bg-black/60 border border-white/5 p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Speed & Health Check
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                If your current website feels slow, outdated, or keeps breaking
                — that gets fixed. Pages load faster, the experience feels
                smoother, and the underlying code stops being a problem you have
                to deal with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative py-40 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/Backgrounds/black-gradient-line-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Build?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            {
              "Currently accepting freelance opportunities for Q3. If you have a complex problem that requires a scalable solution, let's talk."
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-center md:justify-items-start md:items-stretch mt-6 w-full max-w-2xl mx-auto rounded-s">
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
                  w-36 shrink-0
                  border border-white/30 rounded-xl
                 bg-white/5 backdrop-blur-sm
                 text-white px-4 py-5
                 hover:bg-white hover:text-black hover:border-white
                  transition-all duration-200 ease-in-out
                  hover:scale-115 hover:shadow-xl
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
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60           group-hover:opacity-50">
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
        <div className="flex justify-center mt-8">
          <Link href="/Contact/">
            <button type="submit" className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer">
              Or Visit Form
            </button>
          </Link>
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
