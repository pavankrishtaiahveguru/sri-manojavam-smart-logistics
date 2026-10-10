"use client";

import { motion } from "framer-motion";
import { CalendarDays, Globe2, Network, Route } from "lucide-react";

const highlights = [
  {
    value: "2018",
    label: "Established",
    description: "Building logistics expertise since 2018",
    icon: CalendarDays,
  },
  {
    value: "2025",
    label: "Smart Logistics",
    description: "Evolved into a technology-driven logistics company",
    icon: Network,
  },
  {
    value: "6+",
    label: "Strategic Locations",
    description: "Connected across key locations in India",
    icon: Globe2,
  },
  {
    value: "R · A · S",
    label: "Road • Air • Sea",
    description: "Multimodal transportation capabilities",
    icon: Route,
  },
];

export default function CompanyHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#071A35]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#075FAE]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#F47721]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  group relative px-6 py-9
                  lg:px-8 lg:py-10
                "
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br from-[#075FAE]/10
                    to-transparent opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-10 w-10 items-center
                      justify-center rounded-xl
                      border border-white/10
                      bg-white/[0.06]
                      text-[#F47721]
                      transition-all duration-300
                      group-hover:border-[#F47721]/30
                      group-hover:bg-[#F47721]/10
                      group-hover:scale-105
                    "
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Value */}
                  <div className="flex items-baseline gap-2">
                    <h3
                      className="
                        text-3xl font-bold tracking-tight
                        text-white sm:text-4xl
                      "
                    >
                      {item.value}
                    </h3>
                  </div>

                  {/* Label */}
                  <p
                    className="
                      mt-2 text-sm font-semibold
                      uppercase tracking-[0.12em]
                      text-[#F47721]
                    "
                  >
                    {item.label}
                  </p>

                  {/* Description */}
                  <p className="mt-2 max-w-[230px] text-xs leading-5 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
