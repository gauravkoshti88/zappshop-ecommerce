import { FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import about from '../assets/about.png';
import NewLetterBox from '../components/NewLetterBox';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 pt-20 pb-20 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/4 -right-24 w-56 h-56 bg-purple-500/5 rounded-full blur-2xl animate-ping" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        
        {/* Hero Section */}
        <div className="text-center mb-24 lg:mb-32">
          <Title text1="ABOUT" text2="ZAPPSHOP" />
          <p className="text-xl sm:text-2xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Born for smart, seamless shopping—ZappShop delivers quality products, trending styles, and everyday essentials with unmatched convenience.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          
          {/* About Image */}
          <div className="relative group">
            <div className="absolute -inset-6 lg:-inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-emerald-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 -z-10" />
            <img
              src={about}
              alt="About ZappShop"
              className="w-full max-w-lg mx-auto lg:max-w-xl rounded-3xl shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-cyan-500/40 transition-all duration-700 group-hover:scale-105 lg:group-hover:scale-110 border-4 border-slate-800/50 hover:border-cyan-400/60 object-cover"
            />
          </div>

          {/* About Text */}
          <div className="space-y-8 lg:space-y-10 text-white">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Story
              </h3>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed lg:leading-loose max-w-lg">
                ZappShop was created to revolutionize online shopping—combining style, convenience, and affordability. We bring everything you need to one trusted platform with fast delivery, easy returns, and exceptional service.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed lg:leading-loose max-w-lg">
                To redefine e-commerce by delivering premium quality, unbeatable value, and a seamless customer experience that saves time and exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-24 lg:mb-32">
          <div className="max-w-4xl mx-auto mb-20">
            <Title text1="WHY" text2="ZAPPSHOP" />
            <p className="text-xl sm:text-2xl text-slate-300 mt-8 max-w-2xl mx-auto leading-relaxed">
              Experience shopping redefined with our commitment to excellence
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Quality Assurance */}
            <div className="group relative p-8 lg:p-10 rounded-3xl bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/70 hover:bg-slate-700/80 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 cursor-pointer hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:shadow-cyan-500/50 transition-all duration-400 group-hover:rotate-6">
                <FaShieldAlt className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Quality First
              </h4>
              <p className="text-slate-300 leading-relaxed text-base lg:text-lg max-w-md mx-auto">
                Rigorous quality checks and trusted sourcing ensure every product meets our premium standards.
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="group relative p-8 lg:p-10 rounded-3xl bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-400/70 hover:bg-slate-700/80 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 cursor-pointer hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:shadow-emerald-500/50 transition-all duration-400 group-hover:rotate-6">
                <FaTruck className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                Lightning Fast
              </h4>
              <p className="text-slate-300 leading-relaxed text-base lg:text-lg max-w-md mx-auto">
                Enjoy swift delivery across India with real-time tracking and hassle-free shipping.
              </p>
            </div>

            {/* Customer Service */}
            <div className="group relative p-8 lg:p-10 rounded-3xl bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 hover:border-purple-400/70 hover:bg-slate-700/80 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:shadow-purple-500/50 transition-all duration-400 group-hover:rotate-6">
                <FaHeadset className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                24/7 Support
              </h4>
              <p className="text-slate-300 leading-relaxed text-base lg:text-lg max-w-md mx-auto">
                Our dedicated support team is always ready to help with quick responses and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800/50 mt-24 pt-16">
        <NewLetterBox />
      </div>
    </div>
  );
};

export default About;