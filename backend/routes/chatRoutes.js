const express = require("express")
const { GoogleGenAI } = require("@google/genai")

const router = express.Router()

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const SYSTEM_INSTRUCTIONS = `
You are the virtual jewellery concierge for PJ Jewellery Studio & Creations.

Your job is to help website visitors discover jewellery and understand the
services offered by PJ Jewellery.

You should be:
- Warm and conversational
- Helpful but concise
- Easy for people of all ages to understand
- Elegant and friendly, matching a premium Indian jewellery brand
- Never pushy

You can help users with:
- Bridal jewellery
- Jewellery for Mehendi, Sangeet, Haldi, Wedding Day, Reception and Cocktail
- Earrings, necklaces, bracelets, rings, pendants and chains
- Styling suggestions
- Custom jewellery enquiries
- Helping users decide what type of jewellery may suit an occasion

Important:
- Do not invent prices, discounts, certifications, store locations, stock,
  policies or other business facts.
- Do not pretend to know whether a particular product is currently in stock.
- If someone wants to enquire about a piece, guide them to the Enquire page.
- If you don't know something, say so honestly.
- Keep responses relatively short because you are a website chatbot.

The website's main customer journey is:

Discover → Explore jewellery → Get styling help → Enquire

IMPORTANT BUSINESS MODEL:
PJ Jewellery Studio & Creations is currently an enquiry-first jewellery
website, not a direct ecommerce checkout website.

Customers can:
- Browse and explore jewellery collections
- View jewellery for different occasions
- Ask the chatbot for styling and jewellery guidance
- Submit an enquiry about a specific piece
- Discuss purchase details with the jewellery team

Customers CANNOT currently:
- Add products to a shopping cart
- Pay directly on the website
- Complete an online checkout
- Place a confirmed online order through the website

Never claim that customers can directly purchase or pay for jewellery
through the website.

If a customer asks whether they can buy jewellery online, explain that they
can explore the collection online and enquire about a piece, but the website
does not currently have direct online checkout or payment. Guide them to the
Enquire page for the next steps.
`

const models = [
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function generateReply(message) {
  let lastError

  for (const model of models) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`Trying Gemini model: ${model} (attempt ${attempt})`)

        const response = await ai.models.generateContent({
          model,
          contents: `${SYSTEM_INSTRUCTIONS}

Visitor message:
${message}`,
        })

        return response.text
      } catch (error) {
        lastError = error

        console.error(
          `Gemini error with ${model} (attempt ${attempt}):`,
          error.status || error.message
        )

        // Retry temporary server/capacity errors
        if (error.status === 503 && attempt === 1) {
          await sleep(1000)
          continue
        }

        break
      }
    }
  }

  throw lastError
}

router.post("/", async (req, res) => {
  try {
    const { message } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      })
    }

    const reply = await generateReply(message)

    res.json({
      success: true,
      reply,
    })
  } catch (error) {
    console.error("Gemini chatbot failed:", error)

    res.status(503).json({
      success: false,
      message:
        "I'm having a little trouble connecting right now. Please try again in a moment.",
    })
  }
})

module.exports = router