import React from "react";
import BillingDate from "../../components/BillingDate";
import DoughnutChartSection from "../../components/DoughnutChartSection";
import History from "../../components/History";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardUser() {
  return (
    <div className="flex w-screen h-[1024px] App bg-[#F3F3F3]">
      <Sidebar />
      <div className="">
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
