import React, { useState, useEffect } from "react";
import TicketCardPending from "./TicketCardPending";
import TicketCardSolved from "./TicketCardSolved";

export default function Tickets() {
  const [showTicket, setShowTicket] = useState("pending");
  const [pendingContentVisible, setPendingContentVisible] = useState(false);
  const [solvedContentVisible, setSolvedContentVisible] = useState(false);

  useEffect(() => {
    showTicket === "pending"
      ? setPendingContentVisible(true)
      : setPendingContentVisible(false);
    showTicket === "solved"
      ? setSolvedContentVisible(true)
      : setSolvedContentVisible(false);
  }, [showTicket]);
  return (
    <div className="mt-[30px] w-[378px] h-[516px]">
      <h1 className="text-lg font-semibold text-Black-Normal">Tickets</h1>
      <div className="flex justify-between">
        <button onClick={() => setShowTicket("pending")} values="pending">
          <h1
            id="pending"
            className={`text-base font-semibold ${
              pendingContentVisible
                ? "text-Primary-Normal"
                : "text-Black-LightActive"
            }`}
          >
            Pending Tickets
          </h1>
          <div
            className={`w-[85px] border-b-2 rounded-full border-Primary-Normal mx-auto mt-2 ${
              pendingContentVisible ? "block" : "hidden"
            }`}
          ></div>
        </button>
        <button onClick={() => setShowTicket("solved")} values="solved">
          <h1
            id="solved"
            className={`text-base font-semibold ${
              solvedContentVisible
                ? "text-Primary-Normal"
                : "text-Black-LightActive"
            }`}
          >
            Solved Tickets
          </h1>
          <div
            className={`w-[85px] border-b-2 rounded-full border-Primary-Normal mx-auto mt-2 ${
              solvedContentVisible ? "block" : "hidden"
            }`}
          ></div>
        </button>
      </div>
      {pendingContentVisible && <TicketCardPending />}
      {solvedContentVisible && <TicketCardSolved />}
    </div>
  );
}
