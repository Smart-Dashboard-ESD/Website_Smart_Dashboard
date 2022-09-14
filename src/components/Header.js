import React from "react";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className="w-full h-10 lg:h-[131px] bg-white flex justify-end lg:justify-between">
      <div>
        <HiOutlineMenu className="w-6 h-6 mt-14 ml-7" />
      </div>
      <div className="mt-[40px] ml-10">
        <h1 className="text-3xl font-medium">Halo, Rizal Bimantoro</h1>
        <p className="text-Info-DarkHover">
          Sudah cek konsumsi air hari ini? Yuk cek sekarang !
        </p>
      </div>
      <div className="hidden lg:px-32 lg:block"></div>
      <div>
        <HiOutlineSearch className="absolute w-6 h-6 ml-[313px] mt-[58px] text-Info-Normal" />
        <input
          className="h-12 border rounded-md w-80 mt-12 ml-[303px] pr-10 border-Neutral-LightActive pl-10 mr-10 placeholder:text-Info-Normal"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}
