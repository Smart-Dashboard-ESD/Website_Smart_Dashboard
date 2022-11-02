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
} from "@chakra-ui/react";
import axios from "axios";

export default function ButtonLinkDevice() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/linkDevice";
  const [data, setData] = useState({
    DeviceEui: "",
    CustomerId: "",
    DeviceIdAntares: "",
    Band: "",
    Activation: "",
    UserId: "",
  });

  const [deviceId, setDeviceId] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/admin/getAllDevices")
      .then((res) => {
        console.log(res.data);
        setDeviceId(res.data.device.deviceId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(url, data).then((res) => {
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
          <ModalHeader>Link your device</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Customer ID</FormLabel>
              <Input
                value={data.UserId}
                onChange={(e) => handleChange(e)}
                placeholder="Customer ID"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device ID</FormLabel>
              <Input
                value={deviceId}
                onChange={(e) => handleChange(e)}
                readOnly={true}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device EUI</FormLabel>
              <Input
                value={data.DeviceEui}
                onChange={(e) => handleChange(e)}
                placeholder="Device EUI"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Device ID Antares</FormLabel>
              <Input
                value={data.DeviceIdAntares}
                onChange={(e) => handleChange(e)}
                placeholder="Device ID Antares"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Activation</FormLabel>
              <Input
                value={data.Activation}
                onChange={(e) => handleChange(e)}
                placeholder="Activation"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Band</FormLabel>
              <Input
                value={data.Band}
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
