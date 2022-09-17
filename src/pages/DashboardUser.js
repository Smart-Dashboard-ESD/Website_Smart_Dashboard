import React from "react";
import BillingDate from "../components/BillingDate";
import DoughnutChartSection from "../components/DoughnutChartSection";

export default function DashboardUser() {
  return (
    <div className="ml-[15px]">
      <div className="flex">
        <DoughnutChartSection />
        <BillingDate />
      </div>
    </div>
  );
}
