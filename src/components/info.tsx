// import React, { useEffect, useState } from "react";

// type Section = {
//   type: string;
//   children: { type: string; text: string }[];
// };

// type SironjData = {
//   id: number;
//   documentId: string;
//   sironj: Section[];
// };

// const Info = () => {
//   const info=[
//     {
//       "head":"सिरोंज के बारे में",
//       "info":"सिरोंज मध्य प्रदेश राज्य के विदिशा जिले में स्थित एक नगर और नगर पालिका है। यह तहसील मुख्यालय और विधानसभा क्षेत्र के रूप में कार्य करता है। सिरोंज शहर को कई वार्डों में विभाजित किया गया है, जिनके लिए हर पाँच साल में चुनाव होते हैं। सिरोंज नगर पालिका के पास बड़ी संख्या में घरों का प्रशासनिक नियंत्रण है और यह पानी की आपूर्ति और सीवरेज जैसी बुनियादी सुविधाएं प्रदान करती है। इसके अलावा, यह अपने अधिकार क्षेत्र में सड़कों के निर्माण और रखरखाव की जिम्मेदारी निभाती है और संपत्तियों पर कर लगाने का भी अधिकार रखती है।"
//     },
//     {
//       "head":"इतिहास",
//       "info":"1947 में भारत की स्वतंत्रता के बाद, सिरोंज मध्य भारत (मध्य भारत राज्य) का हिस्सा बना और बाद में 1 नवंबर 1956 को मध्य प्रदेश में शामिल कर दिया गया। आज सिरोंज विदिशा जिले का एक हिस्सा है और इसका सांस्कृतिक और ऐतिहासिक महत्व बना हुआ है।"
//     },
//     {
//       "head":"भूगोल",
//       "info":"सिरोंज, जो मध्य प्रदेश का एक जिला है, 24.10°N 77.69°E पर स्थित है। इसकी औसत ऊंचाई 464 मीटर (1522 फीट) है। सिरोंज मध्य प्रदेश की राजधानी भोपाल से लगभग 120 किलोमीटर दूर स्थित है और यह पार्वती नदी के किनारे बसा हुआ है।"
//     }
//   ]
//   const [data, setData] = useState<SironjData[]>([]);
//   const [loading, setLoading] = useState(true);


//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:1337/api/sironj-ke-bares?populate=*"); 
//       const result = await response.json();
//       setData(result.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="text-black font-sans py-10 px-4">
//       <div className="max-w-5xl mx-auto space-y-12">
//         {data.map((section) => (
//           <section key={section.id}>
//             <h2 className="text-3xl font-bold mb-4 flex items-center">
//               <span className="mr-2">{section.sironj[0]?.children[0]?.text}</span>
//               <span className="w-full h-px bg-yellow-400"></span>
//             </h2>
//             <p className="text-base leading-relaxed">
//               {section.sironj[1]?.children[0]?.text}
//             </p>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Info;
import React  from "react";


const Info = () => {
  const info=[
    {
      "head":"सिरोंज के बारे में",
      "info":"सिरोंज मध्य प्रदेश राज्य के विदिशा जिले में स्थित एक नगर और नगर पालिका है। यह तहसील मुख्यालय और विधानसभा क्षेत्र के रूप में कार्य करता है। सिरोंज शहर को कई वार्डों में विभाजित किया गया है, जिनके लिए हर पाँच साल में चुनाव होते हैं। सिरोंज नगर पालिका के पास बड़ी संख्या में घरों का प्रशासनिक नियंत्रण है और यह पानी की आपूर्ति और सीवरेज जैसी बुनियादी सुविधाएं प्रदान करती है। इसके अलावा, यह अपने अधिकार क्षेत्र में सड़कों के निर्माण और रखरखाव की जिम्मेदारी निभाती है और संपत्तियों पर कर लगाने का भी अधिकार रखती है।"
    },
    {
      "head":"इतिहास",
      "info":"1947 में भारत की स्वतंत्रता के बाद, सिरोंज मध्य भारत (मध्य भारत राज्य) का हिस्सा बना और बाद में 1 नवंबर 1956 को मध्य प्रदेश में शामिल कर दिया गया। आज सिरोंज विदिशा जिले का एक हिस्सा है और इसका सांस्कृतिक और ऐतिहासिक महत्व बना हुआ है।"
    },
    {
      "head":"भूगोल",
      "info":"सिरोंज, जो मध्य प्रदेश का एक जिला है, 24.10°N 77.69°E पर स्थित है। इसकी औसत ऊंचाई 464 मीटर (1522 फीट) है। सिरोंज मध्य प्रदेश की राजधानी भोपाल से लगभग 120 किलोमीटर दूर स्थित है और यह पार्वती नदी के किनारे बसा हुआ है।"
    }
  ]
 

 

  return (
    <div className="text-black font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {info.map((section) => (
          <section key="">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="mr-2">{section.head}</span>
              <span className="w-full h-px bg-yellow-400"></span>
            </h2>
            <p className="text-base leading-relaxed">
              {section.info}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Info;
