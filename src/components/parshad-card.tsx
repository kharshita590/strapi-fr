// 

"use client";
import React from "react";
import "../app/wave.css";

const ParshadCard: React.FC = () => {
  const card =[
    {

      "name":"श्री मनमोहन साहू",
      "pos":"अध्यक्ष",
      "img":"/images/adyaksh.jpeg"
    },
    {

      "name":"श्री मनोज शर्मा साईनाथ",
      "pos":"उपाध्यक्ष",
      "img":"/images/3.jpeg"
    },
    {

      "name":"श्री रामप्रकाश साहू",
      "pos":"सीएमओ",
      "img":"/images/cmo.jpeg"
    },


  ]
  

  return (
    <div className="bg-gradient-to-b  py-10 items-center justify-center ">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">
        {card.map((item) => (
          <div
            key=""
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 "
          >
            <div className="flex items-center justify-center">
              {item.img ? (
                <img
                  src={item.img}
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
              {item.pos}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParshadCard;
