import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import Title from './Title'

const OurPolicy = () => {
  return (
    <div className="w-full min-h-screen md:min-h-[75%] py-12 flex flex-col items-center 
    bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] gap-12">

      {/* Heading */}
      <div className="text-center">
        <Title text1="OUR" text2="POLICY" />
        <p className="mt-2 text-sm md:text-lg text-blue-100 px-4 max-w-2xl mx-auto">
          Customer-Friendly Policies — Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="w-[90%] flex flex-wrap justify-center gap-10 lg:gap-16">
        
        {/* Easy Exchange */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl 
        bg-[#142a32] shadow-md shadow-black/40 hover:scale-105 transition-transform duration-300 max-w-sm">
          <RiExchangeFundsLine className="w-12 h-12 md:w-16 md:h-16 text-[#46d1f7]" />
          <p className="font-semibold text-lg md:text-2xl text-[#a5e8f7]">Easy Exchange Policy</p>
          <p className="text-sm md:text-base text-gray-200 text-center">
            Exchange Made Easy — Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* 7 Days Return */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl 
        bg-[#142a32] shadow-md shadow-black/40 hover:scale-105 transition-transform duration-300 max-w-sm">
          <TbRosetteDiscountCheckFilled className="w-12 h-12 md:w-16 md:h-16 text-[#46d1f7]" />
          <p className="font-semibold text-lg md:text-2xl text-[#a5e8f7]">7 Days Return Policy</p>
          <p className="text-sm md:text-base text-gray-200 text-center">
            Shop with Confidence — 7 Days Easy Return Guarantee.
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl 
        bg-[#142a32] shadow-md shadow-black/40 hover:scale-105 transition-transform duration-300 max-w-sm">
          <BiSupport className="w-12 h-12 md:w-16 md:h-16 text-[#46d1f7]" />
          <p className="font-semibold text-lg md:text-2xl text-[#a5e8f7]">Best Customer Support</p>
          <p className="text-sm md:text-base text-gray-200 text-center">
            Trusted Customer Support — Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
