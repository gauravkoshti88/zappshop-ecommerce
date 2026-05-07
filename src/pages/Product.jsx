import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Product = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] 
    flex flex-col items-center justify-start py-10 gap-12">

      {/* Latest Collection */}
      <div className="w-full flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Latest Collection</h2>
        <LatestCollection />
      </div>

      {/* Divider */}
      <div className="w-[95%] border-t border-gray-600"></div>

      {/* Best Seller */}
      <div className="w-full flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Best Seller</h2>
        <BestSeller />
      </div>

      {/* Divider */}
      <div className="w-[95%] border-t border-gray-600"></div>
    </div>
  )
}

export default Product
