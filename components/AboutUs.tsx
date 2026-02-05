"use client"

import React from "react"
import { FaUsers, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa"

const features = [
  {
    title: "Trusted & Verified",
    description: "All collection points and submissions are verified to ensure security.",
    icon: <FaShieldAlt size={28} className="text-[var(--accent)]" />,
  },
  {
    title: "Accessible Across Ghana",
    description: "Submit and claim items conveniently at multiple collection points nationwide.",
    icon: <FaMapMarkerAlt size={28} className="text-[var(--blueLight)]" />,
  },
  {
    title: "Community Driven",
    description: "Helping individuals, communities, and institutions manage lost items efficiently.",
    icon: <FaUsers size={28} className="text-[var(--crown)]" />,
  },
]

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-white text-[var(--neutral-dark)] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Found & Claimed is a secure platform for submitting, sending, and claiming lost IDs, documents, and parcels. 
          We connect finders and owners through verified collection points, making the process safe, fast, and reliable.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[var(--primary-dark)] text-white p-8 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div>{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[var(--blueLight)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  )
}
