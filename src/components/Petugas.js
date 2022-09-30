import React from "react";
import avatarpetugas from "../assets/img/avatarpetugas.png";
import { HiOutlineMap, HiOutlineIdentification } from "react-icons/hi";

export default function Petugas() {
  return (
    <div className="mt-[54px]">
      <h1 className="text-lg font-semibold text-Black-Normal">
        Petugas hari ini
      </h1>
      <div className="w-[378px] h-[278px] bg-white mt-4 rounded">
        <div className="w-[378px] h-[95px] border-b-2 border-[#F3F3F3] flex items-center">
          <img src={avatarpetugas} alt="avatarpetugas" className="ml-[20px]" />
          <div className="ml-[15px]">
            <h1 className="text-sm font-medium text-[#7C7C7C]">Nama :</h1>
            <h2 className="text-base font-medium text-Black-Normal">
              Ahmad Bahrullah Abdullah
            </h2>
          </div>
        </div>
        <div className="w-[378px] h-[95px] border-b-2 border-[#F3F3F3] flex items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-Info-Normal flex items-center justify-center ml-[20px]">
            <HiOutlineMap className="text-white w-[35px] h-[35px]" />
          </div>
          <div className="ml-[15px]">
            <h1 className="text-sm font-medium text-[#7C7C7C]">Address :</h1>
            <h2 className="text-base font-medium text-Black-Normal">
              Jln H. Agus Salim, Bandung
            </h2>
          </div>
        </div>
        <div className="w-[378px] h-[95px] flex items-center">
          <div className="w-[60px] h-[60px] rounded-full bg-Info-Normal flex items-center justify-center ml-[20px]">
            <HiOutlineIdentification className="text-white w-[35px] h-[35px]" />
          </div>
          <div className="ml-[15px]">
            <h1 className="text-sm font-medium text-[#7C7C7C]">Job :</h1>
            <h2 className="text-base font-medium text-Black-Normal">
              Officer III IoT Platform
              <br />
              Development
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
