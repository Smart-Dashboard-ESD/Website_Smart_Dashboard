import React from "react";
import DoughnutChartMinggu from "./Chart/DoughnutChartMinggu";
import ChartLegend from "./ChartLegendMinggu";
import ButtonDetail from "./ButtonDetail";

export default function MingguIni(props) {
  console.log(props.msg);
  return (
    <>
      <DoughnutChartMinggu />
      <ChartLegend />
      <ButtonDetail status={props.msg} />
    </>
  );
}
