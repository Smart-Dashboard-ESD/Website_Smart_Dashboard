import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const [open, setopen] = useState(false);
  const url = process.env.REACT_APP_API_ENDPOINT + "/users/login";
  const url2 = process.env.REACT_APP_API_ENDPOINT + "/admin/login";
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const roleHandler = (e) => {
    setRole(e.target.value);
  };

  // function submit(e) {
  //   e.preventDefault();
  //   axios
  //     .post(url, data)
  //     .then((res) => {
  //       if (res.data.message === "success") {
  //         console.log(res);
  //         localStorage.setItem("token", res.data.token);
  //         navigate("/");
  //       } else {
  //         alert("Username atau password salah");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Username atau password salah");
  //     });
  // }

  function submit(e) {
    e.preventDefault();
    if (role === "user") {
      axios
        .post(url, data)
        .then((res) => {
          if (res.data.message === "Success") {
            console.log(res);
            const token = res.data.token;
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userid", res.data.data.id);
            localStorage.setItem("deviceid", res.data.data.device_id);
            navigate("/dashboard-user");
            setAuth({ token });
          } else {
            alert("Username atau password salah");
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Username atau password salah");
        });
    } else {
      axios
        .post(url2, data)
        .then((res) => {
          if (res.data.message === "Success") {
            console.log(res);
            const token = res.data.token;
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard-admin");
            setAuth({ token });
          } else {
            alert("Username atau password salah");
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Username atau password salah");
        });
    }
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const toggle = () => {
    setopen(!open);
  };

  return (
    <form>
      <div className="w-[480px] h-[580px] z-50 absolute bg-[#F8F8F8] default:ml-[141px] 4xl:ml-[370px] 5xl:ml-[650px] 2xl:ml-[230px] default:mt-[242px] 2xl:mt-[140px] border rounded border-[#BFBFBF]">
        <div className="mt-[32px] ml-[32px]">
          <h1 className="font-semibold text-[#444444] text-2xl">Sign In</h1>
          <p className="text-[#939393] font-medium text-base leading-none mt-2">
            Masukkan data diri yang sesuai dengan data yang anda <br />
            masukkan saat pendaftaran
          </p>
        </div>
        <div className="mt-[32px] ml-[32px]">
          <h1 className="text-[#444444] text-base font-semibold ">Username</h1>
          <div className="mt-2">
            <input
              className="w-[416px] h-[52px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan username anda"
              onChange={(e) => handle(e)}
              id="username"
              value={data.username}
              key="username"
              required
            />
          </div>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Password
          </h1>
          <div className="mt-2">
            <input
              className="w-[416px] h-[52px] border rounded border-[#BFBFBF] pl-4 pr-10"
              placeholder="Masukan password anda"
              type={open ? "text" : "password"}
              onChange={(e) => handle(e)}
              id="password"
              key="password"
              value={data.password}
              required
            />
          </div>
          <div className="absolute text-xl top-[283px] right-11">
            {open === false ? (
              <HiOutlineEye onClick={toggle} />
            ) : (
              <HiOutlineEyeOff onClick={toggle} />
            )}
          </div>
          <h1
            id="error"
            className="mt-2 text-sm font-medium text-Danger-Normal"
          >
            {error}
          </h1>
        </div>
        <div className="mt-[32px] flex ml-[32px]">
          <input
            id="user"
            type="radio"
            name="role"
            checked={role === "user"}
            value="user"
            onChange={(e) => roleHandler(e)}
          />
          <label className="ml-2 text-[#444444] text-base font-semibold">
            {" "}
            User
          </label>
          <input
            id="admin"
            type="radio"
            name="role"
            value="admin"
            checked={role === "admin"}
            className="ml-4"
            onChange={(e) => roleHandler(e)}
          />
          <label className="ml-2 text-[#444444] text-base font-semibold">
            {" "}
            Admin
          </label>
        </div>
        <div className="flex items-center mt-[24px] ml-[32px]">
          <input
            id="remember"
            type="checkbox"
            className="bg-[#1B7FB5] border-none"
          />
          <label htmlFor="remember" className="ml-[5px] text-sm font-medium">
            Remember Me
          </label>
        </div>
        <button
          onClick={submit}
          className="w-[416px] h-[51px] bg-[#1B7FB5] text-white font-semibold rounded mt-[24px] ml-[32px] flex items-center justify-center"
        >
          Sign In
        </button>
        <h2 className="mt-[24px] ml-[32px] text-[#9F9F9F] text-sm font-medium">
          Sudah punya akun?{" "}
          <Link to="/data-diri" className="text-Primary-Normal">
            Register
          </Link>
        </h2>
      </div>
    </form>
  );
}
