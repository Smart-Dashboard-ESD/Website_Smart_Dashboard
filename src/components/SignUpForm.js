import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import pana from "../assets/img/pana.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

export default function SignUpForm() {
  const [open, setopen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggle = () => {
    setopen(!open);
  };

  return (
    <div>
      <div className="w-[460px] h-[655px] z-40 absolute bg-[#F8F8F8] ml-[141px] mt-[190px] border rounded border-[#BFBFBF]">
        <div className="mt-8 ml-8">
          <h1 className="font-semibold text-[#444444] text-2xl">Sign Up</h1>
          <p className="text-[#939393] font-medium text-base leading-none mt-2">
            Daftar dengan menggunakan data diri
            <br />
            yang sesuai
          </p>
        </div>
        <div className="mt-8 ml-8">
          <h1 className="text-[#444444] text-base font-semibold ">Username</h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan username anda"
            />
          </form>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Password
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukan password anda"
              type={open ? "text" : "password"}
            />
          </form>
          <div className="absolute text-xl top-[277px] right-11">
            {open === false ? (
              <HiOutlineEye onClick={toggle} />
            ) : (
              <HiOutlineEyeOff onClick={toggle} />
            )}
          </div>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Device ID
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukkan Device ID anda"
              type="text"
            />
          </form>
          <h1 className="text-[#444444] text-base font-semibold mt-4">
            Admin ID
          </h1>
          <form className="mt-2">
            <input
              className="w-[396px] h-[48px] border rounded border-[#BFBFBF] pl-4"
              placeholder="Masukkan Admin ID anda"
              type="text"
            />
          </form>
        </div>
        <button
          className="w-[396px] h-[48px] bg-[#1B7FB5] rounded mt-8 ml-8"
          onClick={onOpen}
        >
          <h1 className="text-base font-semibold text-center text-white">
            Sign Up
          </h1>
        </button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
          size={"lg"}
          isCentered
          motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className="flex items-center justify-center mt-[30px]">
                <img src={pana} className="" alt="pana" />
              </div>
              <h1 className="flex mt-[30px] items-center justify-center text-center font-semibold text-[25px] text-Black-Normal leading-none">
                Selamat kamu berhasil terdaftar di
                <br />
                Automated Water Metered{" "}
              </h1>
              <p className="flex items-center justify-center mt-2 text-lg font-medium leading-none text-center text-Greyscale-NormalActive">
                Kamu sudah terdaftar. Silahkan menikmati
                <br /> layanan yang telah kami sediakan
              </p>
            </ModalBody>

            <ModalFooter>
              <Link to="/">
                <div className="w-[450px] mt-[10px] mb-[30px] h-[56px] bg-[#1B7FB5] text-white rounded flex items-center justify-center font-medium text-lg">
                  Go to Dashboard
                </div>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <h1 className="text-[#9F9F9F] mt-8 ml-8 text-sm font-medium">
          Anda sudah memiliki akun?{" "}
          <Link to="/login" className="text-Primary-Normal">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}
