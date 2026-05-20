import React from "react";
import { useNavigate } from "react-router-dom";

const HelpCenter = () => {
    const navigate = useNavigate();
  const faqs = [
    {
      q: "Where is my order?",
      a: "Delivery usually takes 5–7 business days. Track your order in 'My Orders'.",
    },
    {
      q: "How can I return a product?",
      a: "Returns are accepted within 7 days if unused and in original packaging.",
    },
    {
      q: "My payment failed, what should I do?",
      a: "Retry payment or use another method like UPI, Card, or COD.",
    },
    {
      q: "How do I contact support?",
      a: "You can email support@zappshop.com or call +91-9876543210.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16 mb-20">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Help Center & Customer Support
      </h1>
      <p className="text-gray-700 mb-6">
        Welcome to ZappShop Support 👋. We’re here to assist you with your queries.
      </p>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="bg-gray-100 rounded-lg p-4 cursor-pointer"
            >
              <summary className="font-medium text-gray-900">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>📧 Email: <a href="mailto:support@zappshop.com" className="text-blue-600">support@zappshop.com</a></p>
          <p>📞 Phone: <a href="tel:+919876543210" className="text-blue-600">+91-9876543210</a></p>
          <p>💬 Live Chat: Available in the app (bottom-right corner).</p>
        </div>
      </section>

      {/* Interaction Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Quick Help?
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/order")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Track My Order
          </button>
          <button
            onClick={() => navigate("/customerSupport")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Chat with Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
