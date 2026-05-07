import { useContext } from 'react';
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CardProduct = ({ name, image, id, price }) => {
  let { currency } = useContext(shopDataContext);
  let navigate = useNavigate();

  return (
    <div className='w-75 max-w-[90%] h-100 bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%] flex flex-col overflow-hidden cursor-pointer border border-[#80808049] group transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/50' onClick={() => navigate(`/productdetail/${id}`)}>
      <img src={image} alt="" className='w-full h-[70%] rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-400' />
      
      {/* Content - Bottom 30% */}
      <div className="p-4 flex flex-col flex-1 justify-end">
        {/* Name */}
        <h3 className="text-cyan-200 text-base font-semibold leading-tight line-clamp-2 mb-2 group-hover:text-cyan-100 transition-colors duration-200">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
            <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
            <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
            <FaStar className="w-4 h-4 text-yellow-300" />
            <FaStar className="w-4 h-4 text-yellow-300" />
          </div>
          <span className="text-sm text-slate-400 font-medium">(4.6)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
            {currency} {price?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;