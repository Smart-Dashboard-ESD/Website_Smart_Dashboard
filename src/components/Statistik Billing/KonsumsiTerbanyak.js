import React, { useState } from "react";

export default function KonsumsiTerbanyak() {
  const [list] = useState(() => [
    {
      id: "1.",
      name: "Jawa Barat",
      jumlah: "12.456 m3",
    },
    {
      id: "2.",
      name: "Jawa Tengah",
      jumlah: "12.456 m3",
    },
    {
      id: "3.",
      name: "Jawa Timur",
      jumlah: "12.456 m3",
    },
    {
      id: "4.",
      name: "Kalimantan Barat",
      jumlah: "12.456 m3",
    },
    {
      id: "5.",
      name: "Kalimantan Selatan",
      jumlah: "12.456 m3",
    },
  ]);
  return (
    <div className="bg-white default:w-[506px] default:h-[296px] rounded default:pt-5 default:pl-[25px] overflow-y-auto">
      <div className="flex justify-between default:mr-[31px] items-center">
        <h1 className="text-base font-bold text-Black-Normal">
          Daerah Konsumsi Terbanyak
        </h1>
        <p className="font-medium default:text-sm text-Primary-Normal">
          Lihat Semua
        </p>
      </div>
      {list.map((item, index) => (
        <div
          key={index}
          className="flex justify-between default:mr-[31px] items-center default:mt-[20px]"
        >
          <p className="default:ml-[10px] font-medium default:text-sm text-Black-Normal">
            {item.id} {item.name}
          </p>
          <p className="font-medium default:text-sm text-Black-Normal">
            {item.jumlah}
          </p>
        </div>
      ))}
    </div>
  );
}
