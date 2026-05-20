import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";

const TrackOrder = () => {
  const navigate = useNavigate();
  const { orderId } = useParams()
  const [orderData, setOrderData] = useState()
  const [status, setStatus] = useState("Order Placed");
  const { serverUrl } = useContext(dataContext)
  let { currency } = useContext(shopDataContext);

  useEffect(() => {
    const orderStatus = async () => {
      const response = await axios.get(serverUrl + `/order/order-status/${orderId}`, { withCredentials: true })
      setOrderData(response.data)
      setStatus(response.data.status)
    }
    orderStatus();
  }, [orderId])

  const steps = [
    { name: "Order Placed", color: "from-orange-500 to-orange-600", icon: "📋" },
    { name: "Packing", color: "from-yellow-500 to-yellow-600", icon: "📦" },
    { name: "Shipped", color: "from-blue-500 to-blue-600", icon: "🚚" },
    { name: "Out for delivery", color: "from-purple-500 to-purple-600", icon: "📬" },
    { name: "Delivered", color: "from-green-500 to-green-600", icon: "✅" },
  ];

  const currentIndex = steps.findIndex((s) => s.name === status);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-10 py-20 pb-28 overflow-y-auto">

      {/* Header - Mobile Optimized */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
          Track Order
        </h1>
      </div>

      {/* Steps Container */}
      <div className="max-w-2xl sm:max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Mobile: Short line, Desktop: Long line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[22px] sm:left-10 lg:left-12 top-full h-8 sm:h-12 lg:h-16 w-[3px] sm:w-0.5 bg-gradient-to-b from-gray-600/50 to-transparent -z-10"></div>
            )}

            {/* Step Card - Mobile Optimized */}
            <div className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border ${index <= currentIndex
              ? `bg-gradient-to-r ${step.color} shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-white/20`
              : 'bg-gradient-to-r from-gray-800/60 to-gray-700/60 border-gray-600/50 hover:border-blue-500/50'
              }`}>

              {/* Circle - Mobile Optimized Position */}
              <div className={`absolute -left-5 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-white/60 transition-all duration-500 hover:scale-105 ${index <= currentIndex ? 'scale-110 shadow-green-500/50 ring-4 ring-green-400/40 !border-green-400/80' : ''
                }`}>
                {index <= currentIndex ? (
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 drop-shadow-lg">✓</span>
                ) : (
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gray-500 rounded-full border-2 border-gray-300 shadow-sm"></div>
                )}
              </div>

              {/* Content - Mobile Stacked Layout */}
              <div className="flex items-start gap-3 sm:gap-4 sm:pl-14 lg:pl-20 pt-1 sm:pt-0">
                {/* Icon - Smaller on mobile */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5 sm:mt-0 ${index <= currentIndex
                  ? `bg-white/25 backdrop-blur-sm text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-white/40`
                  : 'bg-white/15 text-gray-400 font-bold text-lg sm:text-xl lg:text-2xl'
                  }`}>
                  {step.icon}
                </div>

                {/* Text - Mobile Full Width */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold text-base sm:text-xl lg:text-2xl leading-tight pr-12 sm:pr-0 ${index <= currentIndex ? 'text-white drop-shadow-lg' : 'text-gray-200'
                    }`}>
                    {step.name}
                  </h3>
                  <p className={`text-xs sm:text-sm lg:text-lg mt-1 font-medium leading-relaxed ${index <= currentIndex
                    ? 'text-white/90'
                    : 'text-gray-400'
                    }`}>
                    {index === currentIndex ? 'Currently processing...' :
                      index < currentIndex ? '✓ Completed' : 'Pending'}
                  </p>
                </div>

                {/* Status Badge - Smaller on mobile */}
                <div className={`ml-auto px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap flex-shrink-0 ${index === currentIndex
                  ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-blue-500/40'
                  : index <= currentIndex
                    ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-green-500/40'
                    : 'bg-gray-600/60 text-gray-300 border border-gray-500/60'
                  }`}>
                  {index === currentIndex ? 'Active' :
                    index < currentIndex ? 'Done' : 'Wait'}
                </div>
              </div>

              {/* Glow Effect */}
              {index <= currentIndex && (
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-40 animate-pulse -z-10`}></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Delivered Celebration - Mobile Optimized */}
      {status === "Delivered" && (
        <div className="mt-12 sm:mt-16 lg:mt-24 text-center animate-fadeIn pt-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-3xl sm:text-5xl lg:text-6xl">🎉</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-2xl leading-tight">
            Delivered!
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-200 max-w-sm sm:max-w-lg mx-auto leading-relaxed">
            Package delivered successfully 📦✨
          </p>
        </div>
      )}

      <div className="w-full flex items-center justify-center">
        {orderData?.items?.map((item, idx) => (
          <div
            className="w-full max-w-4xl border border-gray-700 rounded-xl bg-[#142a32] p-6 flex flex-col gap-4 
          shadow-md shadow-black/40 hover:scale-[1.02] transition-transform duration-300 mt-10"
          key={idx}
          >
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex justify-center sm:justify-start">
                <img
                  src={item.image1?.url}
                  alt={item.name}
                  className="w-32 h-32 rounded-md object-cover shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-lg md:text-2xl font-semibold text-[#f3f9fc]">{item.name}</p>
                <div className="flex flex-wrap gap-4 text-sm md:text-lg text-[#aaf4e7]">
                  <p>Price: {currency}{item.price}</p>
                  <p>Delivery Charge: {currency}40 </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="text-xs md:text-sm text-[#aaf4e7]">
                  Date: <span className="text-[#e4fbff]">{new Date(orderData.date).toDateString()}</span>
                </p>
                <p className="text-xs md:text-sm text-[#aaf4e7]">Payment Method: {orderData?.paymentMethod}</p>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group bg-emerald-500/10 border-emerald-500/30`}>
              {orderData?.paymentMethod === "Razorpay" ? (
                <>
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                  <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                    Paid
                  </span>
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md group-hover:rotate-180 transition-transform duration-500">
                    ✓
                  </div>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse [animation-duration:2s]"></div>
                  <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-white drop-shadow-sm">
                    Pay Amount
                  </span>
                  <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm px-3 py-1 rounded-lg border border-amber-500/30 shadow-md">
                    <span className="font-bold text-lg text-amber-100 drop-shadow-lg">
                      {currency} {Number(orderData?.amount)}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Status + Track */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              {orderData?.status == "Delivered" && <div className="mt-3 sm:mt-0 px-5 py-2 rounded-md bg-[#46d1f7] text-black font-semibold text-sm md:text-base 
              hover:bg-[#2bb3d9] active:scale-95 transition-all duration-300">Order Delivered Successfully ✅</div>}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .space-y-6 > * + * { margin-top: 1.5rem; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TrackOrder;