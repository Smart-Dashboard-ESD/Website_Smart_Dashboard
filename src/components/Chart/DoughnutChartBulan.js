import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
Chart.register(ArcElement, Tooltip);

export default function DoughnutChartBulan() {
  return (
    <div className="absolute left-0 ml-[77px] mt-7">
      <Doughnut
        data={{
          labels: [
            "Penggunaan Minggu 1",
            "Penggunaan Minggu 2",
            "Penggunaan Minggu 3",
            "Penggunaan Minggu 4",
          ],
          datasets: [
            {
              label: "Penggunaan Air",
              data: [150, 130, 150, 130],
              backgroundColor: [
                "rgba(251, 222, 179, 1)",
                "rgba(241, 189, 182, 1)",
                "rgba(2, 182, 197, 1)",
                "rgba(184, 215, 232, 1)",
              ],
              borderColor: [
                "rgba(251, 222, 179, 1)",
                "rgba(241, 189, 182, 1)",
                "rgba(2, 182, 197, 1)",
                "rgba(184, 215, 232, 1)",
              ],
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
      <div className="absolute z-10 top-[60px] right-[58px] text-[31px] font-semibold text-Primary-Normal">
        <CountUp end={1280} duration={1} />
        <h1 className="text-[20px] font-medium text-Greyscale-Normal ml-6 -mt-3">
          m3
        </h1>
      </div>
    </div>
  );
}
