import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [help, setHelp] = useState(false);
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getBotResponse(input),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! 👋";
    if (lower.includes("help")) return "Sure! I'm here to help.";
    return "Sorry, I didn't understand that.";
  };

  useEffect(() => {
    const handleScroll = () => {
      try {
        const scrollBottom =
          scrollElement.scrollHeight -
          scrollElement.scrollTop -
          scrollElement.clientHeight;
        const chatbot = document.getElementById("chatbot");
        if (scrollBottom <= 285) {
          if (chatbot) {
            chatbot.style.position = "absolute";
            chatbot.style.bottom = "0px";
            chatbot.style.right = "50px";
          }
        } else {
          if (chatbot) {
            chatbot.style.position = "fixed";
            chatbot.style.bottom = "40px";
            chatbot.style.right = "60px";
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    const scrollElement = document.getElementById("layout");
    if (!scrollElement) {
      return;
    }

    scrollElement.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div id="chatbot" className="fixed flex flex-col bottom-10 right-15 z-20">
      <div
        className={`flex flex-col items-center ${help ? "hidden" : ""}`}
        onClick={() => setHelp(true)}
      >
        <img
          className="w-15 h-15 rounded-lg"
          src="/Chatbot.jpg"
          alt="chatbot logo"
        />
        <p className="text-2xl font-bold">Need Help?</p>
      </div>
      <div className={`h-100 relative ${help ? "" : "hidden"}`}>
        <header className="bg-yellow-800 text-white text-center py-2 text-xl font-semibold rounded-t-lg">
          ChatBot Assistant
        </header>
        <div
          className="absolute top-2 right-2 text-white hover:text-black"
          onClick={() => setHelp(false)}
        >
          <X size={25} />
        </div>

        <div className="flex-1 overflow-auto p-2 space-y-4 bg-white h-70 w-auto overflow-y-scroll">
          {messages.map((msg, idx) => (
            <div key={idx} className="relative py-7">
              <div
                className={`absolute min-w-[10%] max-w-[70%] rounded-lg px-4 py-2 ${
                  msg.sender === "user"
                    ? "bg-yellow-500 text-white right-0"
                    : "bg-gray-300 text-black left-0"
                }`}
              >
                {msg.text}
              </div>
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
            className="bg-yellow-700 text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
        <div className="w-full h-2 bg-yellow-700 rounded-b-full"></div>
      </div>
    </div>
  );
};

export default Chatbot;
