import React from "react";
import Hero from "../sections/Hero";
import Category from "../sections/Category";
import  Destination  from "../sections/Destinations";
import Book from "../sections/Book";
import Testimonials from "../sections/Testimonials";
import PartnerSection from "../sections/PartnerSection"
import ContactSection from "../sections/ContactSection"
import FooterSection from "../sections/FooterSection";
const Home = () => {
  return (
    <div>
      
      <Hero />
      <Category/>
      <Destination />
      <Book/>
      <Testimonials/>
      <PartnerSection />
      < ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;
