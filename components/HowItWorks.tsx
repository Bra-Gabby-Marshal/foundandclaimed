"use client"

import React from "react"
import { FaUpload, FaBox, FaShieldAlt, FaHandsHelping } from "react-icons/fa"

const steps = [
  {
    title: "Submit Found Item",
    description: "Easily submit IDs, cards, or documents you’ve found to a secure collection point.",
    icon: <FaUpload size={36} className="text-[var(--accent)]" />,
  },
  {
    title: "Send a Parcel",
    description: "Submit bags, parcels, or documents for safe delivery to collection points.",
    icon: <FaBox size={36} className="text-[var(--blueLight)]" />,
  },
  {
    title: "Track & Secure",
    description: "All submissions are verified, tracked, and securely stored until claimed.",
    icon: <FaShieldAlt size={36} className="text-[var(--crown)]" />,
  },
  {
    title: "Claim or Collect",
    description: "Owners can safely locate and claim their items at verified collection points.",
    icon: <FaHandsHelping size={36} className="text-[var(--accent)]" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--neutral-light)] text-[var(--neutral-dark)] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Found & Claimed makes it easy to submit, send, track, and claim items securely.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center gap-4"
            >
              <div>{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
