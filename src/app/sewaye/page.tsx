"use client"
import React from "react";
import Header from "@/components/header";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
// import Footer from "@/components/footer";
import ServiceCards from "@/components/nagrik";


const Sewaye = () => {
  

  return (
    <div className="font-sans  min-h-screen">
      <Header/>
     <Logo/>
      <Nav/>
      <div className="mb-12">
      <ServiceCards/>
      </div>
   
   {/* <Footer/> */}
    </div>
  );
};

export default Sewaye;
