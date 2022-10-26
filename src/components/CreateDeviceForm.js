import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreateDeviceForm() {
  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/createDevice";
  const navigate = useNavigate();

  const [data, setData] = useState({
    device_name: "",
    device_type: "",
    device_model: "",
    device_brand: "",
    device_desc: "",
    lat: "",
    long: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data.message === "Device Created") {
          navigate("/dashboard-admin");
        } else {
          alert("error");
        }
      });
    console.log(data);
  }

  return (
    <form className="ml-[63px]">
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Name
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device name anda"
        onChange={(e) => handle(e)}
        id="device_name"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Type
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device type anda"
        onChange={(e) => handle(e)}
        id="device_type"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Model
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device model anda"
        onChange={(e) => handle(e)}
        id="device_model"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Brand
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device brand anda"
        onChange={(e) => handle(e)}
        id="device_brand"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Desc
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device desc anda"
        onChange={(e) => handle(e)}
        id="device_desc"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Lat
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan Lat anda"
        onChange={(e) => handle(e)}
        id="lat"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Long
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan Long anda"
        onChange={(e) => handle(e)}
        id="long"
        type="text"
      />
      <div>
        <button
          onClick={submit}
          className="w-[109px] h-[44px] bg-Primary-Normal rounded text-white font-semibold mt-[30px] ml-[403px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
