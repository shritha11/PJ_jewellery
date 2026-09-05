import redBg from "../imports/red-brand-bg.png";
import familyImg from "../imports/family.png";
export default function BrandStory() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        backgroundImage: `url(${redBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Quote */}
        <blockquote
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#f4c66e] text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-center max-w-4xl mx-auto mb-8"
        >
          “Every family that walks in is mid-story — a wedding, a naming
          ceremony, a promise being kept. We're just here to get the gold
          right.”
        </blockquote>

        {/* Description */}
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-white text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-6"
        >
          PJ Jewellery Studio &amp; Creations is a family-run atelier working in
          gold ornaments and bridal styling, alongside a boutique for the
          outfits that go with them.
        </p>

        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-white text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          We don't sell online. We listen, sketch, source and finish — and every
          enquiry gets a person, not a queue number.
        </p>

        {/* Three service columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
          <div>
            <p
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="text-[#f4c66e] text-sm sm:text-base mb-1"
            >
              Gold &amp; Bridal
            </p>

            <p
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-white text-sm"
            >
              Ornaments, sets, repairs
            </p>
          </div>

          <div>
            <p
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="text-[#f4c66e] text-sm sm:text-base mb-1"
            >
              Boutique
            </p>

            <p
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-white text-sm"
            >
              Outfits styled to match
            </p>
          </div>

          <div>
            <p
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="text-[#f4c66e] text-sm sm:text-base mb-1"
            >
              In-studio only
            </p>

            <p
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-white text-sm"
            >
              Hyderabad, by appointment
            </p>
          </div>
        </div>
      </div>

      {/* Family illustration */}
      <img
        src={familyImg}
        alt="Indian family in traditional clothing"
        className="absolute bottom-0 right-4 sm:right-8 lg:right-12 w-44 sm:w-56 lg:w-64 z-10 pointer-events-none"
      />
    </section>
  )
}