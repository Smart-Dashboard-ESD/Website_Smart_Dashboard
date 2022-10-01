import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ChartLegendBulan1 from "./ChartLegendBulan1";
import ChartLegendBulan2 from "./ChartLegendBulan2";

export default function PaginationChart() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSatuContentVisible, setPageSatuContentVisible] = useState(false);
  const [pageDuaContentVisible, setPageDuaContentVisible] = useState(false);

  useEffect(() => {
    currentPage === 1
      ? setPageSatuContentVisible(true) &&
        document
          .getElementById("prev")
          .classList.add("text-Black-LightActive disabled") &&
        document.getElementById("prev").classList.remove("text-Primary-Normal")
      : setPageSatuContentVisible(false);
    currentPage === 2
      ? setPageDuaContentVisible(true) &&
        document
          .getElementById("next")
          .classList.add("text-Black-LightActive disabled") &&
        document.getElementById("next").classList.remove("text-Primary-Normal")
      : setPageDuaContentVisible(false);
  }, [currentPage]);

  return (
    <div>
      {pageSatuContentVisible && <ChartLegendBulan1 />}
      {pageDuaContentVisible && <ChartLegendBulan2 />}
      <div className="absolute flex justify-end gap-x-2 bottom-20 right-6">
        <button
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          <HiChevronLeft
            id="prev"
            values="1"
            className="w-5 h-5 text-Primary-Normal"
          />
        </button>
        <button
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          <HiChevronRight
            id="next"
            values="2"
            className="w-5 h-5 text-Primary-Normal"
          />
        </button>
      </div>
    </div>
  );
}
