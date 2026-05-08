import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext';
import ReviewStars from '../components/ReviewStars';
import RelatedProduct from '../components/RelatedProduct';

const ProductDetails = () => {
  let { productId } = useParams();
  let { products, currency, addToCart, ToastContainer } = useContext(shopDataContext);
  let [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [size, setSize] = useState("")
  const [review, setReview] = useState(325)

  const handleRating = (value) => {
    setReview(review + value);
  };

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image1?.url)
        setImage1(item.image1?.url)
        setImage2(item.image2?.url)
        setImage3(item.image3?.url)
        setImage4(item.image4?.url)

        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div>
      <div className='lg:w-full w-full h-full md:h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-start flex-col lg:flex-row gap-5 lg:pb-5 pb-110'>
        <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-17.5 flex items-center justify-center md:gap-2.5 gap-7.5 flex-col-reverse lg:flex-row'>
          <div className="lg:w-[20%] md:w-[80%] h-auto lg:h-[80%] 
                flex items-center justify-center gap-4 lg:flex-col flex-wrap">
            {[image1, image2, image3, image4].map((img, idx) => (
              <div key={idx} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                              bg-slate-300 border border-[#80808049] rounded-md">
                <img src={img} alt=""
                  className="w-full h-full cursor-pointer rounded-md object-cover"
                  onClick={() => setImage(img)} />
              </div>
            ))}
          </div>

          <div className="lg:w-[60%] w-[85%] lg:h-[78%] h-[65%] 
                border border-[#80808049] rounded-md overflow-hidden">
            <img src={image} alt={productData.name}
              className="w-full h-full object-cover rounded-md" />
          </div>


        </div>
        <div className='lg:w-[50vw] w-full lg:h-[75vh] h-[40vh] lg:mt-20 flex items-start justify-start flex-col py-5 px-7.5 md:pl-5 lg:pl-0 lg:px-0 lg:py-0 gap-2.5'>
          <h1 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
               font-semibold text-[aliceblue]">
            {productData.name.toUpperCase()}
          </h1>

          <div className='flex items-center gap-1'>
            <ReviewStars totalStars={5} onRatingChange={handleRating} />
            <p className='text-[18px] font-semibold pl-1.25 text-white'>({review})</p>
          </div>
          <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] 
              font-semibold pl-1.25 text-white">
            {currency} {productData.price}
          </p>

          <p className="w-[90%] md:w-[70%] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
              font-medium pl-1.25 text-white leading-relaxed">
            {productData.description}
          </p>

          <div className='flex flex-col gap-2.5 my-2.5'>
            <p className='text-[25px] font-semibold pl-1.25 text-white'>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button key={index} className={`border py-2 px-4 rounded-md ${item === size ? 'bg-[#0bff75] text-[18px]' : "bg-slate-300 "}`} onClick={() => setSize(item)} >{item}</button>
                ))
              }
            </div>
            <button className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-2.5 px-5 rounded-2xl mt-2.5 border border-[#80808049] text-white shadow-md shadow-black active:scale-95' onClick={() => addToCart(productData._id, size)}>Add To Cart</button>
          </div>
          <div className='w-[90%] h-2 bg-slate-500'></div>

          <div className='w-full h-[50vh] lg:h-40 text-[16px] text-white flex flex-col lg:flex-row gap-5 pb-2 lg:pb-10'>
            <div className='lg:w-[30%] w-full h-20 lg:h-20 border flex items-center justify-center px-8 bg-slate-600 rounded-md'>
              <p className='font-semibold text-md'>100% Original Product.</p>
            </div>

            <div className='lg:w-[30%] w-full h-20 lg:h-20 border flex items-center justify-center px-8 bg-slate-600 rounded-md'>
              <p className='font-semibold text-md'>Cash on Delivery is available on this product</p>
            </div>

            <div className='lg:w-[30%] w-full h-20 lg:h-20 border flex items-center justify-center px-8 bg-slate-600 rounded-md'>
              <p className='font-semibold text-md'>East return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[70vh] bg-linear-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden pb-20'>
        <div className='flex px-5 mt-10 lg:ml-20 ml-0 lg:mt-10'>
          <p className='border px-5 py-3 text-sm text-white'>
            Description
          </p>

          <p className='border px-5 py-3 text-sm text-white'>
            Reviews {review}
          </p>
        </div>
        <div className='w-[80%] md-h[150px] h-55 bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-2.5 md:px-7.5 lg:ml-25 ml-5'>
          <p className='w-[95%] h-[90%] flex items-center justify-center'>
            Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on ZappShop. Created from breathable, high-quality fabric, it offers all day comfort and effortiess style. Easy to maintain and perfect for any setting, this shirt is a must-have essential fro those who value both fashion and function.
          </p>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
      </div>
      <ToastContainer />
    </div>
  ) : <div className='opacity-0'></div>
}

export default ProductDetails
