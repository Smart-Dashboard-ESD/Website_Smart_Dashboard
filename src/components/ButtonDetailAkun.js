import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import DetailDevice from "./Table Detail/DetailDevice";
import DetailKeluhan from "./Table Detail/DetailKeluhan";
import DetailChart from "./Table Detail/DetailChart";

export default function ButtonDetailAkun() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSatuContentVisible, setPageSatuContentVisible] = useState(false);
  const [pageDuaContentVisible, setPageDuaContentVisible] = useState(false);
  const [pageTigaContentVisible, setPageTigaContentVisible] = useState(false);

  useEffect(() => {
    currentPage === 1
      ? setPageSatuContentVisible(true)
      : setPageSatuContentVisible(false);
    currentPage === 2
      ? setPageDuaContentVisible(true)
      : setPageDuaContentVisible(false);
    currentPage === 3
      ? setPageTigaContentVisible(true)
      : setPageTigaContentVisible(false);
  }, [currentPage]);

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage === 3) {
      document.getElementById("nextButton").disabled = true;
    }
  };

  const decrementPage = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage === 1) {
      document.getElementById("prevButton").disabled = true;
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Detail</Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        size="xl"
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Akun</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="h-[500px]">
            {pageSatuContentVisible && <DetailDevice />}
            {pageDuaContentVisible && <DetailKeluhan />}
            {pageTigaContentVisible && <DetailChart />}
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-end mr-5 gap-x-2 right-6">
              <Button
                id="prevButton"
                onClick={() => {
                  decrementPage();
                }}
              >
                <HiChevronLeft
                  id="prev"
                  values="1"
                  className={`w-5 h-5 ${
                    pageSatuContentVisible
                      ? "text-Black-LightActive"
                      : "text-Primary-Normal"
                  } `}
                />
              </Button>
              <Button
                id="nextButton"
                onClick={() => {
                  incrementPage();
                }}
              >
                <HiChevronRight
                  id="next"
                  values="3"
                  className={`w-5 h-5 ${
                    pageDuaContentVisible
                      ? "text-Primary-Normal"
                      : "text-Primary-Normal"
                  } ${
                    pageTigaContentVisible
                      ? "text-Black-LightActive"
                      : "text-Primary-Normal"
                  } `}
                />
              </Button>
            </div>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
