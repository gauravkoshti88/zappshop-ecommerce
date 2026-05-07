import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl text-white border-t border-white/10 shadow-2xl">
      
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo + About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300">
              <img src={Logo} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-2xl group-hover:drop-shadow-3xl" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                ZappShop
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed opacity-90 max-w-md">
              Your trusted online shopping destination. Quality products, unbeatable deals, lightning-fast delivery.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li className="text-sm lg:text-base text-slate-300 hover:text-[#2c7b89] hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium group">
                <span className="block group-hover:bg-gradient-to-r group-hover:from-[#2c7b89] group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">Home</span>
              </li>
              <li className="text-sm lg:text-base text-slate-300 hover:text-[#2c7b89] hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium group">
                <span className="block group-hover:bg-gradient-to-r group-hover:from-[#2c7b89] group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">About</span>
              </li>
              <li className="hidden md:block text-sm lg:text-base text-slate-300 hover:text-[#2c7b89] hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium group">
                <span className="block group-hover:bg-gradient-to-r group-hover:from-[#2c7b89] group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">Delivery</span>
              </li>
              <li className="text-sm lg:text-base text-slate-300 hover:text-[#2c7b89] hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium group">
                <span className="block group-hover:bg-gradient-to-r group-hover:from-[#2c7b89] group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent drop-shadow-lg">
              CONTACT
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm lg:text-base text-slate-300 group cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-300">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm lg:text-base text-slate-300 group cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-300">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.396.397.916.596 1.44.596.524 0 1.044-.2 1.44-.596L21 8M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
                </svg>
                <span>contact@zappshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8 lg:my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-center lg:text-left text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} ZappShop. All Rights Reserved.</p>
          <div className="flex items-center gap-6 lg:gap-8">
            <span className="hover:text-[#2c7b89] hover:scale-110 transition-all duration-300 cursor-pointer font-medium">Terms</span>
            <span className="hover:text-[#2c7b89] hover:scale-110 transition-all duration-300 cursor-pointer font-medium">Privacy</span>
            <span className="hover:text-[#2c7b89] hover:scale-110 transition-all duration-300 cursor-pointer font-medium">Support</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer