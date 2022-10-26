import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";

export default function ButtonDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [data, setData] = useState([
    {
      MeterNumber: "",
      ForwardFlow: "",
      ReverseFlow: "",
      WaterUnit: "",
      TimeStamp: "",
      StatusByte: "",
      BatteryVoltage: "",
      CheckByte: "",
    },
  ]);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/users/devices")
      .then((res) => {
        console.log(res.data);
        setData([
          {
            MeterNumber: res.data.waterMeter.MeterNumber,
            ForwardFlow: res.data.waterMeter.ForwardFlow,
            ReverseFlow: res.data.waterMeter.ReverseFlow,
            WaterUnit: res.data.waterMeter.WaterUnit,
            TimeStamp: res.data.waterMeter.TimeStamp,
            StatusByte: res.data.waterMeter.StatusByte,
            BatteryVoltage: res.data.waterMeter.BatteryVoltage,
            CheckByte: res.data.waterMeter.CheckByte,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Button onClick={onOpen}>View Detail</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Data Penggunaan Air terbaru</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <TableContainer>
              <Table>
                <TableCaption>Data penggunaan air terbaru</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Meter Number</Th>
                    <Th>Forward Flow</Th>
                    <Th>Reverse Flow</Th>
                    <Th>Water Unit</Th>
                    <Th>Time Stamp</Th>
                    <Th>Status Byte</Th>
                    <Th>Battery Voltage</Th>
                    <Th>Check Byte</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data.MeterNumber}</Td>
                    <Td>{data.ForwardFlow}</Td>
                    <Td>{data.ReverseFlow}</Td>
                    <Td>{data.WaterUnit}</Td>
                    <Td>{data.TimeStamp}</Td>
                    <Td>{data.StatusByte}</Td>
                    <Td>{data.BatteryVoltage}</Td>
                    <Td>{data.CheckByte}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
