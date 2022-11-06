import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DropdownTable from "../Dropdown/DropdownTable";
import { Button } from "@chakra-ui/react";
import ButtonLinkDevice from "../ButtonLinkDevice";

export default function TableDevice() {
  let [dataDevices, setDataDevices] = useState([
    {
      DeviceName: "",
      DeviceEui: "",
      DeviceIdAntares: "",
      Band: "",
      DeviceId: "",
    },
  ]);

  useEffect(() => {
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
              DeviceIdAntares: element.deviceidantares,
              Band: element.band,
              DeviceId: element.deviceid,
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
    <div className="default:w-[1110px] 2xl:w-[1040px] ml-[15px] mt-[30px] default:h-[515px] bg-white rounded">
      <div className="flex pt-[26px] item-center ml-[29px]">
        <div className="">
          <h1 className="text-[20px] font-semibold text-Black-Normal">
            Data Device
          </h1>
          <p className="text-sm font-medium text-Greyscale-NormalHover">
            Data Device yang tersedia
          </p>
        </div>
        <DropdownTable />
        <input
          placeholder="Cari"
          className="w-[223px] pl-9 ml-[15px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive"
        />
        <HiOutlineSearch className="ml-[15px] mt-[15px] text-Greyscale-NormalActive absolute top-[142px] right-[360px]" />
        <button className="w-[108px] ml-[15px] h-[44px] rounded-md text-white bg-Primary-Normal text-[20px] font-semibold">
          Search
        </button>
      </div>
      <table className="default:w-[1070px] 2xl:w-[1000px] border-separate table-auto mx-5 xl:border-spacing-y-[18px] border-spacing-y-[30px]">
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
              <td className="justify-center ">{item.DeviceName}</td>
              <td className="justify-center ">{item.DeviceEui}</td>
              <td className="justify-center ">{item.Band}</td>
              <td className="justify-center ">{item.DeviceIdAntares}</td>
              {item.DeviceIdAntares ? (
                <td className="flex items-center gap-x-2 h-[40px] justify-center">
                  <Button colorScheme="red" disabled>
                    Already Linked !
                  </Button>
                </td>
              ) : (
                <td className="flex items-center gap-x-2 h-[40px] justify-center">
                  <ButtonLinkDevice
                    devid={item.DeviceId}
                    name={item.DeviceName}
                  />
                </td>
              )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
