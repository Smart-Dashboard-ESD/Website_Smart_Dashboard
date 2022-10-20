import React from "react";

export default function ChartLegendBulan2() {
  return (
    <div className="absolute xl:flex right-0 default:flex default:flex-col default:mt-[15px] xl:mt-[30px] mr-[50px] default:w-[177px] xl:w-[300px] default:h-[180px]">
      <div className="default:border-b default:border-Greyscale-Normal">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Minggu 3
          </h1>
          <div className="w-[10px] h-[10px] bg-Info-NormalHover"></div>
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
            Penggunaan Minggu 4
          </h1>
          <div className="w-[10px] h-[10px] bg-Primary-LightActive"></div>
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
