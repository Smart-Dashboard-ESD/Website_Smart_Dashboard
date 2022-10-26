import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
import axios from "axios";
Chart.register(ArcElement, Tooltip);

export default function DoughnutChartHari() {
  let [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/users/devices")
      .then((res) => {
        console.log(res.data);
        setData(res.data.waterMeter.ForwardFlow);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="absolute left-0 ml-[77px] default:mt-7 xl:mt-6 default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]">
      <div className="flex flex-col items-center justify-center">
        <Doughnut
          className=" default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]"
          data={{
            labels: ["Penggunaan Malam", "Penggunaan Pagi"],
            datasets: [
              {
                label: "Penggunaan Air",
                data: [data, data],
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
        <div className="absolute z-0 default:flex default:items-center default:justify-center default:flex-col default:text-[31px] font-semibold text-Primary-Normal">
          <CountUp end={data} duration={1} />
          <h1 className="default:text-[20px] xl:text-[10px] font-medium text-Greyscale-Normal ml-4 xl:ml-3 default:-mt-3 xl:-mt-2">
            m3
          </h1>
        </div>
      </div>
    </div>
  );
}
