import React from "react";
import Alamat from "./Alamat";
import Kalender from "./Kalender";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";
// import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  const location = useLocation();
  return (
    <div className="default:w-[1150px] 5xl:w-[1630px] h-10 xl:h-8 4xl:w-[1390px] xl:w-[990px] 2xl:w-[1076px] 3xl:w-[1246px] flex justify-between xl:mb-[25px] xl:mt-[15px] default:mb-[30px] default:mt-[30px]">
      <div className="ml-5">
        <h1 className="default:text-xl xl:text-[15px] font-semibold text-[#444444]">
          Dashboard
        </h1>
        <p className="text-[#848484] xl:text-sm default:text-base font-medium">
          Selamat Datang, Bima !
        </p>
      </div>
      <div
        className={`flex gap-x-[25px] ${
          location.pathname === "/data-akun-cust" && "hidden"
        }`}
      >
        <Notification />
        <Alamat />
        <Kalender />
      </div>
    </div>
  );
}
