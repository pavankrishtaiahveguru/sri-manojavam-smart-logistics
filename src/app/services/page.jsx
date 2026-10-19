"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Container,
  Globe2,
  Package,
  Plane,
  ShieldCheck,
  Ship,
  Snowflake,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import { services } from "@/data/services";

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

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your cargo, origin, destination, timeline, and handling requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We discuss suitable logistics options and coordinate the shipment requirements.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "We work with the relevant transportation and logistics partners to coordinate movement.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Our team remains available to discuss shipment requirements and coordination needs.",
  },
];

export default function ServicesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-white">
        {/* ============================================================
          HERO
      ============================================================ */}

        <section className="relative overflow-hidden bg-[#071A35] px-5 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#075FAE]/20 blur-[130px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#F47721]/10 blur-[130px]" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F47721]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
                  Our Services
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Logistics solutions.
                <span className="block text-[#F47721]">Built around you.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                From road transportation and freight forwarding to
                temperature-sensitive and specialized cargo, SMSL helps
                businesses coordinate logistics around their shipment needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/get-quote"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#F47721] px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
                >
                  Request a Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="#all-services"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Explore Services
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F47721]" />
                  Road, Air & Sea
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F47721]" />
                  Cold-chain logistics
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F47721]" />
                  Specialized cargo
                </span>
              </div>
            </motion.div>

            {/* Hero visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#10233F]">
                <Image
                  src="/images/hero/hero-2.jpg"
                  alt="Freight truck transporting cargo on a highway"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/90 via-[#071A35]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#F47721] backdrop-blur-md">
                      <Truck size={25} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Connected logistics
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Planning, coordination, transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:-left-5 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F47721]/10 text-[#F47721]">
                  <Zap size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Smart solutions
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Designed around your cargo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
          SERVICE INTRODUCTION
      ============================================================ */}

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-end gap-6 md:grid-cols-[1fr_0.8fr] md:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
                What We Do
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                One logistics partner.
                <span className="text-[#F47721]"> Multiple solutions.</span>
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Every shipment has different requirements. Explore our service
              categories and contact our team to discuss your cargo, route,
              handling needs, and delivery timeline.
            </p>
          </div>
        </section>

        {/* ============================================================
          SERVICE CARDS
      ============================================================ */}

        <section
          id="all-services"
          className="bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon] ?? Container;

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
                    className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#075FAE]/30 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    {/* Image */}

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#10233F]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/75 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 rounded-lg border border-white/15 bg-[#071A35]/60 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                        {service.number}
                      </span>

                      <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F47721] text-white shadow-lg">
                        <Icon size={21} />
                      </div>
                    </div>

                    {/* Card content */}

                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#075FAE]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {service.cardDescription}
                      </p>

                      <div className="mt-5 space-y-2.5">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2.5 text-xs leading-5 text-slate-600"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-[#F47721]"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-2 border-t border-[#E2E8F0] pt-4 sm:grid-cols-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/explore inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#075FAE] px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#064B8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2"
                        >
                          Explore Service
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover/explore:translate-x-1"
                          />
                        </Link>
                        <Link
                          href={`/get-quote?service=${encodeURIComponent(service.slug)}`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#075FAE]/25 px-3 py-2 text-sm font-bold text-[#075FAE] transition-colors hover:border-[#F47721] hover:text-[#C95A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] focus-visible:ring-offset-2"
                        >
                          Enquire Now
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
          SPECIALIZED CARGO
      ============================================================ */}

        <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
                Specialized Logistics
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                Different cargo.
                <span className="text-[#F47721]"> Appropriate handling.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Some shipments require additional planning, suitable equipment,
                or specific handling procedures. Share your cargo details with
                us so our team can discuss the applicable transportation
                requirements.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#075FAE] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064B8C]"
              >
                Discuss Cargo Requirements
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE]">
                  <Snowflake size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  Temperature-sensitive cargo
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Discuss cold-chain transportation requirements, expected
                  temperature ranges, and suitable shipment arrangements.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F47721]/10 text-[#F47721]">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  Hazardous goods
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Discuss cargo classification, required documentation,
                  packaging, and applicable transport compliance before booking.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE]">
                    <Warehouse size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      UN-certified drums and boxes
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Contact our team to discuss your packaging and cargo
                      requirements involving UN-certified drums and boxes.
                      Availability, compatibility, and applicable regulations
                      should be confirmed for each shipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
          OUR APPROACH
      ============================================================ */}

        <section className="bg-[#071A35] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                How We Work
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A clear approach to logistics.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                We start by understanding your requirements and coordinating the
                next steps with you.
              </p>
            </div>

            <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#F47721]">
                      {step.number}
                    </span>
                    {index !== processSteps.length - 1 && (
                      <ArrowRight
                        size={18}
                        className="hidden text-slate-600 lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
          FINAL CTA
      ============================================================ */}

        <section className="bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 md:flex-row md:items-center lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47721]">
                Start a Conversation
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Let&apos;s find the right logistics solution.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Tell us about your cargo, destination, and timeline. Our team
                can discuss the next steps with you.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F47721] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
            >
              Contact Our Team
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
