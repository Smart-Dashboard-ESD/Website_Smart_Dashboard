import React from "react";

export default function CreateDeviceForm() {
  return (
    <form className="ml-[63px]">
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Name
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device name anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Type
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device type anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Model
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device model anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Brand
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device brand anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Device Desc
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan device desc anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Lat
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan Lat anda"
        type="text"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[30px]">
        Long
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white rounded border border-[#939393] mt-2 pl-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#8F8F8F]"
        placeholder="Masukkan Long anda"
        type="text"
      />
      <div>
        <button className="w-[109px] h-[44px] bg-Primary-Normal rounded text-white font-semibold mt-[30px] ml-[403px]">
          Submit
        </button>
      </div>
    </form>
  );
}
