import React from "react";
import WaterIcon from "../../assets/img/WaterIcon.png";

export default function TotalAir() {
  return (
    <div className="default:w-[321px] relative default:h-[196px] bg-white default:ml-[50px] rounded mt-[13px] flex flex-col items-center justify-center">
      <h1 className="default:text-[31px] text-Primary-Normal font-bold">
        12.000 m3
      </h1>
      <p className="font-medium default:text-[20px] text-Greyscale-Normal">
        Total Penggunaan Air
      </p>
      <img
        src={WaterIcon}
        alt="WaterIcon"
        className="absolute bottom-0 right-0 -z-0"
      />
    </div>
  );
}
