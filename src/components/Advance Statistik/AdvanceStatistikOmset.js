import React from "react";
import LineChart from "../Chart/LineChart";

export default function AdvanceStatistikOmset() {
  const data = [
    {
      bulan: "Januari",
      omset: "Rp. 500.000.000",
    },
    {
      bulan: "Februari",
      omset: "Rp. 1.000.000.000",
    },
    {
      bulan: "Maret",
      omset: "Rp. 250.000.000",
    },
    {
      bulan: "April",
      omset: "Rp. 750.000.000",
    },
  ];
  return (
    <div className="default:w-[1062px] default:h-[250px] default:mt-5 bg-white rounded default:ml-[46px]">
      <div className="flex default:pt-[25px] default:ml-[25px]">
        <LineChart />
        <div className="default:ml-[40px]">
          <div className="flex default:gap-x-[56px]">
            <h1 className="font-semibold text-Black-Normal">Keterangan</h1>
            <button className="font-medium default:text-sm text-Primary-Normal">
              Lihat semua
            </button>
          </div>
          {data.map((item, index) => (
            <div key={index} className="flex justify-between default:mt-[20px]">
              <h1 className="font-medium text-Greyscale-NormalHover">
                {item.bulan}
              </h1>
              <h1 className="font-medium text-Black-Normal">{item.omset}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
