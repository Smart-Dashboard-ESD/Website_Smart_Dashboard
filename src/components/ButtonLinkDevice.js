import React, { useState, useEffect } from "react";
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
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export default function ButtonLinkDevice(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/linkDevice";
  const [data, setData] = useState({
    device_eui: "",
    DeviceName: props.name,
    device_id: props.devid,
    device_id_antares: "",
    band: "",
    activation: "",
    customer_id: "",
  });

  const toast = useToast();
  // const [deviceId, setDeviceId] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_API_ENDPOINT + "/admin/getAllDevices")
  //     .then((res) => {
  //       console.log(res.data);
  //       setDeviceId(res.data.device.deviceId);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.message == "Link created") {
          toast({
            title: "Link created.",
            description: "Device has been connected to User",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (
          res.data.message == "Device already registered by other user!"
        ) {
          toast({
            title: "Link Failed",
            description: "Device already registered by other user!",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Link Failed",
            description: "error",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        console.log(res);
      });
  }

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Link Device</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Link device</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Customer ID</FormLabel>
              <Input
                id="customer_id"
                onChange={(e) => handleChange(e)}
                placeholder="Customer ID"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device ID</FormLabel>
              <Input
                id="device_id"
                value={props.devid}
                onChange={(e) => handleChange(e)}
                readOnly={true}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device Name</FormLabel>
              <Input
                id="DeviceName"
                value={props.name}
                onChange={(e) => handleChange(e)}
                placeholder="Device Name"
                readOnly
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device EUI</FormLabel>
              <Input
                id="device_eui"
                onChange={(e) => handleChange(e)}
                placeholder="Device EUI"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device ID Antares</FormLabel>
              <Input
                id="device_id_antares"
                onChange={(e) => handleChange(e)}
                placeholder="Device ID Antares"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Activation</FormLabel>
              <Input
                id="activation"
                onChange={(e) => handleChange(e)}
                placeholder="Activation"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Band</FormLabel>
              <Input
                id="band"
                onChange={(e) => handleChange(e)}
                placeholder="Band"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
