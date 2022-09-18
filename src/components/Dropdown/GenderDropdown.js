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

export default function GenderDropdown() {
  const [showGender, setShowGender] = useState(false);

  let domNode = useClickOutside(() => {
    setShowGender(false);
  });

  return (
    <div className="mt-2 gap-x-2">
      <div>
        <button
          className="w-[512px] h-[48px] bg-white text-sm rounded border text-Greyscale-Normal border-Greyscale-Normal inline-flex justify-between items-center px-4"
          onClick={() => setShowGender(!showGender)}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          ref={domNode}
        >
          Laki - Laki
          <HiChevronDown className="w-5 h-5" />
        </button>
      </div>
      {showGender && (
        <div
          className="absolute z-10 w-[512px] mt-2 bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="inline-flex w-[512px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Laki - Laki
            </button>
            <button
              className="inline-flex w-[512px] py-2 pl-3 text-sm text-Black-Normal"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Perempuan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
