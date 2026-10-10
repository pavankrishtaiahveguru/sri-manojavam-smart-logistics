"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Truck,
} from "lucide-react";

const benefits = [
  "Reliable transportation solutions",
  "Road, Air & Sea freight",
  "Technology-driven logistics",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#075FAE]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#F47721]/10 blur-[120px]" />

      {/* Decorative grid */}

      <div
        className="
          pointer-events-none
          absolute right-0 top-0
          h-full w-1/2
          opacity-[0.035]
          bg-[linear-gradient(#075FAE_1px,transparent_1px),linear-gradient(90deg,#075FAE_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#071A35]
            px-6
            py-12
            shadow-[0_25px_70px_rgba(7,26,53,0.18)]
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >
          {/* ========================================================
              INNER GLOW
          ======================================================== */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#075FAE]/25 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#F47721]/15 blur-[100px]" />

          {/* Orange accent */}

          <div className="absolute left-0 top-0 h-full w-1 bg-[#F47721]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* ======================================================
                LEFT CONTENT
            ====================================================== */}

            <div>
              {/* Eyebrow */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#F47721]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
                  Let&apos;s Move Forward
                </span>
              </div>

              {/* Heading */}

              <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
                Ready to move your
                <span className="text-[#F47721]"> business forward?</span>
              </h2>

              {/* Description */}

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Whether you need reliable transportation, freight forwarding,
                refrigerated logistics, or a complete supply chain solution,
                SMSL is ready to help you move with confidence.
              </p>

              {/* Benefits */}

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#F47721]"
                    />

                    <span className="text-xs font-medium text-slate-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/get-quote"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-[#F47721]
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#F47721]/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#DF6414]
                    hover:shadow-xl
                    hover:shadow-[#F47721]/25
                  "
                >
                  Get a Quote
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-6
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:border-white/25
                    hover:bg-white/[0.09]
                  "
                >
                  Explore Services
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* ======================================================
                RIGHT VISUAL
            ====================================================== */}

            <div className="relative hidden lg:block">
              <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center">
                {/* Outer rings */}

                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="absolute inset-7 rounded-full border border-[#075FAE]/30" />

                <div className="absolute inset-14 rounded-full border border-[#F47721]/20" />

                {/* Route lines */}

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#075FAE]/40 to-transparent" />

                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#075FAE]/40 to-transparent" />

                {/* Center */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-[#F47721]/30
                    bg-[#F47721]/10
                    shadow-[0_0_60px_rgba(244,119,33,0.18)]
                    backdrop-blur-xl
                  "
                >
                  <Truck
                    size={42}
                    strokeWidth={1.5}
                    className="text-[#F47721]"
                  />
                </motion.div>

                {/* Route points */}

                <div className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#075FAE] shadow-[0_0_15px_rgba(7,95,174,0.8)]" />

                <div className="absolute right-[15%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#F47721] shadow-[0_0_15px_rgba(244,119,33,0.8)]" />

                <div className="absolute bottom-[20%] left-[27%] h-2.5 w-2.5 rounded-full bg-[#075FAE] shadow-[0_0_15px_rgba(7,95,174,0.8)]" />

                <div className="absolute bottom-[17%] right-[24%] h-2.5 w-2.5 rounded-full bg-[#F47721] shadow-[0_0_15px_rgba(244,119,33,0.8)]" />
              </div>

              {/* Floating contact card */}

              <div
                className="
                  absolute
                  -bottom-1
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-3
                  whitespace-nowrap
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#075FAE]/20">
                  <Phone size={16} className="text-[#60A5FA]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Talk to our team
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    94414 46600
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
