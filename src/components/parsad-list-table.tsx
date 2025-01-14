"use client"
import React,{useState,useEffect} from "react";


const ParshadListTable: React.FC = () => {
  const [data,setData]=useState<any[]>([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/parshad-lists?populate=*");
        const result = await response.json()

        if(result.data){
            const formattedData=result.data.map((item:any,index:any)=>({
                id:item.sno,
                wardNo:item.ward_no,
                name:item.name,
                designation:item.position,
                phone:item.mobile_no,
            }))
            setData(formattedData);
        }        
      }catch(error:any){
        console.log(error)
    }

    }
    fetchData()
},[]);
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
              <tr key={admin.id} className="border-b hover:bg-gray-50">
                 <td className="p-4 font-medium">{admin.id}</td>
                 <td className="p-4 font-medium">{admin.wardNo}</td>
                 <td className="p-4 font-medium">{admin.name}</td>
                <td className="p-4">{admin.designation}</td>
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