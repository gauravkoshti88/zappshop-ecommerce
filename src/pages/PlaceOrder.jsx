import { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotel'
import razorpay from '../assets/razorpay.svg'
import { shopDataContext } from '../context/ShopContext'
import { dataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  let [method, setMethod] = useState("cod")
  let { cartItem, products, getCartAmount, delivery_fee, setCartItem } = useContext(shopDataContext);
  let { serverUrl } = useContext(dataContext)
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,        // amount in paise
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,          // ✅ correct property name
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            serverUrl + "/order/verifyrazorpay",
            response,
            { withCredentials: true }
          );
          if (data) {
            setCartItem({});
            navigate("/orderplaced");
          }
        } catch (error) {
          console.error("Payment verification failed:", error);
        }
      },
      theme: {
        color: "#3399cc",          // optional: customize checkout color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        case "cod":
          const result = await axios.post(serverUrl + "/order/placeorder", orderData, { withCredentials: true })
          if (result.data) {
            setCartItem({});
            navigate("/orderplaced")
          }
          break;

        case "razorpay":
          const response = await axios.post(serverUrl + "/order/razorpay", orderData, { withCredentials: true })
          if (response.data) {
            initPay(response.data)
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 pt-20 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden'>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse hidden lg:block" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s] hidden lg:block" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch'>

          {/* Cart Total & Payment Section */}
          <div className='lg:w-[45%] w-full bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/30 transition-all duration-500 flex flex-col justify-between min-h-[500px]'>
            <div className='flex flex-col items-center gap-6 lg:gap-8'>
              <CartTotal />

              <div className='w-full'>
                <div className='mb-6'>
                  <Title text1={"PAYMENT"} text2={"METHOD"} />
                </div>

                {/* Payment Methods */}
                <div className='space-y-4'>

                  {/* Razorpay */}
                  <button
                    onClick={() => setMethod("razorpay")}
                    className={`w-full h-16 rounded-2xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-400 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 border-2 ${method === "razorpay"
                        ? 'border-blue-400/70 bg-gradient-to-r from-blue-500/20 to-blue-600/20 ring-2 ring-blue-400/50 scale-105'
                        : 'border-slate-600/50 hover:border-blue-400/50 bg-slate-700/50 hover:bg-blue-500/10'
                      } group hover:scale-[1.02] active:scale-95`}
                  >
                    <img src={razorpay} className='w-12 h-10 object-contain bg-white rounded-lg flex-shrink-0 group-hover:brightness-110 transition-all duration-300' alt='Razorpay' />
                    <div className="flex-1 text-left">
                      <span className="text-sm font-medium text-slate-300 block">Pay with Razorpay</span>
                      <span className="text-xs text-slate-500">Secure Credit/Debit Cards, UPI, Wallets</span>
                    </div>
                    {method === "razorpay" && (
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* COD */}
                  <button
                    onClick={() => setMethod("cod")}
                    className={`w-full h-16 rounded-2xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-400 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 border-2 ${method === "cod"
                        ? 'border-emerald-400/70 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 ring-2 ring-emerald-400/50 scale-105'
                        : 'border-slate-600/50 hover:border-emerald-400/50 bg-slate-700/50 hover:bg-emerald-500/10'
                      } group hover:scale-[1.02] active:scale-95`}
                  >
                    <div className="w-12 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/50 transition-all duration-300">
                      <span className="text-white font-bold text-sm">COD</span>
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-sm font-medium text-slate-300 block">Cash on Delivery</span>
                      <span className="text-xs text-slate-500">Pay when you receive your order</span>
                    </div>
                    {method === "cod" && (
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='lg:w-[55%] w-full bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl hover:shadow-3xl hover:shadow-cyan-500/30 transition-all duration-500 mb-10'>
            <div className='mb-8'>
              <Title text1={"DELIVERY"} text2={"INFORMATION"} />
            </div>

            <form className='space-y-4 lg:space-y-5 w-full' onSubmit={onSubmitHandler}>

              {/* Name Row */}
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <input
                  type="text"
                  placeholder='First name *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='firstName'
                  value={formData.firstName}
                />
                <input
                  type="text"
                  placeholder='Last name *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='lastName'
                  value={formData.lastName}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder='Email address *'
                className='w-full h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                required
                onChange={onChangeHandler}
                name='email'
                value={formData.email}
              />

              {/* Street */}
              <input
                type="text"
                placeholder='Street address *'
                className='w-full h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                required
                onChange={onChangeHandler}
                name='street'
                value={formData.street}
              />

              {/* City & State */}
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <input
                  type="text"
                  placeholder='City *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='city'
                  value={formData.city}
                />
                <input
                  type="text"
                  placeholder='State *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='state'
                  value={formData.state}
                />
              </div>

              {/* Pincode & Country */}
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <input
                  type="text"
                  placeholder='Pincode *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='pinCode'
                  value={formData.pinCode}
                />
                <input
                  type="text"
                  placeholder='Country *'
                  className='flex-1 h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                  required
                  onChange={onChangeHandler}
                  name='country'
                  value={formData.country}
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                placeholder='Phone *'
                className='w-full h-14 rounded-2xl bg-slate-700/80 backdrop-blur-sm placeholder-slate-400 text-white text-base sm:text-lg px-5 py-3 shadow-inner border border-slate-600/50 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 hover:border-slate-500/70'
                required
                onChange={onChangeHandler}
                name='phone'
                value={formData.phone}
              />

              {/* Place Order Button */}
              <button
                type='submit'
                className='w-full lg:w-auto px-8 py-4 mt-6 lg:mt-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 text-white text-lg lg:text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 transition-all duration-400 hover:scale-[1.02] active:scale-98 border-2 border-emerald-500/50 flex items-center justify-center gap-3 group'
              >
                <span>{method == "cod" ? "PLACE ORDER" : "PAY & PLACE"}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder