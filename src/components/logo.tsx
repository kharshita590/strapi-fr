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

const Logo = () => {
  const data = ["/images/logo.png"];

  return (
    <div>
      <div className="relative bg-white shadow">
        <div className="flex lg:flex-col flex-row items-center justify-center py-4 lg:space-y-4">
          {data.length > 0 ? (
            <img
              src={data[0]}
              alt="Logo"
              className="h-24 w-24 object-cover"
            />
          ) : (
            <p>Loading logo...</p>
          )}
          <h1 className="text-2xl font-bold text-center text-black mx-4">
            नगर पालिका सिरोंज<br />
            जिला विदिशा (म.प्र.)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;

