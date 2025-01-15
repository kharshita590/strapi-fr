// "use client";
// import React, { useEffect, useState } from "react";

// const ContactDirectory: React.FC = () => {
//   const [data, setData] = useState<any[]>([]); 
//   const [nicData, setNicData] = useState<any[]>([]);
//   const [transportData, setTransportData] = useState<any[]>([]); 

  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
        
//         const response1 = await fetch("http://localhost:1337/api/contact-directories?populate=*");
//         const result1 = await response1.json();
//         if (result1.data) {
//           const formattedData = result1.data.map((item: any) => ({
//             id: item.id,
//             name: item.name?.trim(),
//             designation: item.designation?.trim(),
//             email: item.email?.trim(),
//             address: item.address?.trim(),
//             phone: item.phone?.trim(),
//             roomNo: item.roomNo?.trim(),
//             profilePicture: item.profilePicture?.url || "",
//           }));
//           setData(formattedData);
//         }

        
//         const response2 = await fetch("http://localhost:1337/api/contact-directory-nicvs?populate=*");
//         const result2 = await response2.json();
//         if (result2.data) {
//           const formattedNicData = result2.data.map((item: any) => ({
//             id: item.id,
//             name: item.name?.trim(),
//             designation: item.designation?.trim(),
//             email: item.email?.trim(),
//             address: item.address?.trim(),
//             phone: item.phone?.trim(),
//             roomNo: item.roomNo?.trim(),
//             profilePicture: item.profilePicture?.url || "",
//           }));
//           setNicData(formattedNicData);
//         }

        
//         const response3 = await fetch("http://localhost:1337/api/contact-directory-transports?populate=*");
//         const result3 = await response3.json();
//         if (result3.data) {
//           const formattedTransportData = result3.data.map((item: any) => ({
//             id: item.id,
//             name: item.name?.trim(),
//             designation: item.designation?.trim(),
//             email: item.email?.trim(),
//             address: item.address?.trim(),
//             phone: item.phone?.trim(),
//             fax: item.fax?.trim(),
//             roomNo: item.roomNo?.trim(),
//             profilePicture: item.profilePicture?.url || "",
//           }));
//           setTransportData(formattedTransportData);
//         }
//       } catch (error: any) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="">
//       <div className="container mx-auto px-4 py-8">
//         <div className=" text-white p-4 mb-4">
//           <h1 className="text-xl font-bold text-black">District Ayush Officer Department</h1>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-4 text-left">Profile Picture</th>
//                 <th className="p-4 text-left">Name</th>
//                 <th className="p-4 text-left">Designation</th>
//                 <th className="p-4 text-left">Email</th>
//                 <th className="p-4 text-left">Address</th>
//                 <th className="p-4 text-left">Phone</th>
//                 <th className="p-4 text-left">Room No</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((admin) => (
//                 <tr key={admin.id} className="border-b hover:bg-gray-50">
//                   <td className="p-4">
//                     <img
//                       src={admin.profilePicture}
//                       className="w-24 h-24 object-cover rounded-sm"
//                       alt={admin.name}
//                     />
//                   </td>
//                   <td className="p-4 font-medium">{admin.name}</td>
//                   <td className="p-4">{admin.designation}</td>
//                   <td className="p-4">{admin.email}</td>
//                   <td className="p-4">{admin.address}</td>
//                   <td className="p-4">{admin.phone || "-"}</td>
//                   <td className="p-4">{admin.roomNo || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>


