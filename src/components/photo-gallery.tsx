"use client"
import React, { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/phoyo-galleries?populate=*");
        const data = await response.json();
        const baseUrl = "https://strapi-sample-nzhn.onrender.com"; 
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
  
  

  if (images.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md ">
 
      <div className="bg-[#00008B] text-white px-4 py-2 rounded-t-lg flex items-center">
        <span className="text-xl font-bold">फोटो गैलरी</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50">
        {images.map((image, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;