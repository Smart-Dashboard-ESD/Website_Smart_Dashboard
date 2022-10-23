import React from "react";
import BillingDate from "../../components/BillingDate";
import DoughnutChartSection from "../../components/DoughnutChartSection";
import History from "../../components/History";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardUser() {
  return (
    <div className="flex w-screen default:min-h-screen 2xl:h-[70px] 4xl:h-[1080px] App bg-[#F3F3F3]">
      <Sidebar />
      <div className="h-screen default:w-[1150px]">
        <Header />
        <div className="flex ml-[15px]">
          <DoughnutChartSection />
          <BillingDate />
        </div>
        <History />
      </div>
    </div>
  );
}
