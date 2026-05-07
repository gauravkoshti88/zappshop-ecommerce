import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import contact from '../assets/contact.png';
import NewLetterBox from '../components/NewLetterBox';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 pt-20 pb-16 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 -left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-ping" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-24">
        
        {/* Hero Title */}
        <div className="text-center mb-20 lg:mb-28">
          <Title text1="GET IN" text2="TOUCH" />
          <p className="text-xl sm:text-2xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
          
          {/* Contact Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 -z-10" />
            <img 
              src={contact} 
              alt="Contact Us" 
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-3xl shadow-2xl shadow-black/40 hover:shadow-3xl hover:shadow-cyan-500/30 transition-all duration-500 group-hover:scale-105 lg:hover:scale-110 object-cover border-4 border-slate-800/50 hover:border-cyan-400/50" 
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:space-y-10">
            
            {/* Store Location */}
            <div className="group relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/60 hover:bg-slate-700/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Visit Our Store</h3>
                  <p className="text-slate-300 leading-relaxed">67890 Random Station, Random City, State, India</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-400/60 hover:bg-slate-700/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                    <FaPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-cyan-300 hover:text-cyan-200 font-medium text-base transition-colors duration-200 block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 hover:border-purple-400/60 hover:bg-slate-700/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                    <FaEnvelope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                    <a href="mailto:admin@zappshop.com" className="text-cyan-300 hover:text-cyan-200 font-medium text-base transition-colors duration-200 block">
                      admin@zappshop.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours & Careers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="group relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 hover:border-orange-400/60 hover:bg-slate-700/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                    <FaClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Working Hours</h4>
                    <p className="text-slate-300">Mon-Sat: 9AM - 9PM</p>
                    <p className="text-slate-300">Sunday: 10AM - 7PM</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-emerald-600/90 to-teal-600/90 backdrop-blur-xl border border-emerald-400/50 hover:border-emerald-300/70 hover:shadow-emerald-500/30 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl -z-10" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                    <FaBriefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Join Our Team</h4>
                    <p className="text-emerald-100 mb-4">Discover exciting career opportunities at ZappShop</p>
                    <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                      Explore Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-24 border-t border-slate-800/50">
        <NewLetterBox />
      </div>
    </div>
  );
};

export default Contact;