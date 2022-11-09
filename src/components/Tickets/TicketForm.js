import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function TicketForm() {
  const url = process.env.REACT_APP_API_ENDPOINT + "/users/feedback";
  let userid = localStorage.getItem("userid");
  const toast = useToast();
  const [data, setData] = useState({
    feedback: "",
    customerid: userid,
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.message === "Network Error") {
          console.log(res);
          alert("Periksa koneksi internet anda");
        } else {
          console.log(res);
          toast({
            title: "Berhasil",
            description: "Feedback berhasil dikirim",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
  }

  return (
    <form className="ml-[130px] mt-[132px]">
      <h1 className="text-lg font-semibold text-Black-Normal">
        Form Pengaduan
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Customer ID
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        id="customerid"
        type="text"
        value={userid}
        readOnly
      />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">
        Keluhan
      </h2>
      <textarea
        className="w-[512px] h-[105px] pt-3 bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan keluhan anda"
        type="textarea"
        onChange={(e) => handle(e)}
        value={data.feedback}
        id="feedback"
      ></textarea>
      <div className="w-[95px] h-[39px] bg-Primary-Normal ml-[418px] text-white rounded flex items-center justify-center font-semibold mt-[30px]">
        <button onClick={submit}>Submit</button>
      </div>
    </form>
  );
}
