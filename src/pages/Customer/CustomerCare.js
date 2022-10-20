import React from "react";
import Petugas from "../../components/Petugas";
import Sidebar from "../../components/Sidebar/Sidebar";
import TicketForm from "../../components/Tickets/TicketForm";
import Tickets from "../../components/Tickets/Tickets";

export default function CustomerCare() {
  return (
    <div className="flex default:min-h-screen 4xl:h-[1080px] bg-[#F3F3F3]">
      <Sidebar />
      <div className="flex">
        <div className="ml-5 mt-[30px]">
          <h1 className="text-lg font-semibold text-Black-Normal">
            Customer Care
          </h1>
          <p className="text-base font-medium text-Greyscale-NormalHover">
            Sampaikan Keluhanmu disini !
          </p>
          <Petugas />
          <Tickets />
        </div>
        <TicketForm />
      </div>
    </div>
  );
}
