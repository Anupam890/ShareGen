import React from "react";
import SideNav from "../_components/SideNav";
import TopNavbar from "../_components/TopNavbar";

function layout({ children }) {
  return (
    <div>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <TopNavbar />
        {children}
      </div>
    </div>
  );
}

export default layout;
