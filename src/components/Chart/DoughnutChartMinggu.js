import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
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
    </div>
  );
}
