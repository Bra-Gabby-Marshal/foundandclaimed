"use client"

import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-brutalBlue text-white pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Found & Claimed</h3>
          <p className="text-blueLight">
            Helping you securely submit and claim lost IDs and documents. Trusted by individuals and collection points across Ghana.
          </p>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <span className="bg-crown text-brutalBlue font-semibold px-3 py-1 rounded-full text-sm">
              Verified Collection Points
            </span>
            <span className="bg-yass text-white font-semibold px-3 py-1 rounded-full text-sm">
              1000+ Parcels Recovered
            </span>
            <span className="bg-blueLight text-brutalBlue font-semibold px-3 py-1 rounded-full text-sm">
              Secure Tracking
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#how-it-works" className="hover:text-yass transition">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="#submit" className="hover:text-yass transition">
                Submit Parcel
              </Link>
            </li>
            <li>
              <Link href="#claim" className="hover:text-yass transition">
                Claim Parcel
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-yass transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4 text-white mb-4">
            <a href="#" className="hover:text-yass transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yass transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yass transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yass transition"><FaLinkedinIn /></a>
          </div>
          <p className="text-blueLight text-sm">
            © {new Date().getFullYear()} Found & Claimed. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yass/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-crown/20 rounded-full blur-3xl"></div>
    </footer>
  )
}
