import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function MonthDropdown() {
  const [showBulan, setShowBulan] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [bulanList, setBulanList] = useState([
    {
      name: "Januari",
      value: "Januari",
    },
    {
      name: "Februari",
      value: "Februari",
    },
    {
      name: "Maret",
      value: "Maret",
    },
    {
      name: "April",
      value: "April",
    },
    {
      name: "May",
      value: "May",
    },
    {
      name: "Juni",
      value: "Juni",
    },
    {
      name: "Juli",
      value: "Juli",
    },
    {
      name: "Agustus",
      value: "Agustus",
    },
    {
      name: "September",
      value: "September",
    },
    {
      name: "Oktober",
      value: "Oktober",
    },
    {
      name: "November",
      value: "November",
    },
    {
      name: "Desember",
      value: "Desember",
    },
  ]);

  return (
    <div>
      <div>
        <button
          className="w-[124px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowBulan(!showBulan)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null ? bulanList[selectedIndex].name : "Bulan"}
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
      {showBulan && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[124px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {bulanList.map((item, index) => (
              <button
                className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.name}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowBulan(false);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
