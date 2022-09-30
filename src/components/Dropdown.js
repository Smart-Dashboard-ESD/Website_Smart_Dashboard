import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

// let useClickOutside = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return domNode;
// };

export default function Dropdown({ selected, setSelected }) {
  const [showOptions, setShowOptions] = useState(false);
  const options = ["Hari Ini", "1 Minggu", "1 Bulan"];

  // let domNode = useClickOutside(() => {
  //   setShowOptions(false);
  // });

  return (
    <div className="absolute top-0 right-0 mt-5 mr-[50px]">
      <div className="relative inline-block text-left">
        <div>
          <div
            onClick={() => setShowOptions(!showOptions)}
            type="button"
            className="inline-flex justify-between w-[223px] h-9 px-3 py-2 text-sm font-medium text-Info-NormalActive bg-white border border-Info-NormalActive rounded shadow-sm"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            // ref={domNode}
          >
            {selected}
            <HiChevronDown className="w-5 h-5 ml-2 -mr-1 text-Info-Normal" />
          </div>
        </div>
        {showOptions && (
          <div
            className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded shadow-lg ring-1 ring-Info-NormalActive ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {options.map((option, index) => (
              <div
                className="inline-flex w-56 py-2 pl-3 text-sm text-Info-NormalActive"
                role="menuitem"
                key={index}
                onClick={(e) => {
                  setSelected(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
