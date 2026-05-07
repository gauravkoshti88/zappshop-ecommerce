import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import CardProduct from './CardProduct';

const LatestCollection = () => {
    let {products} = useContext(shopDataContext);
    let [latestProduct, setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,8));
    },[products])

  return (
    <>
      <div className='h-[8%] w-full text-center'>
        <Title text1="LATEST" text2="COLLECTIONS"/>
        <p className='w-full m-auto text-[14px] md:text-[20px] px-2.5 text-blue-100'>Step Into Style - New Collection Dropping This Season!</p>
      </div>

      <div className='w-full h-[50%] mt-7.5 flex items-center justify-center flex-wrap gap-12.5'>
        {
            latestProduct.map((item,idx)=>(
                <CardProduct key={idx} name={item.name} image={item.image1} price={item.price} id={item._id} />
            ))
        }
      </div>
    </>
  )
}

export default LatestCollection
