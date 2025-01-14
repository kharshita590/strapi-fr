import React from "react";
import ParshadListTable from "@/components/parsad-list-table";
import Header from "@/components/header";
import Nav from "@/components/nav";
import ParshadCard from "@/components/parshad-card";
import Logo from '@/components/logo';
const ContactD:React.FC=()=>{
    return(
        <div>
            <Logo/>
            <Header/>
            <Nav/>
            <ParshadCard/>
     <ParshadListTable/>
        </div>
    )

}
export default ContactD;