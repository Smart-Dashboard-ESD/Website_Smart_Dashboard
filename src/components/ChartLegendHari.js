import React from "react";

export default function ChartLegend() {
  return (
    <div className="absolute right-0 mt-[15px] mr-[50px] w-[177px] h-[180px]">
      <div className="border-b border-Greyscale-Normal">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Pagi
          </h1>
          <div className="w-[10px] h-[10px] bg-Primary-Light"></div>
        </div>
        <h2 className="font-medium text-base text-[#242424]">130 m3</h2>
        <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
          Penggunaan Pagi dihitung mulai dari :<br />
          00.00 - 12.00
        </p>
      </div>
      <div className="mt-[15px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[10px] font-semibold text-Info-NormalHover">
            Penggunaan Malam
          </h1>
          <div className="w-[10px] h-[10px] bg-Info-NormalHover"></div>
        </div>
        <h2 className="font-medium text-base text-[#242424]">250 m3</h2>
        <p className="text-[10px] leading-tight text-Greyscale-Normal mb-[9px]">
          Penggunaan Pagi dihitung mulai dari :<br />
          12.01 - 23.59
        </p>
      </div>
    </div>
  );
}
