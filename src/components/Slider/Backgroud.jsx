import FemaleColl from "../../assets/FemaleCollection.jpg";
import maleColl from "../../assets/MaleCollection.jpg";
import kidMaleColl from "../../assets/boy.png";
import kidFemaleColl from "../../assets/FemaleKidColl.webp";
import offer from "../../assets/banner.png";

const Backgroud = ({ index }) => {
  let banner = [FemaleColl, maleColl, kidFemaleColl, kidMaleColl, offer];

  return (
    <div className="relative w-full h-full mt-1 overflow-hidden">
      {/* Background Image */}
      <img
  src={banner[index]}
  alt="banner"
  className="w-full 
             h-[50%] sm:h-[60%] md:h-[70%] lg:h-[80%] 
             object-cover shadow-lg border-b-4 border-gray-700 rounded-b-xl transition-all duration-700 ease-in-out"
/>


      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {[0, 1, 2, 3, 4].map((dot) => (
          <button
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === dot
                ? "bg-[#46d1f7] scale-110 shadow-md shadow-[#46d1f7]"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Backgroud;
