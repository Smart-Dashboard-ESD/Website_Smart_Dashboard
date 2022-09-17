import React from "react";
import { HiOutlineBell } from "react-icons/hi";

export default function Notification() {
  return (
    <div className="w-[52px] h-[52px] bg-white text-Primary-Normal rounded flex items-center justify-center">
      <HiOutlineBell className="w-5 h-5" />
    </div>
  );
}
