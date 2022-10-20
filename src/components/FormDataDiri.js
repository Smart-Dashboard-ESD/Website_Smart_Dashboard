import React, { useState } from "react";
// import { Link } from "react-router-dom";
import GenderDropdown from "./Dropdown/GenderDropdown";
import KotaDropdown from "./Dropdown/KotaDropdown";
import ProvinsiDropdown from "./Dropdown/ProvinsiDropdown";
import RtDropdown from "./Dropdown/RtDropdown";
import RwDropdown from "./Dropdown/RwDropdown";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function FormDataDiri() {
  const [data, setData] = useState({
    nik: "",
    name: "",
    birthplace: "",
    birthdate: "",
    gender: "",
    province: "",
    city: "",
    kelurahan: "",
    rt: "",
    rw: "",
    address: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const getProvinsi = (selected) => {
    return setData((data) => ({ ...data, province: selected }));
  };

  const getGender = (selected) => {
    return setData((data) => ({ ...data, gender: selected }));
  };

  const getCity = (selected) => {
    return setData((data) => ({ ...data, city: selected }));
  };

  const getRt = (selected) => {
    return setData((data) => ({ ...data, rt: selected }));
  };

  const getRw = (selected) => {
    return setData((data) => ({ ...data, rw: selected }));
  };

  function submit(e) {
    e.preventDefault();
    var dataSaved = {
      nik: parseInt(data.nik),
      name: data.name,
      birthplace: data.birthplace,
      birthdate: data.birthdate,
      gender: data.gender,
      province: data.province,
      city: data.city,
      kelurahan: data.kelurahan,
      rt: data.rt,
      rw: data.rw,
      address: data.address,
    };
    localStorage.setItem("data", JSON.stringify(dataSaved));
    navigate("/username");
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <form className="mt-[100px] ml-[63px]" onSubmit={(e) => submit(e)}>
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
        onChange={(e) => handle(e)}
        id="nik"
        value={data.nik}
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
        onChange={(e) => handle(e)}
        id="name"
        value={data.name}
      />
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Tempat dan Tanggal Lahir
      </h2>
      <div className="flex mt-[10px]">
        <input
          className="w-[146px] h-[48px] mr-[20px] bg-white rounded placeholder:text-[#8F8F8F] text-Black-Normal border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
          placeholder="Bandung"
          onChange={(e) => handle(e)}
          id="birthplace"
          value={data.birthplace}
        />
        <span className="">
          <Input
            placeholder="Pilih tanggal lahir"
            width={346}
            height="48px"
            type="date"
            bg="white"
            border="1px solid"
            borderColor="#939393"
            borderRadius="4px"
            className="text-base border border-[#939393] bg-white placeholder:text-[#8F8F8F] px-4"
            onChange={(e) => handle(e)}
            id="birthdate"
            value={data.birthdate}
          />
        </span>
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Jenis Kelamin
      </h2>
      <GenderDropdown selected={(selected) => getGender(selected)} />
      <h1 className="text-lg font-semibold text-Primary-Normal mt-[30px]">
        Alamat Lengkap :
      </h1>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Provinsi dan Kota
      </h2>
      <div className="flex mt-[10px] gap-x-2">
        <ProvinsiDropdown
          value={getProvinsi}
          selected={(selected) => getProvinsi(selected)}
        />
        <KotaDropdown selected={(selected) => getCity(selected)} />
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Kelurahan/Desa dan RT/RW
      </h2>
      <div className="flex mt-[10px] gap-x-2">
        <input
          className="w-[244px] h-[48px] bg-white rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
          placeholder="Bojongsoang"
          onChange={(e) => handle(e)}
          id="kelurahan"
          value={data.kelurahan}
        />
        <RtDropdown selected={(selected) => getRt(selected)} />
        <RwDropdown selected={(selected) => getRw(selected)} />
      </div>
      <h2 className="text-base font-semibold text-Black-Normal mt-[15px]">
        Detail Alamat
      </h2>
      <input
        className="w-[512px] h-[48px] mt-2 bg-white rounded text-Black-Normal placeholder:text-[#8F8F8F] border border-[#939393] pl-4 placeholder:text-sm placeholder:font-medium outline-Primary-NormalActive"
        placeholder="Masukkan nama jalan dan no rumah anda"
        onChange={(e) => handle(e)}
        id="address"
        value={data.address}
      />
      <div className="flex mt-[40px] items-center">
        <h2 className="text-sm font-medium text-Greyscale-Normal">
          *Form wajib terisi penuh
        </h2>
        <button
          onClick={submit}
          className="w-[158px] h-[39px] bg-Primary-Normal rounded text-base font-medium text-white ml-[264px]"
        >
          Save & Continue
        </button>
      </div>
    </form>
  );
}
