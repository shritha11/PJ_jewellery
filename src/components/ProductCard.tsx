import { Link } from "react-router-dom"

type ProductCardProps = {
  image: string
  name: string
  category?: string
}

export default function ProductCard({
  image,
  name,
  category = "Gold Jewellery",
}: ProductCardProps) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300">

      <div className="relative aspect-square overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        <Link
          to={`/enquire?piece=${encodeURIComponent(name)}`}
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
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            whitespace-nowrap
            shadow-lg
          "
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Enquire →
        </Link>

      </div>

      <div className="p-4">

        <p
          className="text-xs uppercase tracking-widest text-[#b88b2b] mb-1"
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
        >
          {category}
        </p>

        <h3
          className="text-[#2b1212] text-lg"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          {name}
        </h3>

      </div>
    </article>
  )
}