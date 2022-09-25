import React from "react";
import { Link } from "react-router-dom";

export default function ButtonBayar() {
  return (
    <Link to="/pembayaran">
      <button className="w-[192px] h-[44px] bg-Primary-Normal bottom-[35px] right-[30px] absolute z-10 rounded text-white flex items-center justify-center">
        <h1 className="text-[20px] font-medium">Bayar Sekarang</h1>
      </button>
    </Link>
  );
}
