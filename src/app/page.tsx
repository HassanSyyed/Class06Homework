import React from "react"
import Navbar from "./Componants/navbar";
import Banner from "./Banner/page";
import HeroSection from "./Herosection/page";
import Featured from "./Featured/page";
import Booking from "./Booking/page";
import Footer from "./Footer/page";

export default function Home() {
  return (

    
    <div>
      <Navbar />
      <Banner />
      <HeroSection />
      <Featured />
      <Booking />
      <Footer />

    </div>
  );
}