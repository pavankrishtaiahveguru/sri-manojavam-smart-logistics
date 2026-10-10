"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import IndiaNetworkMap, { locations } from "@/components/IndiaNetworkMap";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  MapPin,
  Network,
} from "lucide-react";

export default function IndiaNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#071A35] py-20 sm:py-24 lg:py-32">
      {/* ============================================================
          BACKGROUND EFFECTS
      ============================================================ */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#075FAE]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F47721]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47721]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
              Our Network
            </span>

            <span className="h-[2px] w-10 bg-[#F47721]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Connected across
            <span className="text-[#F47721]"> India.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            With branches and associates across strategic locations, SMSL
            connects businesses to reliable transportation and logistics
            solutions across India.
          </p>
        </motion.div>

        {/* ============================================================
            NETWORK CONTENT
        ============================================================ */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ==========================================================
              INDIA MAP
          ========================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              relative mx-auto
              aspect-[4/5]
              w-full
              max-w-[520px]
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.035]
            "
          >
            {/* --------------------------------------------------------
                Background grid
            --------------------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute inset-0
                opacity-[0.08]
                bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                bg-[size:40px_40px]
              "
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-28 top-8">
              <IndiaNetworkMap className="h-full w-full" />
            </div>

            {/* --------------------------------------------------------
                Top label
            --------------------------------------------------------- */}

            <div className="absolute left-6 top-6 flex items-center gap-2">
              <Network size={15} className="text-[#F47721]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                SMSL Network
              </span>
            </div>

            {/* --------------------------------------------------------
                Bottom statistics
            --------------------------------------------------------- */}

            <div
              className="
                absolute bottom-5 left-5 right-5
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                bg-[#071A35]/85
                p-4
                backdrop-blur-xl
              "
            >
              <div>
                <p className="text-2xl font-bold text-white">6</p>

                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Strategic Locations
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold text-[#F47721]">Pan-India</p>

                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Coverage
                </p>
              </div>
            </div>
          </motion.div>

          {/* ==========================================================
              LOCATION CARDS
          ========================================================== */}

          <div className="space-y-3">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl border
                  p-5
                  transition-all duration-300
                  ${
                    location.featured
                      ? "border-[#F47721]/30 bg-[#F47721]/10"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                  }
                `}
              >
                {/* Active line */}

                <span
                  className={`
                    absolute bottom-0 left-0 top-0 w-1
                    ${
                      location.featured
                        ? "bg-[#F47721]"
                        : "bg-[#075FAE] opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                <div className="flex items-center gap-4">
                  {/* Icon */}

                  <div
                    className={`
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      ${
                        location.featured
                          ? "bg-[#F47721] text-white"
                          : "bg-[#075FAE]/20 text-[#60A5FA]"
                      }
                    `}
                  >
                    {location.featured ? (
                      <Building2 size={19} />
                    ) : (
                      <MapPin size={19} />
                    )}
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-white">
                        {location.city}
                      </h3>

                      {location.featured && (
                        <span className="rounded-full bg-[#F47721]/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F9A66C]">
                          Head Office
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {location.state}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {location.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  <ArrowRight
                    size={17}
                    className="
                      shrink-0
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#F47721]
                    "
                  />
                </div>
              </motion.div>
            ))}

            {/* --------------------------------------------------------
                CTA
            --------------------------------------------------------- */}

            <Link
              href="/contact"
              className="
                group mt-5
                inline-flex
                items-center
                gap-3
                text-sm
                font-bold
                text-[#F47721]
                transition-colors
                hover:text-white
              "
            >
              Connect with our team
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
