"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Dependable logistics services you can trust.",
  },
  {
    icon: Target,
    title: "Safety",
    text: "Responsible handling and secure transportation.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    text: "Smarter processes for efficient movement.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "Solutions built around your requirements.",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#075FAE]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ---------------------------------------------------
            SECTION HEADER
        ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47721]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
              About SMSL
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#071A35] sm:text-4xl lg:text-5xl">
            Logistics built around
            <span className="text-[#F47721]"> trust.</span>
          </h2>
        </motion.div>

        {/* ---------------------------------------------------
            MAIN CONTENT
        ---------------------------------------------------- */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* -------------------------------------------------
              IMAGE SIDE
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about/about-logistics.jpg"
                alt="Sri Manojavam Smart Logistics transportation"
                width={900}
                height={700}
                className="
                  h-[420px] w-full object-cover
                  transition-transform duration-700
                  hover:scale-[1.03]
                  sm:h-[500px]
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/60 via-transparent to-transparent" />
            </div>

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="
                absolute -bottom-6 left-5
                rounded-2xl border border-white/70
                bg-white/95 p-5 shadow-2xl
                backdrop-blur-xl
                sm:left-8
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#075FAE]">
                  <span className="text-xl font-bold text-white">18+</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#071A35]">
                    Years of Experience
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Established in 2018
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative orange line */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-br-[40px] border-b-4 border-r-4 border-[#F47721]" />
          </motion.div>

          {/* -------------------------------------------------
              CONTENT SIDE
          -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold leading-8 text-[#071A35]">
              Sri Manojavam Smart Logistics Private Limited is a Hyderabad-based
              logistics and transportation company committed to delivering
              reliable, efficient and customer-focused logistics solutions.
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Sri Manojavam was established in{" "}
                <strong className="text-[#071A35]">2018</strong> and evolved
                into Sri Manojavam Smart Logistics Private Limited in{" "}
                <strong className="text-[#071A35]">2025</strong>.
              </p>

              <p>
                We focus on building a smarter and more efficient logistics
                ecosystem through technology, innovation, strategic partnerships
                and customer-centric operations.
              </p>

              <p>
                Our capabilities include freight forwarding, transportation of
                hazardous and non-hazardous goods, refrigerated transportation,
                road, air and sea freight services.
              </p>

              <p>
                We understand that logistics is not simply about moving goods
                from one location to another. It is about moving them{" "}
                <strong className="text-[#075FAE]">
                  safely, efficiently, on time and with complete accountability.
                </strong>
              </p>
            </div>

            {/* Principles */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.5,
                    }}
                    className="
                      group rounded-2xl border border-slate-200
                      bg-slate-50/70 p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#075FAE]/20
                      hover:bg-white
                      hover:shadow-lg
                    "
                  >
                    <div className="flex gap-3">
                      <div
                        className="
                          flex h-10 w-10 shrink-0 items-center
                          justify-center rounded-xl
                          bg-[#075FAE]/10 text-[#075FAE]
                          transition-colors duration-300
                          group-hover:bg-[#F47721]
                          group-hover:text-white
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#071A35]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="
                  group inline-flex items-center gap-3
                  rounded-xl bg-[#075FAE] px-6 py-3.5
                  text-sm font-bold text-white
                  shadow-lg shadow-blue-900/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#F47721]
                "
              >
                Discover Our Story
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ---------------------------------------------------
            COMMITMENT QUOTE
        ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto mt-24 max-w-4xl
            rounded-3xl border border-slate-200
            bg-[#F8FAFC] px-6 py-8
            text-center sm:px-10 sm:py-10
          "
        >
          <CheckCircle2 className="mx-auto mb-4 text-[#F47721]" size={25} />

          <p className="text-lg font-semibold leading-8 text-[#071A35] sm:text-xl">
            &quot;Every shipment represents a customer&apos;s trust. We are
            committed to protecting that trust through professional service,
            responsible operations and continuous improvement.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
