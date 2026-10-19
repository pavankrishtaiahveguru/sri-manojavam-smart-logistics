"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Box,
  CloudSnow,
  Container,
  Globe2,
  Package,
  ShieldAlert,
  Ship,
  Truck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Transportation & Logistics",
    description:
      "Reliable road transportation solutions designed to move goods safely and efficiently.",
    image: "/images/services/transportation.jpg",
    icon: Truck,
  },
  {
    number: "02",
    title: "International Freight Forwarding",
    description:
      "End-to-end freight forwarding solutions connecting businesses to domestic and international markets.",
    image: "/images/services/freight-forwarding.jpg",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Air Freight",
    description:
      "Fast and dependable air freight solutions for time-sensitive shipments and critical cargo.",
    image: "/images/services/air-freight.jpg",
    icon: Package,
  },
  {
    number: "04",
    title: "Sea Freight",
    description:
      "Cost-effective ocean freight solutions for efficient movement of cargo across global markets.",
    image: "/images/services/sea-freight.jpg",
    icon: Ship,
  },
  {
    number: "05",
    title: "Refrigerated Transportation",
    description:
      "Temperature-controlled transportation designed to protect sensitive and perishable cargo.",
    image: "/images/services/refrigerated.jpg",
    icon: CloudSnow,
  },
  {
    number: "06",
    title: "Hazardous Goods Transportation",
    description:
      "Specialized handling and transportation solutions for hazardous cargo with safety at every stage.",
    image: "/images/services/hazardous.jpg",
    icon: ShieldAlert,
  },
  {
    number: "07",
    title: "Non-Hazardous Goods Transportation",
    description:
      "Secure and dependable transportation solutions for general and non-hazardous goods.",
    image: "/images/services/non-hazardous.jpg",
    icon: Box,
  },
  {
    number: "08",
    title: "Supply Chain Solutions",
    description:
      "Practical logistics solutions designed to improve visibility, efficiency and operational performance.",
    image: "/images/services/supply-chain.jpg",
    icon: Container,
  },
  {
    number: "09",
    title: "UN Box Packing and Palletisation",
    description:
      "Professional packaging and palletisation solutions for applicable regulated goods.",
    image: "/images/services/hazardous.jpg",
    icon: Box,
    href: "/services/un-box-packing-and-palletisation",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#075FAE]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#F47721]/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47721]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#075FAE]">
              Our Services
            </span>

            <span className="h-[2px] w-10 bg-[#F47721]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#071A35] sm:text-4xl lg:text-5xl">
            Complete logistics.
            <span className="text-[#F47721]"> One trusted partner.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From transportation and freight forwarding to specialized cargo
            solutions, SMSL provides reliable logistics services built around
            your business needs.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-slate-200
                  bg-white
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#075FAE]/20
                  hover:shadow-2xl hover:shadow-slate-900/10
                "
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/75 via-[#071A35]/10 to-transparent" />

                  {/* Number */}
                  <span
                    className="
                      absolute left-4 top-4
                      rounded-lg border border-white/20
                      bg-[#071A35]/60 px-2.5 py-1.5
                      text-[10px] font-bold
                      tracking-widest text-white
                      backdrop-blur-md
                    "
                  >
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      absolute bottom-4 left-4
                      flex h-11 w-11 items-center
                      justify-center rounded-xl
                      bg-white text-[#075FAE]
                      shadow-lg
                      transition-all duration-300
                      group-hover:bg-[#F47721]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="
                      absolute right-4 top-4
                      flex h-9 w-9 items-center
                      justify-center rounded-full
                      bg-white/10 text-white
                      opacity-0 backdrop-blur-md
                      transition-all duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="min-h-[48px] text-base font-bold leading-6 text-[#071A35]">
                    {service.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-500">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    href={service.href ?? "/services"}
                    className="
                      group/link mt-5 inline-flex
                      items-center gap-2
                      text-xs font-bold uppercase
                      tracking-wider text-[#075FAE]
                      transition-colors
                      hover:text-[#F47721]
                    "
                  >
                    Explore Service
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </Link>
                </div>

                {/* Bottom accent */}
                <span
                  className="
                    absolute bottom-0 left-0 right-0
                    h-1 origin-left scale-x-0
                    bg-[#F47721]
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services"
            className="
              group inline-flex items-center gap-3
              rounded-xl bg-[#075FAE]
              px-6 py-3.5
              text-sm font-bold text-white
              shadow-lg shadow-blue-900/10
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#F47721]
            "
          >
            Explore All Services
            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:rotate-45
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
