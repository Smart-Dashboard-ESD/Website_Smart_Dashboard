import React from "react";
import coin from "../assets/img/coin.png";
import elipse from "../assets/img/elipse.png";
import ButtonBayar from "./ButtonBayar";

export default function BillingDate() {
  return (
    <div className="w-[482px] h-[350px] bg-white ml-[25px] shadow-sm rounded relative">
      <div className="ml-[30px] mt-[30px] absolute z-10">
        <h1 className="text-2xl font-semibold text-Black-Normal">
          Next Billing Date
        </h1>
        <p className="text-sm font-medium text-Greyscale-NormalHover">
          Tenggat waktu : 16 September 2022
        </p>
      </div>
      <div className="ml-[30px] mt-[114px] absolute z-10">
        <h1 className="text-Info-NormalActive font-bold text-[49px]">
          Rp 150.000,-
        </h1>
        <p className="text-sm font-medium text-Info-Dark mt-[10px]">
          Belum termasuk pajak sebesar 11%
        </p>
      </div>
      <ButtonBayar />
      <img src={coin} alt="coin" className="mt-5 ml-[247px] -z-0 absolute" />
      <img
        src={elipse}
        alt="elipse"
        className="absolute bottom-0 left-0 -z-0"
      />
    </div>
  );
}
