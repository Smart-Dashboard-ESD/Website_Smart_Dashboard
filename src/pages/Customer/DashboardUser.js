import React from "react";
import BillingDate from "../../components/BillingDate";
import DoughnutChartSection from "../../components/DoughnutChartSection";
import History from "../../components/History";
import Header from "../../components/Header";

export default function DashboardUser() {
  return (
    <div className="h-screen default:w-[1150px]">
      <Header />
      <div className="flex ml-[15px]">
        <DoughnutChartSection />
        <BillingDate />
      </div>
      <History />
    </div>
  );
}
