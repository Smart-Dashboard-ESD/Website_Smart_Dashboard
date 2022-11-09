import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DropdownTable from "../Dropdown/DropdownTable";
import axios from "axios";
import ButtonDetailAkun from "../ButtonDetailAkun";

export default function TableAkunCustomer() {
  const [data, setData] = useState([
    {
      name: "",
      city: "",
      kelurahan: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/admin/getAllUser", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        res.data.dataUser.map((element) => {
          setData((prevData) => [
            ...prevData,
            {
              name: element.name,
              city: element.city,
              kelurahan: element.kelurahan,
            },
          ]);
        });
      });
  }, []);

  return (
    <div className="default:w-[1110px] 2xl:w-[1040px] ml-[15px] mt-[30px] bg-white rounded">
      <div className="flex pt-[26px] item-center ml-[20px]">
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
        <HiOutlineSearch className="ml-[15px] mt-[15px] text-Greyscale-NormalActive absolute top-[142px] default:right-[345px] 3xl:right-[582px]" />
        <button className="w-[108px] ml-[10px] h-[44px] rounded-md text-white bg-Primary-Normal text-[20px] font-semibold">
          Search
        </button>
      </div>
      <table className="default:w-[1070px] 2xl:w-[1000px] border-separate table-auto mx-5 xl:border-spacing-y-[18px] border-spacing-y-[30px]">
        <thead className="bg-Primary-Light h-[43px] xl:h-[33px]">
          <tr>
            <th className="text-sm font-medium xl:text-xs text-Black-Normal">
              Nama
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Kota
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Kelurahan
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Action
            </th>
          </tr>
        </thead>
        {data.slice(1, 7).map((item, index) => (
          <tbody key={index} className="text-base xl:text-sm">
            <tr key={index} className="h-[40px] xl:h-[25px]">
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.kelurahan}</td>
              <td className="flex items-center gap-x-2 h-[40px] justify-center">
                <ButtonDetailAkun />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
