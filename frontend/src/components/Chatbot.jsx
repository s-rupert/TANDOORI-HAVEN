import React, { forwardRef,useState } from 'react';

const Chatbot = forwardRef((props, ref) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getBotResponse(input)
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! 👋";
    if (lower.includes("help")) return "Sure! I'm here to help.";
    return "Sorry, I didn't understand that.";
  };

  return (
    <div className="absolute flex flex-col">
        <div ref={ref} className="fixed right-10 bottom-[40px] z-20 flex flex-col items-center">
            <img className="w-15 h-15 rounded-lg" src="/Chatbot.jpg" alt="chatbot logo" />
            <p className="text-2xl font-bold">Need Help?</p>
        </div>
      <div ref={ref} className="hidden">
        <header className="bg-blue-600 text-white text-center py-4 text-xl font-semibold">
        ChatBot Assistant
      </header>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
      </div>
    </div>
  );
})

export default Chatbot;
