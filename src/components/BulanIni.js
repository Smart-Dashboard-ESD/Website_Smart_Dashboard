import React from "react";
import DoughnutChartBulan from "./Chart/DoughnutChartBulan";
// import ChartLegend from "./ChartLegendBulan";
import PaginationChart from "./PaginationChart";

export default function BulanIni() {
  return (
    <>
      <DoughnutChartBulan />
      <PaginationChart />
    </>
  );
}
