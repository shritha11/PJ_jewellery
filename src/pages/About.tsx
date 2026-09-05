import redBg from "../imports/red-brand-bg.png"
import familyImg from "../imports/family.png"

export default function About() {
  return (
    <main className="bg-[#faf6ee]">

      <section
        className="relative overflow-hidden py-24"
        style={{
          backgroundImage: `url(${redBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#f4c66e] uppercase tracking-widest text-sm mb-4"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Our Story
          </p>

          <h1
            className="text-[#f4c66e] text-5xl sm:text-6xl mb-6"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Every family walks in with a story.
          </h1>

          <p
            className="text-white/90 text-lg leading-relaxed"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            PJ Jewellery Studio &amp; Creations is a
            family-run atelier for gold ornaments,
            bridal styling and boutique wear.
          </p>

        </div>

        <img
          src={familyImg}
          alt="Indian family in traditional clothing"
          className="absolute bottom-0 right-4 w-44 sm:w-64 pointer-events-none"
        />

      </section>

      <section className="py-20">

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">

          <blockquote
            className="text-[#2b1212] text-3xl sm:text-4xl leading-relaxed mb-8"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            “We're here to get the gold right.”
          </blockquote>

          <p
            className="text-[#5a3a2a] text-lg leading-relaxed"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            We listen, sketch, source and finish.
            Every enquiry gets a person, not a queue number.
          </p>

        </div>
      </section>

      <section className="bg-[#f5ede0] py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3
              className="text-[#b88b2b] text-xl mb-2"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              Gold &amp; Bridal
            </h3>

            <p
              className="text-[#5a3a2a]"
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
            >
              Ornaments, sets and repairs
            </p>
          </div>

          <div>
            <h3
              className="text-[#b88b2b] text-xl mb-2"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              Boutique
            </h3>

            <p
              className="text-[#5a3a2a]"
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
            >
              Outfits styled to match
            </p>
          </div>

          <div>
            <h3
              className="text-[#b88b2b] text-xl mb-2"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              In-studio only
            </h3>

            <p
              className="text-[#5a3a2a]"
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
            >
              Hyderabad, by appointment
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}