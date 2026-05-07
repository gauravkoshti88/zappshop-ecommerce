import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const NewLetterBox = () => {
    let [comment, setComment] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        setComment("")
        toast.success('Thank You 🙏', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
        });
    }
    return (
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center 
        bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-5 py-10 gap-6">
            
            <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col items-center gap-4 
            border border-gray-300 shadow-md shadow-black/30 rounded-xl bg-white/5 backdrop-blur-sm p-8">
                
                <p className="text-xl md:text-2xl font-semibold text-[#a5faf7] text-center">
                    Shop now & get 30% off
                </p>
                <p className="text-sm md:text-base text-blue-100 text-center font-medium">
                    Shop now and enjoy exclusive savings, special deals, and early access to new collections.
                </p>
                
                <form onSubmit={handleSubmit} 
                className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                    
                    <input 
                        type="text" 
                        className="w-full md:w-2/3 lg:w-1/2 h-12 px-4 rounded-lg 
                        bg-slate-200 placeholder:text-gray-700 shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-[#0f3460]" 
                        placeholder="Type comment here..." 
                        value={comment} 
                        onChange={(e)=>setComment(e.target.value)} 
                        required 
                    />
                    
                    <button 
                        className="w-full md:w-auto px-6 py-3 rounded-lg 
                        bg-[#0f3460] hover:bg-[#16213e] text-white font-medium 
                        shadow-md shadow-black transition-all duration-300">
                        Comment
                    </button>
                </form>
            </div>
            
            <ToastContainer/>
        </div>
    )
}

export default NewLetterBox
