"use client";
import React from "react";
import "../app/wave.css";
import Park from "./park";
import Temple from "./temple";
import Temple2 from "./temple-2";
import Ganga from "./ganga";
import Dushera from "./dusherra";
import Puja from "./goverdhan";
const Tourism: React.FC = () => {
       

  return (
    <div className=" py-8 mt-12" >
       <Park/>
       <Temple2/>
       <Temple/>
       <Ganga/>
              <Dushera/>
              <Puja/>

    </div>
  );
};

export default Tourism;
