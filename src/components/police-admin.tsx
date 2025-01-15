"use client"
import React,{useState,useEffect} from "react";


const PoliceAdministratorTable: React.FC = () => {
  const [police,setPolice]=useState<any[]>([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch("http://localhost:1337/api/police-admins?populate=*");
        const result = await response.json()

        if(result.data){
            const formattedData=result.data.map((item:any,index:any)=>({
                id:item.id,
                name:item.name?.trim(),
                designation:item.designation?.trim(),
                email:item.email?.trim(),
                address:item.address?.trim(),
                phone:item.phone?.trim(),
                room:item.room?.trim(),
            }))
            setPolice(formattedData);
        }        
      }catch(error:any){
        console.log(error)
    }

    }
    fetchData()
},[])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#00008B]  text-white p-4 mb-4">
        <h1 className="text-xl font-bold">Police Administration</h1>
      </div>
      
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
          <tbody>
            {police.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img 
                    src={admin.profilePicture} 
                    alt={admin.name}
                    className="w-24 h-24 object-cover rounded-sm"
                  />
                </td>
                <td className="p-4 font-medium">{admin.name}</td>
                <td className="p-4">{admin.designation}</td>
                <td className="p-4">{admin.email}</td>
                <td className="p-4">{admin.address}</td>
                <td className="p-4">{admin.phone || '-'}</td>
              
                <td className="p-4">{admin.roomNo || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PoliceAdministratorTable;