import React from "react";
import diskon from "../assets/img/diskon.png";
import { HiChevronRight } from "react-icons/hi";

export default function PaymentDetail() {
  return (
    <div className="ml-[100px]">
      <h1 className="font-semibold text-lf text-Black-Normal">
        Payment Detail
      </h1>
      <div className="w-[450px] h-[482px] bg-white mt-4 rounded">
        <div className="flex justify-between pt-5 ml-5 mr-[26px]">
          <span>
            <h1 className="text-[25px] font-medium text-Black-Normal">
              Januari
            </h1>
            <p className="text-base font-medium text-Greyscale-Normal">
              Total Penggunaan : 393 m3
            </p>
          </span>
          <span className="leading-none">
            <h1 className="text-base font-medium text-Greyscale-Normal">
              16/01/2022
            </h1>
            <p className="font-medium textsm text-Greyscale-Normal">09:46 AM</p>
          </span>
        </div>
        <div className="ml-5 mt-[41px]">
          <h1 className="text-Greyscale-Normal">
            ID Pembayaran
            <span className="text-base font-semibold text-Black-Normal ml-[30px]">
              : ID12132132312
            </span>
          </h1>
          <h1 className="mt-5 text-Greyscale-Normal">
            Tagihan
            <span className="text-base font-semibold text-Black-Normal ml-[85px]">
              : Rp. 150.000,-
            </span>
          </h1>
          <h1 className="text-Greyscale-Normal">
            Pajak
            <span className="text-base font-semibold text-Black-Normal ml-[101px]">
              : Rp. 18.000,-
            </span>
          </h1>
          <h1 className="mt-5 text-Greyscale-Normal">
            Total Tagihan
            <span className="text-base font-semibold text-Black-Normal ml-[47px]">
              : Rp. 168.000,-
            </span>
          </h1>
        </div>
        <div
          className="w-[410px] h-[48px] mx-5 bg-white border border-Greyscale-NormalActive rounded mt-[30px] flex items-center"
          onClick={() => console.log("Button di klik")}
        >
          <img src={diskon} alt="diskon" className="ml-[16px]" />
          <h1 className="ml-2 text-sm font-medium text-Greyscale-DarkActive">
            Pakai Kode Promo
          </h1>
          <HiChevronRight className="ml-auto mr-[16px] text-Primary-Normal w-4 h-4" />
        </div>
        <div className="w-[410px] h-[39px] bg-Primary-Normal mx-5 rounded mt-[50px] flex items-center justify-center text-white text-base font-medium">
          Konfirmasi Pembayaran
        </div>
        <div className="w-[410px] h-[39px] mx-5 rounded mt-2 flex items-center justify-center text-Primary-Normal text-base font-medium">
          Lihat Jam Operasional
        </div>
      </div>
    </div>
  );
}
