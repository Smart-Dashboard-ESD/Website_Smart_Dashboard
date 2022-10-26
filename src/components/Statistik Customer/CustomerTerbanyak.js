import React, { useState } from "react";

export default function CustomerTerbanyak() {
  const [list] = useState(() => [
    {
      id: "1.",
      name: "Jawa Barat",
      jumlah: "20.000 Customer",
    },
    {
      id: "2.",
      name: "Jawa Tengah",
      jumlah: "15.000 Customer",
    },
    {
      id: "3.",
      name: "Jawa Timur",
      jumlah: "10.000 Customer",
    },
    {
      id: "4.",
      name: "Kalimantan Barat",
      jumlah: "5.000 Customer",
    },
    {
      id: "5.",
      name: "Kalimantan Selatan",
      jumlah: "4.000 Customer",
    },
  ]);
  return (
    <div className="bg-white w-[506px] h-[296px] rounded pt-5 pl-[25px] default:ml-[46px] 2xl:ml-[30px] overflow-y-auto">
      <div className="flex justify-between mr-[31px] items-center">
        <h1 className="text-base font-bold text-Black-Normal">
          Customer Terbanyak
        </h1>
        <p className="text-sm font-medium text-Primary-Normal">Lihat Semua</p>
      </div>
      {list.map((item, index) => (
        <div
          key={index}
          className="flex justify-between mr-[31px] items-center mt-[20px]"
        >
          <p className="ml-[10px] font-medium text-sm text-Black-Normal">
            {item.id} {item.name}
          </p>
          <p className="text-sm font-medium text-Black-Normal">{item.jumlah}</p>
        </div>
      ))}
    </div>
  );
}
