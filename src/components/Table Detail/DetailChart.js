import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import CountUp from "react-countup";
import axios from "axios";
Chart.register(ArcElement, Tooltip);

export default function DetailChart() {
  // let [data, setData] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_API_ENDPOINT + "/users/devices")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data.waterMeter.ForwardFlow);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="flex items-center justify-center gap-x-14">
      <div className="left-0 ml-[77px] default:mt-7 xl:mt-6 default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]">
        <div className="flex flex-col items-center justify-center">
          <Doughnut
            className=" default:w-[190px] default:h-[190px] xl:w-[100px] xl:h-[100px]"
            data={{
              labels: ["Penggunaan Malam", "Penggunaan Pagi"],
              datasets: [
                {
                  label: "Penggunaan Air",
                  data: [100, 100],
                  backgroundColor: [
                    "rgba(2, 164, 177, 1)",
                    "rgba(184, 215, 232, 1)",
                  ],
                  borderColor: [
                    "rgba(2, 164, 177, 1)",
                    "rgba(184, 215, 232, 1)",
                  ],
                  cutout: "70%",
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
            }}
          />
          <div className="absolute z-0 default:flex default:items-center default:justify-center default:flex-col default:text-[31px] font-semibold text-Primary-Normal">
            <CountUp end={100} duration={1} />
            <h1 className="default:text-[20px] xl:text-[10px] font-medium text-Greyscale-Normal ml-4 xl:ml-3 default:-mt-3 xl:-mt-2">
              m3
            </h1>
          </div>
        </div>
      </div>
      <div className="xl:flex default:flex default:flex-col right-0 default:mt-[15px] xl:mt-[30px] mr-[50px] default:w-[177px] xl:w-[300px] default:h-[180px]">
        <div className="default:border-b default:border-Greyscale-Normal">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-[10px] font-semibold text-Info-NormalHover">
              Penggunaan Pagi
            </h1>
            <div className="w-[10px] h-[10px] bg-Primary-Light"></div>
          </div>
          <h2 className="font-medium text-base text-[#242424]">100 m3</h2>
          <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
            Penggunaan Pagi dihitung mulai dari :<br />
            00.00 - 12.00
          </p>
        </div>
        <div className="default:mt-[15px] default:ml-0 xl:ml-[15px]">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-[10px] font-semibold text-Info-NormalHover">
              Penggunaan Malam
            </h1>
            <div className="w-[10px] h-[10px] bg-Info-NormalHover"></div>
          </div>
          <h2 className="font-medium text-base text-[#242424]">100 m3</h2>
          <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
            Penggunaan Pagi dihitung mulai dari :<br />
            12.01 - 23.59
          </p>
        </div>
      </div>
    </div>
  );
}
