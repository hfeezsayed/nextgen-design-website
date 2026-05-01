"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const chatEndRef = useRef(null);

  // Auto open
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setMessages([{ sender: "Assistant", text: "Hi! How may I assist you?" }]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = async () => {
    if (!input || loading || completed) return;

    const userInput = input;
    setInput("");
    addMessage("You", userInput);
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/chat?message=${encodeURIComponent(userInput)}`,
      );

      const data = await res.json();
      const response = data.response;

      addMessage("Assistant", response);

      const lower = response.toLowerCase();

      // NO CASE
      if (lower.includes("no worries")) {
        setLoading(false);

        setTimeout(() => setCompleted(true), 4000);

        setTimeout(() => {
          setMessages([]);
          setOpen(false);
          setCompleted(false);
        }, 6000);

        return;
      }

      // SUCCESS CASE
      if (lower.includes("thank")) {
        setLoading(false);
        setCompleted(true);

        setTimeout(() => {
          setMessages([]);
          setOpen(false);
          setCompleted(false);
        }, 10000);

        return;
      }
    } catch (err) {
      addMessage("Assistant", "⚠️ Server error, please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          background: "linear-gradient(135deg, #0f3d2e, #1f7a5a)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          fontSize: 22,
        }}
      >
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 340,
            height: 380,
            zIndex: 999,
            backdropFilter: "blur(20px)",
            background: "rgba(17,17,17,0.85)",
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 14,
              background: "linear-gradient(135deg, #0f3d2e, #1f7a5a)",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.5,
              color: "white",
            }}
          >
            NextGen AI Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 12,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === "You" ? "flex-end" : "flex-start",
                  maxWidth: "75%",
                  padding: "10px 12px",
                  borderRadius: 12,
                  fontSize: 13,
                  lineHeight: 1.4,
                  background:
                    m.sender === "You"
                      ? "linear-gradient(135deg, #1f7a5a, #0f3d2e)"
                      : "rgba(255,255,255,0.08)",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Assistant is typing...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: 10,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={
                completed ? "Conversation closed ❌" : "Type your message..."
              }
              disabled={loading || completed}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: "none",
                outline: "none",
                background: completed ? "#333" : "#1a1a1a",
                color: "#fff",
                fontSize: 13,
              }}
            />

            <button
              onClick={sendMessage}
              disabled={loading || completed}
              style={{
                marginLeft: 8,
                padding: "0 14px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg, #1f7a5a, #0f3d2e)",
                color: "#fff",
                fontSize: 14,
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
