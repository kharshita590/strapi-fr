import React from "react";

const ServiceCards = () => {
  const services = [
    { name: "प्रमाण पत्र", icon: "📄", bgColor: "bg-blue-300", textColor: "text-black", link: "https://vidisha.nic.in/en/service-category/certificates/" },
    { name: "सामाजिक सुरक्षा", icon: "👨‍👩‍👧‍👦", bgColor: "bg-green-300", textColor: "text-black", link: "https://vidisha.nic.in/en/service-category/social-security/" },
    { name: "नागरिक आपूर्ति", icon: "⚖️", bgColor: "bg-red-300", textColor: "text-black", link: "https://vidisha.nic.in/en/service-category/civil-supply/" },
    { name: "न्यायपालिका", icon: "👩‍⚖️", bgColor: "bg-orange-300", textColor: "text-black", link: "https://vidisha.nic.in/en/service-category/judiciary-cases/" },
    { name: "राजस्व", icon: "📊", bgColor: "bg-gray-300", textColor: "text-gray-900", link: "https://vidisha.nic.in/en/service-category/revenue/" },
    { name: "देयक", icon: "💳", bgColor: "bg-blue-300", textColor: "text-blue-900", link: "https://vidisha.nic.in/en/service-category/bills/" },
  ];

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold mb-6 mt-12">सेवाएं खोजें</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {services.map((service, index) => (
          <a 
            key={index}
            href={service.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center justify-start p-4 rounded-lg shadow-md ${service.bgColor} ${service.textColor}`}
          >
            <div className="text-3xl mr-4">{service.icon}</div>
            <div className="text-lg font-semibold">{service.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
