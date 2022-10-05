import React from "react";
import Alamat from "./Alamat";
import Kalender from "./Kalender";
import Notification from "./Notification";
// import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className="w-[1150px] h-10 lg:h-[51px] flex justify-between mb-[30px] mt-[30px]">
      <div className="ml-5">
        <h1 className="text-xl font-semibold text-[#444444]">Dashboard</h1>
        <p className="text-[#848484] text-base font-medium">
          Selamat Datang, Bima !
        </p>
      </div>
      <div className="flex gap-x-[25px]">
        <Notification />
        <Alamat />
        <Kalender />
      </div>
    </div>
  );
}
