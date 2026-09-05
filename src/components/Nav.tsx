import { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    {
      name: "Bridal Collections",
      path: "/bridal-collections",
    },
    {
      name: "Jewellery",
      path: "/jewellery",
    },
    {
      name: "Boutique",
      path: "/boutique",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#faf6ee] border-b border-[#e8d9bb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
          className="text-[#2b1212] text-xl leading-none"
        >
          PJ Jewellery Studio &amp; Creations
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
              className="text-[#2b1212] text-sm hover:text-[#b88b2b] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Enquire */}
        <Link
          to="/enquire"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
          className="hidden md:inline-flex items-center gap-1 bg-[#7a1c1c] text-white text-sm px-5 py-2 rounded-full hover:bg-[#5e1515] transition-colors"
        >
          Enquire now
        </Link>

        {/* Mobile Menu */}
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

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-[#faf6ee] border-t border-[#e8d9bb] px-4 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
              className="text-[#2b1212] text-base"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/enquire"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
            className="self-start bg-[#7a1c1c] text-white text-sm px-5 py-2 rounded-full mt-1"
          >
            Enquire now
          </Link>
        </div>
      )}
    </header>
  )
}