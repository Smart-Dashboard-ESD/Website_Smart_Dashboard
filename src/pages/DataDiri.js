import React from "react";
import FormDataDiri from "../components/FormDataDiri";
import SidebarAlt from "../components/Sidebar/SidebarAlt";

export default function DataDiri() {
  return (
    <div className="w-screen h-[1024px] flex bg-[#F3F3F3]">
      <SidebarAlt />
      <div>
        <div className="absolute top-0 right-[202px] flex items-center mt-8">
          <div className="text-white rounded-full flex items-center justify-center bg-Primary-Normal w-[35px] h-[35px]">
            1
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Black-Normal">
              Isi data diri
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-Greyscale-Normal border-dotted border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-Greyscale-Normal w-[35px] h-[35px] ">
            2
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Greyscale-Normal">
              Register
            </h1>
          </div>
        </div>
        <FormDataDiri />
      </div>
    </div>
  );
}
