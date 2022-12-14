import React from "react";
import GroupIcon from "../../assets/img/GroupIcon.png";

export default function TotalCustomer() {
  return (
    <div className="w-[321px] rounded relative h-[196px] bg-white default:ml-[42px] 2xl:ml-[30px] mt-[13px] flex flex-col items-center justify-center">
      <h1 className="text-[31px] text-Primary-Normal font-bold">303.900</h1>
      <p className="font-medium text-[20px] text-Greyscale-Normal">
        Total Customer
      </p>
      <img
        src={GroupIcon}
        alt="GroupIcon"
        className="absolute bottom-0 right-0 -z-0"
      />
    </div>
  );
}
