import { useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

const quickActions = [
  "💍 Bridal jewellery",
  "✨ Help me choose jewellery",
  "👗 Styling advice",
  "📋 Make an enquiry",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Namaste! 👋 I'm your PJ Jewellery concierge. I can help you find jewellery, choose pieces for your wedding moments, or get styling advice.",
    },
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async (message?: string) => {
    const text = (message ?? input).trim()

    if (!text || loading) return

    setInput("")

    const userMessage: Message = {
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const response = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.")
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ])
    } catch (error) {
      console.error("Chat error:", error)

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open jewellery concierge"
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-[#7a1c1c]
            text-white
            shadow-xl
            flex
            items-center
            justify-center
            hover:bg-[#5e1515]
            hover:scale-105
            transition-all
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-[calc(100vw-2rem)]
            sm:w-[380px]
            h-[560px]
            max-h-[calc(100vh-3rem)]
            bg-[#faf6ee]
            rounded-3xl
            shadow-2xl
            overflow-hidden
            flex
            flex-col
            border
            border-[#e8d9bb]
          "
        >

          {/* Header */}
          <div className="bg-[#7a1c1c] text-white px-5 py-4 flex items-center justify-between shrink-0">

            <div>
              <p
                className="text-[#f4c66e] text-xs uppercase tracking-[0.18em]"
                style={{
                  fontFamily: '"Mukta:Bold", sans-serif',
                }}
              >
                PJ Jewellery
              </p>

              <p
                className="text-lg"
                style={{
                  fontFamily: '"Rozha One:Regular", serif',
                }}
              >
                Jewellery Concierge
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-xl transition-colors"
            >
              ×
            </button>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-[#7a1c1c] text-white rounded-br-md"
                      : "bg-white text-[#2b1212] border border-[#eadfcf] rounded-bl-md"
                  }`}
                  style={{
                    fontFamily: '"Mukta:Regular", sans-serif',
                  }}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="bg-white border border-[#eadfcf] text-[#8b6a55] px-4 py-3 rounded-2xl rounded-bl-md text-sm"
                  style={{
                    fontFamily: '"Mukta:Regular", sans-serif',
                  }}
                >
                  Finding the right pieces...
                </div>
              </div>
            )}

            {/* Quick actions */}
            {messages.length === 1 && !loading && (
              <div className="pt-2 space-y-2">
                <p
                  className="text-[#8b6a55] text-xs"
                  style={{
                    fontFamily: '"Mukta:Bold", sans-serif',
                  }}
                >
                  You can ask me about:
                </p>

                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="
                      w-full
                      text-left
                      bg-white
                      border
                      border-[#d4b078]
                      text-[#5a3a2a]
                      px-4
                      py-2.5
                      rounded-xl
                      text-sm
                      hover:bg-[#f0e6d0]
                      transition-colors
                    "
                    style={{
                      fontFamily: '"Mukta:Regular", sans-serif',
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Input */}
          <div className="bg-white border-t border-[#eadfcf] p-3 shrink-0">

            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about jewellery..."
                disabled={loading}
                className="
                  flex-1
                  min-w-0
                  bg-[#faf6ee]
                  border
                  border-[#d4b078]
                  rounded-full
                  px-4
                  py-2.5
                  text-[#2b1212]
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#c9922a]
                  disabled:opacity-60
                "
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-full
                  bg-[#7a1c1c]
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#5e1515]
                  transition-colors
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
              >
                →
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  )
}