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

export default function YearDropdown() {
  const [showTahun, setShowTahun] = useState(false);

  let domNode = useClickOutside(() => {
    setShowTahun(false);
  });

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
          ref={domNode}
        >
          2022
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
      {showTahun && (
        <div
          className="absolute z-10 w-[112px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              2001
            </button>
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              2002
            </button>
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              2003
            </button>
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              2004
            </button>
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
            >
              2005
            </button>
            <button
              className="inline-flex w-[112px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-5"
            >
              2006
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
