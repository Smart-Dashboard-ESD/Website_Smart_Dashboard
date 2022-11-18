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
          className="form-select appearance-none default:w-[223px] xl:w-[223px] default:h-9 xl:h-[30px] px-3 py-2 default:text-sm xl:text-[10px] font-medium text-Info-NormalActive bg-white border outline-none border-Info-NormalActive rounded shadow-sm"
          value={showPemakaian}
          onChange={handlerOnChange}
        >
          <option value="HariIni">Hari ini</option>
          <option value="MingguIni">1 Minggu</option>
          <option value="BulanIni">1 Bulan</option>
        </select>
        <HiChevronDown className="absolute right-[12px] default:w-5 default:h-5 xl:w-[15px] xl:h-[15px] mt-2 text-Info-Normal" />
      </div>
      {hariContentVisible && <HariIni msg="Daily" />}
      {mingguContentVisible && <MingguIni msg="Weekly" />}
      {bulanContentVisible && <BulanIni msg="Monthly" />}
    </div>
  );
}
