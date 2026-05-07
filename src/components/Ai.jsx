import { useContext, useState } from 'react';
import Aiavtar from '../assets/ai.png'
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

import open from '../assets/open.mp3'

const Ai = () => {
    let { showSearch, setShowSearch } = useContext(shopDataContext);
    let navigate = useNavigate();
    let openSound = new Audio(open);
    let [activeAi, setActiveAi] = useState(false);

    function speak(message) {
        let utterence = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterence)
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recoginition = new SpeechRecognition();

    recoginition.onresult = (e) => {
        const transcript = e.results[0][0].transcript.trim();
        if (transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("open") && !showSearch) {
            speak("opening search")
            setShowSearch(true)
            navigate("/collections")
        } else if (transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("close") && showSearch) {
            speak("closing search")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("collection") || transcript.toLowerCase().includes("collections") || transcript.toLowerCase().includes("product") || transcript.toLowerCase().includes("products")) {
            speak("opening collection page")
            navigate("/collections")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("about") || transcript.toLowerCase().includes("aboutpage")) {
            speak("opening about page")
            navigate("/about")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("contact") || transcript.toLowerCase().includes("contactpage")) {
            speak("opening contact page")
            navigate("/contact")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("home") || transcript.toLowerCase().includes("homepage")) {
            speak("opening home page")
            navigate("/")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("cart") || transcript.toLowerCase().includes("cartpage") || transcript.toLowerCase().includes("kaat")) {
            speak("opening your cart")
            navigate("/cart")
            setShowSearch(false)
        } else if (transcript.toLowerCase().includes("order") || transcript.toLowerCase().includes("myorders") || transcript.toLowerCase().includes("order") || transcript.toLowerCase().includes("my order")) {
            speak("opening your orders")
            navigate("/order")
            setShowSearch(false)
        } else {
            speak("sorry please try again")
            setShowSearch(false)
        }

    }

    recoginition.onend = () => {
        setActiveAi(false)
    }

    return (
        <div 
  className={`fixed lg:bottom-10 md:bottom-10 bottom-20 left-[2%] 
              flex items-center justify-center 
              lg:border-4 border-gray-500 lg:p-2 lg:rounded-full 
             lg:bg-slate-800 cursor-pointer 
              transition-all duration-300 
              ${activeAi ? "lg:shadow-[0_0_25px_#00d2fc] scale-110 animate-pulse" : "shadow-md hover:shadow-[0_0_15px_#00d2fc] hover:scale-105"}`}
  onClick={() => { recoginition.start(); openSound.play(); setActiveAi(true) }}
>
  <img 
    src={Aiavtar} 
    alt="AI Assistant" 
    className={`w-20 transition-transform duration-300 
                ${activeAi ? " scale-115" : "translate-x-0 translate-y-0 scale-100"}`} 
    style={{ filter: activeAi ? "drop-shadow(0px 0px 30px #00d2fc)" : "drop-shadow(0px 0px 20px black)" }} 
  />
</div>

    )
}

export default Ai
