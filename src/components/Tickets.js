import React from "react";

export default function Tickets() {
  return (
    <div className="mt-[30px] w-[378px] h-[516px]">
      <h1 className="text-lg font-semibold text-Black-Normal">Tickets</h1>
      <div className="flex justify-between">
        <span>
          <h1 className="text-base font-semibold text-Primary-Normal">
            Pending Tickets
          </h1>
          <div className="w-[85px] border-b-2 border-Primary-Normal mx-auto mt-2"></div>
        </span>
        <span>
          <h1 className="text-base font-semibold text-Greyscale-Normal">
            Solved Tickets
          </h1>
        </span>
      </div>
      <div className="w-[378px] h-[135px] bg-white rounded mt-[13px]">
        <div className="flex justify-between items-center ml-[15px] pt-[15px] mr-5">
          <h1 className="text-base font-bold text-Primary-NormalActive">
            Ticket 1235
          </h1>
          <div className="w-[70px] h-[32px] rounded bg-[#939393] text-[10px] font-medium text-white flex items-center justify-center opacity-60">
            In Process
          </div>
        </div>
        <div className="flex justify-between items-center ml-[15px] pt-[52px] mr-5">
          <span className="leading-none">
            <h1 className="text-[13px] font-medium text-Greyscale-Normal">
              16/01/2022
            </h1>
            <p className="text-[10px] font-medium text-Greyscale-Normal">
              09:46 AM
            </p>
          </span>
          <div className="text-sm font-medium text-Greyscale-Normal">
            +(62) 9090128989
          </div>
        </div>
      </div>
      <div className="w-[378px] h-[135px] bg-white rounded mt-[16px]">
        <div className="flex justify-between items-center ml-[15px] pt-[15px] mr-5">
          <h1 className="text-base font-bold text-Primary-NormalActive">
            Ticket 1235
          </h1>
          <div className="w-[70px] h-[32px] rounded bg-[#939393] text-[10px] font-medium text-white flex items-center justify-center opacity-60">
            In Process
          </div>
        </div>
        <div className="flex justify-between items-center ml-[15px] pt-[52px] mr-5">
          <span className="leading-none">
            <h1 className="text-[13px] font-medium text-Greyscale-Normal">
              16/01/2022
            </h1>
            <p className="text-[10px] font-medium text-Greyscale-Normal">
              09:46 AM
            </p>
          </span>
          <div className="text-sm font-medium text-Greyscale-Normal">
            +(62) 9090128989
          </div>
        </div>
      </div>
      <div className="w-[378px] h-[135px] bg-white rounded mt-[16px]">
        <div className="flex justify-between items-center ml-[15px] pt-[15px] mr-5">
          <h1 className="text-base font-bold text-Primary-NormalActive">
            Ticket 1235
          </h1>
          <div className="w-[70px] h-[32px] rounded bg-[#939393] text-[10px] font-medium text-white flex items-center justify-center opacity-60">
            In Process
          </div>
        </div>
        <div className="flex justify-between items-center ml-[15px] pt-[52px] mr-5">
          <span className="leading-none">
            <h1 className="text-[13px] font-medium text-Greyscale-Normal">
              16/01/2022
            </h1>
            <p className="text-[10px] font-medium text-Greyscale-Normal">
              09:46 AM
            </p>
          </span>
          <div className="text-sm font-medium text-Greyscale-Normal">
            +(62) 9090128989
          </div>
        </div>
      </div>
    </div>
  );
}
