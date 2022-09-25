import React from "react";
import TableHistory from "./TableHistory";

export default function History() {
  return (
    <div className="w-[1110px] h-[493px] ml-[15px] bg-white mt-5 rounded drop-shadow">
      <div className="ml-[29px] pt-[26px]">
        <h1 className="font-medium text-Black-Normal text-[20px]">History</h1>
        <p className="text-sm font-medium text-Greyscale-Normal">
          Berikut adalah riwayat pembayaranmu
        </p>
      </div>
      <TableHistory />
    </div>
  );
}
