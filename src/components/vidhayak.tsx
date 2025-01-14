"use client";
import React, { useState, useEffect } from "react";
import "../app/wave.css";

const Vidhayak: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/vidhayaks?populate=*");
        const result = await response.json();
        const baseUrl = "http://localhost:1337";

        if (result.data) {
          const formattedData = result.data.map((item: any) => {
            const imageUrl = 
              item.img?.formats?.thumbnail?.url || 
              item.img?.url || 
              null;

            return {
              id: item.id,
              name: item.name,
              position: item.position,
              image: imageUrl ? `${baseUrl}${imageUrl}` : null,
            };
          });
          setData(formattedData);
        }
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" py-8 mt-12" >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          माननीय विधायकगण
        </h1>
        <p className="text-lg text-gray-600">
          हमारे सम्माननीय जन प्रतिनिधि
        </p>
      </div>
      <div className="">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
            //   src={item.image || "/placeholder.png"}
            src="images/vidhayak.png"
              alt={item.name}
              className="w-32 h-32 object-cover items-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-center text-gray-800">
                {item.name}
              </h2>
              <h3 className="text-lg text-center text-gray-600">
                {item.position}
              </h3>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vidhayak;
