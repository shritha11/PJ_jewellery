import { useState } from "react"
// bride image used via Unsplash (original is in Group620 but we use the hero photo instead)

import heroImg from "@/imports/hero.jpg"
import faqBg from "./imports/faq-bg.png"
import redBg from "./imports/red-brand-bg.png"
import familyImg from "./imports/family.png"
import STYLIST_BOUTIQUE from "./imports/boutique-bg.png"
import STYLIST_BRIDAL from "./imports/main-event-bg.png"
import STYLIST_TEMPLE from "./imports/heritage-bg.png"
import STYLIST_FESTIVE from "./imports/festive-bg.png"
import STYLIST_JEWELLERY from "./imports/daily-bg.png"
const NECKLACE1 =
  "https://images.unsplash.com/photo-1722410180687-b05b50922362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE2 =
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE3 =
  "https://images.unsplash.com/photo-1721807644561-9efcabee5c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS1 =
  "https://images.unsplash.com/photo-1706076876111-28bf14ec6169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS2 =
  "https://images.unsplash.com/photo-1654781456542-fdd1683c79c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const BOUTIQUE_IMG =
  "https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
const TEAM_IMG =
  "https://images.unsplash.com/photo-1708534246055-d7b149acb731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"

const regions = ["Telugu", "Tamil", "Kerala", "Bengali", "Punjabi"]
const stylistCards = [
  {
    title: "Beyond jewellery",
    subtitle: "Boutique",
    image: STYLIST_BOUTIQUE,
    href: "/boutique",
    className: "col-span-2 h-48 sm:h-52",
  },
  {
    title: "The main event",
    subtitle: "Bridal Collection",
    image: STYLIST_BRIDAL,
    href: "/bridal-collections",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Heritage",
    subtitle: "Temple Line",
    image: STYLIST_TEMPLE,
    href: "/jewellery/temple",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Diwali & Sangeet",
    subtitle: "Festive Edit",
    image: STYLIST_FESTIVE,
    href: "/jewellery/festive",
    className: "col-span-1 h-36 sm:h-40",
  },
  {
    title: "Everyday Gold",
    subtitle: "Jewellery",
    image: STYLIST_JEWELLERY,
    href: "/jewellery",
    className: "col-span-1 h-36 sm:h-40",
  },
]
const occasions = [
  "Mehendi",
  "Sangeet",
  "Haldi",
  "Wedding day",
  "Reception",
  "Cocktail Party",
]
const categories = [
  "All",
  "Earrings",
  "Bracelets",
  "Pendants",
  "Rings",
  "Chains",
]

const productGrid = [
  { img: NECKLACE1, label: "Temple Necklace Set" },
  { img: EARRINGS2, label: "Jhumka Earrings" },
  { img: NECKLACE2, label: "Layered Haaram" },
  { img: EARRINGS1, label: "Chandbali Drops" },
  { img: NECKLACE3, label: "Bridal Choker" },
]

