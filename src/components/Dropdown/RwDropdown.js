import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function RwDropdown() {
  const [showRt, setShowRt] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [rwList, setRwList] = useState([
    {
      name: "001",
      value: "001",
    },
    {
      name: "002",
      value: "002",
    },
    {
      name: "003",
      value: "003",
    },
    {
      name: "004",
      value: "004",
    },
    {
      name: "005",
      value: "005",
    },
    {
      name: "006",
      value: "006",
    },
    {
      name: "007",
      value: "007",
    },
    {
      name: "008",
      value: "008",
    },
    {
      name: "009",
      value: "009",
    },
    {
      name: "010",
      value: "010",
    },
  ]);

  return (
    <div>
      <div>
        <button
          className="w-[126px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowRt(!showRt)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedIndex !== null ? rwList[selectedIndex].name : "RW"}
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
      {showRt && (
        <div
          className="absolute overflow-y-auto h-[160px] z-10 w-[126px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {rwList.map((item, index) => (
              <button
                className="inline-flex w-[126px] py-2 pl-3 text-sm text-Black-Normal"
                role="menuitem"
                key={item.value}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowRt(false);
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
