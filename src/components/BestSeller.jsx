import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import CardProduct from './CardProduct'
import React from 'react'

const BestSeller = () => {
  const { products, currency } = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {

    const filterProduct = products.filter(
      (item) => item.bestseller === true
    )

    setBestSeller(filterProduct.slice(0, 4))
  }, [products])

  return (
    <>
      <div className="w-full h-[8%] text-center">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-full m-auto text-[14px] md:text-[20px] px-2.5 text-blue-100">
          Tried, Tested, Loved — Discover Our All-Time Best Sellers.
        </p>
      </div>

      <div className="w-full h-[50%] mt-7.5 flex items-center justify-center flex-wrap gap-12.5">
        {bestSeller.length === 0 ? (
          <p className="text-blue-200">No best sellers available right now.</p>
        ) : (
          bestSeller.map((item) => (
            <CardProduct
              key={item._id}
              name={item.name}
              id={item._id}
              price={`${currency}${item.price}`}
              image={item.image1.url}
            />
          ))
        )}
      </div>
    </>
  )
}

export default React.memo(BestSeller)
