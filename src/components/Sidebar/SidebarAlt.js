import React from "react";
import logo from "../../assets/img/logoptmulti.png";
import { Link } from "react-router-dom";

export default function SidebarAlt() {
  return (
    <div className="min-h-screen bg-white w-20 lg:w-[297px]">
      <Link to="/">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="mt-14" />
          <div className="ml-2 font-semibold text-Primary-Normal mt-14">
            <p className="hidden leading-none lg:block">
              Multi
              <br /> Instrumentasi.
            </p>
          </div>
        </div>
      </Link>
      <div className="w-[214px] h-[68px] mt-[70px] ml-[30px]">
        <h1 className="text-[20px] font-semibold text-Black-Normal">
          Tentang User
        </h1>
        <p className="font-medium text-[13px] text-Greyscale-Normal">
          Masukkan data diri personal untuk
          <br />
          dapat mengakses Dashboard.
        </p>
      </div>
    </div>
  );
}
