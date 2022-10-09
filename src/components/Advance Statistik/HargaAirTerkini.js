import React from "react";
import NoteIcon from "../../assets/img/NoteIcon.png";

export default function HargaAirTerkini() {
  return (
    <div className="w-[350px] h-[251px] relative default:ml-[35px] bg-white rounded">
      <h1 className="default:text-[20px] default:mt-[20px] default:ml-[25px] font-semibold text-Black-Normal">
        Harga air terkini
      </h1>
      <p className="font-medium default:ml-[25px] default:text-sm text-Greyscale-NormalHover">
        Update terakhir : 01 Oktober 2022
      </p>
      <div className="flex">
        <h1 className="default:ml-[25px] default:mt-[35px] default:text-[39px] font-bold text-Info-NormalActive">
          Rp 1.200,-
        </h1>
        <p className="default:ml-[15px] default:text-[31px] default:mt-[66px] font-medium text-Info-Normal">
          /m3
        </p>
      </div>
      <img
        src={NoteIcon}
        alt="NoteIcon"
        className="absolute bottom-0 right-0 -z-0"
      />
    </div>
  );
}
