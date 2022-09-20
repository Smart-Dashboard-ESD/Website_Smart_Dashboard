import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function YearDropdown() {
  const [showTahun, setShowTahun] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [tahunList, setTahunList] = useState([
    {
      name: "1970",
      value: "1970",
    },
    {
      name: "1971",
      value: "1971",
    },
    {
      name: "1972",
      value: "1972",
    },
    {
      name: "1973",
      value: "1973",
    },
    {
      name: "1974",
      value: "1974",
    },
    {
      name: "1975",
      value: "1975",
    },
    {
      name: "1976",
      value: "1976",
    },
    {
      name: "1977",
      value: "1977",
    },
    {
      name: "1978",
      value: "1978",
    },
    {
      name: "1979",
      value: "1979",
    },
    {
      name: "1980",
      value: "1980",
    },
  ]);

  return (
    <div>
      <div>
        <button
          className="w-[112px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowTahun(!showTahun)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null ? tahunList[selectedIndex].name : "Tahun"}
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
      {showTahun && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[112px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {tahunList.map((item, index) => (
              <button
                className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.name}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowTahun(false);
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
