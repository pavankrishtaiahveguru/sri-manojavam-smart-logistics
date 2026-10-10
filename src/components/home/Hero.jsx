"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    eyebrow: "SMART LOGISTICS • SINCE 2018",
    title: "Moving Your Business",
    highlight: "Forward.",
    description:
      "Reliable, safe and technology-driven logistics solutions designed to keep your business moving.",
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    eyebrow: "ROAD • AIR • SEA • FREIGHT",
    title: "Connecting Businesses",
    highlight: "Seamlessly.",
    description:
      "From local transportation to international freight forwarding, we connect products, people and markets.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* ---------------------------------------------------------------
     Auto slide
  ---------------------------------------------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      className="
        relative
        min-h-[calc(100dvh-92px)]
        overflow-hidden
        bg-[#071A35]
      "
    >
      {/* ============================================================
          BACKGROUND SLIDES
      ============================================================ */}

      <AnimatePresence mode="sync">
        {slides.map((slide, index) => {
          if (index !== activeSlide) return null;

          return (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              {/* Background image */}

              <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Main dark overlay */}

              <div className="absolute inset-0 bg-[#041426]/65" />

              {/* Left gradient */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#041426]/25
                  via-[#041426]/65
                  to-[#041426]/20
                "
              />

              {/* Bottom gradient */}

              <div
                className="
                  absolute inset-x-0 bottom-0
                  h-56
                  bg-gradient-to-t
                  from-[#041426]/70
                  to-transparent
                "
              />

              {/* Mobile readability gradient */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-b
                  from-[#041426]/20
                  via-transparent
                  to-[#041426]/35
                  lg:hidden
                "
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* ============================================================
          DECORATIVE ELEMENTS
      ============================================================ */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F47721]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#075FAE]/20 blur-[130px]" />

      {/* Vertical route line */}

      <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-[420px] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />

      {/* ============================================================
          CONTENT

          IMPORTANT:
          Hero itself controls the viewport height.
          No second 100vh calculation here.
      ============================================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100dvh-92px)]
          max-w-7xl
          items-center
          px-5
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-20
        "
      >
        <div className="w-full max-w-4xl">
          {/* ========================================================
              EYEBROW
          ======================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`eyebrow-${activeSlide}`}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <span className="h-[2px] w-9 bg-[#F47721] sm:w-10" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F9A66C] sm:text-sm sm:tracking-[0.25em]">
                {currentSlide.eyebrow}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* ========================================================
              MAIN HEADING
          ======================================================== */}

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeSlide}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: "easeOut",
              }}
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.04]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[76px]
                xl:text-[84px]
              "
            >
              {currentSlide.title}
              <br />
              <span className="text-[#F47721]">{currentSlide.highlight}</span>
            </motion.h1>
          </AnimatePresence>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${activeSlide}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-6
                text-slate-200/90
                sm:mt-7
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
            >
              {currentSlide.description}
            </motion.p>
          </AnimatePresence>

          {/* ========================================================
              CTA BUTTONS
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:mt-9
              sm:flex-row
            "
          >
            <Link
              href="/get-quote"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#F47721]
                px-6
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-orange-950/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-[#075FAE]
                sm:h-[52px]
              "
            >
              Get a Quote
              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
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
                gap-3
                rounded-xl
                border
                border-white/25
                bg-white/10
                px-6
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white
                hover:text-[#075FAE]
                sm:h-[52px]
              "
            >
              Explore Services
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>

          {/* ========================================================
              TRUST / CAPABILITIES
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white/65
              sm:mt-12
              sm:gap-x-6
              sm:text-xs
              sm:tracking-wider
            "
          >
            <span>Road</span>

            <span className="h-1 w-1 rounded-full bg-[#F47721]" />

            <span>Air</span>

            <span className="h-1 w-1 rounded-full bg-[#F47721]" />

            <span>Sea</span>

            <span className="h-1 w-1 rounded-full bg-[#F47721]" />

            <span>Cold Chain</span>

            <span className="h-1 w-1 rounded-full bg-[#F47721]" />

            <span>Freight Forwarding</span>
          </motion.div>
        </div>
      </div>

      {/* ============================================================
          SLIDE CONTROLS
      ============================================================ */}

      <div
        className="
          absolute
          bottom-6
          right-5
          z-20
          flex
          items-center
          gap-3
          sm:bottom-8
          sm:right-8
          sm:gap-4
          lg:right-12
        "
      >
        {/* Counter */}

        <div className="hidden items-center gap-2 text-xs font-semibold text-white/60 sm:flex">
          <span className="text-sm text-white">0{activeSlide + 1}</span>

          <span className="h-px w-8 bg-white/30" />

          <span>0{slides.length}</span>
        </div>

        {/* Progress */}

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="
                group
                relative
                h-1.5
                w-9
                overflow-hidden
                rounded-full
                bg-white/25
                sm:w-12
              "
            >
              <span
                className={`
                  absolute inset-y-0 left-0 rounded-full
                  transition-all duration-300
                  ${
                    index === activeSlide
                      ? "w-full bg-[#F47721]"
                      : "w-0 bg-white group-hover:w-1/2"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          SCROLL INDICATOR
      ============================================================ */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/50
          md:flex
        "
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ChevronDown size={17} />
      </motion.div>
    </section>
  );
}
