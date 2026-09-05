import { useSearchParams } from "react-router-dom"
import EnquireForm from "../components/EnquiryForm"

export default function Enquire() {
  const [searchParams] = useSearchParams()

  const piece =
    searchParams.get("piece") || "Gold Jewellery"

  return (
    <EnquireForm selectedPiece={piece} />
  )
}