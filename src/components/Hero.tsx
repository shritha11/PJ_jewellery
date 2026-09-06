import heroImg from "@/imports/hero.jpg"

export default function Hero() {
  return (
    <section className="bg-[#faf6ee] pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 min-w-0">
          <p
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="text-[#b88b2b] text-sm tracking-[0.18em] uppercase mb-3"
          >
            Jewellery for every celebration
          </p>

          <h1
            style={{ fontFamily: '"Rozha One:Regular", serif' }}
            className="text-[#2b1212] text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
          >
            Seven ceremonies.
            <br />
            One <span className="text-[#b88b2b]">gold</span> story.
          </h1>

          <p
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-[#5a3a2a] text-lg leading-relaxed max-w-md mb-8"
          >
            From the turmeric of the haldi to the last dance at the reception —
            discover jewellery chosen for every part of the celebration, not
            just the big day.
          </p>

          {/* Clear user paths */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#ceremony"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="bg-[#7a1c1c] text-white text-sm px-6 py-2.5 rounded-full hover:bg-[#5e1515] transition-colors"
            >
              Explore jewellery
            </a>

            <a
              href="/styling"
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="border border-[#2b1212] text-[#2b1212] text-sm px-6 py-2.5 rounded-full hover:bg-[#f0e6d0] transition-colors"
            >
              Talk to a stylist
            </a>
          </div>

          {/* Helpful guidance for first-time users */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="#ceremony"
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-[#5a3a2a] text-sm underline underline-offset-4 hover:text-[#7a1c1c] transition-colors"
            >
              Shop by occasion
            </a>

            <a
              href="/jewellery"
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-[#5a3a2a] text-sm underline underline-offset-4 hover:text-[#7a1c1c] transition-colors"
            >
              Browse by jewellery type
            </a>
          </div>
        </div>

        <div className="w-full md:w-[420px] lg:w-[480px] shrink-0">
          <img
            src={heroImg}
            alt="South Indian bride in red saree adorned with layered gold jewellery"
            className="w-full h-[480px] md:h-[540px] object-cover object-top rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}