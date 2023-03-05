import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

export default function Kalender() {
  return (
    <div className="w-[270px] default:h-[51px] xl:h-[41px] bg-white rounded flex items-center justify-center mr-[25px]">
      <HiOutlineCalendar className="w-5 h-5 mr-2 text-Primary-Normal" />
      <h1>Sabtu, 28 Januari 2023</h1>
    </div>
  );
}
