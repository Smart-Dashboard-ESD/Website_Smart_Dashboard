import React from "react";
import ButtonDetail from "./ButtonDetail";
import Dropdown from "./Dropdown/Dropdown";

export default function DoughnutChartSection() {
  return (
    <div className="default:w-[603px] default:h-[350px] xl:w-[593px] xl:h-[230px] bg-white rounded drop-shadow-sm">
      <h1 className="default:pt-[28px] xl:pt-[20px] ml-5 font-medium default:text-xl xl:text-base text-[#242424]">
        Distribusi Konsumsi
      </h1>
      <Dropdown />
      <div className="absolute border-t bottom-0 border-Greyscale-Normal w-[552px] xl:h-[43px] default:h-[63px] mx-[25px] flex justify-between items-center">
        <h1 className="text-sm font-medium text-[#242424]">
          lorem ipsum dolor sit amet
        </h1>
        <ButtonDetail />
      </div>
    </div>
  );
}
