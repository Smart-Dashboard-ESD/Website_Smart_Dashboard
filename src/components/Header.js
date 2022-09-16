import React from "react";
import Alamat from "./Alamat";
import Kalender from "./Kalender";
// import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className="w-[1150px] h-10 lg:h-[51px] flex justify-end mb-[30px] mt-[30px] gap-x-[25px]">
      <Alamat />
      <Kalender />
    </div>
  );
}
