import { Link } from "react-router-dom"

const steps = [
  {
    number: "01",
    title: "Tell us your occasion",
    text: "Wedding, Sangeet, Reception, festive or everyday.",
  },
  {
    number: "02",
    title: "Tell us your outfit",
    text: "Describe what you're wearing or bring a reference.",
  },
  {
    number: "03",
    title: "Meet your stylist",
    text: "We'll recommend pieces around your look and ritual.",
  },
  {
    number: "04",
    title: "Visit the studio",
    text: "Try everything together and build the final look.",
  },
]

export default function Styling() {
  return (
    <main className="bg-[#faf6ee]">

      <section className="bg-[#f5ede0] py-24">

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#b88b2b] uppercase tracking-widest text-sm mb-3"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Personal Styling
          </p>

          <h1
            className="text-[#2b1212] text-5xl sm:text-7xl mb-5"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            You bring the occasion.
            <br />
            We'll bring the jewellery.
          </h1>

          <p
            className="text-[#5a3a2a] text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            A one-to-one styling experience for brides,
            families and anyone dressing for a moment worth remembering.
          </p>

        </div>
      </section>

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <h2
            className="text-[#2b1212] text-4xl text-center mb-12"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-[#b88b2b] pt-5"
              >

                <span
                  className="text-[#b88b2b] text-sm"
                  style={{
                    fontFamily: '"Mukta:Bold", sans-serif',
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="text-[#2b1212] text-xl my-2"
                  style={{
                    fontFamily: '"Mukta:Bold", sans-serif',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[#5a3a2a] leading-relaxed"
                  style={{
                    fontFamily: '"Mukta:Regular", sans-serif',
                  }}
                >
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-[#7a1c1c] text-white py-20 text-center">

        <h2
          className="text-[#f4c66e] text-4xl mb-4"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Ready to build your look?
        </h2>

        <Link
          to="/enquire"
          className="inline-flex bg-[#f4c66e] text-[#2b1212] px-8 py-3 rounded-full"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Book a Styling Session
        </Link>

      </section>

    </main>
  )
}