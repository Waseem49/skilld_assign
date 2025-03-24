import React from "react";
import Hero from "../components/Hero";
import MainSec from "../components/MainSec";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Navbar1 />
      <Hero />
      <MainSec />
      <Footer />
    </>
  );
};

export default Homepage;
