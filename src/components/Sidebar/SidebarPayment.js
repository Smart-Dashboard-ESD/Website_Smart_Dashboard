import React from "react";
import logo from "../../assets/img/logoptmulti.png";
import { Link, useNavigate } from "react-router-dom";

export default function SidebarPayment() {
  const history = useNavigate();
  
  return (
    <div className="min-h-screen 4xl:h-[1080px] bg-white w-20 lg:w-[297px]">
      <Link to="/dashboard-user">
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
          Info Penting
        </h1>
        <p className="font-medium text-[13px] text-Greyscale-Normal">
          Info pembayaran yang harus dibayar.
        </p>

        <button
          onClick={() => history(-1)}
          className="w-[70px] h-[30px] bg-Primary-Normal text-white flex items-center justify-center mt-5 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}
