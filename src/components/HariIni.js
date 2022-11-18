import React from "react";
import DoughnutChartHari from "./Chart/DoughnutChartHari";
import LineChartHari from "./Chart/LineChartHari";
import ButtonDetail from "./ButtonDetail";

import ChartLegendHari from "./ChartLegendHari";

export default function HariIni(props) {
  return (
    <>
      <DoughnutChartHari />
      <ChartLegendHari />
      <ButtonDetail status={props.msg} />
    </>
  );
}
