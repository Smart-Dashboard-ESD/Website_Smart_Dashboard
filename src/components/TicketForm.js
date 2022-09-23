import React from "react";

export default function TicketForm() {
  return (
    <div className="ml-[130px] mt-[132px]">
      <h1 className="text-lg font-semibold text-Black-Normal">
        Form Pengaduan
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Nama
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan nama anda"
      />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">
        Kode Alat
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan kode alat anda"
      />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">Alamat</h2>
      <input
        className="w-[512px] h-[105px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan alamat anda"
      />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">
        Nomor Telepon
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan nomor telepon anda"
      />
      <h2 className="mt-4 text-base font-semibold text-Black-Normal">
        Keluhan
      </h2>
      <input
        className="w-[512px] h-[105px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan keluhan anda"
      />
      <div className="flex justify-end mt-[30px]">
        <div className="w-[95px] h-[39px] bg-Primary-Normal rounded flex items-center justify-center">
          <h1 className="text-base font-medium text-white">Submit</h1>
        </div>
      </div>
    </div>
  );
}
