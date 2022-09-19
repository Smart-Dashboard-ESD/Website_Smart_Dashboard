import React, { useState, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function ProvinsiDropdown() {
  const [showProvinsi, setShowProvinsi] = useState(false);

  let domNode = useClickOutside(() => {
    setShowProvinsi(false);
  });

  return (
    <div className="gap-x-2">
      <div>
        <button
          className="w-[252px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowProvinsi(!showProvinsi)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          ref={domNode}
        >
          Jawa Barat
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showProvinsi && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[252px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Banten
            </button>
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Jawa Barat
            </button>
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Jawa Tengah
            </button>
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              DKI Jakarta
            </button>
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
            >
              Jawa Timur
            </button>
            <button
              className="inline-flex w-[252px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-5"
            >
              Bali
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
