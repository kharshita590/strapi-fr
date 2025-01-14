"use client";
import React from "react";
import "../app/wave.css";

const CMO: React.FC = () => {
  const data = [
    {
      id: 1,
      img: "/images/cmo.jpeg",
      name: "श्री रामप्रकाश साहू",
      position: "सीएमओ",
    },
  ];

  return (
    <div className=" flex items-center justify-center mb-24">
      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 shadow-lg rounded-lg w-64 h-64 p-6 transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.img}
                  className="h-32 w-32 object-cover rounded-full border-4 border-[#f2bf47]"
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

export default CMO;
