import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function DateDropdown() {
  const [showTanggal, setShowTanggal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [tanggalList, setTanggalList] = useState([
    {
      name: "1",
      value: "1",
    },
    {
      name: "2",
      value: "2",
    },
    {
      name: "3",
      value: "3",
    },
    {
      name: "4",
      value: "4",
    },
    {
      name: "5",
      value: "5",
    },
    {
      name: "6",
      value: "6",
    },
    {
      name: "7",
      value: "7",
    },
    {
      name: "8",
      value: "8",
    },
    {
      name: "9",
      value: "9",
    },
    {
      name: "10",
      value: "10",
    },
    {
      name: "11",
      value: "11",
    },
    {
      name: "12",
      value: "12",
    },
    {
      name: "13",
      value: "13",
    },
    {
      name: "14",
      value: "14",
    },
    {
      name: "15",
      value: "15",
    },
    {
      name: "16",
      value: "16",
    },
    {
      name: "17",
      value: "17",
    },
    {
      name: "18",
      value: "18",
    },
    {
      name: "19",
      value: "19",
    },
    {
      name: "20",
      value: "20",
    },
    {
      name: "21",
      value: "21",
    },
    {
      name: "22",
      value: "22",
    },
    {
      name: "23",
      value: "23",
    },
    {
      name: "24",
      value: "24",
    },
    {
      name: "25",
      value: "25",
    },
    {
      name: "26",
      value: "26",
    },
    {
      name: "27",
      value: "27",
    },
    {
      name: "28",
      value: "28",
    },
    {
      name: "29",
      value: "29",
    },
    {
      name: "30",
      value: "30",
    },
    {
      name: "31",
      value: "31",
    },
  ]);
  return (
    <div className="gap-x-2">
      <div>
        <button
          className="w-[94px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowTanggal(!showTanggal)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null ? tanggalList[selectedIndex].name : "Tgl"}
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showTanggal && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[94px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {tanggalList.map((item, index) => (
              <button
                className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.value}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowTanggal(false);
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
