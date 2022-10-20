import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
Chart.register(ArcElement, Tooltip);

export default function DoughnutChartHari() {
  return (
    <div className="absolute left-0 ml-[77px] default:mt-7 xl:mt-6 default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]">
      <div className="z-0">
        <Doughnut
          className="default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]"
          data={{
            labels: ["Penggunaan Malam", "Penggunaan Pagi"],
            datasets: [
              {
                label: "Penggunaan Air",
                data: [250, 130],
                backgroundColor: [
                  "rgba(2, 164, 177, 1)",
                  "rgba(184, 215, 232, 1)",
                ],
                borderColor: ["rgba(2, 164, 177, 1)", "rgba(184, 215, 232, 1)"],
                cutout: "70%",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="absolute z-10 default:top-[60px] default:right-[65px] xl:top-[30px] xl:right-[30px] xl:text-[20px] default:text-[31px] font-semibold text-Primary-Normal">
        <CountUp end={280} duration={1} />
        <h1 className="default:text-[20px] xl:text-[10px] font-medium text-Greyscale-Normal ml-4 xl:ml-3 default:-mt-3 xl:-mt-2">
          m3
        </h1>
      </div>
    </div>
  );
}
