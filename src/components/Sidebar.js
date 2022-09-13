import React from "react";
import logo from "../assets/img/logoptmulti.png";
import avatar from "../assets/img/Avatar.png";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineChartSquareBar,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
} from "react-icons/hi";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white w-20 border-r lg:w-[297px] border-Neutral-LightActive">
      <Link to="/">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="mt-14" />
          <div className="ml-2 font-semibold text-Primary-Normal mt-14">
            <p className="hidden lg:block">PT. Multi Instrumentasi.</p>
          </div>
        </div>
      </Link>
      <div className="w-16 lg:w-[250px] mx-auto mt-14 border-b border-Neutral-LightActive">
        <Link
          to="/"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-white active:bg-Primary-NormalActive ${
            location.pathname === "/" && "bg-Primary-NormalActive text-white"
          }`}
        >
          <HiOutlineChartSquareBar className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Dashboard</span>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold lg:block text-Info-NormalHover">
        Pembayaran
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1 border-b border-Neutral-LightActive">
        <Link
          to="/tagihan"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-white active:bg-Primary-NormalActive ${
            location.pathname === "/tagihan" &&
            "bg-Primary-NormalActive text-white"
          }`}
        >
          <HiOutlineCreditCard className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Tagihan</span>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold text-Info-NormalHover lg:block">
        Customer Care
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1">
        <Link
          to="/customer-care"
          className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-Primary-NormalHover hover:text-white active:bg-Primary-NormalActive ${
            location.pathname === "/customer-care" &&
            "bg-Primary-NormalActive text-white"
          }`}
        >
          <HiOutlineUserGroup className="w-6 h-6 lg:ml-3 lg:mr-2" />
          <span className="hidden text-base lg:block">Pusat Bantuan</span>
        </Link>
      </div>
      <div className="w-16 lg:w-[260px] mx-auto mt-36 border-t border-Neutral-LightActive">
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
