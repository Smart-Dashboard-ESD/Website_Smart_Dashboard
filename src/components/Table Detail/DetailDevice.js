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

export default function DetailDevice() {
  const data = [
    {
      DeviceName: "Antares-1",
      DeviceEui: "D1029E80",
      DeviceIdAntares: "D1029E80",
      Band: "EU868",
      DeviceId: "D1029E80",
    },
    {
      DeviceName: "Antares-2",
      DeviceEui: "D1029E80",
      DeviceIdAntares: "D1029E80",
      Band: "EU868",
      DeviceId: "D1029E80",
    },
    {
      DeviceName: "Antares-3",
      DeviceEui: "D1029E80",
      DeviceIdAntares: "D1029E80",
      Band: "EU868",
      DeviceId: "D1029E80",
    },
  ];

  return (
    <>
      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Device ID</Th>
              <Th>Device Name</Th>
              <Th>Device Eui</Th>
              <Th>Device Id Antares</Th>
              <Th>Device Band</Th>
            </Tr>
          </Thead>
          {data.map((item, index) => (
            <Tbody key={index}>
              <Tr key={index}>
                <Td>{item.DeviceId}</Td>
                <Td>{item.DeviceName}</Td>
                <Td>{item.DeviceEui}</Td>
                <Td>{item.DeviceIdAntares}</Td>
                <Td>{item.Band}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
