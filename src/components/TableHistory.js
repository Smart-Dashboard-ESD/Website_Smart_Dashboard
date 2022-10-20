import React from "react";

export default function TableHistory() {
  return (
    <div className="ml-[30px] overflow-x-auto mr-[30px] rounded">
      <table className="min-w-full border-separate table-auto xl:border-spacing-y-[18px] default:border-spacing-y-[30px]">
        <thead className="bg-Primary-Light default:h-[43px] xl:h-[33px]">
          <tr>
            <th className="font-medium default:text-sm xl:text-xs text-Black-Normal">
              Bulan
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              ID Pembayaran
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Tagihan
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Pajak
            </th>
            <th className="font-medium default:text-sm xl:text-xs text-Greyscale-NormalHover">
              Dibayarkan pada
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="default:text-base xl:text-sm">
          <tr className="default:h-[40px] xl:h-[25px]">
            <td className="flex flex-col leading-5">
              <span className="font-medium text-Black-Normal">Januari</span>
              <span className="font-sm text-Greyscale-Normal">
                Penggunaan : 399 m3
              </span>
            </td>
            <td>ID12020202020</td>
            <td>Rp. 150.000</td>
            <td>Rp. 18.000</td>
            <td className="flex flex-col text-sm leading-none">
              <span className="font-medium text-Greyscale-Normal">
                16/01/2022
              </span>
              <span className="font-sm text-Greyscale-Normal">09:46 AM</span>
            </td>
            <td>
              <div className="bg-[#BBBBBB] rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                In Process
              </div>
            </td>
          </tr>
          <tr className="default:h-[40px] xl:h-[25px]">
            <td className="flex flex-col leading-5">
              <span className="font-medium text-Black-Normal">Februari</span>
              <span className="font-sm text-Greyscale-Normal">
                Penggunaan : 399 m3
              </span>
            </td>
            <td>ID12020202020</td>
            <td>Rp. 150.000</td>
            <td>Rp. 18.000</td>
            <td className="flex flex-col text-sm leading-none">
              <span className="font-medium text-Greyscale-Normal">
                16/01/2022
              </span>
              <span className="font-sm text-Greyscale-Normal">09:46 AM</span>
            </td>
            <td>
              <div className="bg-Danger-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                Failed
              </div>
            </td>
          </tr>
          <tr className="default:h-[40px] xl:h-[25px]">
            <td className="flex flex-col leading-5">
              <span className="font-medium text-Black-Normal">Maret</span>
              <span className="font-sm text-Greyscale-Normal">
                Penggunaan : 399 m3
              </span>
            </td>
            <td>ID12020202020</td>
            <td>Rp. 150.000</td>
            <td>Rp. 18.000</td>
            <td className="flex flex-col text-sm leading-none">
              <span className="font-medium text-Greyscale-Normal">
                16/01/2022
              </span>
              <span className="font-sm text-Greyscale-Normal">09:46 AM</span>
            </td>
            <td>
              <div className="bg-Success-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                Success
              </div>
            </td>
          </tr>
          <tr className="default:h-[40px] xl:h-[25px]">
            <td className="flex flex-col leading-5">
              <span className="font-medium text-Black-Normal">April</span>
              <span className="font-sm text-Greyscale-Normal">
                Penggunaan : 399 m3
              </span>
            </td>
            <td>ID12020202020</td>
            <td>Rp. 150.000</td>
            <td>Rp. 18.000</td>
            <td className="flex flex-col text-sm leading-none">
              <span className="font-medium text-Greyscale-Normal">
                16/01/2022
              </span>
              <span className="font-sm text-Greyscale-Normal">09:46 AM</span>
            </td>
            <td>
              <div className="bg-Success-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                Success
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
