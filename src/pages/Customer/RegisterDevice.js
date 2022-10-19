import React from "react";
import SidebarAlt from "../../components/Sidebar/SidebarAlt";

export default function RegisterDevice() {
  return (
    <div className="flex w-screen h-screen bg-[#F3F3F3]">
      <SidebarAlt />
      <div>
        <div className="default:mt-[100px] default:ml-[63px]">
          <h1 className="font-semibold default:text-lg text-Primary-Normal">
            Register Device
          </h1>
          <h2 className="font-semibold text-[#444444] default:text-base default:mt-[20px]">
            User ID
          </h2>
          <input
            type="text"
            id="username"
            placeholder="Masukkan user id anda"
            className="default:mt-2 placeholder:text-[#8F8F8F] placeholder:text-sm placeholder:font-medium default:w-[512px] default:h-[48px] rounded default:border-[2px] default:border-[#939393] default:outline-none default:pl-[16px] default:pr-[10px] default:py-[10px] default:text-[#444444] default:font-semibold"
          />
          <h2 className="font-semibold text-[#444444] default:text-base default:mt-[20px]">
            Device ID
          </h2>
          <input
            id="password"
            placeholder="Masukkan device id anda"
            className="default:mt-2 placeholder:text-[#8F8F8F] placeholder:text-sm placeholder:font-medium default:w-[512px] default:h-[48px] rounded default:border-[2px] default:border-[#939393] default:outline-none default:pl-[16px] default:pr-[10px] default:py-[10px] default:text-[#444444] default:font-semibold"
          />
          <div className="absolute text-xl top-[295px] ml-[475px]"></div>
          <div className="flex items-center mt-[50px]">
            <h1 className="font-medium default:text-sm text-Greyscale-NormalHover">
              *Form wajib terisi penuh
            </h1>
            <button className="w-[158px] h-[39px] bg-Primary-Normal ml-[264px] rounded text-white text-base font-medium">
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
