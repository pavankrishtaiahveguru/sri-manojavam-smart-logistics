"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Package,
  Globe,
  Plane,
  Ship,
  ThermometerSnowflake,
  ShieldAlert,
  Boxes,
  CheckCircle2,
  Send,
  Route,
} from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = {
  transportation: Truck,
  "transportation-logistics": Truck,
  "international-freight-forwarding": Globe,
  "freight-forwarding": Globe,
  "air-freight": Plane,
  "sea-freight": Ship,
  "refrigerated-transportation": ThermometerSnowflake,
  "hazardous-goods": ShieldAlert,
  "hazardous-goods-transportation": ShieldAlert,
  "non-hazardous-goods": Package,
  "non-hazardous-goods-transportation": Package,
  "supply-chain": Boxes,
  "supply-chain-solutions": Boxes,
  "un-box-packing-and-palletisation": Package,
};

const initialForm = {
  pickupLocation: "",
  deliveryLocation: "",
  weight: "",
  commodity: "",
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  requirements: "",
};

const inputClass =
  "mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-[#071A35] outline-none transition placeholder:text-slate-400 focus:border-[#075FAE] focus:ring-4 focus:ring-blue-100";

const sectionTitleClass =
  "mb-5 flex items-center gap-3 border-b border-slate-200 pb-3 text-sm font-bold text-[#071A35]";

function getServiceIcon(service) {
  const slug = service?.slug?.toLowerCase() ?? "";
  const title = service?.title?.toLowerCase() ?? "";

  if (serviceIcons[slug]) return serviceIcons[slug];
  if (title.includes("transportation") || title.includes("logistics"))
    return Truck;
  if (title.includes("international") || title.includes("forwarding"))
    return Globe;
  if (title.includes("air")) return Plane;
  if (title.includes("sea")) return Ship;
  if (title.includes("refrigerat") || title.includes("cold"))
    return ThermometerSnowflake;
  if (title.includes("hazard")) return ShieldAlert;
  if (title.includes("supply chain")) return Boxes;
  return Package;
}

export default function GetQuotePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F8FAFC] px-4 pt-32 text-center text-[#071A35]">
          Loading quote form...
        </main>
      }
    >
      <QuoteServiceSelection />
    </Suspense>
  );
}

function QuoteServiceSelection() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service");

  return (
    <GetQuoteForm key={serviceSlug ?? "default"} serviceSlug={serviceSlug} />
  );
}

