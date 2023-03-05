import React from "react";
import TableTransaksi from "./TableTransaksi";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";

export default function Transaksi() {
  return (
    <div className="default:w-[1110px] default:h-[493px] xl:w-[950px] xl:h-[373px] ml-[15px] bg-white mt-5 rounded drop-shadow">
      <div className="flex items-center">
        <div className="ml-[29px] pt-[26px]">
          <h1 className="font-medium text-Black-Normal default:text-[20px] xl:text-[14px]">
            Data Transaksi
          </h1>
          <p className="font-medium default:text-sm xl:text-[9px] text-Greyscale-Normal">
            Data transaksi pelanggan
          </p>
        </div>
        <select className="default:w-[223px] appearance-none default:ml-[290px] default:h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive">
            <option value="Bandung">Bandung</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Jogyakarta">Jogyakarta</option>
            <option value="Solo">Solo</option>
            <option value="Padang">Padang</option>
        </select>
        <HiChevronDown className="absolute top-[155px] right-[420px] text-Info-NormalActive" />
        <input
            placeholder="Cari"
            className="default:w-[223px] pl-9 default:ml-[15px] default:h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive"
        />
        <HiOutlineSearch className="default:ml-[15px] default:mt-[15px] text-Greyscale-NormalActive absolute top-[142px] default:right-[363px] 3xl:right-[602px]" />
        <button className="default:w-[108px] default:ml-[15px] default:h-[44px] rounded-md text-white bg-Primary-Normal default:text-[20px] font-semibold">
            Search
        </button>
      </div>
      <TableTransaksi />
    </div>
  );
}
