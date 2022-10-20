import React from "react";

export default function ChartLegend() {
  return (
    <div className="absolute xl:flex default:flex default:flex-col right-0 default:mt-[15px] xl:mt-[30px] mr-[50px] default:w-[177px] xl:w-[300px] default:h-[180px]">
      <div className="default:border-b default:border-Greyscale-Normal">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Weekday
          </h1>
          <div className="w-[10px] h-[10px] bg-Success-LightActive"></div>
        </div>
        <h2 className="font-medium text-base text-[#242424]">150 m3</h2>
        <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
          Penggunaan Weekday dihitung mulai dari :<br />
          Senin - Jumat
        </p>
      </div>
      <div className="default:mt-[15px] default:ml-0 xl:ml-[15px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Weekend
          </h1>
          <div className="w-[10px] h-[10px] bg-Warning-Normal"></div>
        </div>
        <h2 className="font-medium text-base text-[#242424]">130 m3</h2>
        <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
          Penggunaan Weekend dihitung mulai dari :<br />
          Sabtu - Minggu
        </p>
      </div>
    </div>
  );
}
