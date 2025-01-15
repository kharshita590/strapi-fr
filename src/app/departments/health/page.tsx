import React from "react";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Health from "@/components/health";
import Logo from '@/components/logo';
const HealthPage:React.FC=()=>{
    return(
        <div>
          <Logo/>
      <Header/>
      <Nav/>
      <Health/>
      {/* <CMO/> */}
        </div>
    )
}
export default HealthPage;