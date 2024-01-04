import Image from "next/image";

import SvgClose from "@/public/icons/Close";
import { CalendarMonth } from "@mui/icons-material";
import SvgMoney from "@/public/icons/Money";
import SvgShare from "@/public/icons/Share";
import SvgPeople from "@/public/icons/People";
import SvgLocation from "@/public/icons/Location";
import RegisterSuccessModal from "./RegisterSuccessModal";
import { useState } from "react";
import SvgQrCode from "@/public/QrCode";

type EventViewModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
};

export default function EventViewModal({
  open,
  handleClose,
}: EventViewModalProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => setModalOpen(true);

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => handleClose()}
    >
      <div
        className="px-6 py-4 bg-white z-[1005] w-[718px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="w-full h-full flex flex-col justify-between font-arial overflow-auto gap-y-4">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <CalendarMonth sx={{ fontSize: 30 }} />
              <p className="text-sm font-bold ml-2">Upcoming Event</p>
            </div>
            <SvgClose
              className="cursor-pointer"
              onClick={() => handleClose()}
            />
          </div>
          <div className="flex flex-col bg-[#FFF2F5]">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between p-4 w-7/12 h-[240px]">
                <div className="flex items-center">
                  <CalendarMonth sx={{ fontSize: 30, color: "#CB5A6F" }} />
                  <p className="text-sm font-bold ml-2">
                    Sun Oct 1st - 03:32 PM
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold font-arial mb-6">
                    Oldies Hangout
                  </p>
                  <p className="text-sm text-textdarkColor font-arial tracking-wide">
                    Oldies Hangout is a social event for users to engage our
                    seniors in various fun activity which wll be good for them
                    to unwind. Foods, games and music will be available as well.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-[#FFF2F5] p-4 w-5/12 h-[240px]">
                <div className="flex items-center gap-x-1">
                  <span className="flex items-center bg-white text-sm px-2 py-1 rounded-full cursor-pointer">
                    <SvgMoney />
                    <p className="text-[#30A64A] text-xs ml-2 font-arial tracking-wider">
                      Fee: 40
                    </p>
                  </span>
                  <span className="flex items-center bg-white text-sm px-2 py-1 rounded-full cursor-pointer">
                    <SvgShare />
                    <p className="text-[#4285F4] text-xs ml-2 font-arial tracking-wider">
                      Share
                    </p>
                  </span>
                  <span className="flex items-center bg-white text-sm px-2 py-1 rounded-full cursor-pointer">
                    <SvgPeople />
                    <p className="text-[#CB5A6F] text-xs ml-2 font-arial tracking-wider">
                      1000
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-xs text-textdarkColor tracking-wider mb-1">
                    Created by: Seasoned senior
                  </p>
                  <Image
                    src="/images/senior.png"
                    alt={""}
                    width={229}
                    height={134}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="flex">
                <SvgLocation />
                <p className="text-[#4285F4] text-xs ml-1">
                  12 West Avenue Lane, Ohio LA. USA
                </p>
              </div>
              <div className="flex gap-x-4">
                <div className="w-[120px] p-2 bg-[#F4AAB7] flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm">Add to Calendar</p>
                </div>
                <div
                  className="w-[120px] p-2 flex items-center justify-center border-2 border-[#30A64A] rounded-lg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  <p className="text-[#30A64A] text-sm font-bold">View Pass</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">
              Receipt for order 131QEY123DB to <b>Oldies Hangout</b>
            </p>
            <div className="w-full px-20 py-4 grid grid-cols-2 gap-2 text-xl bg-[#F6F6F6]">
              <p>Name</p>
              <p>Your email</p>
              <p className="font-bold">Pamela Stacy</p>
              <p className="font-bold">pamapam@gmail.com</p>
              <p>Your phone number</p>
              <p>Purchased on</p>
              <p className="font-bold">142135678123</p>
              <p className="font-bold">Sep 23, 2023</p>
              <p>Quantity</p>
              <p>Total</p>
              <p className="font-bold">001</p>
              <p className="font-bold">$40</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <SvgQrCode />
            <p className="text-center">
              Show this one-time QR code for event entry at check-in
            </p>
          </div>
        </div>
      </div>
      <RegisterSuccessModal open={modalOpen} handleClose={handleModalClose} />
    </div>
  );
}
