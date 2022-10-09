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
    <div className="w-screen h-screen flex bg-[#F3F3F3]">
      <SidebarAdmin />
      <div>
        <Header />
        <div className="flex">
          <TotalCustomer />
          <TotalOmset />
          <TotalAir />
        </div>
        <h1 className="default:text-[20px] font-semibold text-Black-Normal default:mt-[30px] default:ml-[46px]">
          Statistik Customer
        </h1>
        <div className="flex default:mt-[25px]">
          <CustomerTerbanyak />
          <PenggunaTerbanyak />
        </div>
        <h1 className="default:text-[20px] font-semibold text-Black-Normal default:mt-[30px] default:ml-[46px]">
          Advance Statistik Customer
        </h1>
        <div className="flex default:mt-[19px] default:ml-[42px]">
          <RataRataPenggunaan />
          <HargaAirTerkini />
        </div>
      </div>
    </div>
  );
}
