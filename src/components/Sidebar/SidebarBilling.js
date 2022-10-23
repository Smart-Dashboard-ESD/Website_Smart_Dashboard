import React from "react";
import logo from "../../assets/img/logoptmulti.png";
import avatar from "../../assets/img/Avatar.png";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChartSquareBar, HiOutlineUserGroup } from "react-icons/hi";

export default function SidebarBilling() {
  const location = useLocation();

  return (
    <div className="default:min-h-screen 4xl:h-[1080px] bg-white w-20 lg:w-[290px]">
      <Link to="/dashboard-billing">
        <div className="flex items-center ml-[30px] mt-[50px]">
          <img src={logo} alt="logo" className="" />
          <div className="ml-2 font-semibold leading-tight text-Primary-Normal">
            <p className="hidden lg:block ">
              Multi
              <br /> Instrumentasi.
            </p>
          </div>
        </div>
      </Link>
      <div className="w-16 lg:w-[250px] mx-5 mt-14 border-b border-[#BBBBBB]">
        <Link
          to="/dashboard-billing"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-Primary-Light active:bg-Primary-NormalActive ${
            location.pathname === "/dashboard-billing" &&
            "bg-Primary-NormalActive text-Primary-Light"
          }`}
        >
          <HiOutlineChartSquareBar className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Dashboard</span>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold text-Info-NormalHover lg:block">
        Detail Data
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 border-b border-[#BBBBBB] lg:mt-1">
        <Link
          to="/transaksi"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-Primary-Light active:bg-Primary-NormalActive ${
            location.pathname === "/transaksi" &&
            "bg-Primary-NormalActive text-Primary-Light"
          }`}
        >
          <HiOutlineUserGroup className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Transaksi Pelanggan</span>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold text-Info-NormalHover lg:block">
        Edit Data
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1">
        <Link
          to="/harga-air"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-Primary-Light active:bg-Primary-NormalActive ${
            location.pathname === "/harga-air" &&
            "bg-Primary-NormalActive text-Primary-Light"
          }`}
        >
          <HiOutlineUserGroup className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Harga Air Perdaerah</span>
        </Link>
      </div>
      <div className="w-16 lg:w-[260px] mx-auto default:mt-[380px] xl:mt-[250px] border-t border-[#BBBBBB]">
        <Link to="/profile">
          <div className="mt-6">
            <img
              src={avatar}
              alt="Rectangle-1"
              border="0"
              className="float-left w-10 h-10 ml-3 mr-3 rounded-full"
            />
            <p className="hidden text-sm font-medium lg:block">
              Rizal Bimantoro
            </p>
            <p className="hidden text-sm font-medium text-Info-Normal lg:block">
              rebimantoro@gmail.com
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
