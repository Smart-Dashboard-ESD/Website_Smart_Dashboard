import React from "react";
import NoteIcon from "../../assets/img/NoteIcon.png";

export default function HargaAirTerkini() {
  return (
    <div className="w-[325px] h-[251px] relative default:ml-[35px] 2xl:ml-[25px] bg-white rounded">
      <h1 className="text-[20px] mt-[20px] ml-[25px] font-semibold text-Black-Normal">
        Harga air terkini
      </h1>
      <p className="font-medium ml-[25px] text-sm text-Greyscale-NormalHover">
        Update terakhir : 01 Oktober 2022
      </p>
      <div className="flex">
        <h1 className="ml-[25px] mt-[35px] text-[39px] font-bold text-Info-NormalActive">
          Rp 1.200,-
        </h1>
        <p className="ml-[15px] text-[31px] mt-[66px] font-medium text-Info-Normal">
          /m3
        </p>
      </div>
      <img
        src={NoteIcon}
        alt="NoteIcon"
        className="absolute bottom-0 right-0 -z-0"
      />
    </div>
  );
}
