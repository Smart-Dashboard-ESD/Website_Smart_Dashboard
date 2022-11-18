import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import CountUp from "react-countup";
import axios from "axios";
import ChartLegendHari from "../ChartLegendHari";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChartHari() {
  return (
    <div className="left-0 ml-[77px] default:mt-7 xl:mt-6 default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]">
      <div className="flex flex-col items-center justify-center">
        <Line
          className=" default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]"
          data={{
            labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
            datasets: [
              {
                label: "Daily Water Usage",
                data: [2.22, 2.35, 2.5, 2.59],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
        <ChartLegendHari />
      </div>
    </div>
  );
}
