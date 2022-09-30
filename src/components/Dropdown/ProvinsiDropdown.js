import React, { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function ProvinsiDropdown() {
  const [showProvinsi, setShowProvinsi] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.closest(".dropdownprovinsi") === null) {
        setShowProvinsi(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  const [provinsiList] = useState([
    {
      name: "Aceh",
      value: "Aceh",
    },
    {
      name: "Bali",
      value: "Bali",
    },
    {
      name: "Banten",
      value: "Banten",
    },
    {
      name: "Bengkulu",
      value: "Bengkulu",
    },
    {
      name: "Gorontalo",
      value: "Gorontalo",
    },
    {
      name: "Jakarta",
      value: "Jakarta",
    },
    {
      name: "Jambi",
      value: "Jambi",
    },
    {
      name: "Jawa Barat",
      value: "Jawa Barat",
    },
    {
      name: "Jawa Tengah",
      value: "Jawa Tengah",
    },
    {
      name: "Jawa Timur",
      value: "Jawa Timur",
    },
    {
      name: "Kalimantan Barat",
      value: "Kalimantan Barat",
    },
    {
      name: "Kalimantan Selatan",
      value: "Kalimantan Selatan",
    },
    {
      name: "Kalimantan Tengah",
      value: "Kalimantan Tengah",
    },
    {
      name: "Kalimantan Timur",
      value: "Kalimantan Timur",
    },
    {
      name: "Kalimantan Utara",
      value: "Kalimantan Utara",
    },
  ]);

  return (
    <div className="gap-x-2">
      <div>
        <button
          className="dropdownprovinsi w-[252px] h-[48px] bg-white text-sm rounded border text-Black-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowProvinsi(!showProvinsi)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null
            ? provinsiList[selectedIndex].name
            : "Provinsi"}
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showProvinsi && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[252px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {provinsiList.map((provinsi, index) => (
              <button
                className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={provinsi.name}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowProvinsi(false);
                }}
              >
                {provinsi.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
