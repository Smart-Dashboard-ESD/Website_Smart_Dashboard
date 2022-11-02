import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DropdownTable from "../Dropdown/DropdownTable";

export default function TableAkunCustomer() {
  const [data, setData] = useState([
    {
      name: "",
      nik: "",
      jeniskelamin: "",
      address: "",
      rt: "",
      rw: "",
      city: "",
      province: "",
    },
  ]);

  // const data = [
  //   {
  //     name: "Rizky Afiansyah",
  //     nik: "1234567890",
  //     jeniskelamin: "Laki-Laki",
  //     address: "Jl. Raya Bogor KM 10",
  //     rt: "01",
  //     rw: "01",
  //     city: "Jakarta Pusat",
  //     province: "DKI Jakarta",
  //   },
  //   {
  //     name: "Rizky Afiansyah",
  //     nik: "1234567890",
  //     jeniskelamin: "Laki-Laki",
  //     address: "Jl. Raya Bogor KM 10",
  //     rt: "01",
  //     rw: "01",
  //     city: "Jakarta Pusat",
  //     province: "DKI Jakarta",
  //   },
  //   {
  //     name: "Rizky Afiansyah",
  //     nik: "1234567890",
  //     jeniskelamin: "Laki-Laki",
  //     address: "Jl. Raya Bogor KM 10",
  //     rt: "01",
  //     rw: "01",
  //     city: "Jakarta Pusat",
  //     province: "DKI Jakarta",
  //   },
  //   {
  //     name: "Rizky Afiansyah",
  //     nik: "1234567890",
  //     jeniskelamin: "Laki-Laki",
  //     address: "Jl. Raya Bogor KM 10",
  //     rt: "01",
  //     rw: "01",
  //     city: "Jakarta Pusat",
  //     province: "DKI Jakarta",
  //   },
  //   {
  //     name: "Rizky Afiansyah",
  //     nik: "1234567890",
  //     jeniskelamin: "Laki-Laki",
  //     address: "Jl. Raya Bogor KM 10",
  //     rt: "01",
  //     rw: "01",
  //     city: "Jakarta Pusat",
  //     province: "DKI Jakarta",
  //   },
  // ];
  return (
    <div className="default:w-[1110px] 2xl:w-[1040px] ml-[15px] mt-[30px] default:h-[515px] bg-white rounded">
      <div className="flex pt-[26px] item-center ml-[29px]">
        <div className="">
          <h1 className="text-[20px] font-semibold text-Black-Normal">
            Data Customer
          </h1>
          <p className="text-sm font-medium text-Greyscale-NormalHover">
            Data Customer yang tersedia
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
        {data.slice(0, 6).map((item, index) => (
          <tbody key={index} className="text-base xl:text-sm">
            <tr key={index} className="h-[40px] xl:h-[25px]">
              <td>{item.DeviceName}</td>
              <td>{item.DeviceEui}</td>
              <td>{item.Band}</td>
              <td>{item.DeviceId}</td>
              <td className="flex items-center gap-x-2 h-[40px] justify-center">
                <button className="w-[100px] ml-[15px] h-[20px] rounded-md text-white bg-Primary-Normal text-[12px] font-semibold">
                  Link Device
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
