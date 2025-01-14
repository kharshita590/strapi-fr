"use client";
import React from "react";
import { FiPhoneCall } from "react-icons/fi"; 

const EContact: React.FC = () => {
  return (
    <div className="lg:py-10 lg:px-44 lg:space-y-6 space-y-4 p-6 text-center  ">
   
      <h1 className="text-black font-bold text-xl lg:text-3xl ">
        आपातकाल संपर्क संख्या
      </h1>
      
   
      <div className="flex space-x-6 items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <FiPhoneCall className="text-red-600 text-md lg:text-3xl" />
          <h1 className="text-red-600 font-bold text-md lg:text-xl">07591-253379</h1>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <FiPhoneCall className="text-red-600 text-md  lg:text-3xl" />
          <h1 className="text-red-600 font-bold text-md lg:text-xl">7649854500</h1>
        </div>
      </div>
    </div>
  );
};

export default EContact;
