import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function DropdownKeluhan() {
  return (
    <div className="relative">
      <select
        placeholder="Pilih Keluhan"
        className="w-[512px] h-[48px] appearance-none mt-2 pl-3 border border-Info-Normal bg-white rounded text-Greyscale-NormalHover"
      >
        <option value="keluhan1">Keluhan 1</option>
        <option value="keluhan2">Keluhan 2</option>
        <option value="keluhan3">Keluhan 3</option>
        <option value="keluhan4">Keluhan 4</option>
      </select>
      <HiChevronDown className="absolute right-[12px] default:w-6 default:h-6 xl:w-[15px] xl:h-[15px] -mt-9 text-Info-Normal" />
    </div>
  );
}
