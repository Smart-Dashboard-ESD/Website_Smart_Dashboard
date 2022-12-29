import React from "react";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";

export default function TableHargaAir() {
  const data = [
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      harga: "150.000",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      harga: "150.000",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      harga: "150.000",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      harga: "150.000",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      harga: "150.000",
    },
  ];
  return (
    <div className="w-[1110px] ml-[15px] mt-[30px] h-[515px] bg-white rounded">
      <div className="flex pt-[26px] item-center ml-[29px]">
        <div className="">
          <h1 className="text-[20px] font-semibold text-Black-Normal">
            Cek Harga Air per Daerah
          </h1>
          <p className="text-sm font-medium text-Greyscale-NormalHover">
            Data harga air per daerah
          </p>
        </div>
        <select className="w-[223px] appearance-none ml-[355px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive">
          <option value="Bandung">Bandung</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Jogyakarta">Jogyakarta</option>
          <option value="Solo">Solo</option>
          <option value="Padang">Padang</option>
        </select>
        <HiChevronDown className="absolute top-[155px] right-[420px] text-Info-NormalActive" />
        <input
          placeholder="Cari"
          className="w-[223px] pl-9 ml-[15px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive"
        />
        <HiOutlineSearch className="ml-[15px] mt-[15px] text-Greyscale-NormalActive absolute top-[142px] right-[360px] 3xl:right-[602px]" />
        <button className="w-[108px] ml-[15px] h-[44px] rounded-md text-white bg-Primary-Normal text-[20px] font-semibold">
          Search
        </button>
      </div>
      <table className="w-[1070px] border-separate table-auto mx-5 xl:border-spacing-y-[18px] border-spacing-y-[30px]">
        <thead className="bg-Primary-Light h-[43px] xl:h-[33px]">
          <tr>
            <th className="text-sm font-medium xl:text-xs text-Black-Normal">
              Nama Daerah
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Kode Pos
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Detail Alamat
            </th>
            <th className="text-sm font-medium xl:text-xs text-Greyscale-NormalHover">
              Harga saat ini per m3
            </th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody key={index} className="text-base xl:text-sm">
            <tr key={index} className="h-[40px] xl:h-[25px]">
              <td className="">{item.name}</td>
              <td>{item.kodealat}</td>
              <td>{item.address}</td>
              <td>Rp. {item.harga}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
