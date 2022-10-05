import React from "react";

export default function TableHistory() {
  return (
    <div className="ml-[30px] overflow-x-auto mr-[30px] rounded">
      <table className="min-w-full border-separate table-auto border-spacing-y-[30px]">
        <thead className="bg-Primary-Light h-[43px]">
          <tr>
            <th className="text-sm font-medium text-Black-Normal">Bulan</th>
            <th className="text-sm font-medium text-Greyscale-NormalHover">
              ID Pembayaran
            </th>
            <th className="text-sm font-medium text-Greyscale-NormalHover">
              Tagihan
            </th>
            <th className="text-sm font-medium text-Greyscale-NormalHover">
              Pajak
            </th>
            <th className="text-sm font-medium text-Greyscale-NormalHover">
              Dibayarkan pada
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[40px]">
            <td className="flex flex-col">
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
          <tr className="h-[40px]">
            <td className="flex flex-col">
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
          <tr className="h-[40px]">
            <td className="flex flex-col">
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
          <tr className="h-[40px]">
            <td className="flex flex-col">
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
