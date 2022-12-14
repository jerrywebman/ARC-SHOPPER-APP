import React from "react";
import Footer from "../partials/Footer";
import Topbar from "../partials/Topbar";
import Middlebar from "../partials/Middlebar";
import Menu from "./../partials/Menu";
import Hero from "../Hero/Hero";
import Products from "../Product/Products";
import Testimony from "../Testimony/Testimony";
import Newsletter from "../Newsletter";
import HomeCarousel from "../Carousel/Homepage";

const Homepage = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
      </header>

      <Hero />
      <Products />
      <Testimony />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
