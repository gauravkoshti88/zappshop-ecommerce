import Logo from '../assets/logo.png'
import Google from '../assets/google.svg'
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useContext, useState } from 'react';
import { dataContext } from '../context/AuthContext';
import axios from 'axios'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';

const Login = () => {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("")
  let { serverUrl } = useContext(dataContext);
  let { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(serverUrl + '/api/login', { email, password }, { withCredentials: true })
      getCurrentUser();
      navigate('/');
      toast.success(`${data.message}`, { position: "top-right", autoClose: 3000, transition: Bounce });
    } catch (error) {
      toast.error('Server Error ⚠️', { position: "top-right", autoClose: 3000, transition: Bounce });
    }
  }

  const googleLogin = async () => {
    try {
      const responce = await signInWithPopup(auth, provider);
      const name = responce.user.displayName;
      const email = responce.user.email;
      await axios.post(serverUrl + "/api/googlelogin", {name, email }, { withCredentials: true });
      getCurrentUser();
      navigate('/');
    } catch (error) {
       toast.error(`${error.response.data.message} ⚠️`, { position: "top-right", autoClose: 3000, transition: Bounce });
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] 
    text-white flex flex-col items-center justify-start">
      
      {/* Logo */}
      <div className="w-full flex items-center gap-2 px-4 py-4 cursor-pointer" onClick={() => navigate('/')}>
        <img className="w-16 md:w-20" src={Logo} alt="logo" />
        <h1 className="text-lg md:text-xl font-bold">ZappShop</h1>
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <span className="text-2xl font-semibold">Login Page</span>
        <p className="text-sm md:text-base text-gray-300">Welcome to ZappShop, Place your order</p>
      </div>

      {/* Form Container */}
      <div className="max-w-md w-[90%] mt-8 bg-[#00000040] border border-gray-600 backdrop-blur-lg 
      rounded-xl shadow-lg p-6">
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          
          {/* Google Login */}
          <div className="w-full flex items-center justify-center gap-3 bg-[#42656cae] rounded-lg py-3 
          cursor-pointer hover:bg-[#2b4d52] transition-colors" onClick={googleLogin}>
            <img className="w-6" src={Google} alt="google-logo" /> 
            <span className="font-semibold">Login with Google</span>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 text-gray-400">
            <div className="flex-1 h-px bg-gray-600"></div>
            OR
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* Email Input */}
          <input 
            type="email" 
            className="w-full h-12 border-2 border-gray-600 rounded-lg bg-transparent px-4 
            placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#46d1f7]" 
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required 
          />

          {/* Password Input */}
          <div className="relative w-full">
            <input 
              type={show ? "text" : "password"} 
              className="w-full h-12 border-2 border-gray-600 rounded-lg bg-transparent px-4 
              placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#46d1f7]" 
              value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required 
            />
            {show 
              ? <IoMdEye className="absolute right-3 top-3 w-6 h-6 cursor-pointer" onClick={() => setShow(prev => !prev)} /> 
              : <IoEyeOutline className="absolute right-3 top-3 w-6 h-6 cursor-pointer" onClick={() => setShow(prev => !prev)} />
            }
          </div>

          {/* Login Button */}
          <button className="w-full h-12 bg-[#6060f5] rounded-lg text-lg font-semibold 
          hover:bg-[#4848d9] transition-colors">Login</button>

          {/* Register Link */}
          <p className="text-sm text-center mt-2">
            Create new account? 
            <span className="text-[#46d1f7] font-semibold cursor-pointer ml-1" onClick={() => navigate('/register')}>
              Register
            </span>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