function GetQuoteForm({ serviceSlug }) {
  const availableServices = useMemo(
    () =>
      Array.isArray(services)
        ? services.filter((item) => item?.slug && item?.title)
        : [],
    [],
  );

  const initialService =
    availableServices.find((item) => item.slug === serviceSlug) ??
    availableServices[0] ??
    null;

  const [selectedSlug, setSelectedSlug] = useState(initialService?.slug ?? "");
  const selectedService =
    availableServices.find((item) => item.slug === selectedSlug) ?? null;

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!selectedService) {
      setStatus({
        type: "error",
        message:
          "Please select one of the SMSL services before submitting your request.",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...form,
      service: selectedService.slug,
      serviceTitle: selectedService.title,
      // Keep this field for compatibility with existing quote APIs.
      shipmentType: selectedService.slug,
    };

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your request. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your quote request has been submitted successfully. Our team will contact you soon.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again or contact our team.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[88px] text-[#071A35]">
      <section className="px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075FAE] shadow-sm">
            <Truck size={15} />
            Sri Manojavam Smart Logistics
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Request a <span className="text-[#F47721]">Quote</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Tell us about your transportation requirements and our team will
            help you find the right logistics solution.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:p-8 lg:p-10"
        >
          <div className="mb-9">
            <h2 className={sectionTitleClass}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#075FAE]">
                1
              </span>
              Select SMSL Service
            </h2>

            {selectedService && (
              <p className="mb-4 rounded-lg border border-[#F47721]/20 bg-orange-50/60 px-4 py-3 text-sm text-slate-700">
                Selected service:{" "}
                <span className="font-bold text-[#071A35]">
                  {selectedService.title}
                </span>
              </p>
            )}

            {availableServices.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {availableServices.map((service) => {
                  const Icon = getServiceIcon(service);
                  const active = selectedSlug === service.slug;

                  return (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => {
                        setSelectedSlug(service.slug);
                        if (status.message)
                          setStatus({ type: "", message: "" });
                      }}
                      aria-pressed={active}
                      className={`group flex min-h-[108px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F47721] ${
                        active
                          ? "border-[#F47721] bg-orange-50/70 text-[#F47721] shadow-[0_4px_16px_rgba(244,119,33,0.12)] ring-1 ring-[#F47721]/20"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                      <span
                        className={`text-xs font-semibold leading-5 ${
                          active ? "text-[#071A35]" : "text-slate-600"
                        }`}
                      >
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                No services were found in @/data/services. Confirm that the
                service data exports an array containing each service's title
                and slug.
              </p>
            )}
          </div>

          <div className="mb-9">
            <h2 className={sectionTitleClass}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#075FAE]">
                2
              </span>
              Route Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Pickup Location <span className="text-[#F47721]">*</span>
                <input
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={updateField}
                  placeholder="City, Country"
                  autoComplete="address-level2"
                  required
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Delivery Location <span className="text-[#F47721]">*</span>
                <input
                  name="deliveryLocation"
                  value={form.deliveryLocation}
                  onChange={updateField}
                  placeholder="City, Country"
                  autoComplete="address-level2"
                  required
                  className={inputClass}
                />
              </label>
            </div>
          </div>

          <div className="mb-9">
            <h2 className={sectionTitleClass}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#075FAE]">
                3
              </span>
              Cargo Details
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Weight (MT)
                <input
                  name="weight"
                  type="number"
                  min="0"
                  step="any"
                  value={form.weight}
                  onChange={updateField}
                  placeholder="e.g. 500"
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Cargo Commodity
                <input
                  name="commodity"
                  value={form.commodity}
                  onChange={updateField}
                  placeholder="e.g. Electronics"
                  className={inputClass}
                />
              </label>
            </div>
          </div>

          <div className="mb-9">
            <h2 className={sectionTitleClass}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#075FAE]">
                4
              </span>
              Your Information
            </h2>

            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Full Name <span className="text-[#F47721]">*</span>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Company Name
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={updateField}
                  placeholder="Enter your company name"
                  autoComplete="organization"
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email Address <span className="text-[#F47721]">*</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Phone / WhatsApp <span className="text-[#F47721]">*</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 Your Number"
                  autoComplete="tel"
                  required
                  className={inputClass}
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-semibold text-slate-700">
              Company Requirements
              <textarea
                name="requirements"
                value={form.requirements}
                onChange={updateField}
                placeholder="Describe your logistics requirements, cargo type, preferred schedule, or special handling needs..."
                rows={4}
                className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#071A35] outline-none transition placeholder:text-slate-400 focus:border-[#075FAE] focus:ring-4 focus:ring-blue-100"
              />
            </label>
          </div>

          {status.message && (
            <div
              role="status"
              aria-live="polite"
              className={`mb-5 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
              <p>{status.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || availableServices.length === 0}
            className="flex min-h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#075FAE] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:bg-[#F47721] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
            {!isSubmitting && <Send size={16} />}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            Your information will be used to respond to your logistics enquiry.
          </p>
        </motion.form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Have questions?{" "}
          <Link
            href="/contact"
            className="font-bold text-[#075FAE] underline decoration-[#F47721] underline-offset-4 hover:text-[#F47721]"
          >
            Contact our team <ArrowRight size={14} className="ml-1 inline" />
          </Link>
        </p>
      </section>
    </main>
  );
}
