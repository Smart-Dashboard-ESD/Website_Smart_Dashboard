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

export default function DateDropdown() {
  const [showTanggal, setShowTanggal] = useState(false);

  let domNode = useClickOutside(() => {
    setShowTanggal(false);
  });

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
          ref={domNode}
        >
          17
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showTanggal && (
        <div
          className="absolute z-10 w-[94px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              1
            </button>
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              2
            </button>
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              3
            </button>
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              4
            </button>
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
            >
              5
            </button>
            <button
              className="inline-flex w-[94px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-5"
            >
              6
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
