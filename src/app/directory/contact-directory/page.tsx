import React from "react";
import ContactDirectory from "@/components/contact-directory";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Logo from '@/components/logo';
const ContactD:React.FC=()=>{
    return(
        <div>
            <Logo/>
            <Header/>
            <Nav/>
     <ContactDirectory/>
        </div>
    )

}
export default ContactD;