import React, { useEffect, useState } from "react";
import moment from "moment";
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
import LineChartHari from "./Chart/LineChartHari";
import axios from "axios";

export default function ButtonDetail(props) {
  console.log("props btdtl", props.status);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [data, setData] = useState([{}]);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    let userid = localStorage.getItem("userid");
    let deviceid = localStorage.getItem("deviceid");
    console.log(localStorage.getItem("deviceid"));
    axios
      .get(
        process.env.REACT_APP_API_ENDPOINT +
          "/users/device/getAllWater?custid=" +
          userid +
          "&devid=" +
          deviceid,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        // let date = new Date();
        res.data.data.map((item) => {
          var momentDate = moment(item.waterdate);

          let time = momentDate.format("YYYY-MM-DD hh:mm:ss");
          let status = momentDate.format("A");
          // console.log(item.waterdate);
          // let tanggal = `${d.getUTCFullYear()} - ${d.getUTCMonth()} - ${d.getUTCDate()} ${d.getUTCHours()}`;

          setData((prevData) => [
            ...prevData,
            {
              MeterNumber: item.meternumber,
              ForwardFlow: item.forwardflow,
              ReverseFlow: item.reverseflow,
              TimeStamp: time,
              status: status,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        style={{
          marginTop: 179,
          marginLeft: 442,
        }}
      >
        View Detail
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Data Penggunaan Air {props.status}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <LineChartHari />
            <TableContainer>
              <Table>
                <TableCaption>Data penggunaan air terbaru</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Forward Flow</Th>
                    <Th>Time Stamp</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((item) => {
                    return (
                      <Tr>
                        <Td>{item.ForwardFlow} &#13221;</Td>
                        <Td>{item.TimeStamp}</Td>
                        <Td>
                          {item.status == "PM" ? (
                            <div className="bg-Black-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                              Malam
                            </div>
                          ) : (
                            <div className="bg-Warning-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                              Pagi
                            </div>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
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
