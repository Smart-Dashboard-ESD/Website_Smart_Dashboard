import React from "react";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import TableDevice from "../../components/Table Akun/TableDevice";

export default function DataDevice() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3] overflow-y-auto">
      <SidebarAdmin />
      <div>
        <div className="mt-[30px] ml-[20px]">
          <h1 className="font-semibold text-[20px] text-Black-Normal">
            Data Device
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Berikut merupakan daftar Device yang tersedia !
          </p>
        </div>
        <TableDevice />
      </div>
    </div>
  );
}
