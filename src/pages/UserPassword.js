import React, { useEffect, useState } from "react";
import SidebarAlt from "../components/Sidebar/SidebarAlt";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserPassword() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_ENDPOINT + "/user/register";
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  const [data, setData] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  useEffect(() => {
    localStorage.getItem("data") &&
      setData(JSON.parse(localStorage.getItem("data")));
    localStorage.removeItem("data");
  }, []);

  function submit(e) {
    e.preventDefault();
    axios.post(url, data).then((res) => {
      if (res.message === "Network Error") {
        console.log(res);
        alert("Periksa koneksi internet anda");
      } else {
        console.log(res);
        navigate("/login");
      }
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="flex w-screen h-screen 4xl:h-[1080px] bg-[#F3F3F3]">
      <SidebarAlt />
      <div>
        <div className="absolute top-0 right-[202px] flex items-center mt-8">
          <div className="text-white rounded-full flex items-center justify-center bg-Greyscale-Normal w-[35px] h-[35px]">
            1
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Greyscale-Normal">
              Isi data diri
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-Greyscale-Normal border-dotted border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-Primary-Normal w-[35px] h-[35px] ">
            2
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Black-Normal">
              Buat Username
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-Greyscale-Normal border-dotted border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-Greyscale-Normal w-[35px] h-[35px] ">
            3
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Greyscale-Normal">
              Register
            </h1>
          </div>
        </div>
        <div className="mt-[100px] ml-[63px]">
          <h1 className="text-lg font-semibold text-Primary-Normal">
            Buat Username dan Password
          </h1>
          <h2 className="font-semibold text-[#444444] text-base mt-[20px]">
            Username
          </h2>
          <input
            type="text"
            onChange={(e) => handle(e)}
            id="username"
            value={data.username}
            placeholder="Buat username anda"
            className="mt-2 placeholder:text-[#8F8F8F] placeholder:text-sm placeholder:font-medium w-[512px] h-[48px] rounded border-[2px] border-[#939393] outline-none pl-[16px] pr-[10px] py-[10px] text-[#444444] font-semibold"
          />
          <h2 className="font-semibold text-[#444444] text-base mt-[20px]">
            Password
          </h2>
          <input
            type={open ? "text" : "password"}
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            placeholder="Buat password anda"
            className="mt-2 placeholder:text-[#8F8F8F] placeholder:text-sm placeholder:font-medium w-[512px] h-[48px] rounded border-[2px] border-[#939393] outline-none pl-[16px] pr-[10px] py-[10px] text-[#444444] font-semibold"
          />
          <div className="absolute text-xl top-[295px] ml-[475px]">
            {open === false ? (
              <HiOutlineEye onClick={toggle} />
            ) : (
              <HiOutlineEyeOff onClick={toggle} />
            )}
          </div>
          <div className="flex items-center mt-[50px]">
            <h1 className="text-sm font-medium text-Greyscale-NormalHover">
              *Form wajib terisi penuh
            </h1>
            <button
              onClick={submit}
              className="w-[158px] h-[39px] bg-Primary-Normal ml-[264px] rounded text-white text-base font-medium"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
