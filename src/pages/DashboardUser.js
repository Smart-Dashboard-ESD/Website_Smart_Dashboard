import React from "react";
import BillingDate from "../components/BillingDate";
import DoughnutChartSection from "../components/DoughnutChartSection";
import History from "../components/History";

export default function DashboardUser() {
  return (
    <div className="ml-[15px]">
      <div className="flex">
        <DoughnutChartSection />
        <BillingDate />
      </div>
      <History />
    </div>
  );
}
