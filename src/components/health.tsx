// "use client";
// import React, { useEffect, useState } from "react";

// const Health: React.FC = () => {
//   const data =[
//     {head:"स्वास्थ्य", info:"सिरोंज जिले में स्वास्थ्य सेवाएं सस्ती दरों पर उपलब्ध हैं और किसी भी आपातकाल के लिए एंबुलेंस सेवा भी प्रदान की जाती है। स्वास्थ्य और परिवार कल्याण विभाग, मध्य प्रदेश सरकार, मध्य प्रदेश के लोगों के जीवन स्तर और स्वास्थ्य स्थिति को बेहतर बनाने में महत्वपूर्ण भूमिका निभा रहा है। शहरी और दूरस्थ क्षेत्रों में स्वास्थ्य सेवाएं प्रदान करने के उद्देश्य से, यह विभाग मध्य प्रदेश राज्य में चिकित्सा सेवाएं उपलब्ध कराता है।  सिरोंज जिले में स्वास्थ्य से संबंधित गतिविधियों की निगरानी के लिए मुख्य चिकित्सा एवं स्वास्थ्य अधिकारी (सीएमएचओ) जिला स्तर पर इस विभाग से संबंधित सभी कार्यों के लिए जिम्मेदार हैं।"}
//   ]
//   const [healthData, setHealthData] = useState<null | any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/healthss?populate=*"); 
//         const result = await response.json();

//         if (result.data && result.data.length > 0) {
//           setHealthData(result.data[0]);
//         }
//       } catch (error) {
//         console.error("Error fetching health data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!healthData) {
//     return <p>Loading...</p>; 
//   }


//   const { Health, vidhishaContent, scheme, infra } = healthData;

//   const renderParagraphs = (content: any[]) =>
//     content.map((item: any, index: number) => (
//       <p key={index} className="text-black text-[16px]">
//         {item.children?.map((child: any) => child.text).join("") || ""}
//       </p>
//     ));

//   return (
//     <div className="p-24 space-y-4">
//       <h1 className="text-black font-bold text-3xl">
//         {Health[0]?.children[0]?.text || "Health"}
//       </h1>
//       {renderParagraphs(Health.slice(1))}
   
      
   
//     </div>
//   );
// };

// export default Health;

"use client";
import React  from "react";

const Health: React.FC = () => {
  const data =[
    {head:"स्वास्थ्य", info:"सिरोंज जिले में स्वास्थ्य सेवाएं सस्ती दरों पर उपलब्ध हैं और किसी भी आपातकाल के लिए एंबुलेंस सेवा भी प्रदान की जाती है। स्वास्थ्य और परिवार कल्याण विभाग, मध्य प्रदेश सरकार, मध्य प्रदेश के लोगों के जीवन स्तर और स्वास्थ्य स्थिति को बेहतर बनाने में महत्वपूर्ण भूमिका निभा रहा है। शहरी और दूरस्थ क्षेत्रों में स्वास्थ्य सेवाएं प्रदान करने के उद्देश्य से, यह विभाग मध्य प्रदेश राज्य में चिकित्सा सेवाएं उपलब्ध कराता है।  सिरोंज जिले में स्वास्थ्य से संबंधित गतिविधियों की निगरानी के लिए मुख्य चिकित्सा एवं स्वास्थ्य अधिकारी (सीएमएचओ) जिला स्तर पर इस विभाग से संबंधित सभी कार्यों के लिए जिम्मेदार हैं।"}
  ]
 
   

  return (
    <div className="">
       {data.map((item,index)=>(
      <div className="p-24 space-y-4">
        
      <h1 className="text-black font-bold text-3xl">
       {item.head}
      </h1>
      <p>  {item.info}</p>
    
   
      
   
    </div>
    ))}
    </div>
   
  
  );
};

export default Health;

