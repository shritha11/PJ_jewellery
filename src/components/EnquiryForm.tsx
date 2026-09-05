import { useState } from "react"
import enquireBg from "../imports/enquire-bg.png"
type EnquireFormProps = {
  selectedPiece?: string
}

export default function EnquireForm({
  selectedPiece = "Gold Jewellery",
}: EnquireFormProps) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="enquire" className="bg-[#f4edde] py-16 px-4">
      <div
        className="relative max-w-lg mx-auto rounded-[28px] overflow-hidden px-8 pt-10 pb-10"
        style={{
  backgroundImage: `url(${enquireBg})`,
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
                  {selectedPiece}
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