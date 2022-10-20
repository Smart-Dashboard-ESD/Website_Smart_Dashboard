import React from "react";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import TableAkunAdmin from "../../components/Table Akun/TableAkunAdmin";

export default function DataAkunAdmin() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3] overflow-y-auto">
      <SidebarAdmin />
      <div>
        <div className="default:mt-[30px] default:ml-[20px]">
          <h1 className="font-semibold default:text-[20px] text-Black-Normal">
            Data Admin
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Edit dan kelola data diri akun admin disini !
          </p>
        </div>
        <TableAkunAdmin />
      </div>
    </div>
  );
}
