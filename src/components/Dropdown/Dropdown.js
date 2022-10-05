import React, { useEffect, useState } from "react";
import BulanIni from "../BulanIni";
import HariIni from "../HariIni";
import MingguIni from "../MingguIni";
import { HiChevronDown } from "react-icons/hi";

export default function CobaDropdown() {
  const [showPemakaian, setShowPemakaian] = useState("HariIni");
  const handlerOnChange = (e) => {
    setShowPemakaian(e.target.value);
  };

  const [hariContentVisible, setHariContentVisible] = useState(false);
  const [mingguContentVisible, setmingguContentVisible] = useState(false);
  const [bulanContentVisible, setBulanContentVisible] = useState(false);

  useEffect(() => {
    showPemakaian === "HariIni"
      ? setHariContentVisible(true)
      : setHariContentVisible(false);
    showPemakaian === "MingguIni"
      ? setmingguContentVisible(true)
      : setmingguContentVisible(false);
    showPemakaian === "BulanIni"
      ? setBulanContentVisible(true)
      : setBulanContentVisible(false);
  }, [showPemakaian]);

  return (
    <div>
      <div className="absolute flex top-0 right-0 mt-5 mr-[50px]">
        <select
          className="form-select appearance-none w-[223px] h-9 px-3 py-2 text-sm font-medium text-Info-NormalActive bg-white border outline-none border-Info-NormalActive rounded shadow-sm"
          value={showPemakaian}
          onChange={handlerOnChange}
        >
          <option value="HariIni">Hari ini</option>
          <option value="MingguIni">1 Minggu</option>
          <option value="BulanIni">1 Bulan</option>
        </select>
        <HiChevronDown className="absolute right-[12px] w-5 h-5 mt-2 text-Info-Normal" />
      </div>
      {hariContentVisible && <HariIni />}
      {mingguContentVisible && <MingguIni />}
      {bulanContentVisible && <BulanIni />}
    </div>
  );
}
