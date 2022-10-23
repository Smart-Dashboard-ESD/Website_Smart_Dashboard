import React from "react";
import BarChart from "../Chart/BarChart";
import DropdownKuartal from "../Dropdown/DropdownKuartal";

export default function RataRataPenggunaan() {
  return (
    <div className="w-[677px] h-[251px] bg-white rounded">
      <div className="flex justify-between mr-[38px] mt-2">
        <h2 className="font-medium text-xs text-Primary-Normal ml-[15px]">
          Rata-rata Penggunaan Air
        </h2>
        <DropdownKuartal />
      </div>
      <BarChart />
    </div>
  );
}
