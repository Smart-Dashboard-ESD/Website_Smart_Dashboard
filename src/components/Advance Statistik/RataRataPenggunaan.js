import React from "react";
import BarChart from "../Chart/BarChart";
import DropdownKuartal from "../Dropdown/DropdownKuartal";

export default function RataRataPenggunaan() {
  return (
    <div className="default:w-[677px] default:h-[251px] bg-white rounded">
      <div className="flex justify-between default:mr-[38px] default:mt-2">
        <h2 className="font-medium default:text-xs text-Primary-Normal default:ml-[15px]">
          Rata-rata Penggunaan Air
        </h2>
        <DropdownKuartal />
      </div>
      <BarChart />
    </div>
  );
}
