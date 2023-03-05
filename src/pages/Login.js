import React from "react";
import logo from "../assets/img/logoptmulti.png";
import assetlogin1 from "../assets/img/assetlogin1.png";
import assetlogin2 from "../assets/img/assetlogin2.png";
import assetlogin3 from "../assets/img/assetlogin3.png";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <section>
      <div className="flex mt-[50px] ml-[50px] items-center w-screen absolute z-30">
        <img src={logo} alt="logo" className="" />
        <h1 className="ml-4 font-bold text-Primary-Normal">
          PT. Multi Instrumentasi.
        </h1>
      </div>
      <div>
        <img
          src={assetlogin3}
          alt="assetlogin3"
          className="absolute right-0 w-screen object-contain"
        />
      </div>

      <h1 className="absolute z-40 text-5xl font-bold text-white mt-[170px] default:ml-[720px] 4xl:ml-[1000px]">
        Cek Pengelolaan Air
        <br />
        mu disini !
      </h1>
      <h1 className="absolute z-40 text-3xl font-medium mt-[275px] default:ml-[720px] 4xl:ml-[1000px] text-[#BDBDBD]">
        Nikmati kemudahan mengecek
        <br />
        pengunaan air tanpa perlu khawatir.
      </h1>
      <LoginForm />
    </section>
  );
}
