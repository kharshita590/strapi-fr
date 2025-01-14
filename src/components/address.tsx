import React from "react";

const Address = () => {
  return (
<main className="">

<div className="bg-[#00008B] text-white px-4 py-2 rounded-t-lg flex items-center">
        <span className="text-xl font-bold">गूगल मैप</span>
      </div>
<div className="flex flex-col justify-center items-center  ">

<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29134.98452644739!2d77.65373794332044!3d24.105958942688492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397bc398852429cf%3A0xcf55be55b34fe2fe!2sSironj%2C%20Madhya%20Pradesh%20464228!5e0!3m2!1sen!2sin!4v1736830544172!5m2!1sen!2sin" 
width="400" 
height="350" 
style={{ border: 0 }}
allowFullScreen
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>

</main>
  );
};

export default Address;
