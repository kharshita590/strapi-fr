"use client";
import React, { useEffect, useState } from "react";

const OrganisationChart: React.FC = () => {
  const [orgChartData, setOrgChartData] = useState<null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/organisation-charts"); 
        const result = await response.json();
        
        if (result.data && result.data.length > 0) {
          const organisationData = result.data[0];
          setOrgChartData(organisationData);
        }
      } catch (error) {
        console.error("Error fetching organization chart:", error);
      }
    };

    fetchData();
  }, []);

  if (!orgChartData) {
    return <p>Loading...</p>; 
  }

  const {
    orgchart,
    DistrictCollector,
    AdditionalCollector,
    ChiefExecutiveOfficerZillaPanchayat,
    SubdivisionalMagistrate,
    Tehsildar,
    NayabTehsildar,
    Patwari,
    ceo,
    head,
  } = orgChartData;

  return (
    <div className="p-24 space-y-4">
      <h1 className="text-3xl text-black font-bold">Organisation Chart</h1>
      {orgchart.map((item: any, index: number) => (
        <p key={index} className="text-[16px] text-black">
          {item.children?.map((child: any) => child.text).join("") || ""}
        </p>
      ))}
      <h2 className="text-2xl text-black font-bold mt-4">Organization Structure:</h2>
      <ul className="space-y-2">
        <li className="text-lg text-black font-medium">{DistrictCollector}</li>
        <li className="text-lg text-black font-medium">{AdditionalCollector}</li>
        <li className="text-lg text-black font-medium">{ChiefExecutiveOfficerZillaPanchayat}</li>
        <li className="text-lg text-black font-medium">{SubdivisionalMagistrate}</li>
        <li className="text-lg text-black font-medium">{Tehsildar}</li>
        <li className="text-lg text-black font-medium">{NayabTehsildar}</li>
        <li className="text-lg text-black font-medium">{Patwari}</li>
        <li className="text-lg text-black font-medium">{ceo}</li>
        <li className="text-lg text-black font-medium">{head}</li>
      </ul>
    </div>
  );
};

export default OrganisationChart;
