import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let data = [
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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //   const modalCamera = () => {
  //     data.map((item) => {
  //       return (
  //         <tr>
  //           {/* <td>
  //             <img src={item.pic} />
  //           </td>
  //           <td>{item.forwardFlow}</td>
  //           <td>{item.increment}</td>
  //           <td>{item.timeStamp}</td>
  //           <td>{item.lable}</td> */}
  //         </tr>
  //       );
  //     });
  //   };

  return (
    <>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </>
  );
}
