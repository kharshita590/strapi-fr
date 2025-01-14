"use client"
import React,{useState,useEffect} from "react";
import Header from "@/components/header";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import Carousel from "@/components/carousel";
import Info from "@/components/info";
import Address from "@/components/address";
import PhotoGallery from "@/components/photo-gallery";
import EContact from "@/components/emergency";
import ServiceCards from "@/components/nagrik";
import ParshadCard from "@/components/parshad-card";
import Phone from "@/components/aapki";

const Home = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/phoyo-galleries?populate=*");
        const data = await response.json();
        const baseUrl = "http://localhost:1337"; 
        const extractedImages = data.data[0].images
          .map((image: any) => {
            if (image.formats && image.formats.thumbnail) {
              return `${baseUrl}${image.formats.thumbnail.url}`;
            } else if (image.url) {
              return `${baseUrl}${image.url}`;
            }
            return null; 
          })
          .filter((url: string | null) => url !== null); 
  
        setImages(extractedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="font-sans  min-h-screen">
      <Header/>
     <Logo/>
      <Nav/>
    <Carousel images={images}/>
    <Info/>

  
    <ServiceCards/>
    <Phone/>
    <div className="lg:px-36 px-0">
    <ParshadCard/>
    <EContact/>
    </div>

    <div className="lg:flex flex flex-col lg:flex-row lg:space-x-12 lg:p-6 lg:px-12 space-y-6">
      <Address/>
      <PhotoGallery/>
    </div>
   
    </div>
  );
};

export default Home;
