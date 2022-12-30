import React from "react";
import PaymentDetail from "../../components/PaymentDetail";
import SidebarPayment from "../../components/Sidebar/SidebarPayment";

export default function Pembayaran() {
  return (
    <div className="flex w-screen default:min-h-screen 4xl:h-[1080px] bg-[#F3F3F3]">
      <SidebarPayment />
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
        <div className="mt-[60px] ml-[300px] flex justify-center">
          <PaymentDetail />
        </div>
      </div>
    </div>
  );
}
