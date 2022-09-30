import React from "react";
import { Link } from "react-router-dom";
import GenderDropdown from "./Dropdown/GenderDropdown";
import KotaDropdown from "./Dropdown/KotaDropdown";
import ProvinsiDropdown from "./Dropdown/ProvinsiDropdown";
import RtDropdown from "./Dropdown/RtDropdown";
import RwDropdown from "./Dropdown/RwDropdown";
import { Input } from "@chakra-ui/react";

export default function FormDataDiri() {
  return (
    <div className="mt-[100px] ml-[63px]">
      <h1 className="text-lg font-semibold text-Primary-Normal">
        Nomor Penduduk :
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[20px]">
        NIK
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white mt-[10px] rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
        placeholder="Masukkan NIK anda"
        type="number"
      />
      <h1 className="text-lg font-semibold text-Primary-Normal mt-[30px]">
        Data Diri :
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[20px]">
        Nama Lengkap
      </h2>
      <input
        className="w-[512px] h-[48px] bg-white mt-[10px] rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
        placeholder="Masukkan username anda"
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Tempat dan Tanggal Lahir
      </h2>
      <div className="flex mt-[10px]">
        <input
          className="w-[146px] h-[48px] mr-[20px] bg-white rounded placeholder:text-[#8F8F8F] text-Black-Normal border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
          placeholder="Bandung"
        />
        <span className="">
          <Input
            placeholder="Pilih tanggal lahir"
            width={346}
            height={48}
            type="date"
            className="text-base border rounded border-[#939393] placeholder:text-[#8F8F8F] px-4"
          />
        </span>
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Jenis Kelamin
      </h2>
      <GenderDropdown />
      <h1 className="text-lg font-semibold text-Primary-Normal mt-[30px]">
        Alamat Lengkap :
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Provinsi dan Kota
      </h2>
      <div className="flex mt-[10px] gap-x-2">
        <ProvinsiDropdown />
        <KotaDropdown />
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Kelurahan/Desa dan RT/RW
      </h2>
      <div className="flex mt-[10px] gap-x-2">
        <input
          className="w-[244px] h-[48px] bg-white rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
          placeholder="Bojongsoang"
        />
        <RtDropdown />
        <RwDropdown />
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Detail Alamat
      </h2>
      <input
        className="w-[512px] h-[48px] mt-2 bg-white rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
        placeholder="Masukkan nama jalan dan no rumah anda"
      />
      <div className="flex mt-[40px] items-center">
        <h2 className="text-sm font-medium text-Greyscale-Normal">
          *Form wajib terisi penuh
        </h2>
        <Link to="/register">
          <button className="w-[158px] h-[39px] bg-Primary-Normal rounded text-base font-medium text-white ml-[264px]">
            Save & Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
