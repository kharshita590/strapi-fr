"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  type DropdownKey = "ज़िला" | "विभागों" | "निर्देशिका";

  const [dropdowns, setDropdowns] = useState<Record<DropdownKey, boolean>>({
    ज़िला: false,
    विभागों: false,
    निर्देशिका: false,
  });

  const toggleDropdown = (menu: DropdownKey) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div>
      <nav className="bg-[#00008B] text-white font-bold py-6 relative z-10">
        <ul className="flex justify-center gap-8 text-sm font-bold relative">
          <li>
            <Link href="/">होम</Link>
          </li>

          <li
          >
             <Link href="/district/tour">पर्यटन</Link> 
            
                {/* <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/district">परिचय</Link>
                </li> */}

               
          </li>

          <li>
          <Link href="/parshad-list"> पार्षद सूची</Link> 
          </li>

          <li
          >
           <Link href="/sewaye">सेवाएं</Link> 
           
          </li>

          <li
          >
           <Link href="/directory/STD">     स.टी.डी कोड</Link> 
           
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
