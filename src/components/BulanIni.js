import React from "react";
import DoughnutChartBulan from "./Chart/DoughnutChartBulan";
// import ChartLegend from "./ChartLegendBulan";
import PaginationChart from "./PaginationChart";
import ButtonDetail from "./ButtonDetail";

export default function BulanIni(props) {
  return (
    <>
      <DoughnutChartBulan />
      <PaginationChart />
      <ButtonDetail status={props.msg} />
    </>
  );
}
