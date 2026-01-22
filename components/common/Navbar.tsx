"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="relative flex h-20 w-full overflow-hidden">
        {/* BASE LAYER — full width hero tone */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#355f52_0%,_#1a2421_55%,_#000_100%)]" />

        {/* LEFT GRADIENT BLEED — 60% width */}
        <div className="absolute inset-y-0 left-0" />

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex w-full">
          {/* LOGO ZONE */}
          <div className="flex w-[20%] items-center px-6">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo */}
              <Image
                src="/images/nextgen_logo.png"
                alt="Nextgen Design – Architecture & Interior Design Firm in Mumbai"
                width={40}
                height={40}
                priority
                className="shrink-0"
              />

              {/* Brand Text */}
              <div className="flex flex-col leading-tight overflow-hidden">
                <motion.span
                  initial={{ x: -6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className="text-xs font-semibold tracking-widest text-brand-dark whitespace-nowrap text-white/80"
                >
                  NEXTGEN DESIGN
                </motion.span>

                <motion.span
                  initial={{ x: -6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.35,
                  }}
                  className="text-[9px] italic tracking-wide text-white/80"
                >
                  Interior & Architecture Design Firm
                </motion.span>
              </div>
            </Link>
          </div>

          {/* MENU ZONE */}
          <div className="flex w-[80%] items-center justify-end px-10">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest transition ${
                      isActive
                        ? "text-white border-b border-white/80"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
