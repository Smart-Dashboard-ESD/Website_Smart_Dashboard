import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logoptmulti.png";
import assetlogin1 from "../assets/img/assetlogin1.png";
import assetlogin2 from "../assets/img/assetlogin2.png";
import assetlogin3 from "../assets/img/assetlogin3.png";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function Login() {
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  return (
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
      <div className="w-[480px] h-[525px] z-50 absolute bg-[#F8F8F8] ml-[141px] mt-[242px] border rounded border-[#BFBFBF]">
        <div className="mt-[32px] ml-[32px]">
          <h1 className="font-semibold text-[#444444] text-2xl">Sign In</h1>
          <p className="text-[#939393] font-medium text-base leading-none mt-2">
            Masukkan data diri yang sesuai dengan data yang anda <br />
            masukkan saat pendaftaran
          </p>
        </div>
        <div className="mt-[32px] ml-[32px]">
          <h1 className="text-[#444444] text-base font-semibold ">Username</h1>
          <form className="mt-2">
            <input
              className="w-[416px] h-[52px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan username anda"
            />
          </form>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Password
          </h1>
          <form className="mt-2">
            <input
              className="w-[416px] h-[52px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan password anda"
              type={open ? "text" : "password"}
            />
          </form>
          <div className="absolute text-xl top-[283px] right-11">
            {open === false ? (
              <HiOutlineEye onClick={toggle} />
            ) : (
              <HiOutlineEyeOff onClick={toggle} />
            )}
          </div>
        </div>
        <div className="flex items-center mt-[32px] ml-[32px]">
          <input
            id="remember"
            type="checkbox"
            className="bg-[#1B7FB5] border-none"
          />
          <label htmlFor="remember" className="ml-[5px] text-sm font-medium">
            Remember Me
          </label>
        </div>
        <Link to="/dashboard">
          <div className="w-[416px] h-[51px] bg-[#1B7FB5] text-white font-semibold rounded mt-[32px] ml-[32px] flex items-center justify-center">
            Sign In
          </div>
        </Link>
        <h2 className="mt-[32px] ml-[32px] text-[#9F9F9F] text-sm font-medium">
          Sudah punya akun?{" "}
          <Link to="/dashboard" className="text-Primary-Normal">
            Register
          </Link>
        </h2>
      </div>
    </section>
  );
}
