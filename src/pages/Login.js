import React from "react";
import logo from "../assets/img/logoptmulti.png";
import assetlogin1 from "../assets/img/assetlogin1.png";
import assetlogin2 from "../assets/img/assetlogin2.png";
import assetlogin3 from "../assets/img/assetlogin3.png";
import LoginForm from "../components/LoginForm";

export default function Login() {
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
          className="absolute top-0 2xl:h-[300px] 3xl:h-[400px] left-0 z-0 mt-[87px]"
        />
        <img
          src={assetlogin2}
          alt="assetlogin2"
          className="absolute 2xl:h-[300px] default:mt-[556px] 3xl:h-[400px] 3xl:mt-[530px] 2xl:mt-[450px] z-10"
        />
      </div>
      <img
        src={assetlogin3}
        alt="assetlogin3"
        className="absolute right-0 2xl:h-[768px] 3xl:h-[940px] z-20 object-cover"
      />
      <h1 className="absolute 2xl:ml-[770px] z-40 text-5xl font-bold text-white default:mt-[730px] 2xl:mt-[500px] 3xl:mt-[700px] default:ml-[720px] 4xl:ml-[1000px] 5xl:ml-[1250px]">
        Cek Pengelolaan Air
        <br />
        mu disini !
      </h1>
      <h1 className="absolute z-40 text-3xl 2xl:ml-[770px] font-medium default:mt-[870px] 2xl:mt-[620px] default:ml-[720px] 3xl:mt-[850px] 4xl:ml-[1000px] 5xl:ml-[1250px] text-[#BDBDBD]">
        Nikmati kemudahan mengecek
        <br />
        pengunaan air tanpa perlu khawatir.
      </h1>
      <LoginForm />
    </section>
  );
}
