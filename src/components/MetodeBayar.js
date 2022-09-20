import React, { useState } from "react";
import logobca from "../assets/img/logobca.png";
import logomandiri from "../assets/img/logomandiri.png";

export default function MetodeBayar() {
  const [metode, setMetode] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-semibold text-Black-Normal">
        Pilih Metode Pembayaran
      </h1>
      <div className="w-[400px] h-[330px] bg-white rounded mt-4">
        <div className="flex items-center gap-x-[30px] ml-5 pt-4">
          <h2 className="text-[13px] font-medium border-b-[2px] text-Primary-Normal border-Primary-Normal">
            Manual Transfer
          </h2>
          <h2 className="text-[13px] font-medium text-Greyscale-Normal">
            Otomatis
          </h2>
        </div>
        <h1 className="text-base font-medium text-Black-Normal mt-[30px] ml-[20px]">
          Transfer Pembayaran
        </h1>
        <form>
          <div className="w-[272px] h-[72px] ml-5 mt-5 flex">
            <input
              className=""
              type="radio"
              value="bca"
              name="metode"
              onChange={(e) => setMetode(e.target.value)}
              onClick={() => console.log(metode)}
            />
            <label className="ml-5">
              <img src={logobca} alt="logo" className="w-[73px] h-6" />
              <h1 className="mt-2 text-sm font-medium text-Greyscale-Normal">
                PT Multi Instrumentasi (Admin Pateh)
              </h1>
              <p className="mt-2 text-sm font-semibold text-Black-Normal">
                01219090192
              </p>
            </label>
          </div>
          <div className="w-[272px] h-[72px] ml-5 mt-[30px] flex">
            <input
              className=""
              type="radio"
              value="mandiri"
              name="metode"
              onChange={(e) => setMetode(e.target.value)}
              onClick={() => console.log(metode)}
            />
            <label className="ml-5">
              <img src={logomandiri} alt="logo" className="w-[73px] h-6" />
              <h1 className="mt-2 text-sm font-medium text-Greyscale-Normal">
                PT Multi Instrumentasi (Admin Pateh)
              </h1>
              <p className="mt-2 text-sm font-semibold text-Black-Normal">
                01219090192
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
