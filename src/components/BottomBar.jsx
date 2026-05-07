import React, { useContext } from 'react'
import { IoHome } from "react-icons/io5";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext';

function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useContext(shopDataContext);

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full h-22.5 flex items-center justify-between px-5 text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden shadow-lg z-100">
      
      {/* Home */}
      <button 
        aria-label="Home"
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-transform duration-200 ${isActive("/") ? "text-[#46d1f7]" : "text-white"} hover:scale-110`} 
        onClick={() => navigate("/")}
      >
        <IoHome className="w-7 h-7" /> Home
      </button>

      {/* Collections */}
      <button 
        aria-label="Collections"
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-transform duration-200 ${isActive("/collections") ? "text-[#46d1f7]" : "text-white"} hover:scale-110`} 
        onClick={() => navigate("/collections")}
      >
        <HiOutlineCollection className="w-7 h-7" /> Collections
      </button>

      {/* Contact */}
      <button 
        aria-label="Contact"
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-transform duration-200 ${isActive("/contact") ? "text-[#46d1f7]" : "text-white"} hover:scale-110`} 
        onClick={() => navigate("/contact")}
      >
        <MdContacts className="w-7 h-7" /> Contact
      </button>

      {/* Cart */}
      <div className="relative">
        <button 
          aria-label="Cart"
          className={`flex flex-col items-center gap-0.5 cursor-pointer transition-transform duration-200 ${isActive("/cart") ? "text-[#46d1f7]" : "text-white"} hover:scale-110`} 
          onClick={() => navigate("/cart")}
        >
          <IoCartOutline className="w-7 h-7" /> Cart
        </button>
        {/* Cart Badge */}
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-[#46d1f7] text-black font-bold rounded-full text-[12px]">
            {getCartCount()}
          </span>
        )}
      </div>
    </div>
  )
}

export default BottomBar
