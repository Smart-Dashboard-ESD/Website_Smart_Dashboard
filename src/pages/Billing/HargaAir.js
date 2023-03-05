import React from "react";
import SidebarBilling from "../../components/Sidebar/SidebarBilling";
import TableHargaAir from "../../components/TableHargaAir";

export default function HargaAir() {
  return (
    <div className="w-screen default:min-h-screen 2xl:h-[768px] 4xl:h-[1080px] flex bg-[#F3F3F3]">
      <SidebarBilling />
      <div className="">
        <div className="mt-[30px] ml-[20px]">
          <h1 className="font-semibold text-[20px] text-Black-Normal">
            Harga Air
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Cek detail data harga air per daerah disini !
          </p>
        </div>
        <TableHargaAir />
      </div>
    </div>
  );
}
