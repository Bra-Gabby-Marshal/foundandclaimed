"use client"

import Link from "next/link"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white pt-20"
      style={{ backgroundColor: "var(--primary-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

        {/* Column 1 — Brand / About */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 tracking-tight">
            Found <span className="text-[var(--accent)]">&</span> Claimed
          </h3>

          <p className="text-white/80 leading-relaxed">
            Helping individuals securely submit and recover lost IDs,
            cards, and parcels across Ghana through trusted
            collection points and verified processes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white text-[var(--primary-dark)] font-bold px-4 py-1.5 rounded-full text-xs">
              Verified Points
            </span>
            <span className="bg-[var(--accent)] text-white font-bold px-4 py-1.5 rounded-full text-xs">
              1000+ Recovered
            </span>
            <span className="bg-[var(--primary-light)] text-white font-bold px-4 py-1.5 rounded-full text-xs">
              Secure Tracking
            </span>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#how-it-works" className="text-white/80 hover:text-[var(--accent)] transition">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#about-us" className="text-white/80 hover:text-[var(--accent)] transition">
                About us
              </Link>
            </li>
            <li>
              <Link href="#card" className="text-white/80 hover:text-[var(--accent)] transition">
                Card
              </Link>
            </li>
            <li>
              <Link href="#parcel" className="text-white/80 hover:text-[var(--accent)] transition">
                Parcel
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-white/80 hover:text-[var(--accent)] transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <h4 className="text-lg font-bold mb-5">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/terms" className="text-white/70 hover:text-[var(--accent)] transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/70 hover:text-[var(--accent)] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-white/70 hover:text-[var(--accent)] transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 — Connect + Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-5">Connect With Us</h4>

          <div className="flex gap-4 mb-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full bg-white/10
                    hover:bg-[var(--accent)]
                    transition
                  "
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <h5 className="font-semibold mb-2">Newsletter</h5>
            <p className="text-sm text-white/70 mb-3">
              Get updates on recovered items and important announcements.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full px-4 py-2.5 rounded-lg
                  bg-white/10 border border-white/20
                  placeholder:text-white/50
                  focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                "
              />
              <button
                className="
                  w-full px-5 py-2.5 rounded-lg font-semibold
                  bg-[var(--accent)]
                  hover:brightness-110
                  transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Found & Claimed. All rights reserved.
      </div>

      {/* Background glows */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--primary-light)]/20 rounded-full blur-3xl"></div>
    </footer>
  )
}
