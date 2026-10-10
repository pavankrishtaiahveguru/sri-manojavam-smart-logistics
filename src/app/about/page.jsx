"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Eye,
  Globe2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Target,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We focus on dependable service, clear communication, and consistent logistics coordination.",
  },
  {
    icon: HeartHandshake,
    title: "Safety First",
    description:
      "We prioritize responsible handling and safe transportation practices throughout the logistics process.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We work to improve coordination, reduce avoidable delays, and deliver practical logistics solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We listen to each customer's requirements and aim to build long-term business relationships.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "The beginning",
    description:
      "Sri Manojavam began its journey with a focus on transportation and logistics services.",
  },
  {
    year: "2025",
    title: "A new chapter",
    description:
      "The business evolved into Sri Manojavam Smart Logistics Private Limited, with a continued focus on technology, service, and operational development.",
  },
  {
    year: "Today",
    title: "Moving forward",
    description:
      "We continue to develop logistics solutions across road, air, sea freight, and specialized transportation requirements.",
  },
];

const services = [
  "Transportation & Logistics",
  "International Freight Forwarding",
  "Air Freight",
  "Sea Freight",
  "Refrigerated Transportation",
  "Hazardous Goods Transportation",
  "Non-Hazardous Goods Transportation",
  "Supply Chain Solutions",
];

const locations = [
  { city: "Hyderabad", state: "Telangana", headOffice: true },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Delhi", state: "Delhi" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Bengaluru", state: "Karnataka" },
  { city: "Visakhapatnam", state: "Andhra Pradesh" },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#071A35] px-5 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#075FAE]/20 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#F47721]/10 blur-[130px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
                About SMSL
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Logistics built on
              <span className="text-[#F47721]"> trust.</span>
              <br />
              Connections built to last.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Sri Manojavam Smart Logistics Private Limited delivers
              transportation and logistics solutions designed around
              reliability, safety, efficiency, and customer needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#F47721] px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
              >
                Talk to Our Team
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#F47721]" />
                Established in 2018
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#F47721]" />
                Evolved in 2025
              </span>
            </div>
          </motion.div>

          {/* Hero image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102846]">
              <Image
                src="/images/about/about-logistics.jpg"
                alt="Transportation and logistics operations"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/85 via-[#071A35]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#F47721] backdrop-blur-md">
                    <Truck size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Moving business forward
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Smart logistics. Dependable connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:-left-5 sm:p-5">
              <p className="text-2xl font-bold text-[#075FAE]">2018</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Journey started
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          COMPANY INTRODUCTION
      ============================================================ */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              More than transportation.
              <span className="text-[#F47721]"> A commitment.</span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#F47721]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base"
          >
            <p>
              Sri Manojavam began its journey in 2018 with a commitment to
              serving transportation and logistics needs. In 2025, the business
              evolved into Sri Manojavam Smart Logistics Private Limited,
              marking a new chapter in its development.
            </p>

            <p>
              Our approach brings together logistics coordination, customer
              communication, and a focus on responsible transportation. We work
              to understand each shipment's requirements and identify suitable
              solutions for the journey ahead.
            </p>

            <p>
              From road transportation to air and sea freight, refrigerated
              logistics, and specialized cargo requirements, our objective is to
              help businesses manage their transportation needs with confidence.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 pt-2 text-sm font-bold text-[#075FAE] transition-colors hover:text-[#F47721]"
            >
              Let's discuss your requirements
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          MILESTONES
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Journey"
            title="Built through experience."
            description="Our story reflects continued development, a commitment to service, and a forward-looking approach to logistics."
          />

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-[#CBD5E1] md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#075FAE]/10 bg-[#075FAE]/10 text-lg font-bold text-[#075FAE]">
                  {milestone.year}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {milestone.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          VISION & MISSION
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#071A35] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#075FAE]/15 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F47721]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Direction"
            title="Driven by purpose."
            description="A clear direction guides how we serve our customers and approach the future of logistics."
            dark
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075FAE]/20 text-[#60A5FA]">
                <Eye size={27} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                To move businesses forward.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                To become a trusted logistics partner by developing reliable,
                technology-driven, efficient, and sustainable transportation
                solutions that connect businesses and markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-[#F47721]/20 bg-[#F47721]/[0.06] p-7 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F47721]/15 text-[#F9A66C]">
                <Target size={27} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Deliver with confidence.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                To provide safe, reliable, timely, and cost-conscious logistics
                services through efficient operations, technology adoption,
                responsible transportation, and a customer-first approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CORE VALUES
      ============================================================ */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Core Values"
            title="Principles behind every journey."
            description="Our values shape our approach to customers, operations, and long-term business relationships."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#075FAE]/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE] transition-all duration-300 group-hover:bg-[#F47721] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0F172A]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR SERVICES
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              Logistics solutions for different needs.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              We support a range of transportation and freight requirements.
              Contact our team to discuss the route, cargo, and service suitable
              for your business.
            </p>

            <Link
              href="/services"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#075FAE] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#064B8C]"
            >
              Explore All Services
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 transition-colors hover:border-[#F47721]/40"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F47721]/10 text-[#F47721]">
                  <CheckCircle2 size={16} />
                </span>

                <span className="text-sm font-semibold leading-6 text-[#334155]">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NETWORK
      ============================================================ */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075FAE]/10 text-[#075FAE]">
                <Globe2 size={28} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
                Our Network
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                Connecting key locations across India.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Our network of branches and associates supports logistics
                coordination across important commercial and transportation
                locations in India.
              </p>

              <Link
                href="/network"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#075FAE] transition-colors hover:text-[#F47721]"
              >
                Discover Our Network
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`rounded-2xl border p-4 sm:p-5 ${
                    location.headOffice
                      ? "border-[#F47721]/30 bg-[#FFF3E9]"
                      : "border-[#E2E8F0] bg-white"
                  }`}
                >
                  <MapPin
                    size={19}
                    className={
                      location.headOffice ? "text-[#F47721]" : "text-[#075FAE]"
                    }
                  />

                  <h3 className="mt-4 text-sm font-bold text-[#0F172A] sm:text-base">
                    {location.city}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {location.state}
                  </p>

                  {location.headOffice && (
                    <span className="mt-3 inline-block rounded-full bg-[#F47721]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#C65A11]">
                      Head Office
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMITMENT
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#071A35] p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#075FAE]/20 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#F47721]/10 blur-[100px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3">
                  <Handshake size={22} className="text-[#F47721]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                    Our Commitment
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Every shipment matters. Every relationship counts.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  We aim to build lasting partnerships through dependable
                  service, responsible logistics practices, and a clear
                  understanding of your business requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F47721] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
              >
                Work With Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   REUSABLE SECTION HEADING
================================================================ */

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-[#F47721]" />
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-[#F9A66C]" : "text-[#075FAE]"
          }`}
        >
          {eyebrow}
        </span>
        <span className="h-[2px] w-8 bg-[#F47721]" />
      </div>

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
