import React from "react";
import { HiOutlineBell } from "react-icons/hi";

export default function Notification() {
  return (
    <div className="default:w-[52px] default:h-[52px] xl:w-[42px] xl:h-[42px] bg-white text-Primary-Normal rounded flex items-center justify-center">
      <HiOutlineBell className="w-5 h-5" />
    </div>
  );
}
