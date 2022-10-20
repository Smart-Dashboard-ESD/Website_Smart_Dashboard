import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
Chart.register(ArcElement, Tooltip);

export default function DoughnutChartMinggu() {
  return (
    <div className="absolute left-0 ml-[77px] default:mt-7 xl:mt-6 default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]">
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
      <div className="absolute z-10 default:top-[60px] default:right-[65px] xl:top-[30px] xl:right-[30px] xl:text-[20px] default:text-[31px] font-semibold text-Primary-Normal">
        <CountUp end={280} duration={1} />
        <h1 className="default:text-[20px] xl:text-[10px] font-medium text-Greyscale-Normal ml-4 xl:ml-3 default:-mt-3 xl:-mt-2">
          m3
        </h1>
      </div>
    </div>
  );
}
