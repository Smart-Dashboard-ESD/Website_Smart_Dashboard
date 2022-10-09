import React from "react";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";

export default function TableAkunBilling() {
  const data = [
    {
      name: "Rizky Afiansyah",
      nik: "1234567890",
      jeniskelamin: "Laki-Laki",
      address: "Jl. Raya Bogor KM 10",
      rt: "01",
      rw: "01",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
    },
    {
      name: "Rizky Afiansyah",
      nik: "1234567890",
      jeniskelamin: "Laki-Laki",
      address: "Jl. Raya Bogor KM 10",
      rt: "01",
      rw: "01",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
    },
    {
      name: "Rizky Afiansyah",
      nik: "1234567890",
      jeniskelamin: "Laki-Laki",
      address: "Jl. Raya Bogor KM 10",
      rt: "01",
      rw: "01",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
    },
    {
      name: "Rizky Afiansyah",
      nik: "1234567890",
      jeniskelamin: "Laki-Laki",
      address: "Jl. Raya Bogor KM 10",
      rt: "01",
      rw: "01",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
    },
    {
      name: "Rizky Afiansyah",
      nik: "1234567890",
      jeniskelamin: "Laki-Laki",
      address: "Jl. Raya Bogor KM 10",
      rt: "01",
      rw: "01",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
    },
  ];
  return (
    <div className="default:w-[1110px] default:ml-[15px] default:mt-[30px] default:h-[515px] bg-white rounded">
      <div className="flex default:pt-[26px] item-center default:ml-[29px]">
        <div className="">
          <h1 className="default:text-[20px] font-semibold text-Black-Normal">
            Billing Account Data
          </h1>
          <p className="font-medium default:text-sm text-Greyscale-NormalHover">
            Data diri user yang terdaftar
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
        <HiOutlineSearch className="default:ml-[15px] default:mt-[15px] text-Greyscale-NormalActive absolute top-[142px] right-[363px]" />
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
              NIK
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Jenis Kelamin
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Detail Alamat
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              RT/RW
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Kota
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Provinsi
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
              <td>{item.nik}</td>
              <td>{item.jeniskelamin}</td>
              <td>{item.address}</td>
              <td>
                {item.rt}/{item.rw}
              </td>
              <td>{item.city}</td>
              <td>{item.province}</td>
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
