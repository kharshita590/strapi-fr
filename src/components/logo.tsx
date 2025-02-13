// "use client";
// import React, { useState, useEffect } from "react";

// const Logo = () => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/logos?populate=*");
//         const data = await response.json();
//         const baseUrl = "http://localhost:1337"; 
//         const logo = data.data[0]?.logo; 
//         if (logo) {
//           const thumbnailUrl = logo.formats?.thumbnail?.url;
//           const mainUrl = logo.url;
//           setImageUrl(`${baseUrl}${thumbnailUrl || mainUrl}`);
//         } else {
//           console.error("Logo data is missing in the response.");
//         }
//       } catch (error) {
//         console.error("Error fetching logo:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className=" ">
//       <div className="relative bg-white shadow ">
//         <div className="flex lg:flex-col flex-row items-center justify-center py-4 lg:space-y-4">
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt="Logo"
//               className="h-24 w-24 object-cover"
//             />
//           ) : (
//             <p>Loading logo...</p>
//           )}
//             <h1 className="text-2xl font-bold text-center text-black mx-4 ">
//           नगर पालिका सिरोंज<br />
//           जिला विदिशा (म.प्र.)
//         </h1>
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default Logo;
"use client";
import React from "react";
import { Search, UserRound, Accessibility } from 'lucide-react';

const Logo = () => {
  return (
    <header>
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-wrap space-x-2 ">
            <span className="text-gray-700">मध्यप्रदेश शासन</span>
            <span className="text-gray-700">Government of Madhya Pradesh</span>
          </div>

          <div className=" items-center space-x-2 lg:flex hidden">
            <a href="#main" className="text-gray-700 hover:text-gray-900">
              SKIP TO MAIN CONTENT
            </a>
            <div className="hidden sm:flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <UserRound className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Accessibility className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="px-2 py-1 hover:bg-gray-100 rounded text-xs sm:text-sm">
                ENGLISH
              </button>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-white shadow">
        <div className="container mx-auto py-4 flex flex-wrap items-center justify-between">
  
  <div className="flex justify-center items-center ">
  <img 
            src="/images/logo.png" 
            alt="Government Seal" 
            className="h-16 sm:h-20 w-auto object-contain"
          />

          <div className="text-center sm:text-left flex flex-col">
            <h1 className="text-lg sm:text-3xl font-bold text-gray-900">
              जिला विदिशा
            </h1>
            <h2 className="text-sm sm:text-2xl font-bold text-gray-900">
              नगर पालिका सिरोंज
            </h2>
          </div>
  </div>
        

          
          <img 
            src="/images/digital-india-logo.jpeg"
            alt="Digital India"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Logo;
