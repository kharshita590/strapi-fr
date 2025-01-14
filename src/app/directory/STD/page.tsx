import React from "react";
import Header from "@/components/header";
import Nav from "@/components/nav";
import STD from "@/components/std";
import Logo from '@/components/logo';
const STDdata:React.FC=()=>{
    return(
        <div>
            <Logo/>
            <Header/>
            <Nav/>
            <STD/>  
        </div>
    )
}
export default STDdata;