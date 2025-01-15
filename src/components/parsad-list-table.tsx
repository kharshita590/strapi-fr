// "use client"
// import React,{useState,useEffect} from "react";


// const ParshadListTable: React.FC = () => {
//   const data = [
//     { name: "श्री मनमोहन साहू", ward: 2, position: "अध्यक्ष", phone: "9926824496",sno:"1" },
//     { name: "श्री मनोज शर्मा साईंनाथ", ward: 2, position: "उपाध्यक्ष", phone: "9926392392",sno:"2"  },
//     { name: "श्री रामदयाल विश्वकर्मा", ward: 1, position: "पार्षद", phone: "9826743380",sno:"3"  },
//     { name: "श्रीमती रीना सचिन शर्मा", ward: 2, position: "पार्षद", phone: "9425464460",sno:"4"  },
//     { name: "श्री हरिचरण अहिरवार", ward: 3, position: "पार्षद", phone: "9826939135",sno:"5"  },
//     { name: "श्री नदीम खान उर्फ नन्नू भाई", ward: 4, position: "पार्षद", phone: "9584743624",sno:"6"  },
//     { name: "श्री अजमल खान", ward: 5, position: "पार्षद", phone: "9826745530",sno:"7"  },
//     { name: "श्री मोहम्मद फहीम", ward: 6, position: "पार्षद", phone: "9977080782",sno:"8"  },
//     { name: "श्रीमती संगीता यादव (गुड्डू यादव)", ward: 7, position: "पार्षद", phone: "9165207608",sno:"9"  },
//     { name: "श्रीमती मुसरत जहां मोहम्मद खालिद", ward: 8, position: "पार्षद", phone: "8878251483",sno:"10"  },
//     { name: "श्रीमती शांति जयनारायण सेन", ward: 9, position: "पार्षद", phone: "9977011910",sno:"11"  },
//     { name: "श्रीमती आरती राजेंद्र सिंह (राजू)", ward: 10, position: "पार्षद", phone: "7987321112",sno:"12"  },
//     { name: "श्रीमती माधुरी धर्मेंद्र जैन", ward: 11, position: "पार्षद", phone: "9926355124",sno:"13"  },
//     { name: "श्रीमती विनिता रूपेश यादव", ward: 12, position: "पार्षद", phone: "9826933662",sno:"14"  },
//     { name: "श्रीमती रजनी संजय सोनी", ward: 13, position: "पार्षद", phone: "9826753990",sno:"15"  },
//     { name: "श्री इमरान कुरैशी", ward: 15, position: "पार्षद", phone: "9754455242" ,sno:"16" },
//     { name: "श्रीमती अंजनी तोरानी पंढी", ward: 16, position: "पार्षद", phone: "9926534385",sno:"17"  },
//     { name: "श्रीमती कृष्णा टिकराम शाक्य", ward: 17, position: "पार्षद", phone: "9977080422",sno:"18"  },
//     { name: "श्रीमती वर्षा बलजीत यादव", ward: 19, position: "पार्षद", phone: "9425378077",sno:"19"  },
//     { name: "श्री फारुख असलम गौरी", ward: 20, position: "पार्षद", phone: "9977254289",sno:"20"  },
//     { name: "श्रीमान आमना बी राजा मियां", ward: 21, position: "पार्षद", phone: "9977389008",sno:"21"  }
//   ];
  
//   const [data,setData]=useState<any[]>([]);

//   useEffect(()=>{
//     const fetchData=async()=>{
//       try{
//         const response = await fetch("http://localhost:1337/api/parshad-lists?populate=*");
//         const result = await response.json()

//         if(result.data){
//             const formattedData=result.data.map((item:any,index:any)=>({
//                 id:item.sno,
//                 wardNo:item.ward_no,
//                 name:item.name,
//                 designation:item.position,
//                 phone:item.mobile_no,
//             }))
//             setData(formattedData);
//         }        
//       }catch(error:any){
//         console.log(error)
//     }

//     }
//     fetchData()
// },[]);
//   return (
//     <div className="container mx-auto px-4 py-8 ">
     
//       <div className="bg-[#00008B]  text-white p-4 mb-4">
//         <h1 className="text-xl font-bold">Parshad List</h1>
//       </div>
      
