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
            className="relative cursor-pointer flex items-center gap-2"
            onMouseEnter={() => toggleDropdown("ज़िला")}
            onMouseLeave={() => toggleDropdown("ज़िला")}
          >
            ज़िला
            {dropdowns["ज़िला"] ? (
              <ChevronUpIcon className="h-5 w-5 text-white" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-white" />
            )}
            {dropdowns["ज़िला"] && (
              <ul className="absolute top-full left-0 bg-white text-black rounded shadow-lg py-2 z-20 w-40">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/district/tour">पर्यटन</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/district">परिचय</Link>
                </li>

                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/parshad-list">पार्षद सूची</Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer flex items-center gap-2"
            onMouseEnter={() => toggleDropdown("विभागों")}
            onMouseLeave={() => toggleDropdown("विभागों")}
          >
            विभागों
            {dropdowns["विभागों"] ? (
              <ChevronUpIcon className="h-5 w-5 text-white" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-white" />
            )}
            {dropdowns["विभागों"] && (
              <ul className="absolute top-full left-0 bg-white text-black rounded shadow-lg py-2 z-20 w-40">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/departments/health">स्वास्थ्य</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="departments/more">अन्य</Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer flex items-center gap-2"
            onMouseEnter={() => toggleDropdown("निर्देशिका")}
            onMouseLeave={() => toggleDropdown("निर्देशिका")}
          >
            निर्देशिका
            {dropdowns["निर्देशिका"] ? (
              <ChevronUpIcon className="h-5 w-5 text-white" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-white" />
            )}
            {dropdowns["निर्देशिका"] && (
              <ul className="absolute top-full left-0 bg-white text-black rounded shadow-lg py-2 z-20 w-40">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/directory/contact-directory">संपर्क निर्देशिका</Link>
                </li>
               
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/directory/STD">स.टी.डी कोड</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/directory">निर्देशिका</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
