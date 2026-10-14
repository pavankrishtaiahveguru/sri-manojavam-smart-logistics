"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Network", href: "/network" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Transportation & Logistics", href: "/services" },
  { name: "International Freight Forwarding", href: "/services" },
  { name: "Air Freight", href: "/services" },
  { name: "Sea Freight", href: "/services" },
  { name: "Refrigerated Transportation", href: "/services" },
  { name: "Hazardous Goods", href: "/services" },
  { name: "Supply Chain Solutions", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071A35] text-white">
      {/* -------------------------------------------------------
          TOP CTA
      -------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-40 h-80 w-80 rounded-full bg-[#F47721]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#075FAE]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F47721]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47721]">
                  Let&apos;s move forward
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to move your
                <span className="text-[#F47721]"> business forward?</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you need to move. Our team will help you find a
                safe, efficient and cost-effective logistics solution.
              </p>
            </div>

            <Link
              href="/get-quote"
              className="
                group inline-flex shrink-0 items-center gap-3 rounded-xl
                bg-[#F47721] px-6 py-4 text-sm font-bold text-white
                shadow-lg shadow-orange-950/20
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white hover:text-[#075FAE]
              "
            >
              Get a Quote
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          MAIN FOOTER
      -------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_1fr_1.25fr]">
          {/* ---------------------------------------------------
              COMPANY
          ---------------------------------------------------- */}
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="Sri Manojavam Smart Logistics"
            >
              <div className="rounded-xl bg-white px-3 py-2">
                <Image
                  src="/logo/smsl-logo.png"
                  alt="Sri Manojavam Smart Logistics Pvt Ltd"
                  width={185}
                  height={82}
                  className="h-[62px] w-auto object-contain"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Sri Manojavam Smart Logistics Private Limited is a Hyderabad based
              logistics and transportation company delivering reliable, safe and
              technology-driven logistics solutions.
            </p>

            {/* Established badge */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F47721]/10">
                <span className="text-sm font-bold text-[#F47721]">18+</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Years of experience
                </p>
                <p className="text-[11px] text-slate-500">
                  Established in 2018
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------
              QUICK LINKS
          ---------------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    group flex w-fit items-center gap-2 text-sm
                    text-slate-400 transition-colors duration-200
                    hover:text-white
                  "
                >
                  <span className="h-px w-0 bg-[#F47721] transition-all duration-200 group-hover:w-3" />
                  {link.name}
                </Link>
              ))}

              <Link
                href="/get-quote"
                className="
                  group flex w-fit items-center gap-2 pt-2 text-sm
                  font-semibold text-[#F47721] transition-colors
                  hover:text-white
                "
              >
                Get a Quote
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* ---------------------------------------------------
              SERVICES
          ---------------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Our Services
            </h3>

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="
                    block text-sm leading-5 text-slate-400
                    transition-colors duration-200 hover:text-[#F47721]
                  "
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------
              CONTACT
          ---------------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#F47721]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Registered Office
                  </p>

                  <p className="text-sm leading-6 text-slate-300">
                    Flat No: 4-89/307, Tejha Heights,
                    <br />
                    Above DCB Bank, Chandanagar,
                    <br />
                    Serilingampally, Rangareddy District,
                    <br />
                    Hyderabad, Telangana – 500050
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#F47721]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <div className="space-y-1">
                    <a
                      href="tel:+919441446600"
                      className="block text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      +91 94414 46600
                    </a>

                    <a
                      href="tel:+919440688737"
                      className="block text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      +91 94406 88737
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#F47721]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:sales@srimanojavam­smartlogistics.in"
                    className="block break-all text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    sales@srimanojavam­smartlogistics.in
                  </a>

                  <a
                    href="mailto:rk@srimanojavam­smartlogistics.in"
                    className="mt-1 block break-all text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    rk@srimanojavam­smartlogistics.in
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#F47721]">
                  <Clock3 size={17} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Working Hours
                  </p>

                  <p className="text-sm text-slate-300">Monday – Saturday</p>
                  <p className="text-sm text-slate-400">9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------
            DIVIDER
        ------------------------------------------------------ */}
        <div className="my-10 h-px bg-white/10" />

        {/* -----------------------------------------------------
            BOTTOM BAR
        ------------------------------------------------------ */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Sri Manojavam Smart Logistics Private
            Limited. All rights reserved.
          </p>

          <DevelopedByStaffArc />

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
            {/* <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>

            <span className="h-3 w-px bg-white/10" /> */}

            <span>
              GSTIN: <span className="text-slate-400">36ABRCS0519B1ZG</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
