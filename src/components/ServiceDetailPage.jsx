"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Container,
  Globe2,
  HeartHandshake,
  Network,
  Package,
  Plane,
  ShieldCheck,
  Ship,
  Snowflake,
  Truck,
} from "lucide-react";
import MotionReveal from "@/components/common/MotionReveal";

const serviceIcons = {
  Truck,
  Globe2,
  Plane,
  Ship,
  Snowflake,
  ShieldCheck,
  Package,
  Container,
};

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Reliable Coordination",
    description:
      "Shipment details and arrangements are discussed carefully so the next steps are clear.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Service",
    description:
      "Logistics conversations are shaped around your cargo, route, and operational needs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Care",
    description:
      "Handling, packaging, and applicable requirements are considered as part of planning.",
  },
  {
    icon: Network,
    title: "Logistics Network",
    description:
      "Coordination support connects transportation needs with relevant logistics arrangements.",
  },
];

function quoteHref(slug) {
  return `/get-quote?service=${encodeURIComponent(slug)}`;
}

export default function ServiceDetailPage({ service }) {
  const Icon = serviceIcons[service.icon] ?? Container;

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-white">
        <section className="relative isolate overflow-hidden bg-linear-to-br from-[#071A35] via-[#0B2141] to-[#14213D] px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#075FAE]/20 blur-[110px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#F47721]/15 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] bg-size-[48px_48px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <MotionReveal className="min-w-0">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300"
              >
                {service.breadcrumb.map((item, index) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2"
                  >
                    {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A35]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-[#F9A66C]">
                        {item.label}
                      </span>
                    )}
                  </span>
                ))}
              </nav>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#F9A66C]">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h1 className="max-w-3xl text-3xl font-bold uppercase leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-6xl">
                {service.titlePrefix}{" "}
                <span className="text-[#F47721]">
                  {service.highlightedTitle}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {service.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={quoteHref(service.slug)}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F47721] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#DF6414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A35]"
                >
                  Get a Custom Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A35]"
                >
                  All Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal className="relative min-w-0" delay={0.1}>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/15 bg-[#10233F] shadow-2xl shadow-black/20">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#071A35]/45 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-xl border border-white/10 bg-[#071A35]/95 px-4 py-3 shadow-xl sm:left-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F47721] text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0 text-sm font-semibold text-white">
                  {service.title}
                </span>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <MotionReveal className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
                Service Details
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Service Overview
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {service.description}
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Industries We Serve
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Examples of sectors with logistics needs relevant to this
                  service.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {service.industries.map((industry) => (
                    <li
                      key={industry}
                      className="rounded-full border border-[#D8E2EE] bg-[#F8FAFC] px-3.5 py-2 text-xs font-semibold text-[#29415E] sm:text-sm"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-l-4 border-[#F47721] pl-5 sm:pl-6">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {service.ctaTitle}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {service.ctaDescription}
                </p>
                <Link
                  href={quoteHref(service.slug)}
                  className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#075FAE] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#064B8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2"
                >
                  Get a Custom Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal className="min-w-0" delay={0.08}>
              <aside className="rounded-xl border border-[#E2E8F0] border-l-4 border-l-[#F47721] bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
                <h2 className="text-xl font-bold text-[#0F172A]">
                  Key Service Features
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#075FAE]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="my-7 h-px bg-[#E2E8F0]" />
                <h2 className="text-xl font-bold text-[#0F172A]">
                  Why Choose SMSL?
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.whyChooseUs}
                </p>
              </aside>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-[#071A35] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <MotionReveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                The SMSL Approach
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Why choose SMSL
              </h2>
            </MotionReveal>
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <MotionReveal
                    key={benefit.title}
                    className="border-t border-white/15 pt-5"
                    delay={index * 0.05}
                  >
                    <BenefitIcon
                      size={23}
                      className="text-[#F47721]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-base font-bold">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {benefit.description}
                    </p>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
                Start a Conversation
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {service.ctaDescription}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#075FAE] px-5 py-3 text-sm font-bold text-[#075FAE] transition-colors hover:bg-[#075FAE]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href={quoteHref(service.slug)}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F47721] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#DF6414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075FAE] focus-visible:ring-offset-2"
              >
                Request Quote
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
