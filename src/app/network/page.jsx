"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndiaNetworkMap, { locations } from "@/components/IndiaNetworkMap";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  Navigation,
  Network,
  Route,
  Truck,
} from "lucide-react";

const capabilities = [
  {
    icon: Truck,
    title: "Road Transportation",
    description:
      "Transportation coordination for business shipments and cargo movement.",
  },
  {
    icon: Globe2,
    title: "Air & Sea Freight",
    description:
      "Freight options to support domestic and international logistics requirements.",
  },
  {
    icon: Network,
    title: "Network Coordination",
    description:
      "Connecting important commercial locations through logistics coordination.",
  },
];

export default function NetworkPage() {
  return (
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
                Our Network
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Connecting India.
              <span className="block text-[#F47721]">Moving business.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Our network of branches and associates supports logistics
              coordination across key commercial and transportation locations in
              India, helping businesses connect their shipments with the routes
              they need.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#F47721] px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
              >
                Discuss Your Route
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#locations"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Locations
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* Network highlights */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F47721]/15 text-[#F9A66C]">
                <MapPin size={23} />
              </div>
              <p className="mt-6 text-4xl font-bold text-white">6</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Featured strategic locations
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#075FAE]/20 text-[#60A5FA]">
                <Route size={23} />
              </div>
              <p className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Multi-modal
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Road, air and sea freight
              </p>
            </div>

            <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-[#F47721]/20 bg-[#F47721]/[0.06] p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F47721]/15 text-[#F9A66C]">
                <Building2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Hyderabad Head Office
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Central point for logistics coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          INTERACTIVE NETWORK MAP
      ============================================================ */}

      <section
        id="locations"
        className="bg-[#071A35] px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                SMSL Connectivity
              </span>
              <span className="h-[2px] w-8 bg-[#F47721]" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our network across India.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Explore our featured locations and their role in our logistics
              network.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* Map panel */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10233F] p-4 sm:p-6">
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:35px_35px]" />

              <div className="relative mb-4 flex items-center gap-2">
                <Network size={16} className="text-[#F47721]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  SMSL Network Map
                </span>
              </div>

              <div className="relative mx-auto aspect-[4/5] w-full max-w-[470px] overflow-hidden">
                <IndiaNetworkMap className="absolute inset-0 h-full w-full" />
              </div>

              {/* Map stats */}

              <div className="relative grid grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#071A35]/90 p-4 sm:p-5">
                <div>
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    Featured locations
                  </p>
                </div>

                <div className="pl-5">
                  <p className="text-xl font-bold text-[#F47721] sm:text-2xl">
                    Pan-India
                  </p>
                  <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    Network coverage
                  </p>
                </div>
              </div>

              <p className="relative mt-3 text-[10px] leading-5 text-slate-500">
                Map markers are positioned from city coordinates. Route lines
                illustrate network connectivity and do not represent actual road
                routes.
              </p>
            </div>

            {/* Location cards */}

            <div className="space-y-3">
              {locations.map((location, index) => {
                const isHub = location.id === "hyderabad";

                return (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                      isHub
                        ? "border-[#F47721]/35 bg-[#F47721]/[0.08]"
                        : "border-white/10 bg-white/[0.035] hover:border-[#075FAE]/50 hover:bg-white/[0.06]"
                    }`}
                  >
                    {isHub && (
                      <div className="absolute inset-y-0 left-0 w-1 bg-[#F47721]" />
                    )}

                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          isHub
                            ? "bg-[#F47721] text-white"
                            : "bg-[#075FAE]/20 text-[#60A5FA]"
                        }`}
                      >
                        {isHub ? <Building2 size={21} /> : <MapPin size={21} />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-white sm:text-lg">
                            {location.city}
                          </h3>

                          {isHub && (
                            <span className="rounded-full bg-[#F47721]/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#F9A66C]">
                              Head Office
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-slate-400">
                          {location.state}
                        </p>

                        <p className="mt-3 text-xs leading-5 text-slate-400 sm:text-sm">
                          {location.description}
                        </p>
                      </div>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${location.city} on Google Maps`}
                        className="shrink-0 rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/10 hover:text-[#F47721]"
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LOGISTICS CAPABILITIES
      ============================================================ */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              More ways to keep business moving.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Explore our logistics capabilities and connect with our team to
              discuss your requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#075FAE]/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE] transition-colors group-hover:bg-[#F47721] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#071A35] p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#075FAE]/20 blur-[110px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#F47721]/10 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <Navigation size={20} className="text-[#F47721]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                    Let&apos;s Connect
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Have a route or shipment in mind?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Talk to our team about your cargo, destination, and
                  transportation requirements.
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
          </div>
        </div>
      </section>
    </main>
  );
}
