import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function SignUpForm() {
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  return (
    <div>
      <div className="w-[460px] h-[655px] z-50 absolute bg-[#F8F8F8] ml-[141px] mt-[190px] border rounded border-[#BFBFBF]">
        <div className="mt-8 ml-8">
          <h1 className="font-semibold text-[#444444] text-2xl">Sign Up</h1>
          <p className="text-[#939393] font-medium text-base leading-none mt-2">
            Daftar dengan menggunakan data diri
            <br />
            yang sesuai
          </p>
        </div>
        <div className="mt-8 ml-8">
          <h1 className="text-[#444444] text-base font-semibold ">Username</h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan username anda"
            />
          </form>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Password
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan password anda"
              type={open ? "text" : "password"}
            />
          </form>
          <div className="absolute text-xl top-[277px] right-11">
            {open === false ? (
              <HiOutlineEye onClick={toggle} />
            ) : (
              <HiOutlineEyeOff onClick={toggle} />
            )}
          </div>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Device ID
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukkan Device ID anda"
              type="text"
            />
          </form>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Admin ID
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukkan Admin ID anda"
              type="text"
            />
          </form>
        </div>
        <Link to="/login">
          <button className="w-[396px] h-[48px] bg-[#1B7FB5] rounded mt-8 ml-8">
            <h1 className="text-base font-semibold text-center text-white">
              Sign Up
            </h1>
          </button>
        </Link>
        <h1 className="text-[#9F9F9F] mt-8 ml-8 text-sm font-medium">
          Anda sudah memiliki akun?{" "}
          <Link to="/login" className="text-Primary-Normal">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}
