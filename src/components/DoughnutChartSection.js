import React from "react";

import Dropdown from "./Dropdown/Dropdown";

export default function DoughnutChartSection() {
  return (
    <div className="w-[603px] h-[350px] bg-white rounded drop-shadow-sm">
      <h1 className="pt-[28px] ml-5 font-medium text-xl text-Neutral-Normal">
        Distribusi Konsumsi
      </h1>
      <Dropdown />
      <div className="absolute border-t bottom-0 border-Greyscale-Normal w-[552px] h-[63px] mx-[25px] flex justify-between items-center">
        <h1 className="text-sm font-medium text-[#242424]">
          lorem ipsum dolor sit amet
        </h1>
        <button className="w-[90px] h-[36px] border border-Primary-Normal rounded text-Primary-Normal text-sm font-medium">
          View Detail
        </button>
      </div>
    </div>
  );
}
