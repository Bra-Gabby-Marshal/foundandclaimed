// "use client"

// import React from "react"
// import { FaIdCard, FaBoxOpen } from "react-icons/fa"

// export default function ActionsSection() {
//   const cards = [
//     {
//       title: "Manage Your IDs Securely",
//       description:
//         "Submit or claim IDs efficiently with secure tracking at verified collection points.",
//       icon: <FaIdCard size={48} className="text-[var(--accent)]" />,
//       buttons: [
//         { label: "Submit a Found ID", href: "#submit-id", primary: true },
//         { label: "Claim an ID", href: "#claim-id", primary: false },
//       ],
//     },
//     {
//       title: "Manage Your Parcels Securely",
//       description:
//         "Submit or claim parcels, bags, or documents efficiently with secure tracking at verified collection points.",
//       icon: <FaBoxOpen size={48} className="text-[var(--blueLight)]" />,
//       buttons: [
//         { label: "Send a Parcel", href: "#submit-parcel", primary: true },
//         { label: "Claim a Parcel", href: "#claim-parcel", primary: false },
//       ],
//     },
//   ]

//   return (
//     <section id="card" className="bg-[var(--primary-light)]/10 text-[var(--neutral-dark)] py-20 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
//           Securely Submit & Claim Items
//         </h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 hover:shadow-3xl transition transform hover:-translate-y-2"
//             >
//               {/* Icon */}
//               {card.icon}

//               {/* Card Title */}
//               <h3 className="text-2xl font-bold">{card.title}</h3>

//               {/* Description */}
//               <p className="text-gray-600 text-center">{card.description}</p>

//               {/* Buttons */}
//               <div className="flex flex-col md:flex-row gap-4 mt-4">
//                 {card.buttons.map((btn, i) => (
//                   <a
//                     key={i}
//                     href={btn.href}
//                     className={`
//                       px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1
//                       ${btn.primary
//                         ? "bg-[var(--accent)] hover:border-2 hover:border-white text-white"
//                         : "border-2 border-[var(--blueLight)] text-[var(--blueLight)] hover:bg-[var(--accent)] hover:text-[var(--primary-dark)]"}
//                     `}
//                   >
//                     {btn.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Optional Decorative Blobs */}
//         <div className="absolute -top-32 -right-32 w-72 h-72 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[var(--blueLight)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//       </div>
//     </section>
//   )
// }


"use client"

import React from "react"
import { FaIdCard, FaBoxOpen } from "react-icons/fa"

export default function ActionsSection() {
  const cards = [
    {
      title: "Manage Your IDs Securely",
      description:
        "Submit or claim IDs efficiently with secure tracking at verified collection points.",
      icon: <FaIdCard size={48} className="text-[var(--accent)]" />,
      buttons: [
        { label: "Submit a Found ID", href: "/login", primary: true },
        { label: "Claim an ID", href: "/login", primary: false },
      ],
    },
    {
      title: "Manage Your Parcels Securely",
      description:
        "Send, submit, or claim parcels, bags, and documents with secure tracking and safe collection points.",
      icon: <FaBoxOpen size={48} className="text-[var(--blueLight)]" />,
      buttons: [
        { label: "Send a Parcel", href: "/login", primary: true },
        { label: "Claim a Parcel", href: "/login", primary: false },
      ],
    },
  ]

  return (
    <section
      id="actions"
      className="bg-[var(--primary-light)]/10 text-[var(--neutral-dark)] py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Securely Submit & Claim Items
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 hover:shadow-3xl transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              {card.icon}

              {/* Title */}
              <h3 className="text-2xl font-bold">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-center max-w-md">
                {card.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                {card.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.href}
                    className={`
                      px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1
                      ${btn.primary
                        ? "bg-[var(--accent)] hover:border-2 hover:border-white text-white"
                        : "border-2 border-[var(--blueLight)] text-[var(--blueLight)] hover:bg-[var(--accent)] hover:text-white"}
                    `}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Background Blobs */}
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[var(--blueLight)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
    </section>
  )
}
