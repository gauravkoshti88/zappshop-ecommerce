import { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import CardProduct from './CardProduct'

const RelatedProduct = ({ category, subCategory, currentProductId }) => {
  let { products } = useContext(shopDataContext);
  let [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
      productsCopy = productsCopy.filter((item) => currentProductId !== item._id)
      setRelated(productsCopy.slice(0, 12)) // ab 12 tak allow kar diya
    }
  }, [products, category, subCategory, currentProductId])

  return (
    <div className="my-10 md:my-10 px-6 md:px-12">
      <div className="mb-6">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {/* Responsive Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <CardProduct
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1.url}
            />
          ))
        ) : (
          <p className="text-blue-200 text-center col-span-full">
            No related products found.
          </p>
        )}
      </div>
    </div>
  )
}

export default RelatedProduct
