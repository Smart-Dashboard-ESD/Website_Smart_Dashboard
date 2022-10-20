import React from "react";
import { Select } from "@chakra-ui/react";

export default function DropdownKuartal() {
  return (
    <div>
      <Select
        placeholder="Pilih Kuartal"
        className="w-[147px] h-[28px] border-Info-Normal"
      >
        <option value="kuartal1">Kuartal 1</option>
        <option value="kuartal2">Kuartal 2</option>
        <option value="kuartal3">Kuartal 3</option>
        <option value="kuartal4">Kuartal 4</option>
      </Select>
    </div>
  );
}
