"use client"
import React, { useState } from 'react';
import AdministratorTable from '@/components/table-data';
import Header from '@/components/header';
import PoliceAdministratorTable from '@/components/police-admin';
import Nav from '@/components/nav';
import Logo from '@/components/logo';
const District=()=> {

  return (
 <div>
    <Logo/>
    <Header/>
    <Nav/>
   <AdministratorTable/>
   <PoliceAdministratorTable/>
 </div>
  );
};

export default District;
