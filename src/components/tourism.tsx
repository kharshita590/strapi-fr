"use client";
import React from "react";
import "../app/wave.css";
import Park from "./park";
import Temple from "./temple";
import Temple2 from "./temple-2";
const Tourism: React.FC = () => {
       

  return (
    <div className=" py-8 mt-12" >
       <Park/>
       <Temple2/>
       <Temple/>
    </div>
  );
};

export default Tourism;
