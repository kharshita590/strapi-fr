import React from "react";

const Hero = () => {
  return (
    <div className="">

   

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow p-4 text-center">
          <img src="/images/d2.jpeg" alt="Home" className="h-12 w-12 mx-auto" />
          <p className="text-sm mt-2 text-black">Home</p>
        </div>
        <div className="bg-white shadow p-4 text-center">
          <img
            src="images/b.jpeg"
            alt="Property"
            className="h-12 w-12 mx-auto"
          />
          <p className="text-sm mt-2 text-black">Property</p>
        </div>
        <div className="bg-white shadow p-4 text-center">
          <img src="/path-to-icon3.png" alt="Service" className="h-12 w-12 mx-auto" />
          <p className="text-sm mt-2 text-black">Service</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
