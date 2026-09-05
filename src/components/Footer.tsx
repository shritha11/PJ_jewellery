import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1a0e0e] text-[#f4edde] py-14">

      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link
            to="/"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
            className="text-lg mb-3 block"
          >
            PJ Jewellery Studio &amp; Creations
          </Link>

          <p
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
            className="text-sm opacity-70 leading-relaxed"
          >
            Gold ornaments, bridal styling and boutique wear —
            Hyderabad, by appointment.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Explore
          </p>

          <Link
            to="/"
            className="block text-sm opacity-70 hover:opacity-100 mb-2"
          >
            Home
          </Link>

          <Link
            to="/jewellery"
            className="block text-sm opacity-70 hover:opacity-100 mb-2"
          >
            Jewellery
          </Link>

          <Link
            to="/bridal-collections"
            className="block text-sm opacity-70 hover:opacity-100 mb-2"
          >
            Bridal Collections
          </Link>

          <Link
            to="/boutique"
            className="block text-sm opacity-70 hover:opacity-100 mb-2"
          >
            Boutique
          </Link>

          <Link
            to="/faq"
            className="block text-sm opacity-70 hover:opacity-100 mb-2"
          >
            FAQ
          </Link>
        </div>

        {/* Studio */}
        <div>
          <p
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Studio
          </p>

          <p
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
            className="text-sm opacity-70 leading-relaxed"
          >
            Road No. 12, Banjara Hills, Hyderabad
            <br />
            Tue–Sun, 10:30am–6pm
          </p>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-4"
          >
            Reach us
          </p>

          <div
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
            className="text-sm opacity-70 space-y-2"
          >
            <p>+91 90000 00000</p>
            <p>hello@pjjewellery.studio</p>

            <a
              href="#"
              className="hover:opacity-100"
            >
              instagram.com/pj_jewellers
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-10 pt-6 border-t border-[#3a1c1c]">
        <p
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
          className="text-xs opacity-40 text-center"
        >
          © 2026 PJ Jewellery Studio &amp; Creations
        </p>
      </div>

    </footer>
  )
}