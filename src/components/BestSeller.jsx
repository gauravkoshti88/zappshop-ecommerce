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

    const shuffled = filterProduct.sort(() => 0.5 - Math.random());

    setBestSeller(shuffled.slice(0, 10))
  }, [products])

  return (
    <>
      <div className="w-full text-center">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-full m-auto 
                text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] 
                px-2.5 text-blue-100 max-w-[800px]">
          Tried, Tested, Loved — Discover Our All-Time Best Sellers.
        </p>
      </div>

      <div className="w-full mt-7.5 grid 
                grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
                gap-6">
        {bestSeller.length === 0 ? (
          <p className="text-blue-200">No best sellers available right now.</p>
        ) : (
          bestSeller.map((item) => (
            <CardProduct
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image1.url}
            />
          ))
        )}
      </div>
    </>
  )
}

export default React.memo(BestSeller)
