import { Link } from "react-router-dom"

const events = [
  {
    title: "Mehendi",
    slug: "mehendi",
    text: "Delicate gold for colour, henna and celebration.",
  },
  {
    title: "Sangeet",
    slug: "sangeet",
    text: "Statement pieces made for movement and music.",
  },
  {
    title: "Haldi",
    slug: "haldi",
    text: "Light, joyful jewellery for the day.",
  },
  {
    title: "Wedding Day",
    slug: "wedding-day",
    text: "The main event, layered in tradition.",
  },
  {
    title: "Reception",
    slug: "reception",
    text: "Polished gold for the final celebration.",
  },
  {
    title: "Cocktail",
    slug: "cocktail",
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
      className="text-[#2b1212] text-4xl text-center mb-4"
      style={{
        fontFamily: '"Rozha One:Regular", serif',
      }}
    >
      Seven moments. One gold story.
    </h2>

    <p
      className="text-[#5a3a2a] text-center max-w-xl mx-auto mb-12"
      style={{
        fontFamily: '"Mukta:Regular", sans-serif',
      }}
    >
      Choose a moment to discover jewellery selected for that part of
      the celebration.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {events.map((event) => (
        <Link
          key={event.title}
          to={`/bridal-collections/${event.slug}`}
          className="
            group
            bg-white
            rounded-2xl
            p-7
            border border-[#e8d9bb]
            hover:-translate-y-1
            hover:shadow-md
            transition-all
            cursor-pointer
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
            className="text-[#5a3a2a] mb-5"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            {event.text}
          </p>

          <span
            className="text-[#7a1c1c] text-sm group-hover:underline underline-offset-4"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Explore {event.title} jewellery →
          </span>
        </Link>
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