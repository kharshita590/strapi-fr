// "use client"
// import React,{useState,useEffect} from "react";
// import Header from "@/components/header";
// import Nav from "@/components/nav";
// import Logo from '@/components/logo';
// const More = () => {
//   const [data,setData]=useState<any>(null);
//   useEffect(()=>{
//     const fetchData = async()=>{
//       try{
//         const response = await fetch("http://localhost:1337/api/mores?populate=*");
//         const result = await response.json();
//         // const formattedData=result.data.map((item:any,index:any)=>({
//         //   id:item.id,
//         //   name:item.na,
//         //   designation:item.designation,
//         //   email:item.email.trim(),
//         //   address:item.address,
//         //   phone:item.phone,
//         //   room:item.room,
//         // }))
//         // setData(formattedData)
//         if(result.data){
//           const moreData = result.data[0];
//           setData(moreData);
//         }
//       }catch(error:any){
//         console.log(error);
//       }
//     }
//     fetchData()
//   },[])
//  if(!data){
//     return <p>Loading..</p>
//  }

//  const {depart}=data;
 
// const renderPara=(content:any[])=>
//   content.map((item:any,index:number)=>(
//     <p key={index} className="text-[16px] text-black">
//       {item.children?.map((child:any)=>child.text).join("")|| ""}
//     </p>
//   ))
//   return (
//     <div className="">
//         <Logo/>
//         <Header/>
//         <Nav/>
//         <main className="p-24 space-y-4">
// <h1 className="text-black font-bold text-3xl">  {depart[0]?.children[0]?.text || "Departments"}</h1>
// {renderPara(depart.slice(1))}
// </main>
//     </div>

//   );
// };

// export default More;
