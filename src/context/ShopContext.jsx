import { createContext, useContext, useEffect, useState } from 'react'
import { dataContext } from './AuthContext';
import axios from 'axios';
import { userDataContext } from './UserContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export const shopDataContext = createContext();

const ShopContext = ({ children }) => {
  let { serverUrl } = useContext(dataContext);
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("")
  let [showSearch, setShowSearch] = useState(false)
  let [cartItem, setCartItem] = useState({})
  let currency = '₹';
  let delivery_fee = 40;
  let { userData } = useContext(userDataContext);

  const getProduct = async () => {
    try {
      let result = await axios.get(serverUrl + '/product/listproduct');
      setProducts(result.data);
    } catch (error) {
      console.log("Get Product Error", error);
    }
  }

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.success('Select Size ⚠️', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
    toast.success('Add To Cart ✅', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    if (userData) {
      try {
        let result = await axios.post(serverUrl + "/cart/addtocart", { itemId, size }, { withCredentials: true })
      } catch (error) {
        console.log(error);
      }
    }
  }

  const getUserCart = async () => {
    try {
      const result = await axios.post(serverUrl + "/cart/getusercart", {}, { withCredentials: true })

      setCartItem(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity
    setCartItem(cartData)

    if (userData) {
      try {
        await axios.post(serverUrl + "/cart/updatecart", { itemId, size, quantity }, { withCredentials: true })
      } catch (error) {
        console.log(error);
      }
    }
  }

  const getCartCount = () => {
    let totelCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totelCount += cartItem[items][item]
          }
        } catch (error) {
          console.log("Get Card Count Error :", error);
        }
      }
    }
    return totelCount
  }

  const getCartAmount = () => {
    let totelAmount = 0;
    for (const items in cartItem) {
      // find product info
      const itemInfo = products.find((product) => product._id === items);

      // agar product nahi mila to skip karo
      if (!itemInfo) continue;

      for (const size in cartItem[items]) {
        const quantity = cartItem[items][size] || 0;
        if (quantity > 0) {
          totelAmount += (itemInfo.price || 0) * quantity;
        }
      }
    }
    return totelAmount;
  };


  useEffect(() => {
    getProduct()
  }, [])

  useEffect(() => {
    if (userData) {
      getUserCart()
    }
  }, [userData])

  let value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    setCartItem,
    updateQuantity,
    getCartAmount,
    ToastContainer,
  }
  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext
