import React from "react";

export default function PaginationDataDiri() {
  return (
    <div className="absolute top-0 right-[202px] flex items-center mt-8">
      <div className="text-white rounded-full flex items-center justify-center bg-Greyscale-Normal w-[35px] h-[35px]">
        1
      </div>
      <div className="">
        <h1 className="ml-2 text-base font-semibold text-Greyscale-Normal">
          Register
        </h1>
      </div>
      <div className="w-[40px] border-b-2 border-Greyscale-Normal border-dotted border-slate-400 m-4"></div>
      <div className="text-white rounded-full flex items-center justify-center bg-Primary-Normal w-[35px] h-[35px] ">
        2
      </div>
      <div className="">
        <h1 className="ml-2 text-base font-semibold text-Black-Normal">
          Isi data diri
        </h1>
      </div>
      <div className="w-[40px] border-b-2 border-Greyscale-Normal border-dotted border-slate-400 m-4"></div>
      <div className="text-white rounded-full flex items-center justify-center bg-Greyscale-Normal w-[35px] h-[35px]">
        3
      </div>
      <div className="">
        <h1 className="ml-2 text-base font-semibold text-Greyscale-Normal">
          Get Started
        </h1>
      </div>
    </div>
  );
}
