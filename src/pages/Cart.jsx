import { useContext, useEffect, useState, useCallback } from 'react';
import { RiDeleteBin6Line, RiAddCircleLine, RiSubtractFill } from 'react-icons/ri';
import Title from '../components/Title';
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotel';

const Cart = () => {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  const handleQuantityChange = useCallback((id, size, newQty) => {
    if (newQty >= 0) {
      updateQuantity(id, size, newQty);
    }
  }, [updateQuantity]);

  const incrementQuantity = useCallback((id, size) => {
    handleQuantityChange(id, size, cartData.find(item => item._id === id && item.size === size)?.quantity + 1);
  }, [handleQuantityChange, cartData]);

  const decrementQuantity = useCallback((id, size) => {
    const currentQty = cartData.find(item => item._id === id && item.size === size)?.quantity;
    if (currentQty > 1) {
      handleQuantityChange(id, size, currentQty - 1);
    }
  }, [handleQuantityChange, cartData]);

  const removeItem = useCallback((id, size) => {
    handleQuantityChange(id, size, 0);
  }, [handleQuantityChange]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 pt-20 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Mobile-optimized background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute top-40 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">

        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Title text1="YOUR" text2="CART" />
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed px-2">
            Review your items and proceed to checkout
          </p>
        </div>

        {/* Cart Items - Mobile First */}
        {cartData.length > 0 ? (
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) return null;

              const subtotal = productData.price * item.quantity;

              return (
                <div
                  key={`${item._id}-${item.size}-${index}`}
                  className="group relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-cyan-400/70 hover:bg-slate-700/90 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-400 shadow-lg"
                >
                  {/* Mobile: Vertical Stack | Desktop: Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 items-start lg:items-center gap-4 lg:gap-8">

                    {/* Product Image - Mobile Full Width */}
                    <div className="w-full lg:w-auto lg:col-span-1">
                      <img
                        src={productData.image1?.url}
                        alt={productData.name}
                        className="w-full max-w-[140px] sm:max-w-[160px] lg:w-32 lg:h-32 h-32 mx-auto lg:mx-0 rounded-2xl object-cover shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-400 hover:scale-105"
                      />
                    </div>

                    {/* Product Details - Mobile Full Width */}
                    <div className="lg:col-span-2 flex flex-col gap-3 flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2 lg:line-clamp-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {productData.name}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                          {currency} {productData.price.toLocaleString()}
                        </span>
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm lg:text-base bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-200 rounded-xl border border-slate-600/50 font-semibold whitespace-nowrap">
                          Size: {item.size.toUpperCase()}
                        </span>
                      </div>

                      {/* Subtotal - Mobile Prominent */}
                      <div className="text-lg sm:text-xl font-bold text-emerald-400 bg-emerald-500/10 px-4 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm border border-emerald-400/30 w-fit mt-2">
                        Subtotal: {currency} {subtotal.toLocaleString()}
                      </div>
                    </div>

                    {/* Controls - Mobile Stacked */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:flex-col lg:gap-6 lg:items-center lg:col-span-1 w-full sm:w-auto">

                      {/* Quantity Controls */}
                      <div className="flex items-center w-full sm:w-auto bg-slate-700/60 backdrop-blur-sm rounded-2xl p-2 sm:p-3 border border-slate-600/50 hover:border-cyan-400/70 group/quantity transition-all duration-300 shadow-lg hover:shadow-xl mx-auto sm:mx-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            decrementQuantity(item._id, item.size);
                          }}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-600/60 hover:bg-slate-500/80 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
                        >
                          <RiSubtractFill className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        <span className="w-14 sm:w-16 text-center text-lg sm:text-xl font-bold text-white mx-2 sm:mx-3 min-w-[3.25rem] flex-shrink-0">
                          {item.quantity}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            incrementQuantity(item._id, item.size);
                          }}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-600/60 hover:bg-slate-500/80 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
                        >
                          <RiAddCircleLine className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(item._id, item.size);
                        }}
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-600/30 backdrop-blur-sm border border-red-500/50 hover:border-red-400/70 hover:bg-red-500/50 text-red-300 hover:text-red-200 shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-110 mx-auto sm:mx-0 lg:mx-auto group/delete flex-shrink-0"
                      >
                        <RiDeleteBin6Line className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover/delete:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Cart - Mobile Optimized */
          <div className="text-center px-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-700/50 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5A2 2 0 007.4 22h9.2a2 2 0 001.9-1.5L19 13m-8 0a2 2 0 012 2v2a2 2 0 01-2 2m0 0V13m0 0V9a2 2 0 012-2m-2 2h4a2 2 0 012 2v2a2 2 0 01-2 2m0 0h+2" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 px-2">
              Your Cart is Empty
            </h3>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 px-4 max-w-md mx-auto">
              Add some amazing products to get started
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-400 border border-cyan-400/50 w-full sm:w-auto max-w-xs mx-auto"
            >
              Continue Shopping →
            </button>
          </div>
        )}

        {/* Cart Total & Checkout - Mobile Full Width */}
        {cartData.length > 0 && (
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-0 mb-15">
            <CartTotal />
            <button
              className="w-full mt-8 py-3 sm:py-5 lg:py-5 
             rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 
             hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 
             text-white 
             text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
             font-bold shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 
             transition-all duration-500 hover:scale-[1.02] active:scale-98 
             border-2 border-emerald-500/50 px-3"
              onClick={() => navigate('/placeorder')}
            >
              PROCEED TO CHECKOUT →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;