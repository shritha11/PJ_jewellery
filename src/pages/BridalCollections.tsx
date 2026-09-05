import { Link } from "react-router-dom"

const events = [
  {
    title: "Mehendi",
    text: "Delicate gold for colour, henna and celebration.",
  },
  {
    title: "Sangeet",
    text: "Statement pieces made for movement and music.",
  },
  {
    title: "Haldi",
    text: "Light, joyful jewellery for the day.",
  },
  {
    title: "Wedding Day",
    text: "The main event, layered in tradition.",
  },
  {
    title: "Reception",
    text: "Polished gold for the final celebration.",
  },
  {
    title: "Cocktail",
    text: "Contemporary pieces with evening glamour.",
  },
]

const regions = [
  "Telugu",
  "Tamil",
  "Kerala",
  "Bengali",
  "Punjabi",
]

export default function BridalCollections() {
  return (
    <main className="bg-[#faf6ee]">

      {/* Hero */}
      <section className="bg-[#7a1c1c] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#f4c66e] uppercase tracking-[0.3em] text-sm mb-4"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            The Bridal Edit
          </p>

          <h1
            className="text-5xl sm:text-7xl mb-5"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            For every ritual.
            <br />
            For every bride.
          </h1>

          <p
            className="max-w-2xl mx-auto text-white/80 text-lg"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            Jewellery mapped to the moments that make
            the wedding yours.
          </p>

        </div>
      </section>

      {/* Wedding Journey */}
      <section className="py-20 bg-[#f5ede0]">

        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <p
            className="text-[#b88b2b] text-sm uppercase tracking-widest text-center mb-2"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            RIVAAH · The Wedding Journey
          </p>

          <h2
            className="text-[#2b1212] text-4xl text-center mb-12"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Seven moments. One gold story.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {events.map((event) => (
              <div
                key={event.title}
                className="
                  bg-white
                  rounded-2xl
                  p-7
                  border border-[#e8d9bb]
                  hover:-translate-y-1
                  transition-transform
                "
              >

                <p
                  className="text-[#b88b2b] text-sm uppercase tracking-widest mb-3"
                  style={{
                    fontFamily: '"Mukta:Bold", sans-serif',
                  }}
                >
                  Wedding moment
                </p>

                <h3
                  className="text-[#2b1212] text-2xl mb-2"
                  style={{
                    fontFamily: '"Rozha One:Regular", serif',
                  }}
                >
                  {event.title}
                </h3>

                <p
                  className="text-[#5a3a2a]"
                  style={{
                    fontFamily: '"Mukta:Regular", sans-serif',
                  }}
                >
                  {event.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">

          <h2
            className="text-[#2b1212] text-4xl mb-4"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Jewellery rooted in tradition
          </h2>

          <p
            className="text-[#5a3a2a] mb-8"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            Explore recommendations inspired by the way
            different families celebrate.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {regions.map((region) => (
              <span
                key={region}
                className="
                  px-6 py-3
                  rounded-full
                  bg-[#f5ede0]
                  border border-[#d4b078]
                  text-[#2b1212]
                "
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              >
                {region} Bride
              </span>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5ede0] py-16 text-center">

        <h2
          className="text-[#b88b2b] text-4xl italic mb-4"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Build your bridal look with us.
        </h2>

        <Link
          to="/styling"
          className="inline-flex bg-[#7a1c1c] text-white px-8 py-3 rounded-full"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Talk to a Stylist
        </Link>

      </section>

    </main>
  )
}