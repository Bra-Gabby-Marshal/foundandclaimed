// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaIdCard, FaBoxOpen } from "react-icons/fa";

// const cards = [
//   {
//     title: "ID Submitted",
//     subtitle: "Ghana Card • Accra Mall",
//     content: "Secure • Tracked • Verified",
//     icon: <FaIdCard size={40} className="text-[var(--accent)]" />,
//   },
//   {
//     title: "Parcel Submitted",
//     subtitle: "Documents & Bags • Accra Mall",
//     content: "Secure • Tracked • Verified",
//     icon: <FaBoxOpen size={40} className="text-[var(--accent)]" />,
//   },
// ];

// export default function HomeHero() {
//   const [currentCard, setCurrentCard] = useState(0);

//   // Automatically swap cards every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentCard((prev) => (prev + 1) % cards.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const selectCard = (index: number) => setCurrentCard(index);

//   return (
//     <section className="relative bg-[var(--primary-dark)] text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div>
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Found it. <br />
//             <span className="text-[var(--crown)]">Secure it. Claim it.</span>
//           </h1>

//           <p className="mt-6 text-lg text-[var(--blueLight)] max-w-xl">
//             Found & Claimed lets you safely submit and track{" "}
//             <strong>found IDs, bags, documents, and parcels</strong>. Owners can
//             locate and claim items securely through verified collection points
//             across Ghana.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#submit"
//               className="
//     bg-[var(--accent)] 
//     px-8 py-4 
//     rounded-full 
//     font-semibold 
//     shadow-lg 
//     transition 
//     transform hover:-translate-y-1
//     hover:border-2 hover:border-white
//   "
//             >
//               Submit Item
//             </a>

//             <a
//               href="#claim"
//               className="border-2 border-[var(--blueLight)] text-[var(--blueLight)] hover:bg-[var(--accent)] px-8 py-4 rounded-full font-semibold shadow transition transform hover:-translate-y-1"
//             >
//               Claim Item
//             </a>
//           </div>
//         </div>

//         {/* Right – Animated Card */}
//         <div className="relative w-80 md:w-auto mx-auto flex flex-col items-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentCard}
//               initial={{ x: 300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -300, opacity: 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="bg-white text-[var(--primary-dark)] rounded-3xl p-8 shadow-2xl"
//             >
//               <div className="flex flex-col items-center gap-4">
//                 {cards[currentCard].icon}
//                 <h3 className="text-xl font-bold">
//                   {cards[currentCard].title}
//                 </h3>
//                 <p className="text-sm text-gray-500 text-center">
//                   {cards[currentCard].subtitle}
//                 </p>
//                 <div className="h-32 bg-[var(--crown)] rounded-xl flex items-center justify-center font-bold text-[var(--primary-dark)] tracking-wide text-lg shadow-inner text-center">
//                   {cards[currentCard].content}
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Dots */}
//           <div className="flex gap-3 mt-4">
//             {cards.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => selectCard(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300
//                   ${currentCard === index ? "bg-[var(--accent)] scale-125" : "bg-white/50 hover:bg-[var(--accent)]"}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative blobs */}
//       <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//       <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[var(--blueLight)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaIdCard, FaBoxOpen } from "react-icons/fa";

const cards = [
  {
    title: "ID Submitted",
    subtitle: "Ghana Card • Accra Mall",
    content: "Secure • Tracked • Verified",
    icon: <FaIdCard size={40} className="text-[var(--accent)]" />,
  },
  {
    title: "Parcel Submitted",
    subtitle: "Documents & Bags • Accra Mall",
    content: "Secure • Tracked • Verified",
    icon: <FaBoxOpen size={40} className="text-[var(--accent)]" />,
  },
];

export default function HomeHero() {
  const [currentCard, setCurrentCard] = useState(0);

  // Automatically swap cards every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const selectCard = (index: number) => setCurrentCard(index);

  return (
    <section className="relative bg-[var(--primary-dark)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Found it. <br />
            <span className="text-[var(--crown)]">Secure it. Claim it.</span>
          </h1>

          <p className="mt-6 text-lg text-[var(--blueLight)] max-w-xl">
            Found & Claimed lets you safely submit and track{" "}
            <strong>found IDs, bags, documents, and parcels</strong>. Owners can
            locate and claim items securely through verified collection points
            across Ghana.
          </p>

          {/* Updated Buttons for Both IDs & Parcels */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Submit Buttons */}
            <a
              href="#submit-id"
              className="
                bg-[var(--accent)] 
                px-8 py-4 
                rounded-full 
                font-semibold 
                shadow-lg 
                transition 
                transform hover:-translate-y-1
                hover:border-2 hover:border-white
                text-center
              "
            >
              Submit a Found ID
            </a>

            <a
              href="#submit-parcel"
              className="
                bg-[var(--accent)] 
                px-8 py-4 
                rounded-full 
                font-semibold 
                shadow-lg 
                transition 
                transform hover:-translate-y-1
                hover:border-2 hover:border-white
                text-center
              "
            >
              Send a Parcel
            </a>

            {/* Claim Buttons */}
            <a
              href="#claim-id"
              className="
                border-2 border-[var(--blueLight)] 
                text-[var(--blueLight)] 
                hover:bg-[var(--accent)] 
                hover:text-white
                px-8 py-4 
                rounded-full 
                font-semibold 
                shadow 
                transition 
                transform hover:-translate-y-1
                text-center
              "
            >
              Claim an ID
            </a>

            <a
              href="#claim-parcel"
              className="
                border-2 border-[var(--blueLight)] 
                text-[var(--blueLight)] 
                hover:bg-[var(--accent)] 
                hover:text-white
                px-8 py-4 
                rounded-full 
                font-semibold 
                shadow 
                transition 
                transform hover:-translate-y-1
                text-center
              "
            >
              Claim a Parcel
            </a>
          </div>
        </div>

        {/* Right – Animated Card */}
        <div className="relative w-80 md:w-auto mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white text-[var(--primary-dark)] rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                {cards[currentCard].icon}
                <h3 className="text-xl font-bold">
                  {cards[currentCard].title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {cards[currentCard].subtitle}
                </p>
                <div className="h-32 bg-[var(--crown)] rounded-xl flex items-center justify-center font-bold text-[var(--primary-dark)] tracking-wide text-lg shadow-inner text-center">
                  {cards[currentCard].content}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex gap-3 mt-4">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => selectCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${currentCard === index ? "bg-[var(--accent)] scale-125" : "bg-white/50 hover:bg-[var(--accent)]"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[var(--blueLight)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
}
