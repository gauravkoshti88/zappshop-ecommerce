import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png'
import { IoSearchCircleOutline, IoSearchCircle, IoHome, IoCartOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import axios from "axios";
import { userDataContext } from "../context/UserContext";
import { dataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";
import BottomBar from './BottomBar'
import ProfileImg from '../assets/profile.png'

const Navbar = () => {
    let { serverUrl } = useContext(dataContext);
    let { userData, getCurrentUser } = useContext(userDataContext);
    let { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext);
    let [showProfile, setShowProfile] = useState(false);
    let navigate = useNavigate();

    const profileRef = useRef(null);

    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + '/api/logout', { withCredentials: true });
            console.log(result.data);
            getCurrentUser();
            navigate("login");
        } catch (error) {
            console.log("Logout Error", error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <div className="w-full h-16 bg-gradient-to-r from-cyan-50/90 to-blue-50/90 backdrop-blur-xl text-gray-900 fixed top-0 left-0 z-50 shadow-lg shadow-black/10 border-b border-white/20">
                <div className="h-full px-3 sm:px-5 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer group"
                        onClick={() => { navigate("/"); setShowProfile(false); setShowSearch(false) }}>
                        <img className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200" src={Logo} alt="ZappShop" />
                        <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">ZappShop</h2>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center justify-center flex-1 mx-4 gap-2">
                        <ul className="flex items-center gap-2">
                            <li><Link to="/" className="px-3 py-2 text-sm font-semibold text-gray-800 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 hover:border-cyan-200/50 flex items-center gap-1.5"><IoHome className="w-4 h-4 text-cyan-600"/>HOME</Link></li>
                            <li><Link to="/collections" className="px-3 py-2 text-sm font-semibold text-gray-800 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 hover:border-cyan-200/50 flex items-center gap-1.5"><HiOutlineCollection className="w-4 h-4 text-cyan-600"/>COLLECTIONS</Link></li>
                            <li><Link to="/about" className="px-3 py-2 text-sm font-semibold text-gray-800 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 hover:border-cyan-200/50">ABOUT</Link></li>
                            <li><Link to="/contact" className="px-3 py-2 text-sm font-semibold text-gray-800 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 hover:border-cyan-200/50 flex items-center gap-1.5"><MdContacts className="w-4 h-4 text-cyan-600"/>CONTACT</Link></li>
                        </ul>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2">
                        {/* Search */}
                        <button 
                            className="p-2 rounded-xl bg-white/70 hover:bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 border border-white/40 hover:border-cyan-200/50 group"
                            onClick={() => { setShowSearch(prev => !prev); navigate("/collections"); setShowProfile(false) }}
                        >
                            {!showSearch ? <IoSearchCircleOutline className="w-6 h-6 text-gray-700 group-hover:text-cyan-600" /> : <IoSearchCircle className="w-6 h-6 text-cyan-500" />}
                        </button>

                        {/* Profile */}
                        <div className="relative">
                            <button 
                                className="p-2 rounded-full bg-white/70 hover:bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/40 hover:border-blue-300/60 group"
                                onClick={() => { setShowProfile(prev => !prev); setShowSearch(false) }}
                            >
                                {!userData ? (
                                    <FaUserCircle className="w-7 h-7 text-gray-700 group-hover:text-blue-600" />
                                ) : (
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg ring-2 ring-white/50">
                                        {userData?.name?.slice(0, 1)?.toUpperCase() || 'U'}
                                    </div>
                                )}
                            </button>
                        </div>

                        {/* Cart - Desktop Only */}
                        <div className="relative hidden md:block">
                            <button 
                                className="p-2 rounded-xl bg-white/70 hover:bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 border border-white/40 hover:border-emerald-200/50 group"
                                onClick={() => { navigate("/cart"); setShowSearch(false); setShowProfile(false) }}
                            >
                                <IoCartOutline className="w-6 h-6 text-gray-700 group-hover:text-emerald-600" />
                            </button>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
                                {getCartCount() || 0}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            {showSearch && (
                <div className="absolute w-full h-16 bg-gradient-to-r from-cyan-500/95 to-blue-500/95 backdrop-blur-xl top-16 z-40 shadow-2xl border-b border-white/20 px-4 py-2">
                    <input 
                        type="text" 
                        className="w-full h-12 px-12 rounded-3xl bg-white/90 backdrop-blur-sm text-base font-medium text-gray-900 placeholder-gray-500 shadow-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/50 focus:border-transparent transition-all duration-200 border border-white/30"
                        placeholder="Search products..." 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search}
                        autoFocus
                    />
                </div>
            )}

            {/* Profile Dropdown */}
            {showProfile && (
                <div
                    ref={profileRef}
                    className="absolute w-64 sm:w-72 bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-xl top-16 right-3 border border-white/10 rounded-2xl z-50 shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                    {/* Profile Header */}
                    <div className="p-4 border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <img
                                src={userData?.profileImage || ProfileImg}
                                alt="Profile"
                                className="w-12 h-12 rounded-2xl object-cover border-3 border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            />
                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-bold text-white truncate">{userData?.name || "User"}</h3>
                                <p className="text-xs text-slate-400 truncate">{userData?.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <ul className="p-3 space-y-2">
                        <li className="group">
                            <button
                                className="w-full bg-gradient-to-r from-slate-700/40 to-slate-800/40 px-3 py-2.5 rounded-xl cursor-pointer hover:from-slate-600/60 hover:to-slate-700/60 hover:shadow-lg hover:scale-[1.01] active:scale-98 border border-slate-600/30 transition-all duration-200 text-sm flex items-center gap-2.5"
                                onClick={() => { navigate("/order"); setShowProfile(false); }}
                            >
                                <svg className="w-4 h-4 text-slate-300 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5A2 2 0 007.4 22h9.2a2 2 0 001.9-1.5L19 13m-8 0a2 2 0 012 2v2a2 2 0 01-2 2m0 0V13m0 0V9a2 2 0 012-2m-2 2h4a2 2 0 012 2v2a2 2 0 01-2 2m0 0h+2" />
                                </svg>
                                <span className="font-medium text-slate-200 group-hover:text-white">Orders</span>
                            </button>
                        </li>

                        <li className="group">
                            <button
                                className="w-full bg-gradient-to-r from-slate-700/40 to-slate-800/40 px-3 py-2.5 rounded-xl cursor-pointer hover:from-slate-600/60 hover:to-slate-700/60 hover:shadow-lg hover:scale-[1.01] active:scale-98 border border-slate-600/30 transition-all duration-200 text-sm flex items-center gap-2.5"
                                onClick={() => { navigate("/about"); setShowProfile(false); }}
                            >
                                <svg className="w-4 h-4 text-slate-300 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium text-slate-200 group-hover:text-white">About</span>
                            </button>
                        </li>

                        {/* Login/Logout */}
                        {!userData ? (
                            <li>
                                <button
                                    className="w-full bg-gradient-to-r from-emerald-500/90 to-emerald-600/90 px-3 py-2.5 rounded-xl cursor-pointer hover:from-emerald-600/95 hover:to-emerald-700/95 hover:shadow-emerald-400/40 hover:shadow-xl hover:scale-[1.01] active:scale-98 border border-emerald-400/50 transition-all duration-200 shadow-lg text-emerald-900 font-semibold text-sm flex items-center gap-2.5"
                                    onClick={() => { navigate('/login'); setShowProfile(false) }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Login</span>
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button
                                    className="w-full bg-gradient-to-r from-red-500/90 to-red-600/90 px-3 py-2.5 rounded-xl cursor-pointer hover:from-red-600/95 hover:to-red-700/95 hover:shadow-red-400/40 hover:shadow-xl hover:scale-[1.01] active:scale-98 border border-red-400/50 transition-all duration-200 shadow-lg text-white font-semibold text-sm flex items-center gap-2.5"
                                    onClick={() => { handleLogout(); setShowProfile(false) }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            
            <BottomBar />
        </>
    );
};

export default React.memo(Navbar);