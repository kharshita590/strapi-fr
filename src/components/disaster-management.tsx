// "use client"
// import React,{useState,useEffect} from "react";

// const DisasterManagement:React.FC=()=>{
//     const [data,setData] = useState<any[]>([]);
//     useEffect(()=>{
//         const fetchData=async()=>{
//             try{
//                 const response = await fetch("http://localhost:1337/api/disasters?populate=*")
//                 const result = await response.json();

//                 if(result.data){
//                     const formattedData=result.data.map((item:any,index:any)=>({
//                         disasterHeading:item.disasterHeading.trim(),
//                         disasterPara:item.disasterPara.trim(),
//                         intro:item.intro.trim(),
//                         l1:item.l1.trim(),
//                         l2:item.l2.trim(),
//                         l3:item.l3.trim(),
//                         l4:item.l4.trim(),
//                         l5:item.l5.trim(),
//                     }))
//                     setData(formattedData)

//                 }
//             }catch(error:any){
//                 console.log(error)
//             }
//         }
//         fetchData();
//     },[])

//     return(
//         <div className="p-24 space-y-4">
//         {data.map((admin,index) => (
//           <div key={index} className="space-y-4"> 
//             <h1 className="text-black font-bold text-3xl">{admin.disasterHeading}</h1>
//             <p className="text-black text-[16px]">{admin.disasterPara}</p>
//             <h1 className="text-black font-bold text-3xl">{admin.intro}</h1>
//             <p className="text-black text-[16px]">{admin.l1}</p>
//             <p className="text-black text-[16px]">{admin.l2}</p>
//             <p className="text-black text-[16px]">{admin.l3}</p>
//             <p className="text-black text-[16px]">{admin.l4}</p>
//             <p className="text-black text-[16px]">{admin.l5}</p>
//           </div>
//         ))}
//       </div>
      
//     )
// }
// export default DisasterManagement;