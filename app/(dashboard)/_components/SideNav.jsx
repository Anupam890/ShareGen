"use client";
import { Files, Settings, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

function SideNav() {
    const [active,setActive] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: UploadCloud,
      link: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: Files,
      link: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Settings,
      link: "/upgrade",
    },
  ];
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="shadow-sm border-r h-full">
      <div className="image p-5 border-b mb-5">
        <Image src={"/logo.svg"} width={60} height={40} />
      </div>
      <div className="menu flex flex-col float-left w-full">
        {menuList.map((item, key) => (
          <button key={key} className={`flex gap-2 p-4 px-6 hover:bg-gray-100 text-gray-500 ${active === key ? 'bg-gray-100 text-blue-500' : null}`}
          onClick={()=>setActive(key)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
