import React from "react";
import MetodeBayar from "../../components/MetodeBayar";
import PaymentDetail from "../../components/PaymentDetail";
import SidebarAlt from "../../components/Sidebar/SidebarAlt";

export default function Pembayaran() {
  return (
    <div className="flex w-screen h-[1024px] bg-[#F3F3F3]">
      <SidebarAlt />
      <div>
        <div className="mt-[75px] ml-[50px]">
          <h1 className="text-2xl font-bold text-Black-Normal">
            Checkout Pembayaran
          </h1>
          <p className="text-base font-medium leading-none text-Greyscale-Normal">
            Segera selesaikan pembayaran dan
            <br />
            gunakan kembali air mu sesuai dengan kebutuhan
          </p>
        </div>
        <div className="mt-[60px] ml-[50px] flex">
          <MetodeBayar />
          <PaymentDetail />
        </div>
      </div>
    </div>
  );
}