const faqs = [
  {
    q: "Do you only sell gold jewellery?",
    a: "We specialise in gold — rings, earrings, chains, pendants, bracelets and full bridal sets — in traditional and contemporary designs.",
  },
  {
    q: "Can I enquire about one specific piece?",
    a: "Yes — open any piece and use Enquire Now. Your message reaches us with that piece already attached.",
  },
  {
    q: "Do you customise by region or ritual?",
    a: "Yes — Telugu, Tamil, Bengali, Punjabi and Kerala wedding traditions each get a slightly different set of recommendations.",
  },
  {
    q: "Is there a boutique too?",
    a: "Yes — wedding, festive and guest wear, styled to go with whatever gold you're wearing.",
  },
  {
    q: "Can I buy directly on the website?",
    a: "Not yet — the site runs on enquiries. There's no cart or online payment; our team follows up directly.",
  },
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#faf6ee] border-b border-[#e8d9bb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <span
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#2b1212] text-xl leading-none"
        >
          PJ Jewellery Studio &amp; Creations
        </span>
        <nav className="hidden md:flex items-center gap-7">
          {["Bridal Collections", "Jewellery", "Boutique", "About", "FAQ"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                className="text-[#2b1212] text-sm hover:text-[#b88b2b] transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </nav>
        <a
          href="#enquire"
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          className="hidden md:inline-flex items-center gap-1 bg-[#7a1c1c] text-white text-sm px-5 py-2 rounded-full hover:bg-[#5e1515] transition-colors"
        >
          Enquire now
        </a>
        <button
          className="md:hidden text-[#2b1212]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#faf6ee] border-t border-[#e8d9bb] px-4 py-4 flex flex-col gap-3">
          {["Bridal Collections", "Jewellery", "Boutique", "About", "FAQ"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                className="text-[#2b1212] text-base"
              >
                {item}
              </a>
            ),
          )}
          <a
            href="#enquire"
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="self-start bg-[#7a1c1c] text-white text-sm px-5 py-2 rounded-full mt-1"
          >
            Enquire now
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-[#faf6ee] pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 min-w-0">
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
            a piece chosen for every part of the wedding, not just the big day.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#ceremony"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="bg-[#7a1c1c] text-white text-sm px-6 py-2.5 rounded-full hover:bg-[#5e1515] transition-colors"
            >
              Shop by occasion
            </a>
            <a
              href="#enquire"
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="border border-[#2b1212] text-[#2b1212] text-sm px-6 py-2.5 rounded-full hover:bg-[#f0e6d0] transition-colors"
            >
              Book a styling session
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

function CeremonySection() {
  const [activeRegion, setActiveRegion] = useState("Telugu")
  const [activeOccasion, setActiveOccasion] = useState("Wedding day")
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section id="ceremony" className="bg-[#f5ede0] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <p
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          className="text-[#b88b2b] text-sm text-center uppercase tracking-widest mb-2"
        >
          RIVAAH · The Wedding Journey
        </p>
        <h2
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#2b1212] text-4xl sm:text-5xl text-center mb-4"
        >
          Jewellery, mapped to the ceremony
        </h2>
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#5a3a2a] text-lg text-center max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Each moment of the wedding calls for something different — pick the
          ceremony, see what actually works for it.
        </p>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-7 py-3 rounded-full text-sm transition-colors ${
                activeRegion === r
                  ? "bg-[#7a1c1c] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Occasion tabs */}
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          {occasions.map((o) => (
            <button
              key={o}
              onClick={() => setActiveOccasion(o)}
              style={{
                fontFamily:
                  o === activeOccasion
                    ? '"Mukta:Bold", sans-serif'
                    : '"Mukta:Regular", sans-serif',
              }}
              className={`text-lg pb-1 transition-colors border-b-3 ${
                activeOccasion === o
                  ? "border-[#b88b2b] text-[#b88b2b]"
                  : "border-transparent text-[#5a3a2a] hover:text-[#b88b2b]"
              }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                activeCategory === c
                  ? "bg-[#2b1212] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
<div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
  {productGrid.map((p) => (
    <div
      key={p.label}
      className="shrink-0 snap-start w-44 sm:w-52 rounded-2xl overflow-hidden bg-white shadow-sm group"
    >
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={p.img}
          alt={p.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Enquire button */}
        <a
          href="#enquire"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            bg-[#7a1c1c]
            text-white
            px-5
            py-2.5
            rounded-full
            text-sm
            sm:text-base
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            whitespace-nowrap
            shadow-lg
          "
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
        >
          Enquire →
        </a>
      </div>

      <div className="p-3">
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#2b1212] text-base sm:text-lg"
        >
          {p.label}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

function StylistSection() {
  return (
    <section className="bg-[#faf6ee] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="flex-1 w-full">
            <h2
              style={{ fontFamily: '"Rozha One:Regular", serif' }}
              className="text-[#b88b2b] text-3xl sm:text-4xl lg:text-5xl italic mb-5 leading-snug"
            >
              Find jewellery for
              <br />
              your moment
            </h2>

            <p
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="text-[#5a3a2a] text-base sm:text-lg leading-relaxed mb-7 max-w-md"
            >
              Not sure what works for the occasion? Tell us what you're dressing
              for and we'll help you choose.
            </p>

            <a
              href="/styling"
              style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
              className="inline-flex items-center justify-center
                         bg-[#7a1c1c] text-white
                         text-sm sm:text-base
                         px-7 py-3 rounded-full
                         hover:bg-[#5e1515]
                         transition-colors"
            >
              Talk to a Stylist
            </a>
          </div>

          {/* RIGHT SIDE — CLICKABLE CARDS */}
          <div className="w-full md:w-[520px] lg:w-[570px] shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {stylistCards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className={`
                    relative
                    ${card.className}
                    rounded-2xl
                    overflow-hidden
                    group
                    block
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                  `}
                >
                  {/* IMAGE */}
                  <img
                    src={card.image}
                    alt={`${card.title} ${card.subtitle}`}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* DARK OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      group-hover:bg-black/35
                      transition-colors
                      duration-300
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-end
                      p-4
                      sm:p-5
                    "
                  >
                    <p
                      style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
                      className="
                        text-white
                        text-lg
                        sm:text-xl
                        leading-tight
                        drop-shadow-md
                      "
                    >
                      {card.title}
                    </p>

                    <p
                      style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                      className="
                        text-white
                        text-sm
                        sm:text-base
                        opacity-95
                        drop-shadow-md
                      "
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EnquireForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="enquire" className="bg-[#f4edde] py-16 px-4">
      <div
        className="relative max-w-lg mx-auto rounded-[28px] overflow-hidden px-8 pt-10 pb-10"
        style={{
          backgroundImage:
            "url('src/imports/Group620/e837b8afcc800573e6fb011356bb46c395ce9611.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <h2
            style={{ fontFamily: '"Rozha One:Regular", serif' }}
            className="text-[#c9922a] text-4xl text-center mb-2"
          >
            Enquire
          </h2>

          <p
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-white text-sm text-center mb-6 leading-relaxed opacity-90"
          >
            Tell us what you're looking for — our team calls you back, usually
            same day.
          </p>

          {submitted ? (
            <div className="text-center py-16">
              <p
                style={{ fontFamily: '"Rozha One:Regular", serif' }}
                className="text-[#c9922a] text-3xl mb-3"
              >
                Thank you!
              </p>

              <p
                style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                className="text-white opacity-80"
              >
                We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-4"
            >
              {/* Selected jewellery */}
              <p
                style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                className="text-sm mb-1"
              >
                <span className="text-[#c9922a]">Enquiring about:</span>{" "}
                <span
                  style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
                  className="text-white"
                >
                  Gold Temple Necklace
                </span>
              </p>

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-white text-base"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="bg-white rounded-lg px-4 py-2.5 text-[#2b1212] text-base focus:outline-none focus:ring-2 focus:ring-[#c9922a]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-white text-base"
                >
                  Email
                </label>

                <input
                  type="email"
                  required
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="bg-white rounded-lg px-4 py-2.5 text-[#2b1212] text-base focus:outline-none focus:ring-2 focus:ring-[#c9922a]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-white text-base"
                >
                  Phone number
                </label>

                <input
                  type="tel"
                  required
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="bg-white rounded-lg px-4 py-2.5 text-[#2b1212] text-base focus:outline-none focus:ring-2 focus:ring-[#c9922a]"
                />
              </div>

              {/* What are you looking for */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-white text-base"
                >
                  What are you looking for?
                </label>

                <div className="relative">
                  <select
                    style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                    className="appearance-none w-full bg-white rounded-lg px-4 py-2.5 text-[#2b1212] text-base focus:outline-none focus:ring-2 focus:ring-[#c9922a] pr-10"
                  >
                    {[
                      "Bridal",
                      "Occasion piece",
                      "Custom design",
                      "Repair",
                      "Other",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>

                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5a3a2a"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-white text-base"
                >
                  Message
                </label>

                <textarea
                  rows={4}
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="bg-white rounded-lg px-4 py-2.5 text-[#2b1212] text-base focus:outline-none focus:ring-2 focus:ring-[#c9922a] resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  style={{
                    fontFamily: '"Mukta:Regular", sans-serif',
                  }}
                  className="bg-[#a87627] text-white text-base px-7 py-2.5 rounded-full hover:bg-[#8a6020] transition-colors"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
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

function CTASection() {
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

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section
      id="faq"
      className="py-16 border-t border-[#e8d9bb]"
      style={{
        backgroundImage: `url(${faqBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-8">
        <h2
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#2b1212] text-3xl sm:text-4xl text-center mb-2"
        >
          Questions before you enquire
        </h2>
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#5a3a2a] text-base text-center mb-10"
        >
          Everything runs through enquiry — here's what that means
        </p>
        <div className="divide-y divide-[#e8d9bb]">
          {faqs.map((item, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-start justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
                  className="text-[#2b1212] text-base sm:text-lg"
                >
                  {item.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b88b2b"
                  strokeWidth="2"
                  className={`shrink-0 mt-0.5 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {open === i && (
                <p
                  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
                  className="text-[#5a3a2a] text-base mt-3 leading-relaxed"
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a0e0e] text-[#f4edde] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p
            style={{ fontFamily: '"Rozha One:Regular", serif' }}
            className="text-lg mb-3"
          >
            PJ Jewellery Studio &amp; Creations
          </p>
          <p
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-sm opacity-70 leading-relaxed"
          >
            Gold ornaments, bridal styling and boutique wear — Hyderabad, by
            appointment.
          </p>
        </div>
        <div>
          <p
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Explore
          </p>
          {["Shop by Occasion", "Collections", "Boutique", "FAQ"].map((l) => (
            <a
              key={l}
              href="#"
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className="block text-sm opacity-70 hover:opacity-100 mb-2"
            >
              {l}
            </a>
          ))}
        </div>
        <div>
          <p
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Studio
          </p>
          <p
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-sm opacity-70 leading-relaxed"
          >
            Road No. 12, Banjara Hills, Hyderabad
            <br />
            Tue–Sun, 10:30am–6pm
          </p>
        </div>
        <div>
          <p
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Reach us
          </p>
          <div
            style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
            className="text-sm opacity-70 space-y-2"
          >
            <p>+91 90000 00000</p>
            <p>hello@pjjewellery.studio</p>
            <a href="#" className="hover:opacity-100">
              instagram.com/pj_jewellers
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-10 pt-6 border-t border-[#3a1c1c]">
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-xs opacity-40 text-center"
        >
          © 2026 PJ Jewellery Studio &amp; Creations
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-full bg-[#faf6ee]">
      <Nav />
      <Hero />
      <CeremonySection />
      <StylistSection />
      <BrandStory />
      <CTASection />
      <FAQ />
      <EnquireForm />
      <Footer />
    </div>
  )
}
