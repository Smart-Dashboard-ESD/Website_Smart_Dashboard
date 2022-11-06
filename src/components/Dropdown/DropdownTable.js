import React from "react";

export default function DropdownTable() {
  return (
    <div>
      <select className="w-[223px] default:ml-[305px] 2xl:ml-[230px] h-[48px] px-3 rounded-md border border-Info-NormalActive text-Info-NormalActive">
        <option value="Bandung">Bandung</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Jogyakarta">Jogyakarta</option>
        <option value="Solo">Solo</option>
        <option value="Padang">Padang</option>
      </select>
    </div>
  );
}
