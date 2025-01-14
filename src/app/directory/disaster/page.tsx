import React from "react";
import DisasterManagement from "@/components/disaster-management";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Logo from '@/components/logo';
const ContactD:React.FC=()=>{
    return(
        <div>
            <Logo/>
            <Header/>
            <Nav/>
     <DisasterManagement/>
        </div>
    )

}
export default ContactD;