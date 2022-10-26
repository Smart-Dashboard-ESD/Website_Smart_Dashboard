import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";

export default function TableKeluhan() {
  let [dataDevices, setDataDevices] = useState([
    {
      DeviceName: "",
      DeviceEui: "",
      DeviceId: "",
      Band: "",
    },
  ]);

  useEffect(() => {
    console.log("hello");
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/admin/getAllDevices", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        res.data.device.map((element) => {
          setDataDevices((prevData) => [
            ...prevData,
            {
              DeviceName: element.DeviceName,
              DeviceEui: element.deviceeui,
              DeviceId: element.deviceidantares,
              Band: element.band,
            },
          ]);
        });
      });
  }, []);

  //   const data = [
  //     {
  //       name: "Rizky Afiansyah",
  //       kodealat: "D1029E80",
  //       address: "Jl. Adhyaksa No 255",
  //       nohp: "08123456789",
  //       keluhan: "Air mati",
  //     },
  //     {
  //       name: "Rizky Afiansyah",
  //       kodealat: "D1029E80",
  //       address: "Jl. Adhyaksa No 255",
  //       nohp: "08123456789",
  //       keluhan: "Air mati",
  //     },
  //     {
  //       name: "Rizky Afiansyah",
  //       kodealat: "D1029E80",
  //       address: "Jl. Adhyaksa No 255",
  //       nohp: "08123456789",
  //       keluhan: "Air mati",
  //     },
  //     {
  //       name: "Rizky Afiansyah",
  //       kodealat: "D1029E80",
  //       address: "Jl. Adhyaksa No 255",
  //       nohp: "08123456789",
  //       keluhan: "Air mati",
  //     },
  //     {
  //       name: "Rizky Afiansyah",
  //       kodealat: "D1029E80",
  //       address: "Jl. Adhyaksa No 255",
  //       nohp: "08123456789",
  //       keluhan: "Air mati",
  //     },
  //   ];
  return (
    <div className="w-[1110px] ml-[15px] mt-[30px] h-[515px] bg-white rounded">
      <div className="flex pt-[26px] item-center ml-[29px]">
        <div className="">
          <h1 className="text-[20px] font-semibold text-Black-Normal">
            Data Device
          </h1>
          <p className="text-sm font-medium text-Greyscale-NormalHover">
            Data Device yang tersedia
          </p>
        </div>
        <select className="w-[223px] appearance-none ml-[355px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive">
          <option value="Bandung">Bandung</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Jogyakarta">Jogyakarta</option>
          <option value="Solo">Solo</option>
          <option value="Padang">Padang</option>
        </select>
        <HiChevronDown className="absolute top-[155px] right-[420px] text-Info-NormalActive" />
        <input
          placeholder="Cari"
          className="w-[223px] pl-9 ml-[15px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive"
        />
        <HiOutlineSearch className="ml-[15px] mt-[15px] text-Greyscale-NormalActive absolute top-[142px] right-[360px]" />
        <button className="w-[108px] ml-[15px] h-[44px] rounded-md text-white bg-Primary-Normal text-[20px] font-semibold">
          Search
        </button>
      </div>
      <table className="w-[1070px] border-separate table-auto mx-5 xl:border-spacing-y-[18px] border-spacing-y-[30px]">
        <thead className="bg-Primary-Light h-[43px] xl:h-[33px]">
          <tr>
            <th className="text-sm font-medium xl:text-xs text-Black-Normal">
              Nama Device
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Device Eui
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Device Band
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Device Id
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Action
            </th>
          </tr>
        </thead>
        {dataDevices.map((item, index) => (
          <tbody key={index} className="text-base xl:text-sm">
            <tr key={index} className="h-[40px] xl:h-[25px]">
              <td className="">{item.DeviceName}</td>
              <td>{item.DeviceEui}</td>
              <td>{item.Band}</td>
              <td>{item.DeviceId}</td>
              <td className="flex items-center gap-x-2 h-[40px]">
                <button className="w-[100px] ml-[15px] h-[20px] rounded-md text-white bg-Primary-Normal text-[12px] font-semibold">
                  Link Device
                </button>
                {/* <button className="text-sm font-medium text-Danger-Normal xl:text-xs">
                  Delete
                </button> */}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
