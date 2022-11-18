import React from "react";
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import DetailDevice from "./Table Detail/DetailDevice";
import DetailKeluhan from "./Table Detail/DetailKeluhan";
import DetailChart from "./Table Detail/DetailChart";

export default function ButtonDetailAkun(props) {
  console.log(props.iduser);
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSatuContentVisible, setPageSatuContentVisible] = useState(false);
  // const [pageDuaContentVisible, setPageDuaContentVisible] = useState(false);
  // const [pageTigaContentVisible, setPageTigaContentVisible] = useState(false);

  // useEffect(() => {
  //   currentPage === 1
  //     ? setPageSatuContentVisible(true)
  //     : setPageSatuContentVisible(false);
  //   currentPage === 2
  //     ? setPageDuaContentVisible(true)
  //     : setPageDuaContentVisible(false);
  //   currentPage === 3
  //     ? setPageTigaContentVisible(true)
  //     : setPageTigaContentVisible(false);
  // }, [currentPage]);

  // const incrementPage = () => {
  //   setCurrentPage(currentPage + 1);

  //   if (currentPage === 3) {
  //     document
  //       .getElementById("nextButton")
  //       .setAttribute("disabled", "disabled");
  //   }
  // };

  // const decrementPage = () => {
  //   setCurrentPage(currentPage - 1);

  //   if (currentPage === 1) {
  //     document
  //       .getElementById("prevButton")
  //       .setAttribute("disabled", "disabled");
  //   }
  // };

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
            <Tabs>
              <TabList>
                <Tab>Device User</Tab>
                <Tab>Keluhan User</Tab>
                <Tab>Pemakaian User</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <DetailDevice />
                </TabPanel>
                <TabPanel>
                  <DetailKeluhan />
                </TabPanel>
                <TabPanel>
                  <DetailChart />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
