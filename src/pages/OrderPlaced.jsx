import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";

export default function OrderPlaced() {
  let navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 px-4 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-full blur-xl"
        />
      </div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 bg-slate-800/90 backdrop-blur-2xl shadow-2xl rounded-3xl py-12 px-8 sm:px-12 lg:px-20 text-center w-full max-w-lg lg:max-w-2xl xl:max-w-3xl border border-slate-700/50"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl backdrop-blur-xl border-4 border-emerald-400/30 shadow-2xl flex items-center justify-center mx-auto">
              <FaCheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-emerald-400 shadow-xl drop-shadow-2xl" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -inset-2 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-3xl blur-xl animate-ping"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 lg:mb-6 drop-shadow-2xl"
        >
          Order Confirmed!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-2 lg:mb-4 leading-tight"
        >
          Thank you for your purchase!
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg sm:text-xl text-slate-300 mb-10 lg:mb-12 max-w-md lg:max-w-lg mx-auto leading-relaxed"
        >
          Your order has been placed successfully. We'll send you a confirmation email with all details shortly.
        </motion.p>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center max-w-md mx-auto"
        >
          {/* View Orders */}
          <motion.button
            onClick={() => navigate("/order")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 sm:flex-none bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-xl text-white px-8 py-4 rounded-2xl border border-slate-600/50 hover:border-slate-500/70 hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-500/30 transition-all duration-400 font-semibold text-base sm:text-lg shadow-lg group"
          >
            <FaShoppingBag className="w-5 h-5 mr-2 inline group-hover:translate-x-1 transition-transform duration-300" />
            View Orders
          </motion.button>

          {/* Continue Shopping */}
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-400 font-bold text-base sm:text-lg border border-emerald-500/50 hover:border-emerald-400/70 group"
          >
            Continue Shopping
            <FaArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
