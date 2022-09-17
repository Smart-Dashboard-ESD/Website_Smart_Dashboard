import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Dropdown() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="absolute top-0 right-0 mt-5 mr-[50px]">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setShowOptions(!showOptions)}
            type="button"
            className="inline-flex justify-between w-[223px] h-9 px-3 py-2 text-sm font-medium text-Info-NormalActive bg-white border border-Info-NormalActive rounded shadow-sm"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Hari ini
            <HiChevronDown className="w-5 h-5 ml-2 -mr-1 text-Info-Normal" />
          </button>
        </div>
        {showOptions && (
          <div
            className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              <button
                href="#"
                className="inline-flex w-56 py-2 pl-3 text-sm text-Info-NormalActive"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Hari ini
              </button>
              <button
                href="#"
                className="inline-flex w-56 py-2 pl-3 text-sm text-Info-NormalActive"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                1 Minggu
              </button>
              <button
                href="#"
                className="inline-flex w-56 py-2 pl-3 text-sm text-Info-NormalActive"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                1 Bulan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
