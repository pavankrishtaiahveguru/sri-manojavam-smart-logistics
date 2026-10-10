"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Reliable & Safe",
    description:
      "Every shipment is handled with care, accountability and a strong focus on safety.",
  },
  {
    icon: Timer,
    number: "02",
    title: "Timely Delivery",
    description:
      "Efficient planning and dependable operations help keep your shipments moving on schedule.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Smart Solutions",
    description:
      "We combine technology, innovation and operational expertise to create smarter logistics.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Customer Focus",
    description:
      "We understand your requirements and build practical solutions around your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#071A35] py-20 sm:py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#075FAE]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F47721]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47721]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
              Why SMSL
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            More than moving goods.
            <span className="text-[#F47721]"> We move trust.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            From the first mile to the last, our approach is built around
            reliability, safety, efficiency and long-term customer
            relationships.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/about/why-smsl.jpg"
              alt="Sri Manojavam Smart Logistics transportation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="
                object-cover
                transition-transform duration-700
                hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/20 to-transparent" />

            {/* Bottom message */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F47721] text-white">
                  <BadgeCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">Built on trust</p>

                  <p className="mt-1 text-xs text-slate-300">
                    Every shipment matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 top-4 rounded-2xl border border-white/10" />
          </motion.div>

          {/* =================================================
              ADVANTAGES
          ================================================== */}

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-white/10
                    bg-white/[0.05]
                    p-6
                    backdrop-blur-sm
                    transition-all duration-400
                    hover:-translate-y-1
                    hover:border-[#F47721]/30
                    hover:bg-white/[0.08]
                  "
                >
                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-bold text-white/15">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl
                      bg-[#075FAE]/30
                      text-[#F47721]
                      transition-all duration-300
                      group-hover:bg-[#F47721]
                      group-hover:text-white
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="
                      absolute bottom-0 left-0 h-[2px] w-0
                      bg-[#F47721]
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-12 flex flex-col gap-6
            rounded-2xl border border-white/10
            bg-white/[0.04] p-6
            sm:flex-row sm:items-center sm:justify-between
            sm:p-7
          "
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Your cargo. Our responsibility.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Professional logistics support from origin to destination.
            </p>
          </div>

          <a
            href="/contact"
            className="
              group inline-flex shrink-0 items-center
              gap-3 text-sm font-bold text-[#F47721]
              transition-colors hover:text-white
            "
          >
            Talk to our team
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
