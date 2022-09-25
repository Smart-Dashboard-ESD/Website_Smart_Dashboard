import React from "react";
import BillingDate from "../components/BillingDate";
import DoughnutChartSection from "../components/DoughnutChartSection";
import History from "../components/History";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardUser() {
  return (
    <div className="flex w-screen h-screen App bg-Primary-Light">
      <Sidebar />
      <div className="w-[1150px]">
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
