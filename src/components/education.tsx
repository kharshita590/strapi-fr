// "use client"
// import React,{useState,useEffect} from "react";

// const Education = () => {
//    const [data,setData]=useState<any[]>([]);
//    useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/educations?populate=*");
//         const result = await response.json();
  
//         if (result.data) {
//           const formattedData = await result.data.map((item: any) => ({
//             id: item.SNo,
//             name: item.DepartmentName,
//             phone: item.ContactNumber,
//             email: item.EmailID
//           }));
//           setData(formattedData);
//         }
//       } catch (error: any) {
//         console.log(error);
//       }
//     };
    
//     fetchData();
//   }, []);
//   return (
// <main className="p-16 space-y-4">
// <h1 className="text-black font-bold text-3xl">Education</h1>
          
//             <p className="text-black text-[16px]">District Education Department is responsible for Administrative, Financial, Academic and Inspection related matters of School Education department. Under the District Education Officer, 7 Sub-divisional Education Officers are working in Vidisha, where Block Education Officers are responsible for activities related to School Education.</p>
//             <div className="overflow-x-auto">
//         <table className="min-w-full bg-white mt-6">
//           <thead>
//             <tr className="bg-[#FFD699]">
//               <th className="p-4 text-left">S No.</th>
//               <th className="p-4 text-left">Department Name</th>
//               <th className="p-4 text-left">Contact Number</th>
//               <th className="p-4 text-left">Email ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((admin) => (
//               <tr key={admin.id} className="border-b hover:bg-gray-50">
//                 <td className="p-4 font-medium">{admin.id}</td>
//                 <td className="p-4">{admin.name}</td>
//                 <td className="p-4">{admin.phone}</td>
//                 <td className="p-4">{admin.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>


// </main>
//   );
// };

// export default Education;
