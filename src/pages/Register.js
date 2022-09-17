import React from "react";
import logo from "../assets/img/logoptmulti.png";
import assetlogin1 from "../assets/img/assetlogin1.png";
import assetlogin2 from "../assets/img/assetlogin2.png";
import assetlogin3 from "../assets/img/assetlogin3.png";
import SignUpForm from "../components/SignUpForm";

export default function Register() {
  return (
    <div>
      <section className="relative flex">
        <div className="flex mt-[50px] ml-[50px] items-center w-max absolute z-30">
          <img src={logo} alt="logo" className="" />
          <h1 className="ml-4 font-bold text-Primary-Normal">
            PT. Multi Instrumentasi.
          </h1>
        </div>
        <div className="-z-0">
          <img
            src={assetlogin1}
            alt="assetlogin1"
            className="absolute top-0 left-0 z-0 mt-[87px]"
          />
          <img
            src={assetlogin2}
            alt="assetlogin2"
            className="absolute mt-[556px] z-10"
          />
        </div>
        <img
          src={assetlogin3}
          alt="assetlogin3"
          className="absolute right-0 z-20 object-cover"
        />
        <h1 className="absolute z-40 text-5xl font-bold text-white mt-[730px] ml-[720px]">
          Cek Pengelolaan Air
          <br />
          mu disini !
        </h1>
        <h1 className="absolute z-40 text-3xl font-medium mt-[870px] ml-[720px] text-[#BDBDBD]">
          Nikmati kemudahan mengecek
          <br />
          pengunaan air tanpa perlu khawatir.
        </h1>
        <SignUpForm />
      </section>
    </div>
  );
}
