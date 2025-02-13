import React from "react";

const Phone = () => {
  return (
    <div className="py-8 mt-12 px-6">
      <div
        className="max-w-5xl mx-auto shadow-lg rounded-lg border border-gray-300 bg-gradient-to-r "
      >
        <h1 className="text-4xl font-bold text-white bg-[#00008B] py-4 text-center rounded-t-lg">
          आपकी नगर पालिका आपके फोन पर
        </h1>
        <div className="flex flex-col lg:flex-row items-center p-6">
          <div className="lg:w-1/2">
            <img
              src="images/vidhayak.png"
              alt="Vidhayak"
              className="w-48 h-48 lg:w-3/4 lg:h-80 object-cover lg:ml-14 rounded-full lg:rounded-lg border-4 border-[#fff152]"
            />
            <div className="flex flex-col justify-center items-center mt-4 ">
                <h1 className="text-xl font-bold">श्री उमाकांत शर्मा</h1>
                <p className="font-bold text-red-700">विधायक</p>
            </div>

          </div>
          <div className="w-full lg:flex lg:flex-col lg:items-end lg:justify-end lg:pl-12">
            <p className="text-xl mb-6 mt-12 text-black font-semibold text-center lg:mt-0">
              नगर पालिका से संबंध निम्न सभी करी हेल्पलाइन नंबर से करा सकते हैं:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
              {[
                "स्वच्छता से संबंधित कार्य",
                "मृत्यु प्रमाण पत्र (21 दिन से अंदर वाला)",
                "आगजनी की घटना होने पर",
                "किसी भी सार्वजनिक जगह पर किसी भी मृत/असहज पशु की सूचना आदि",
                "स्ट्रीट लाइट अगर खराब हो (8871255005 ई स्मार्ट सॉल्यूशन प्रति कॉल करें)",
                "नलो में पानी नहीं आ रहा हो अथवा गंदा पानी आ रहा हो",
                "शव वाहन की आवश्यकता होने पर",
              ].map((text, index) => (
                <p
                  key={index}
                  className="text-lg font-medium text-[#ff1c1c] flex items-start"
                >
                  <span className="mr-2 text-[#00008B]">•</span> {text}
                </p>
              ))}
              <div className="flex lg:text-2xl text-sm font-bold text-black space-x-4">
             <p>📞 07591-253379</p>
              
              <p>📞 7649854500</p>
              </div>
              
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
