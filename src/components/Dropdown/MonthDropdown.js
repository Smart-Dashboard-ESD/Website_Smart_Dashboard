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

export default function MonthDropdown() {
  const [showBulan, setShowBulan] = useState(false);

  let domNode = useClickOutside(() => {
    setShowBulan(false);
  });

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
          ref={domNode}
        >
          September
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
      {showBulan && (
        <div
          className="absolute overflow-y-auto h-[200px] z-10 w-[124px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Januari
            </button>
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Februari
            </button>
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Maret
            </button>
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              April
            </button>
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
            >
              Mei
            </button>
            <button
              className="inline-flex w-[124px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-5"
            >
              Juni
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
