"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { WHATSAPP_URL } from "@/data/contact";
import { openWhatsAppMessage } from "@/lib/whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    icon: Phone,
    title: "Call our team",
    description: "Speak with our logistics team",
    value: "94414 46600",
    href: "tel:+919441446600",
  },
  {
    icon: Phone,
    title: "Alternative number",
    description: "We're happy to assist you",
    value: "94406 88737",
    href: "tel:+919440688737",
  },
  {
    icon: Mail,
    title: "Email us",
    description: "Send us your business enquiry",
    value: "sales@srimanojavamsmartlogistics.in",
    href: "mailto:sales@srimanojavamsmartlogistics.in",
  },
  {
    icon: Clock3,
    title: "Business hours",
    description: "Monday – Saturday",
    value: "9:00 AM – 8:00 PM",
    href: null,
  },
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionStartedRef = useRef(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    submissionStartedRef.current = false;
    setIsSubmitting(false);
    setStatus("idle");
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submissionStartedRef.current) return;

    submissionStartedRef.current = true;
    setIsSubmitting(true);

    const message = [
      "Sri Manojavam Smart Logistics",
      "New Contact Enquiry",
      "",
      `Full Name: ${form.name}`,
      `Company Name: ${form.company || "Not provided"}`,
      `Email Address: ${form.email}`,
      `Phone Number: ${form.phone}`,
      `Service Required: ${form.service}`,
      "",
      "Requirements:",
      form.message,
    ].join("\n");

    openWhatsAppMessage(message);
    setStatus("success");
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#071A35] px-5 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#075FAE]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#F47721]/10 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F47721]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A66C]">
              Contact SMSL
            </span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Let's move your
                <span className="text-[#F47721]"> business forward.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Looking for a dependable logistics partner? Connect with our
                team to discuss transportation, freight forwarding, refrigerated
                logistics, and your supply chain requirements.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F47721]/15 text-[#F47721]">
                <Truck size={27} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Your logistics partner
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Reliable service. Safe transportation. Smart solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#F47721]" />
              Customer-focused service
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#F47721]" />
              Road, Air & Sea freight
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#F47721]" />
              Monday–Saturday support
            </span>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          CONTACT DETAILS
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075FAE]">
              Get in touch
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              We're here to help.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Reach out through your preferred channel and let us know how we
              can support your logistics needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075FAE]/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE] transition-colors duration-300 group-hover:bg-[#F47721] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-4 inline-flex max-w-full items-start gap-2 break-all text-sm font-semibold leading-6 text-[#075FAE] transition-colors hover:text-[#F47721]"
                    >
                      {item.value}
                      <ArrowUpRight size={15} className="mt-1 shrink-0" />
                    </a>
                  ) : (
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#075FAE]">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT FORM + ADDRESS
      ============================================================ */}

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Form */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F47721]">
                Send an enquiry
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Tell us what you need.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Share your requirements and prepare an enquiry for our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Full name" required>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Company name">
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Your company"
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Email address" required>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Phone number" required>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className={inputClass}
                  />
                </FormField>
              </div>

              <FormField label="Service required" required>
                <select
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  required
                  className={inputClass}
                >
                  <option value="">Select a service</option>
                  <option value="Transportation & Logistics">
                    Transportation & Logistics
                  </option>
                  <option value="International Freight Forwarding">
                    International Freight Forwarding
                  </option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Sea Freight">Sea Freight</option>
                  <option value="Refrigerated Transportation">
                    Refrigerated Transportation
                  </option>
                  <option value="Hazardous Goods Transportation">
                    Hazardous Goods Transportation
                  </option>
                  <option value="Non-Hazardous Goods Transportation">
                    Non-Hazardous Goods Transportation
                  </option>
                  <option value="Supply Chain Solutions">
                    Supply Chain Solutions
                  </option>
                  <option value="UN Box Packing and Palletisation">
                    UN Box Packing and Palletisation
                  </option>
                  <option value="Other">Other</option>
                </select>
              </FormField>

              <FormField label="Your requirements" required>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us about your cargo, route, delivery timeline, or other requirements..."
                  rows={5}
                  required
                  className={`${inputClass} min-h-[140px] resize-y`}
                />
              </FormField>

              {status === "success" && (
                <div
                  role="status"
                  className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                >
                  <CheckCircle2 size={19} className="shrink-0" />
                  WhatsApp is opening with your enquiry details. Review the
                  message and press Send in WhatsApp to complete your enquiry.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#075FAE] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#075FAE]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064B8C] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Continue on WhatsApp"}
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-xs leading-5 text-slate-400">
                WhatsApp opens with your message pre-filled. Please review it
                and press Send in WhatsApp; this form does not send or store
                your details on a server.
              </p>
            </form>
          </motion.div>

          {/* Company details */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-3xl bg-[#071A35] p-6 text-white sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F47721]/15 text-[#F47721]">
                <Building2 size={23} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
                Registered office
              </p>

              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Sri Manojavam Smart Logistics
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Flat No: 4-89/307, Tejha Heights,
                <br />
                Above DCB Bank, Chandanagar,
                <br />
                Serilingampally, Rangareddy District,
                <br />
                Hyderabad, Telangana, India – 500050.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Tejha+Heights+Above+DCB+Bank+Chandanagar+Hyderabad+500050"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F47721] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#DF6414]"
              >
                Get Directions
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Map */}

            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <iframe
                title="Sri Manojavam Smart Logistics office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.630227239797!2d78.3267967!3d17.4946946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93094846e27d%3A0x96c34c9011cae85e!2sSRI%20MANOJAVAM%20SMART%20LOGISTICS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1791951389454!5m2!1sen!2sin"
                className="absolute inset-0 h-full min-h-[260px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Trust card */}

            <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#075FAE]/10 text-[#075FAE]">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  A partner you can connect with
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Contact our team to discuss your transportation and logistics
                  requirements, delivery routes, and service options.
                </p>
              </div>
            </div>

            {/* WhatsApp */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition-colors hover:bg-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <FaWhatsapp size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-emerald-950">
                    Prefer WhatsApp?
                  </p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Start a conversation with our team.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-emerald-700 transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section className="bg-[#F8FAFC] px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 md:flex-row md:items-center lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F47721]">
              Let's work together
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              Have a shipment to move?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Tell us your requirements and explore a logistics solution suited
              to your business.
            </p>
          </div>

          <a
            href="tel:+919441446600"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F47721] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF6414]"
          >
            <Phone size={17} />
            Call Our Team
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

function FormField({ label, required, children }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#0F172A]">
        {label}
        {required && <span className="ml-1 text-[#F47721]">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#075FAE] focus:bg-white focus:ring-4 focus:ring-[#075FAE]/10";