//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-bg-500 text-white p-4 mb-4">
//           <h1 className="text-xl font-bold text-black">National Informatics Centre Vidisha</h1>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-4 text-left">Profile Picture</th>
//                 <th className="p-4 text-left">Name</th>
//                 <th className="p-4 text-left">Designation</th>
//                 <th className="p-4 text-left">Email</th>
//                 <th className="p-4 text-left">Address</th>
//                 <th className="p-4 text-left">Phone</th>
//                 <th className="p-4 text-left">Room No</th>
//               </tr>
//             </thead>
//             <tbody>
//               {nicData.map((admin) => (
//                 <tr key={admin.id} className="border-b hover:bg-gray-50">
//                   <td className="p-4">
//                     <img
//                       src={admin.profilePicture}
//                       className="w-24 h-24 object-cover rounded-sm"
//                       alt={admin.name}
//                     />
//                   </td>
//                   <td className="p-4 font-medium">{admin.name}</td>
//                   <td className="p-4">{admin.designation}</td>
//                   <td className="p-4">{admin.email}</td>
//                   <td className="p-4">{admin.address}</td>
//                   <td className="p-4">{admin.phone || "-"}</td>
//                   <td className="p-4">{admin.roomNo || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

    
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-bg-500 text-white p-4 mb-4">
//           <h1 className="text-xl font-bold text-black">Transport</h1>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-4 text-left">Profile Picture</th>
//                 <th className="p-4 text-left">Name</th>
//                 <th className="p-4 text-left">Designation</th>
//                 <th className="p-4 text-left">Email</th>
//                 <th className="p-4 text-left">Address</th>
//                 <th className="p-4 text-left">Phone</th>
//                 <th className="p-4 text-left">Fax</th>
//                 <th className="p-4 text-left">Room No</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transportData.map((admin) => (
//                 <tr key={admin.id} className="border-b hover:bg-gray-50">
//                   <td className="p-4">
//                     <img
//                       src={admin.profilePicture}
//                       alt={admin.name}
//                       className="w-24 h-24 object-cover rounded-sm"
//                     />
//                   </td>
//                   <td className="p-4 font-medium">{admin.name}</td>
//                   <td className="p-4">{admin.designation}</td>
//                   <td className="p-4">{admin.email}</td>
//                   <td className="p-4">{admin.address}</td>
//                   <td className="p-4">{admin.phone || "-"}</td>
//                   <td className="p-4">{admin.fax || "-"}</td>
//                   <td className="p-4">{admin.roomNo || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDirectory;

"use client";
import React from "react";

const ContactDirectory: React.FC = () => {
  const ayushData = [
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/150",
      name: "Shri Dinesh Kumar Ahirwaa",
      designation: "District Ayush Officer",
      email: "dm123@gmail.com",
      address: "Collector Office Vivekananda Chauraha Sanchi Road Vidisha",
      phone: "7592234520",
      roomNo: "101",
    },
  ];

  const nicData = [
    {
      id: 2,
      profilePicture: "https://via.placeholder.com/150",
      name: "Shri M.L Ahirwar",
      designation: "District Informatics-officer",
      email: "mpvid@nic.in",
      address: "",
      phone: "75922235229",
      roomNo: "76",
    },
  ];

  const transportData = [
    {
      id: 3,
      profilePicture: "https://via.placeholder.com/150",
      name: "Shri Ramesh Gupta",
      designation: "Transport Officer",
      email: "ramesh.transport@vidisha.in",
      address: "Transport Office, Vidisha",
      phone: "9876543210",
      fax: "123456789",
      roomNo: "23",
    },
  ];

  const renderTableRows = (data: any[]) =>
    data.map((item) => (
      <tr key={item.id} className="border-b hover:bg-gray-50">
        <td className="p-4">
          {item.profilePicture ? (
            <img
              src={item.profilePicture}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-sm"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </td>
        <td className="p-4 font-medium">{item.name}</td>
        <td className="p-4">{item.designation}</td>
        <td className="p-4">{item.email}</td>
        <td className="p-4">{item.address || "-"}</td>
        <td className="p-4">{item.phone || "-"}</td>
        {item.fax !== undefined ? <td className="p-4">{item.fax || "-"}</td> : null}
        <td className="p-4">{item.roomNo || "-"}</td>
      </tr>
    ));

  return (
    <div>
      {/* Ayush Officer Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-black">District Ayush Officer Department</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Profile Picture</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Designation</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Room No</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(ayushData)}</tbody>
          </table>
        </div>
      </div>

      {/* NIC Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-black">National Informatics Centre Vidisha</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Profile Picture</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Designation</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Room No</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(nicData)}</tbody>
          </table>
        </div>
      </div>

      {/* Transport Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-black">Transport</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Profile Picture</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Designation</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Address</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Fax</th>
                <th className="p-4 text-left">Room No</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(transportData)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactDirectory;
