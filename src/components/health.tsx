"use client";
import React, { useEffect, useState } from "react";

const Health: React.FC = () => {
  const [healthData, setHealthData] = useState<null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/healthss?populate=*"); 
        const result = await response.json();

        if (result.data && result.data.length > 0) {
          setHealthData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching health data:", error);
      }
    };

    fetchData();
  }, []);

  if (!healthData) {
    return <p>Loading...</p>; 
  }


  const { Health, vidhishaContent, scheme, infra } = healthData;

  const renderParagraphs = (content: any[]) =>
    content.map((item: any, index: number) => (
      <p key={index} className="text-black text-[16px]">
        {item.children?.map((child: any) => child.text).join("") || ""}
      </p>
    ));

  return (
    <div className="p-24 space-y-4">
      <h1 className="text-black font-bold text-3xl">
        {Health[0]?.children[0]?.text || "Health"}
      </h1>
      {renderParagraphs(Health.slice(1))}
   
      
   
    </div>
  );
};

export default Health;
