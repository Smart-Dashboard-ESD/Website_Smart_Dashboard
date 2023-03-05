import React from "react";
import DoughnutChartHari from "./Chart/DoughnutChartHari";
import LineChartHari from "./Chart/LineChartHari";
import ButtonDetail from "./ButtonDetail";
import ButtonDetailCam from "./ButtonDetailCam";

import ChartLegendHari from "./ChartLegendHari";

export default function HariIni(props) {
  return (
    <>
      <DoughnutChartHari />
      <ChartLegendHari />
      {/* <ButtonDetailCam /> */}

      <ButtonDetail status={props.msg} />
    </>
  );
}
