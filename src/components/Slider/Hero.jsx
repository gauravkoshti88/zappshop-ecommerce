import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Hero = ({ index, setIndex }) => {
  return (
    <div className="absolute top-1/3 w-full flex justify-between items-center px-4">
      {/* Left Arrow */}
      <FaChevronCircleLeft
        className="text-3xl sm:text-4xl md:text-5xl text-white cursor-pointer 
                   active:scale-90 transition-transform duration-300 
                   drop-shadow-lg hover:text-[#46d1f7] hover:scale-110"
        onClick={() => {
          index < 1 ? setIndex(4) : setIndex(index - 1);
        }}
      />

      {/* Right Arrow */}
      <FaChevronCircleRight
        className="text-3xl sm:text-4xl md:text-5xl text-white cursor-pointer 
                   active:scale-90 transition-transform duration-300 
                   drop-shadow-lg hover:text-[#46d1f7] hover:scale-110"
        onClick={() => {
          index > 3 ? setIndex(0) : setIndex(index + 1);
        }}
      />
    </div>
  );
};

export default Hero;
