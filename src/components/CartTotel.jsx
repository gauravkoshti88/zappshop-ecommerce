import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(shopDataContext)

  return (
    <div className="w-full lg:ml-8">
      {/* Heading */}
      <div className="text-xl py-3">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* Totals Box */}
      <div className="flex flex-col gap-3 mt-4 text-sm p-6 border-2 border-[#4d8890] rounded-lg bg-[#142a32] shadow-md">
        
        {/* Subtotal */}
        <div className="flex justify-between text-white text-lg font-medium">
          <p>Sub-total</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className="border-gray-600" />

        {/* Shipping Fee */}
        <div className="flex justify-between text-white text-lg font-medium">
          <p>Shipping Fee</p>
          <p>{currency} {getCartAmount() === 0 ? 0 :delivery_fee}</p>
        </div>
        <hr className="border-gray-600" />

        {/* Total Amount */}
        <div className="flex justify-between text-white text-lg font-bold">
          <p>Total Amount</p>
          <p>
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
