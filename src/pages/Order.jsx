import { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { dataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  let [orderData, setOrderData] = useState([]);
  let { serverUrl } = useContext(dataContext);
  let { currency } = useContext(shopDataContext);
  const navigate = useNavigate()

  const loadOrderData = async () => {
    try {
      let result = await axios.post(serverUrl + '/order/userorder', {}, { withCredentials: true })
      console.log(result.data);

      if (result.data) {
        let allOrdersItem = []
        result.data.map(order => {
          order.items.map((item) => {
            item["status"] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [])

  return (
    <div className="w-full min-h-screen p-6 pb-36 overflow-y-auto 
    bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">

      {/* Title */}
      <div className="w-full text-center mt-20">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="w-full mt-10">
        {orderData.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white">No Orders Yet</h2>
            <p className="text-sm md:text-lg text-gray-300">
              You haven’t placed any orders. Start exploring our latest collection!
            </p>
            <button
              className="px-6 py-2 rounded-md bg-[#46d1f7] text-black font-semibold 
        hover:bg-[#2bb3d9] active:scale-95 transition-all duration-300"
              onClick={() => window.location.href = '/'}
            >
              Explore
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {orderData.map((item, index) => (
              <div
                key={index}
                className="w-full border border-gray-700 rounded-xl bg-[#142a32] p-6 flex flex-col gap-4 
          shadow-md shadow-black/40 hover:scale-[1.02] transition-transform duration-300"
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
                      <p>{currency} {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="text-xs md:text-sm text-[#aaf4e7]">
                      Date: <span className="text-[#e4fbff]">{new Date(item.date).toDateString()}</span>
                    </p>
                    <p className="text-xs md:text-sm text-[#aaf4e7]">Payment Method: {item.paymentMethod}</p>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group bg-emerald-500/10 border-emerald-500/30`}>
                  {item.paymentMethod === "Razorpay" ? (
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
                          {currency} {Number(item.price) + 40}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Status + Track */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${item.status === "Delivered" ? "bg-green-500" : "bg-yellow-400"}`}></span>
                    <p className="text-sm md:text-lg text-[#f3f9fc]">{item.status}</p>
                  </div>
                  {item.status == "Delivered" ? <div className="mt-3 sm:mt-0 px-5 py-2 rounded-md bg-[#46d1f7] text-black font-semibold text-sm md:text-base 
              hover:bg-[#2bb3d9] active:scale-95 transition-all duration-300">Order Delivered Successfully ✅</div> : <button
                    className="mt-3 sm:mt-0 px-5 py-2 rounded-md bg-[#46d1f7] text-black font-semibold text-sm md:text-base 
              hover:bg-[#2bb3d9] active:scale-95 transition-all duration-300"
                    onClick={() => navigate("/track-order")}
                  >
                    Track Order
                  </button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


    </div>
  )
}

export default Order
