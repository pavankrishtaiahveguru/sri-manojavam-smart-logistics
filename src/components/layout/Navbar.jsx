"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Network", href: "/network" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setIsOpen(false);

  const quoteHref = "/get-quote";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <nav className="flex min-h-[82px] w-full items-center justify-between gap-3 border-b border-slate-200/80 bg-white/95 px-4 shadow-[0_6px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6 lg:min-h-[88px] lg:px-10 xl:px-14">
          {/* Logo and company name */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Sri Manojavam Smart Logistics home"
            className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3.5"
          >
            <Image
              src="/logo/smsl-logo.png"
              alt="SMSL logo"
              width={160}
              height={76}
              priority
              className="h-[52px] w-[72px] shrink-0 object-contain sm:h-[60px] sm:w-[86px] lg:h-[66px] lg:w-[100px]"
            />
            <span className="flex min-w-0 flex-col justify-center leading-tight">
              <span className="whitespace-nowrap text-[13px] font-extrabold tracking-tight text-[#071A35] sm:text-base lg:text-lg">
                Sri Manojavam
              </span>
              <span className="mt-1 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.12em] text-[#075FAE] sm:text-[10px] lg:text-xs">
                Smart Logistics
              </span>
              <span className="mt-0.5 hidden text-[9px] font-medium text-slate-500 xl:block">
                Private Limited
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden shrink-0 items-center lg:flex">
            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative flex h-[88px] items-center px-3 text-[12px] font-bold uppercase tracking-wide xl:px-4 xl:text-[13px]"
                  >
                    <span
                      className={`transition-colors duration-300 ${active ? "text-[#075FAE]" : "text-slate-600 group-hover:text-[#075FAE]"}`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute bottom-[23px] left-3 right-3 h-[2px] origin-left rounded-full bg-[#F47721] transition-transform duration-300 xl:left-4 xl:right-4 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href={quoteHref}
              className="group ml-3 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#075FAE] px-4 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F47721] sm:px-5 xl:ml-5 xl:px-6 xl:text-sm"
            >
              Get a Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#071A35] transition-colors hover:border-[#075FAE]/30 hover:bg-blue-50 lg:hidden"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="smsl-mobile-menu"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 cursor-pointer bg-[#071A35]/45 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="smsl-mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-x-3 top-[90px] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/15 sm:inset-x-6 sm:top-[96px] lg:hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-colors ${active ? "bg-blue-50 text-[#075FAE]" : "text-slate-700 hover:bg-slate-50"}`}
                      >
                        {link.name}
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F47721]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <a
                  href="tel:+919441446600"
                  onClick={closeMenu}
                  className="flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-blue-50"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <a
                  href="https://wa.me/919441446600"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-3 text-xs font-semibold text-green-700 transition-colors hover:bg-green-100"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>

              <Link
                href={quoteHref}
                onClick={closeMenu}
                className="mt-3 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#075FAE] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#F47721]"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
