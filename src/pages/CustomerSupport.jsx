import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { dataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SupportChat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const { serverUrl } = useContext(dataContext);
  const chatEndRef = useRef(null);
  const navigate = useNavigate()

  const questions = [
    "Where is my order?",
    "What is the delivery time?",
    "How can I return a product?",
    "My payment failed, what should I do?",
    "How do I contact support?"
  ];

  // Extract order details from AI response
  const extractOrderDetails = (text) => {
    const orderIdMatch = text.match(/\* \*\*Order ID:\*\* ([a-f0-9]+)/);
    const orderDateMatch = text.match(/\* \*\*Order Date:\*\* (.+)/);
    const statusMatch = text.match(/\* \*\*Status:\*\* (\w+)/);

    if (orderIdMatch && statusMatch) {
      return {
        orderId: orderIdMatch[1],
        orderDate: orderDateMatch ? orderDateMatch[1].replace(/\*$/, "") : "N/A",
        status: statusMatch[1]
      };
    }
    return null;
  };

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Init chat on mount
  useEffect(() => {
    const initChat = async () => {
      try {
        const res = await axios.post(
          serverUrl + "/user/customer-support",
          { question: "Welcome" },
          { withCredentials: true }
        );
        setMessages([{ role: "ai", text: res.data.reply, raw: res.data.reply }]);
        setShowButtons(true);
      } catch (err) {
        navigate("/help-center")
      }
    };
    initChat();
  }, [userId, serverUrl]);

  const sendQuestion = async (q) => {
    if (!q.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setQuestion("");

    try {
      const res = await axios.post(
        serverUrl + "/user/customer-support",
        { userId, question: q },
        { withCredentials: true }
      );
      const reply = res.data.reply;
      const orderDetails = extractOrderDetails(reply);
      
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: reply, order: orderDetails, raw: reply }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
          raw: "Sorry, something went wrong. Please try again."
        }
      ]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 mb-8 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 p-4 rounded-t-xl -mx-4 -mt-4 mb-4">
        <h2 className="text-xl font-bold text-white text-center">
          ZappShop Support
        </h2>
      </div>

      {/* Chat Box */}
      <div className="h-80 overflow-y-auto flex flex-col gap-3 p-3 bg-gray-50 rounded-lg mb-4">
        {messages.map((msg, idx) => (
          <div key={idx}>
            {/* Text Message */}
            <div
              className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
                msg.role === "user"
                  ? "self-end bg-blue-500 text-white rounded-tr-none"
                  : "self-start bg-gray-200 text-gray-800 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>

            {/* Order Details Card (if available) */}
            {msg.order && (
              <div className="mt-2 p-4 bg-white border border-blue-200 rounded-lg shadow-sm max-w-[80%]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Order Details</span>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      msg.order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : msg.order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {msg.order.status}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Order ID:</span>{" "}
                    <span className="font-mono text-xs">{msg.order.orderId}</span>
                  </p>
                  <p>
                    <span className="font-medium">Order Date:</span>{" "}
                    {msg.order.orderDate}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Quick Question Buttons */}
      {showButtons && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Quick Questions:
          </h4>
          <div className="flex flex-wrap gap-2">
            {questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendQuestion(q)}
                className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChat;