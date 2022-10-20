import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function GenderDropdown({ selected }) {
  const [showGender, setShowGender] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.closest(".dropdowngender") === null) {
        setShowGender(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const [genderList] = useState([
    {
      name: "Laki-laki",
      value: "Laki-laki",
    },
    {
      name: "Perempuan",
      value: "Perempuan",
    },
  ]);

  return (
    <div className="mt-2 overflow-auto gap-x-2">
      <div>
        <button
          className="dropdowngender w-[512px] h-[48px] bg-white text-sm rounded border text-Black-Normal placeholder:text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowGender(!showGender)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null
            ? genderList[selectedIndex].name
            : "Pilih jenis kelamin"}
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showGender && (
        <div
          className="absolute z-10 w-[512px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {genderList.map((item, index) => (
              <button
                className="inline-flex w-[512px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.value}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowGender(false);
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
