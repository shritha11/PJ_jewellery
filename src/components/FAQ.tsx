import { useState } from "react"

import faqBg from "../imports/faq-bg.png";

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

export default function FAQ() {
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