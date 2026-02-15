import React from "react";
import NavBar from "../components/Navbar";
import HeroSections from "../components/HeroSections";
import Banner from "../components/Banner";
import PromotionalBanners from "../components/PromotionalBanners";
import Popular from "../components/popular";
import Newsletter from "../components/NewSletter";  
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSections />
      <Banner />
      <PromotionalBanners/>
      <Popular/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
