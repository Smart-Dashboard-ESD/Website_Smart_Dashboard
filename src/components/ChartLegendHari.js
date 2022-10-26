import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChartLegend() {
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
    <div className="absolute xl:flex default:flex default:flex-col right-0 default:mt-[15px] xl:mt-[30px] mr-[50px] default:w-[177px] xl:w-[300px] default:h-[180px]">
      <div className="default:border-b default:border-Greyscale-Normal">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Pagi
          </h1>
          <div className="w-[10px] h-[10px] bg-Primary-Light"></div>
        </div>
        <h2 className="font-medium text-base text-[#242424]">{data} m3</h2>
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
        <h2 className="font-medium text-base text-[#242424]">{data} m3</h2>
        <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
          Penggunaan Pagi dihitung mulai dari :<br />
          12.01 - 23.59
        </p>
      </div>
    </div>
  );
}
