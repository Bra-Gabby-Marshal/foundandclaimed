import React from 'react'

function HomeHero() {
  return (
    <>
    {/* Hero */}
      <section className="relative bg-brutalBlue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Found it.
              <br />
              <span className="text-crown">Secure it. Claim it.</span>
            </h1>

            <p className="mt-6 text-lg text-blueLight max-w-xl">
              Found & Claimed helps you safely submit lost IDs and documents
              as parcels, and allows rightful owners to securely claim them
              through verified collection points.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#submit"
                className="bg-yass hover:bg-sister px-8 py-4 rounded-full font-semibold transition"
              >
                Submit a Parcel
              </a>
              <a
                href="#claim"
                className="border-2 border-blueLight text-blueLight hover:bg-blueLight hover:text-brutalBlue px-8 py-4 rounded-full font-semibold transition"
              >
                Claim a Parcel
              </a>
            </div>
          </div>

          {/* Right – Card Preview */}
          <div className="relative">
            <div className="bg-white text-brutalBlue rounded-3xl p-8 shadow-2xl rotate-2">
              <h3 className="text-xl font-bold mb-1">Parcel Created</h3>
              <p className="text-sm text-gray-500 mb-4">
                Ghana Card • Accra Mall
              </p>

              <div className="h-32 bg-crown rounded-xl flex items-center justify-center font-bold">
                Secure • Tracked • Verified
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yass/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blueLight/30 rounded-full blur-3xl"></div>
      </section>
    </>
  )
}

export default HomeHero
