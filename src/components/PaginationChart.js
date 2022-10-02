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
      ? setPageSatuContentVisible(true)
      : setPageSatuContentVisible(false);
    currentPage === 2
      ? setPageDuaContentVisible(true)
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
            className={`w-5 h-5 ${
              pageSatuContentVisible
                ? "text-Black-LightActive"
                : "text-Primary-Normal"
            } `}
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
            className={`w-5 h-5 ${
              pageDuaContentVisible
                ? "text-Black-LightActive"
                : "text-Primary-Normal"
            } `}
          />
        </button>
      </div>
    </div>
  );
}
