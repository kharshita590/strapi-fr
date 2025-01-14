import React, { useEffect, useState } from "react";

type Section = {
  type: string;
  children: { type: string; text: string }[];
};

type SironjData = {
  id: number;
  documentId: string;
  sironj: Section[];
};

const Info = () => {
  const [data, setData] = useState<SironjData[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch("https://strapi-sample-nzhn.onrender.com/api/sironj-ke-bares?populate=*"); 
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {data.map((section) => (
          <section key={section.id}>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="mr-2">{section.sironj[0]?.children[0]?.text}</span>
              <span className="w-full h-px bg-yellow-400"></span>
            </h2>
            <p className="text-base leading-relaxed">
              {section.sironj[1]?.children[0]?.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Info;
