import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Product = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] 
    flex flex-col items-center justify-start py-10 gap-10">

      {/* Latest Collection */}
      <div className="w-full flex flex-col items-center gap-6">
        <LatestCollection />
      </div>

      {/* Divider */}
      <div className="w-[95%] border-t border-gray-600"></div>

      {/* Best Seller */}
      <div className="w-full flex flex-col items-center gap-6">
        <BestSeller />
      </div>

      {/* Divider */}
      <div className="w-[95%] border-t border-gray-600"></div>
    </div>
  )
}

export default Product
