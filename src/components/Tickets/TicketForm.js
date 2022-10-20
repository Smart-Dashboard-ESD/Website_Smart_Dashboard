import React from "react";
import DropdownKeluhan from "../Dropdown/DropdownKeluhan";

export default function TicketForm() {
  return (
    <form className="ml-[130px] mt-[132px]">
      <h1 className="text-lg font-semibold text-Black-Normal">
        Form Pengaduan
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Kategori Keluhan
      </h2>
      <DropdownKeluhan />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">
        Keluhan
      </h2>
      <textarea
        className="w-[512px] h-[105px] pt-3 bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan keluhan anda"
        type="textarea"
      ></textarea>
      <div className="w-[95px] h-[39px] bg-Primary-Normal ml-[418px] text-white rounded flex items-center justify-center font-semibold mt-[30px]">
        <button>Submit</button>
      </div>
    </form>
  );
}
