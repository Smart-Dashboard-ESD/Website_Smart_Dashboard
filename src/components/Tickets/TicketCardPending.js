import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TicketCardPending() {
  let [dataFeedback, setData] = useState([]);

  const data = [
    {
      id: 1235,
      status: "In Process",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
    {
      id: 1235,
      status: "In Process",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
    {
      id: 1235,
      status: "In Process",
      date: "16/10/2022",
      time: "09:46 AM",
      nohp: "+(62) 9090128989",
    },
  ];

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_ENDPOINT +
          "/users/feedback/getFeedbackById?userid=" +
          localStorage.getItem("userid"),
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if (res.data.message == "Get All Feedback By User") {
          res.data.data.map((item) => {
            console.log(item);
            setData((prevData) => [
              ...prevData,
              {
                id: item.feedbackID,
                status: item.status,
                date: item.createdAt,
                pengaduan: item.feedback,
              },
            ]);
          });
        }
      });
  }, []);

  return (
    <div>
      {dataFeedback.map((item, index) => (
        <div
          className="w-[378px] h-[135px] bg-white rounded mt-[13px]"
          key={index}
        >
          <div className="flex justify-between items-center ml-[15px] pt-[15px] mr-5">
            <h1 className="text-base font-bold text-Primary-NormalActive">
              {item.id}
            </h1>
            <div className="w-[70px] h-[32px] rounded bg-[#939393] text-[10px] font-medium text-white flex items-center justify-center opacity-60">
              {item.status}
            </div>
          </div>
          <div className="flex justify-between items-center ml-[15px] pt-[52px] mr-5">
            <span className="leading-none">
              <h1 className="text-[13px] font-medium text-Greyscale-Normal">
                {item.date}
              </h1>
              <h1 className="text-[13px] font-medium text-Greyscale-Normal">
                {item.pengaduan}
              </h1>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
