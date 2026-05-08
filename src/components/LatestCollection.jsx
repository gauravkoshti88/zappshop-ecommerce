import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import CardProduct from './CardProduct';

const LatestCollection = () => {
  let { products } = useContext(shopDataContext);
  let [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setLatestProduct(shuffled.slice(0, 14));
    }
  }, [products])

  return (
    <>
      <div className="w-full text-center">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-full m-auto 
                text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] 
                px-2.5 text-blue-100 max-w-[800px]">
          Step Into Style - New Collection Dropping This Season!
        </p>
      </div>

      <div className="w-full mt-7.5 grid 
                grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
                gap-6">
        {latestProduct.map((item, idx) => (
          <CardProduct
            key={idx}
            name={item.name}
            image={item.image1.url}
            price={item.price}
            id={item._id}
          />
        ))}
      </div>

    </>
  )
}

export default LatestCollection
