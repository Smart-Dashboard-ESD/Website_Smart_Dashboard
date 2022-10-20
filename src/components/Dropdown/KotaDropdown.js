import React, { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function KotaDropdown({ selected }) {
  const [showKota, setShowKota] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.closest(".dropdownkota") === null) {
        setShowKota(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  const [kotaList] = useState([
    {
      name: "Jakarta Pusat",
      value: "Jakarta Pusat",
    },
    {
      name: "Jakarta Utara",
      value: "Jakarta Utara",
    },
    {
      name: "Jakarta Barat",
      value: "Jakarta Barat",
    },
    {
      name: "Jakarta Selatan",
      value: "Jakarta Selatan",
    },
    {
      name: "Jakarta Timur",
      value: "Jakarta Timur",
    },
    {
      name: "Bogor",
      value: "Bogor",
    },
    {
      name: "Depok",
      value: "Depok",
    },
    {
      name: "Tangerang",
      value: "Tangerang",
    },
    {
      name: "Bekasi",
      value: "Bekasi",
    },
  ]);

  return (
    <div className="gap-x-2">
      <div>
        <button
          className="dropdownkota w-[251px] h-[48px] bg-white text-sm rounded border text-Black-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowKota(!showKota)}
          type="button"
          id="city"
          aria-expanded="true"
          aria-haspopup="true"
          value={selectedIndex}
        >
          {selectedIndex !== null ? kotaList[selectedIndex].name : "Kota"}
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showKota && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[251px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {kotaList.map((item, index) => (
              <button
                className="inline-flex w-[251px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.name}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowKota(false);
                  selected(item.value);
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
