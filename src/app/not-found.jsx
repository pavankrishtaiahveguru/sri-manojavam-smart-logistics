import Link from "next/link";
import { ArrowRight, Home, MapPin, PackageSearch, Truck } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-92px)] items-center justify-center overflow-hidden bg-[#071A35] px-5 py-20 sm:px-6">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#075FAE]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F47721]/10 blur-[140px]" />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.045]
          bg-[linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Badge */}

        <div className="mb-4 mt-5 inline-flex items-center gap-2 rounded-full border border-[#F47721]/20 bg-[#F47721]/10 px-4 py-2">
          <MapPin size={14} className="text-[#F47721]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F9A66C]">
            Route Not Found
          </span>
        </div>

        {/* ============================================================
            404
        ============================================================ */}

        <div className="relative mx-auto mb-7">
          {/* Glow */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#075FAE]/20 blur-[90px]" />

          <h1
            className="
              relative
              select-none
              text-[clamp(8rem,24vw,15rem)]
              font-black
              leading-none
              tracking-[-0.09em]
              text-white
            "
          >
            4<span className="text-[#F47721]">0</span>4
          </h1>

          {/* Route line */}

          <div className="absolute bottom-[8%] left-1/2 h-[2px] w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F47721] to-transparent" />

          {/* Truck */}

          <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 text-[#F47721]">
            <Truck size={30} strokeWidth={1.8} />
          </div>
        </div>

        {/* Heading */}

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Looks like this route doesn't exist.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          The page you're looking for may have been moved, renamed, or is
          temporarily unavailable. Let's get you back on the right route.
        </p>

        {/* ============================================================
            PRIMARY ACTION
        ============================================================ */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
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
            <Home size={17} />
            Back to Home
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ============================================================
            EXPLORE SMSL
        ============================================================ */}

        <div
          className="
            mx-auto
            mt-14
            max-w-2xl
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            p-5
            backdrop-blur-xl
          "
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <PackageSearch size={16} className="text-[#F47721]" />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Explore SMSL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <QuickLink href="/about" label="About Us" />
            <QuickLink href="/services" label="Services" />
            <QuickLink href="/network" label="Our Network" />
            <QuickLink href="/contact" label="Contact Us" />
          </div>
        </div>

        {/* Company */}

        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
          Sri Manojavam Smart Logistics Private Limited
        </p>
      </div>
    </main>
  );
}

/* ================================================================
   QUICK LINK
================================================================ */

function QuickLink({ href, label }) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        justify-center
        gap-1.5
        rounded-lg
        px-3
        py-2.5
        text-xs
        font-semibold
        text-slate-400
        transition-all
        duration-300
        hover:bg-white/[0.06]
        hover:text-white
      "
    >
      {label}

      <ArrowRight
        size={12}
        className="
          -translate-x-1
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}
