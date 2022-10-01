import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../assets/img/404Error.png";

export default function Page404() {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-[60px]">
        <img src={PageNotFound} alt="404" />
      </div>
      <div className="flex flex-col justify-center font-semibold text-[31px] text-Black-Normal text-center mt-[30px]">
        <h1 className="">
          Oops! Sepertinya terjadi kesalahan pada
          <br /> sistem
        </h1>
        <p className="text-[25px] font-medium text-Greyscale-NormalHover mt-[15px]">
          Silahkan restart halaman ini atau kembali ke
          <br /> dashboard untuk kembali mengakses layanan kami
        </p>
        <span>
          <Link to="/">
            <button className="w-[450px] h-[56px] bg-Primary-Normal rounded text-white mt-[50px] font-semibold text-[20px]">
              Back To Dashboard
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}
