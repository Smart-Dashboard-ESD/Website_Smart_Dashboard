import React from "react";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";

export default function TableKeluhan() {
  const data = [
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      nohp: "08123456789",
      keluhan: "Air mati",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      nohp: "08123456789",
      keluhan: "Air mati",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      nohp: "08123456789",
      keluhan: "Air mati",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      nohp: "08123456789",
      keluhan: "Air mati",
    },
    {
      name: "Rizky Afiansyah",
      kodealat: "D1029E80",
      address: "Jl. Adhyaksa No 255",
      nohp: "08123456789",
      keluhan: "Air mati",
    },
  ];
  return (
    <div className="default:w-[1110px] default:ml-[15px] default:mt-[30px] default:h-[515px] bg-white rounded">
      <div className="flex default:pt-[26px] item-center default:ml-[29px]">
        <div className="">
          <h1 className="default:text-[20px] font-semibold text-Black-Normal">
            Keluhan Data
          </h1>
          <p className="font-medium default:text-sm text-Greyscale-NormalHover">
            Keluhan dari user
          </p>
        </div>
        <select className="default:w-[223px] appearance-none default:ml-[355px] default:h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive">
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
        <HiOutlineSearch className="default:ml-[15px] default:mt-[15px] text-Greyscale-NormalActive absolute top-[142px] right-[360px]" />
        <button className="default:w-[108px] default:ml-[15px] default:h-[44px] rounded-md text-white bg-Primary-Normal default:text-[20px] font-semibold">
          Search
        </button>
      </div>
      <table className="default:w-[1070px] border-separate table-auto mx-5 xl:border-spacing-y-[18px] default:border-spacing-y-[30px]">
        <thead className="bg-Primary-Light default:h-[43px] xl:h-[33px]">
          <tr>
            <th className="font-medium default:text-sm xl:text-xs text-Black-Normal">
              Nama
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Kode Alat
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Detail Alamat
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              No Hp
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Keluhan
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Action
            </th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody key={index} className="default:text-base xl:text-sm">
            <tr key={index} className="default:h-[40px] xl:h-[25px]">
              <td className="">{item.name}</td>
              <td>{item.kodealat}</td>
              <td>{item.address}</td>
              <td>{item.nohp}</td>
              <td>{item.keluhan}</td>
              <td className="flex items-center gap-x-2 h-[40px]">
                <button className="font-medium text-Greyscale-Normal default:text-sm xl:text-xs">
                  Edit
                </button>
                <button className="font-medium text-Danger-Normal default:text-sm xl:text-xs">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
