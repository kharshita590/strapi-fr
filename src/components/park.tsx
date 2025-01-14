"use client"
import React from "react";

const Park = () => {
    const data = [
        {"img":"/images/park1.jpeg"},
        {"img":"/images/park2.jpeg"},
        {"img":"/images/park3.jpeg"},
    ]
//   const [images, setImages] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/phoyo-galleries?populate=*");
//         const data = await response.json();
//         const baseUrl = "http://localhost:1337"; 
//         const extractedImages = data.data[0].images
//           .map((image: any) => {
//             if (image.formats && image.formats.thumbnail) {
//               return `${baseUrl}${image.formats.thumbnail.url}`;
//             } else if (image.url) {
//               return `${baseUrl}${image.url}`;
//             }
//             return null; 
//           })
//           .filter((url: string | null) => url !== null); 
  
//         setImages(extractedImages);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
  

//   if (images.length === 0) {
//     return <p>Loading...</p>;
//   }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md lg:p-16 p-2">
 
      <div className="bg-[#00008B] text-white px-4 py-2 rounded-t-lg flex items-center">
        <span className="text-xl font-bold">दीन दयाल उपवन पार्क सिरोंज</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50">
        {data.map((image, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image.img}
              className="w-full lg:h-60 h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Park;
