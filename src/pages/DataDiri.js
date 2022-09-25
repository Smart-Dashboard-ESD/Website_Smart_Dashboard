import React from "react";
import FormDataDiri from "../components/FormDataDiri";
import PaginationDataDiri from "../components/PaginationDataDiri";
import SidebarAlt from "../components/SidebarAlt";

export default function DataDiri() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3]">
      <SidebarAlt />
      <div>
        <PaginationDataDiri />
        <FormDataDiri />
      </div>
    </div>
  );
}
