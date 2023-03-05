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
  Image,
} from "@chakra-ui/react";
import LineChartHari from "./Chart/LineChartHari";
import axios from "axios";
import ButtonDetailCam from "./ButtonDetailCam";

export default function ButtonDetail(props) {
  console.log("props btdtl", props.status);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [data, setData] = useState([{}]);
  let [sorted, setSort] = useState([]);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  let dataCam = [
    {
      pic: "../assets/cam/[1].jpg",
      forwardFlow: "284,228",
      increment: "0,224",
      timeStamp: "28/01/2023 6:08:18",
      lable: "Pagi",
    },
    {
      pic: "../assets/cam/[2].jpg",
      forwardFlow: "284,004",
      increment: "1,116",
      timeStamp: "27/01/2023 18:08:18",
      lable: "Malam",
    },
    {
      pic: "../assets/cam/[3].jpg",
      forwardFlow: "282,888",
      increment: "0,057",
      timeStamp: "27/01/2023 6:08:18",
      lable: "Pagi",
    },
    {
      pic: "../assets/cam/[4].jpg",
      forwardFlow: "282,831",
      increment: "0,057",
      timeStamp: "26/01/2023 18:08:18",
      lable: "Malam",
    },
    {
      pic: "../assets/cam/[5].jpg",
      forwardFlow: "282,774",
      increment: "0,059",
      timeStamp: "26/01/2023 6:08:18",
      lable: "Pagi",
    },
    {
      pic: "../assets/cam/[6].jpg",
      forwardFlow: "282,715",
      increment: "0,026",
      timeStamp: "25/01/2023 18:08:18",
      lable: "Malam",
    },
    {
      pic: "../assets/cam/[7].jpg",
      forwardFlow: "282,689",
      increment: "0,057",
      timeStamp: "25/01/2023 6:08:18",
      lable: "Pagi",
    },
    {
      pic: "../assets/cam/[8].jpg",
      forwardFlow: "282,632",
      increment: "0,058",
      timeStamp: "24/01/2023 18:08:18",
      lable: "Malam",
    },
    {
      pic: "../assets/cam/[9].jpg",
      forwardFlow: "282,574",
      increment: "0,085",
      timeStamp: "24/01/2023 6:08:18",
      lable: "Pagi",
    },
    {
      pic: "../assets/cam/[10].jpg",
      forwardFlow: "282,489",
      increment: "0,122",
      timeStamp: "23/01/2023 18:08:18",
      lable: "Malam",
    },
  ];

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

          let sort = data.sort(function (a, b) {
            return new Date(a.waterdate) - new Date(b.waterdate);
          });

          setSort(sort);
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
        size="full"
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
                    <Th>Gambar Meteran</Th>
                    <Th>Forward Flow</Th>
                    <Th>Increment</Th>
                    <Th>Timestamp</Th>
                    <Th>Label</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataCam.map((item) => {
                    return (
                      <Tr>
                        <Td>
                          <Image src={item.pic} boxSize="200px" />
                        </Td>
                        <Td>{item.forwardFlow}</Td>
                        <Td>{item.increment}</Td>
                        <Td>{item.timeStamp}</Td>
                        <Td>
                          {item.lable == "Pagi" ? (
                            <div class="bg-Black-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                              Malam
                            </div>
                          ) : (
                            <div class="bg-Warning-Normal rounded w-[70px] h-8 text-[10px] text-white flex items-center justify-center">
                              Pagi
                            </div>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                  {/* {data.map((item) => {
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
                  })} */}
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
