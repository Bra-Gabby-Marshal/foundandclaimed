"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  ["How it works", "how-it-works"],
  ["About us", "about-us"],
  ["Card", "card"],
  ["Parcel", "parcel"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState("how-it-works")

  // Hide / show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setHidden(true)
      else setHidden(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    )

    navLinks.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 shadow-lg bg-[var(--primary-dark)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white"
          >
            Found<span className="text-[var(--accent)]"> & </span>Claimed
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-semibold">
            {navLinks.map(([label, id]) => {
              const isActive = activeSection === id

              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`
                    relative uppercase tracking-wide transition-colors duration-300
                    ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-white/85 hover:text-[var(--accent)]"
                    }
                    after:absolute after:left-1/2 after:-bottom-2
                    after:h-[3px] after:-translate-x-1/2
                    after:bg-[var(--accent)]
                    after:transition-all after:duration-300
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="font-semibold text-white/85 hover:text-[var(--accent)] transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[var(--accent)] text-white px-5 py-2 rounded-full font-bold shadow-xl hover:brightness-110 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[var(--primary-dark)]"
      >
        <div className="px-6 pb-6 pt-4 space-y-5 font-semibold">
          {navLinks.map(([label, id]) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActiveSection(id)
                setOpen(false)
              }}
              className={`block transition ${
                activeSection === id
                  ? "text-[var(--accent)]"
                  : "text-white/85 hover:text-[var(--accent)]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-center py-2 rounded-full border border-white/30 text-white/90 hover:text-[var(--accent)] transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-center bg-[var(--accent)] py-2 rounded-full font-bold hover:brightness-110 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
