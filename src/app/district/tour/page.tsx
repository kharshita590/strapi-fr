"use client"
import React, { useState } from 'react';
import AdministratorTable from '@/components/table-data';
import Header from '@/components/header';
import PoliceAdministratorTable from '@/components/police-admin';
import Tourism from '@/components/tourism';
import Nav from '@/components/nav';
import Logo from '@/components/logo';
const Tour=()=> {

  return (
 <div>
    <Logo/>
    <Header/>
    <Nav/>
   <Tourism/>
 </div>
  );
};

export default Tour;
