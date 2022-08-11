import React from "react";
import Footer from "../../partials/Footer";
import Topbar from "../../partials/Topbar";
import Middlebar from "../../partials/Middlebar";
import Menu from "../../Menu";
import Hero from "../../Hero/HeroLanding";
import SectionOne from "../../Section/SectionOne";
import Products from "../../Product/ProductsLanding";
import Contact from "../../Contact/Contact";

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Middlebar />
        <Menu />
        <Hero />
      </header>
      <section className="mt-5 bg-light">
        <SectionOne />
        <Products />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
