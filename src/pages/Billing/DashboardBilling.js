import React from "react";
import AdvanceStatistikOmset from "../../components/Advance Statistik/AdvanceStatistikOmset";
import Header from "../../components/Header";
import TotalAir from "../../components/Highlight Dashboard/TotalAir";
import TotalCustomer from "../../components/Highlight Dashboard/TotalCustomer";
import TotalOmset from "../../components/Highlight Dashboard/TotalOmset";
import SidebarBilling from "../../components/Sidebar/SidebarBilling";
import DaerahOmsetTerbanyak from "../../components/Statistik Billing/DaerahOmsetTerbanyak";
import KonsumsiTerbanyak from "../../components/Statistik Billing/KonsumsiTerbanyak";

export default function DashboardBilling() {
  return (
    <div className="w-screen default:min-h-screen 2xl:h-[768px] 4xl:h-[1080px] flex bg-[#F3F3F3]">
      <SidebarBilling />
      <div className="">
        <Header />
        <div className="flex">
          <TotalCustomer />
          <TotalOmset />
          <TotalAir />
        </div>
        <h1 className="default:text-[20px] font-semibold text-Black-Normal default:mt-[30px] default:ml-[46px]">
          Statistik Billing
        </h1>
        <div className="flex default:ml-[46px] default:gap-x-[50px] default:mt-[25px]">
          <DaerahOmsetTerbanyak />
          <KonsumsiTerbanyak />
        </div>
        <h1 className="default:ml-[46px] default:mt-[20px] font-semibold default:text-[20px] text-Black-Normal">
          Advance Statistik Omset
        </h1>
        <AdvanceStatistikOmset />
      </div>
    </div>
  );
}
