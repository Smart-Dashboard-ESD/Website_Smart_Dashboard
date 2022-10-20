import React from "react";
import TableHistory from "./TableHistory";

export default function History() {
  return (
    <div className="default:w-[1110px] default:h-[493px] xl:w-[950px] xl:h-[373px] ml-[15px] bg-white mt-5 rounded drop-shadow">
      <div className="ml-[29px] pt-[26px]">
        <h1 className="font-medium text-Black-Normal default:text-[20px] xl:text-[14px]">
          History
        </h1>
        <p className="font-medium default:text-sm xl:text-[9px] text-Greyscale-Normal">
          Berikut adalah riwayat pembayaranmu
        </p>
      </div>
      <TableHistory />
    </div>
  );
}
