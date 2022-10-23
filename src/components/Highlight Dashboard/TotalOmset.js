import React from "react";
import ChartIcon from "../../assets/img/ChartIcon.png";

export default function TotalOmset() {
  return (
    <div className="w-[321px] relative h-[196px] bg-white default:ml-[50px] 2xl:ml-[30px] rounded mt-[13px] flex flex-col items-center justify-center">
      <h1 className="text-[31px] text-Primary-Normal font-bold">
        Rp 212.000.000
      </h1>
      <p className="font-medium text-[20px] text-Greyscale-Normal">
        Total Omset
      </p>
      <img
        src={ChartIcon}
        alt="ChartIcon"
        className="absolute bottom-0 right-0 -z-0"
      />
    </div>
  );
}
