import { Link } from "react-router-dom"
import boutiqueImg from "../imports/boutique-bg.png"

const occasions = [
  "Bridal Wear",
  "Sangeet",
  "Reception",
  "Festive",
  "Wedding Guest",
]

export default function Boutique() {
  return (
    <main className="bg-[#faf6ee]">

      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <p
              className="text-[#b88b2b] uppercase tracking-widest text-sm mb-3"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              PJ Boutique
            </p>

            <h1
              className="text-[#2b1212] text-5xl sm:text-6xl leading-tight mb-5"
              style={{
                fontFamily: '"Rozha One:Regular", serif',
              }}
            >
              The outfit.
              <br />
              The jewellery.
              <br />
              The whole look.
            </h1>

            <p
              className="text-[#5a3a2a] text-lg leading-relaxed mb-7"
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
            >
              Wedding, festive and guest wear styled to
              work with the gold you're wearing.
            </p>

            <Link
              to="/styling"
              className="inline-flex bg-[#7a1c1c] text-white px-7 py-3 rounded-full"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              Book a Styling Session
            </Link>

          </div>

          <img
            src={boutiqueImg}
            alt="PJ Jewellery boutique"
            className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
          />

        </div>
      </section>

      <section className="bg-[#f5ede0] py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <h2
            className="text-[#2b1212] text-4xl text-center mb-10"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Dress for the moment
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {occasions.map((occasion) => (
              <div
                key={occasion}
                className="bg-white rounded-2xl p-6 text-center border border-[#e8d9bb]"
              >
                <p
                  className="text-[#2b1212] text-lg"
                  style={{
                    fontFamily: '"Mukta:Bold", sans-serif',
                  }}
                >
                  {occasion}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 text-center">

        <h2
          className="text-[#b88b2b] text-4xl italic mb-4"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Complete your look.
        </h2>

        <p
          className="text-[#5a3a2a] mb-7"
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
        >
          Outfit + jewellery + styling, all under one roof.
        </p>

        <Link
          to="/enquire"
          className="inline-flex bg-[#7a1c1c] text-white px-8 py-3 rounded-full"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Enquire about your look
        </Link>

      </section>

    </main>
  )
}