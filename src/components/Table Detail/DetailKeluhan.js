import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function DetailKeluhan() {
  const data = [
    {
      JenisKeluhan: "Air Mati",
      Keluhan: "Air saya mati",
      NomorTiket: "D1029E80",
    },
  ];

  return (
    <>
      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Nomor Tiket</Th>
              <Th>Keluhan</Th>
              <Th>Kategori Keluhan</Th>
            </Tr>
          </Thead>
          {data.map((item, index) => (
            <Tbody key={index}>
              <Tr key={index}>
                <Td>{item.NomorTiket}</Td>
                <Td>{item.Keluhan}</Td>
                <Td>{item.JenisKeluhan}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
