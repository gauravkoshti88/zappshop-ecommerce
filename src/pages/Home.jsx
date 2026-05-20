import { useEffect, useState } from "react";
import Hero from "../components/Slider/Hero";
import Backgroud from "../components/Slider/Backgroud";
import Product from "./Product";
import OurPolicy from "../components/OurPolicy";
import NewLetterBox from "../components/NewLetterBox";
import Footer from "../components/Footer";

const Home = () => {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(prevCount => (prevCount === 4 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full lg:h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] mt-16 overflow-hidden">
        {/* Background Image below nav */}
        <Backgroud index={index} />

        {/* Arrows overlay inside image */}
        <Hero index={index} setIndex={setIndex} />
      </div>

      {/* Product Section */}
      <section className="w-full px-5 md:px-10 lg:px-10 py-12 bg-[#0f3460]">
        <Product />
      </section>

      {/* Policy Section */}
      <section className="w-full px-5 md:px-10 lg:px-10 py-12 bg-[#16213e]">
        <OurPolicy />
      </section>

      {/* Newsletter Section */}
      <section className="w-full px-5 md:px-10 lg:px-10 py-12 bg-[#1a1a2e]">
        <NewLetterBox />
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#0c2025] text-white px-5 md:px-10 lg:px-0 mb-5 sm:mb-0">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
