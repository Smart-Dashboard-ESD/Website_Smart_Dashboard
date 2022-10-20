import React from "react";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import TableAkunCustomer from "../../components/Table Akun/TableAkunCustomer";

export default function DataAkunCustomer() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3] overflow-y-auto">
      <SidebarAdmin />
      <div>
        <div className="default:mt-[30px] default:ml-[20px]">
          <h1 className="font-semibold default:text-[20px] text-Black-Normal">
            Data Customer
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Edit dan kelola data customer mu disini !
          </p>
        </div>
        <TableAkunCustomer />
      </div>
    </div>
  );
}
