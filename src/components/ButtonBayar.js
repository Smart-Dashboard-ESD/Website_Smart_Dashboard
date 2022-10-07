import React from "react";
import { Link } from "react-router-dom";

export default function ButtonBayar() {
  return (
    <Link to="/pembayaran">
      <button className="default:w-[192px] xl:w-[92px] xl:h-[25px] default:h-[44px] bg-Primary-Normal default:bottom-[35px] default:right-[30px] xl:bottom-[18px] xl:right-[16px] absolute z-10 rounded text-white flex items-center justify-center">
        <h1 className="default:text-[20px] xl:text-[10px] font-medium">
          Bayar Sekarang
        </h1>
      </button>
    </Link>
  );
}
