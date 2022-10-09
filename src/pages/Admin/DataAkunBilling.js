import React from "react";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import TableAkunBilling from "../../components/Table Akun/TableAkunBilling";

export default function DataAkunBilling() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3]">
      <SidebarAdmin />
      <div>
        <div className="default:mt-[30px] default:ml-[20px]">
          <h1 className="font-semibold default:text-[20px] text-Black-Normal">
            Data Billing
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Edit dan kelola data diri akun billing mu disini !
          </p>
        </div>
        <TableAkunBilling />
      </div>
    </div>
  );
}
