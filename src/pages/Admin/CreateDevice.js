import React from "react";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import CreateDeviceForm from "../../components/CreateDeviceForm";

export default function CreateDevice() {
  return (
    <div className="w-screen h-screen flex bg-[#F3F3F3] overflow-y-auto">
      <SidebarAdmin />
      <div>
        <div className="mt-[30px] ml-[20px]">
          <h1 className="font-semibold text-[20px] text-Black-Normal">
            Data Keluhan
          </h1>
          <p className="font-medium text-Greyscale-NormalHover">
            Buat data device disini !
          </p>
        </div>
        <div>
          <CreateDeviceForm />
        </div>
      </div>
    </div>
  );
}
