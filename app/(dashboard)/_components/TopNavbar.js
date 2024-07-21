import React from "react";
import { AlignJustify } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

function TopNavbar() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image src={"/logo.svg"} width={60} height={40}
      alt="logo"
      className="md:hidden"
       />
      <UserButton />
    </div>
  );
}

export default TopNavbar;
