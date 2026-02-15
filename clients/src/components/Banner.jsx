import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Imagetwo from "../assets/images/winter.png";
import Imagefour from "../assets/images/imagefour.png";
import Imagethree from "../assets/images/imagethree.png";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: Imagethree,
      tag: "Spring/Summer 26",
      title: "Discover Your Signature Style",
      italicWord: "Signature",
      subtitle: "From timeless classics to modern trends, find pieces that speak to you.",
      ctaText: "Shop The Look",
      ctaLink: "",
    },
    {
      id: 2,
      image: Imagefour,
      tag: "Sustainability",
      title: "Sustainable Fashion, Elevated",
      italicWord: "Elevated",
      subtitle: "Embrace eco-friendly styles without compromising on luxury or design.",
      ctaText: "Explore Eco-Chic",
      ctaLink: "",
    },
    {
      id: 3,
      image: Imagetwo,
      tag: "The Winter Edit",
      title: "Warm Up Your Wardrobe",
      italicWord: "Sophisticated",
      subtitle: "Sophisticated outerwear designed for the modern metropolitan life.",
      ctaText: "Shop Winter",
      ctaLink: "",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 7000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-white mt-[80px] px-4 md:px-10 py-6">
      <div className="relative w-full h-full overflow-hidden rounded-[3rem] bg-gray-50 border border-gray-100 shadow-sm">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6 animate-fade-in">
                  <Sparkles size={14} className="text-pink-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">
                    {slide.tag}
                  </span>
                </div>

                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-6 uppercase">
                  {slide.title.split(slide.italicWord)[0]}
                  <span className="text-pink-500 italic font-serif lowercase block md:inline">
                    {slide.italicWord}
                  </span>
                  {slide.title.split(slide.italicWord)[1]}
                </h2>

                <p className="text-sm md:text-lg text-gray-200 mb-10 font-medium tracking-tight max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>

                <Link
                  to={slide.ctaLink}
                  className="group bg-white hover:bg-pink-600 text-gray-900 hover:text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-3 w-fit shadow-xl"
                >
                  {slide.ctaText}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 right-10 z-30 flex gap-4">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-10 left-10 z-30 flex items-center gap-4">
           <span className="text-[10px] font-black text-white/40 tracking-[0.3em]">0{currentSlide + 1}</span>
           <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  index === currentSlide ? "w-12 bg-pink-500" : "w-4 bg-white/30"
                }`}
              />
            ))}
           </div>
           <span className="text-[10px] font-black text-white/40 tracking-[0.3em]">0{slides.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;