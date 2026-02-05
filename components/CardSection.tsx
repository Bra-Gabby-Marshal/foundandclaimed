"use client"

import React from "react"
import { FaIdCard, FaClipboardCheck } from "react-icons/fa"

export default function CardSection() {
  return (
    <section className="bg-[var(--neutral-light)] text-[var(--neutral-dark)] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Manage Your IDs Securely
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Found & Claimed lets you submit found IDs or claim your lost ID safely and quickly through verified collection points.
        </p>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left – Icon + Info */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <FaIdCard size={48} className="text-[var(--accent)]" />
            <h3 className="text-2xl font-bold">IDs Made Simple</h3>
            <p className="text-gray-600 max-w-sm">
              Submit or claim IDs efficiently with secure tracking and verification.
            </p>
          </div>

          {/* Right – Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <a
              href="#submit-id"
              className="
                bg-[var(--accent)] 
                px-6 py-3 
                rounded-full 
                text-white
                font-semibold 
                shadow-lg 
                transition 
                transform hover:-translate-y-1 hover:border-2 hover:border-white
              "
            >
              Submit a Found ID
            </a>
            <a
              href="#claim-id"
              className="
                border-2 border-[var(--blueLight)] 
                text-[var(--blueLight)] 
                px-6 py-3 
                rounded-full 
                font-semibold 
                shadow 
                transition 
                transform hover:-translate-y-1
                hover:bg-[var(--accent)] hover:text-white
              "
            >
              Claim an ID
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
