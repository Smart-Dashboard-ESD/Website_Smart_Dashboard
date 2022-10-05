import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function LoginForm() {
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  return (
    <div>
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
        <Link to="/">
          <div className="w-[416px] h-[51px] bg-[#1B7FB5] text-white font-semibold rounded mt-[32px] ml-[32px] flex items-center justify-center">
            Sign In
          </div>
        </Link>
        <h2 className="mt-[32px] ml-[32px] text-[#9F9F9F] text-sm font-medium">
          Sudah punya akun?{" "}
          <Link to="/data-diri" className="text-Primary-Normal">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}
