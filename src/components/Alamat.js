import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Alamat() {
  return (
    <div className="w-[271px] h-[51px] bg-white rounded flex items-center justify-center">
      <HiOutlineLocationMarker className="w-5 h-5 mr-2 text-Primary-Normal" />
      <h1>Bojongsoang, Kab Bandung</h1>
    </div>
  );
}
