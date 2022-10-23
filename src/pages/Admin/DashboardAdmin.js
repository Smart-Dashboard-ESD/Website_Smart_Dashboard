import React from "react";
import Header from "../../components/Header";
import TotalAir from "../../components/Highlight Dashboard/TotalAir";
import TotalCustomer from "../../components/Highlight Dashboard/TotalCustomer";
import TotalOmset from "../../components/Highlight Dashboard/TotalOmset";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import CustomerTerbanyak from "../../components/Statistik Customer/CustomerTerbanyak";
import PenggunaTerbanyak from "../../components/Statistik Customer/PenggunaTerbanyak";
import RataRataPenggunaan from "../../components/Advance Statistik/RataRataPenggunaan";
import HargaAirTerkini from "../../components/Advance Statistik/HargaAirTerkini";

export default function DashboardAdmin() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3] overflow-y-auto">
      <SidebarAdmin />
      <div>
        <Header />
        <div className="flex">
          <TotalCustomer />
          <TotalOmset />
          <TotalAir />
        </div>
        <h1 className="text-[20px] font-semibold text-Black-Normal mt-[30px] ml-[46px]">
          Statistik Customer
        </h1>
        <div className="flex mt-[25px]">
          <CustomerTerbanyak />
          <PenggunaTerbanyak />
        </div>
        <h1 className="text-[20px] font-semibold text-Black-Normal mt-[30px] ml-[46px]">
          Advance Statistik Customer
        </h1>
        <div className="flex mt-[19px] default:ml-[42px] 2xl:ml-[30px]">
          <RataRataPenggunaan />
          <HargaAirTerkini />
        </div>
      </div>
    </div>
  );
}
