import React from "react";

export default function TicketCardSolved() {
  const data = [
    {
      id: 1234,
      status: "Solved",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
    {
      id: 1234,
      status: "Solved",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
    {
      id: 1234,
      status: "Solved",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div
          className="w-[378px] h-[135px] bg-white rounded mt-[13px]"
          key={index}
        >
          <div className="flex justify-between items-center ml-[15px] pt-[15px] mr-5">
            <h1 className="text-base font-bold text-Primary-NormalActive">
              {item.id}
            </h1>
            <div className="w-[70px] h-[32px] rounded bg-Success-Normal text-[10px] font-medium text-white flex items-center justify-center opacity-60">
              {item.status}
            </div>
          </div>
          <div className="flex justify-between items-center ml-[15px] pt-[52px] mr-5">
            <span className="leading-none">
              <h1 className="text-[13px] font-medium text-Greyscale-Normal">
                {item.date}
              </h1>
              <p className="text-[10px] font-medium text-Greyscale-Normal">
                {item.time}
              </p>
            </span>
            <div className="text-sm font-medium text-Greyscale-Normal">
              {item.nohp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
