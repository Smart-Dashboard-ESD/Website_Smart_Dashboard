import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
Chart.register(ArcElement, Tooltip);

export default function DoughnutChartMinggu() {
  return (
    <div className="absolute left-0 ml-[77px] mt-7">
      <Doughnut
        data={{
          labels: ["Penggunaan Weekday", "Penggunaan Weekend"],
          datasets: [
            {
              label: "Penggunaan Air",
              data: [250, 130],
              backgroundColor: [
                "rgba(214, 227, 179, 1)",
                "rgba(243, 150, 10, 1)",
              ],
              borderColor: ["rgba(214, 227, 179, 1)", "rgba(243, 150, 10, 1)"],
              cutout: "70%",
            },
          ],
        }}
        width={190}
        height={190}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
      <div className="absolute z-10 top-[60px] right-[65px] text-[31px] font-semibold text-Primary-Normal">
        <CountUp end={280} duration={1} />
        <h1 className="text-[20px] font-medium text-Greyscale-Normal ml-4 -mt-3">
          m3
        </h1>
      </div>
    </div>
  );
}
