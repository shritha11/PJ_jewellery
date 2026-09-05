
export default function CTASection() {
  return (
    <section className="bg-[#faf6ee] py-20 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#b88b2b] text-3xl sm:text-4xl italic mb-4"
        >
          Looking for Something specific?
        </h2>
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#5a3a2a] text-base mb-8"
        >
          Tell us the occasion and we'll put together a few pieces worth seeing
          in person.
        </p>
        <a
          href="#enquire"
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          className="inline-flex items-center bg-[#7a1c1c] text-white text-sm px-8 py-3 rounded-full hover:bg-[#5e1515] transition-colors"
        >
          Enquire about Bridal
        </a>
      </div>
    </section>
  )
}