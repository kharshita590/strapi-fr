"use client";
import React, { useState, useEffect } from "react";
import "../app/wave.css";

const ParshadCard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-sample-nzhn.onrender.com/api/parshad-cards?populate=*"
        );
        const result = await response.json();
        const baseUrl = "https://strapi-sample-nzhn.onrender.com";

        if (result.data) {
          const formattedData = result.data.map((item: any) => {
            const imageUrl =
              item.image &&
              item.image[0] &&
              (item.image[0].formats?.thumbnail?.url || item.image[0].url);

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
    <div className="bg-gradient-to-b  py-10 items-center justify-center ">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 "
          >
            <div className="flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-64 object-cover rounded-full border-4 border-[#f2bf47]"
                />
              ) : (
                <div className="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold text-center text-[#00008B] mt-4">
              {item.name}
            </h2>
            <p className="text-center text-gray-600 font-medium">
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParshadCard;
