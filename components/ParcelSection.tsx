"use client"

import React from "react"
import { FaBoxOpen, FaClipboardCheck } from "react-icons/fa"

export default function ParcelSection() {
  return (
    <section id="card" className="bg-[var(--neutral-light)] text-[var(--neutral-dark)] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Manage Your Parcels Securely
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Found & Claimed lets you send parcels or collect them safely through verified collection points nationwide.
        </p>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left – Icon + Info */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <FaBoxOpen size={48} className="text-[var(--blueLight)]" />
            <h3 className="text-2xl font-bold">Parcels Made Easy</h3>
            <p className="text-gray-600 max-w-sm">
              Submit or claim parcels, bags, or documents efficiently with secure tracking at verified collection points.
            </p>
          </div>

          {/* Right – Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <a
              href="#submit-parcel"
              className="
                bg-[var(--accent)] 
                px-6 py-3 
                rounded-full 
                font-semibold 
                shadow-lg 
                transition 
                transform hover:-translate-y-1 hover:border-2 hover:border-white
              "
            >
              Send a Parcel
            </a>
            <a
              href="#claim-parcel"
              className="
                border-2 border-[var(--blueLight)] 
                text-[var(--blueLight)] 
                px-6 py-3 
                rounded-full 
                font-semibold 
                shadow 
                transition 
                transform hover:-translate-y-1
                hover:bg-[var(--accent)] hover:text-[var(--primary-dark)]
              "
            >
              Claim a Parcel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