//       <div className="overflow-x-auto ">
//         <table className="min-w-full bg-white text-black">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-4 text-left">S No.</th>
//               <th className="p-4 text-left">Ward No.</th>
//               <th className="p-4 text-left">Name</th>
//               <th className="p-4 text-left">Position</th>
//               <th className="p-4 text-left">Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((admin) => (
//               <tr key={admin.id} className="border-b hover:bg-gray-50">
//                  <td className="p-4 font-medium">{admin.id}</td>
//                  <td className="p-4 font-medium">{admin.wardNo}</td>
//                  <td className="p-4 font-medium">{admin.name}</td>
//                 <td className="p-4">{admin.designation}</td>
//                 <td className="p-4">{admin.phone || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ParshadListTable;

"use client"
import React from "react";


const ParshadListTable: React.FC = () => {
  const data = [
    { name: "श्री मनमोहन साहू", ward: 2, position: "अध्यक्ष", phone: "9926824496",sno:"1" },
    { name: "श्री मनोज शर्मा साईंनाथ", ward: 2, position: "उपाध्यक्ष", phone: "9926392392",sno:"2"  },
    { name: "श्री रामदयाल विश्वकर्मा", ward: 1, position: "पार्षद", phone: "9826743380",sno:"3"  },
    { name: "श्रीमती रीना सचिन शर्मा", ward: 2, position: "पार्षद", phone: "9425464460",sno:"4"  },
    { name: "श्री हरिचरण अहिरवार", ward: 3, position: "पार्षद", phone: "9826939135",sno:"5"  },
    { name: "श्री नदीम खान उर्फ नन्नू भाई", ward: 4, position: "पार्षद", phone: "9584743624",sno:"6"  },
    { name: "श्री अजमल खान", ward: 5, position: "पार्षद", phone: "9826745530",sno:"7"  },
    { name: "श्री मोहम्मद फहीम", ward: 6, position: "पार्षद", phone: "9977080782",sno:"8"  },
    { name: "श्रीमती संगीता यादव (गुड्डू यादव)", ward: 7, position: "पार्षद", phone: "9165207608",sno:"9"  },
    { name: "श्रीमती मुसरत जहां मोहम्मद खालिद", ward: 8, position: "पार्षद", phone: "8878251483",sno:"10"  },
    { name: "श्रीमती शांति जयनारायण सेन", ward: 9, position: "पार्षद", phone: "9977011910",sno:"11"  },
    { name: "श्रीमती आरती राजेंद्र सिंह (राजू)", ward: 10, position: "पार्षद", phone: "7987321112",sno:"12"  },
    { name: "श्रीमती माधुरी धर्मेंद्र जैन", ward: 11, position: "पार्षद", phone: "9926355124",sno:"13"  },
    { name: "श्रीमती विनिता रूपेश यादव", ward: 12, position: "पार्षद", phone: "9826933662",sno:"14"  },
    { name: "श्रीमती रजनी संजय सोनी", ward: 13, position: "पार्षद", phone: "9826753990",sno:"15"  },
    { name: "श्री इमरान कुरैशी", ward: 15, position: "पार्षद", phone: "9754455242" ,sno:"16" },
    { name: "श्रीमती अंजनी तोरानी पंढी", ward: 16, position: "पार्षद", phone: "9926534385",sno:"17"  },
    { name: "श्रीमती कृष्णा टिकराम शाक्य", ward: 17, position: "पार्षद", phone: "9977080422",sno:"18"  },
    { name: "श्रीमती वर्षा बलजीत यादव", ward: 19, position: "पार्षद", phone: "9425378077",sno:"19"  },
    { name: "श्री फारुख असलम गौरी", ward: 20, position: "पार्षद", phone: "9977254289",sno:"20"  },
    { name: "श्रीमान आमना बी राजा मियां", ward: 21, position: "पार्षद", phone: "9977389008",sno:"21"  }
  ];
  
 
  return (
    <div className="container mx-auto px-4 py-8 ">
     
      <div className="bg-[#00008B]  text-white p-4 mb-4">
        <h1 className="text-xl font-bold">Parshad List</h1>
      </div>
      
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">S No.</th>
              <th className="p-4 text-left">Ward No.</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((admin) => (
              <tr key={admin.sno} className="border-b hover:bg-gray-50">
                 <td className="p-4 font-medium">{admin.sno}</td>
                 <td className="p-4 font-medium">{admin.ward}</td>
                 <td className="p-4 font-medium">{admin.name}</td>
                <td className="p-4">{admin.position}</td>
                <td className="p-4">{admin.phone || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParshadListTable;