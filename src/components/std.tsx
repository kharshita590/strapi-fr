// "use client"
// import React,{useState,useEffect} from "react";

// const STD:React.FC=()=>{
//     const [data,setData]=useState<any[]>([]);

//     useEffect(()=>{
//         const fetchData=async()=>{
//             const response = await fetch("http://localhost:1337/api/stds?populate=*");
//             const result = await response.json()

//             if(result.data){
//                 const formattedData=result.data.map((item:any,index:any)=>({
//                     stdHeading:item.stdHeading,
//                     stdheading1:item.stdheading1,
//                     std1:item.std1,
//                     std2:item.std2,
//                     std3:item.std3,
//                     std4:item.std4,
//                     std5:item.std5,
//                     pinheading:item.pinheading,
//                     pin1:item.pin1,
//                     pin2:item.pin2,
//                     pin3:item.pin3,
//                     pin4:item.pin4,
//                     p5:item.p5,
//                     p6:item.p6,
//                     p8:item.p8
//                 }))
//                 setData(formattedData);
//             }

//         }
//         fetchData()
//     },[])
//     return(

//         <div className="p-24 space-y-4">
//             {data.map((admin,index)=>(
//                 <div key={index} className="space-y-6">
//      <h1 className="text-black font-bold text-3xl">{admin.stdHeading}</h1>
//             <h1 className="text-black font-bold text-xl">{admin.stdheading1}</h1>
//             <p className="text-black text-[16px]">{admin.std1}</p>
//             <p className="text-black text-[16px]">{admin.std2}</p>
//             <p className="text-black text-[16px]">{admin.std3}</p>
//             <p className="text-black text-[16px]">{admin.std4}</p>
//             <p className="text-black text-[16px]">{admin.std5}</p>
            
//             <h1 className="text-black font-bold text-3xl">{admin.pinheading}</h1>
//             <p className="text-black text-[16px]">{admin.pin1}</p>
//             <p className="text-black text-[16px]">{admin.pin2}</p>
//             <p className="text-black text-[16px]">{admin.pin3}</p>
//             <p className="text-black text-[16px]">{admin.pin4}</p>
//             <p className="text-black text-[16px]">{admin.p5}</p>
//             <p className="text-black text-[16px]">{admin.p6}</p>
//             <p className="text-black text-[16px]">{admin.p7}</p>
//             <p className="text-black text-[16px]">{admin.p8}</p>
//                 </div>
//             ))}
            
//         </div>
//     )
// }
// export default STD;

"use client";
import React from "react";

const STD: React.FC = () => {
  const data = [
    {
      stdHeading: "एसटीडी कोड",
      stdheading1: "शहर और कोड",
      std1: "विदिशा: 07592",
      std2: "गंजबासौदा: 07594",
      std3: "सिरोंज: 07591",
      std4: "लटेरी: 07590",
      std5: null,
      pinheading: "पिन कोड",
      pin1: "विदिशा: 464001",
      pin2: "गंजबासौदा: 464221",
      pin3: "सिरोंज: 464228",
      pin4: "लटेरी: 464114",
      p5: "ग्यारसपुर: 464331",
      p6: "नटेरन: 464258",
      p7: null,
      p8: null,
    },
  ];

  return (
    <div className="p-24 space-y-4">
      {data.map((admin, index) => (
        <div key={index} className="space-y-6">
          <h1 className="text-black font-bold text-3xl">{admin.stdHeading}</h1>
          <h1 className="text-black font-bold text-xl">{admin.stdheading1}</h1>
          {admin.std1 && <p className="text-black text-[16px]">{admin.std1}</p>}
          {admin.std2 && <p className="text-black text-[16px]">{admin.std2}</p>}
          {admin.std3 && <p className="text-black text-[16px]">{admin.std3}</p>}
          {admin.std4 && <p className="text-black text-[16px]">{admin.std4}</p>}
          {admin.std5 && <p className="text-black text-[16px]">{admin.std5}</p>}

          <h1 className="text-black font-bold text-3xl">{admin.pinheading}</h1>
          {admin.pin1 && <p className="text-black text-[16px]">{admin.pin1}</p>}
          {admin.pin2 && <p className="text-black text-[16px]">{admin.pin2}</p>}
          {admin.pin3 && <p className="text-black text-[16px]">{admin.pin3}</p>}
          {admin.pin4 && <p className="text-black text-[16px]">{admin.pin4}</p>}
          {admin.p5 && <p className="text-black text-[16px]">{admin.p5}</p>}
          {admin.p6 && <p className="text-black text-[16px]">{admin.p6}</p>}
          {admin.p7 && <p className="text-black text-[16px]">{admin.p7}</p>}
          {admin.p8 && <p className="text-black text-[16px]">{admin.p8}</p>}
        </div>
      ))}
    </div>
  );
};

export default STD;
