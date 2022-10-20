import React from "react";
import coin from "../assets/img/coin.png";
import elipse from "../assets/img/elipse.png";
import ButtonBayar from "./ButtonBayar";

export default function BillingDate() {
  return (
    <div className="xl:w-[332px] xl:h-[230px] default:w-[482px] default:h-[350px] bg-white ml-[25px] shadow-sm rounded relative">
      <div className="default:ml-[30px] xl:ml-[15px] default:mt-[30px] xl:mt-[15px] absolute z-10">
        <h1 className="font-semibold default:text-2xl xl:text-lg text-Black-Normal">
          Next Billing Date
        </h1>
        <p className="font-medium default:text-sm xl:text-[9px] text-Greyscale-NormalHover">
          Tenggat waktu : 16 September 2022
        </p>
      </div>
      <div className="default:ml-[30px] xl:ml-[15px] default:mt-[114px] xl:mt-[70px] absolute z-10">
        <h1 className="text-Info-NormalActive font-bold xl:text-[30px] default:text-[49px]">
          Rp 150.000,-
        </h1>
        <p className="default:text-sm xl:text-xs font-medium text-Info-Dark xl:mt-[2px] default:mt-[10px]">
          Belum termasuk pajak sebesar 11%
        </p>
      </div>
      <ButtonBayar />
      <img
        src={coin}
        alt="coin"
        className="default:mt-5 xl:mt-[2px] default:ml-[247px] -z-0 absolute xl:w-[148px] xl:ml-[187px] xl:h-[153px] default:w-[228px] default:h-[233px]"
      />
      <img
        src={elipse}
        alt="elipse"
        className="absolute bottom-0 left-0 -z-0 xl:w-[51px] xl:h-[51px]"
      />
    </div>
  );
}
