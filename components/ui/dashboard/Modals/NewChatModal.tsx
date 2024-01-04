import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatToggleButtonGroup from "../ChatToggleButtonGroup";
import MessageText from "@/public/icons/MessageText";

const fakeData = [
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
  {
    imageUrl: "/avatars/sample.png",
    name: "Kimberly Shannon",
    status: "HEC Certified",
  },
];

export default function NewChatModal({
  open,
  title,
  onClose,
}: {
  open: boolean;
  title: string;
  onClose: any;
}) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={onClose}
    >
      <div
        className="w-[350px] p-4 bg-white rounded-t-xl z-[1005]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center">
          <div className="text-[#CB5A6F] font-bold">{title}</div>
          <div className="ml-auto">
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col bg-[#FFF2F5] p-2">
          <ChatToggleButtonGroup chatTypes={["Admin", "Client"]} />
          <div className="flex flex-col gap-y-2 bg-white p-2">
            {fakeData.map((item, idx) => (
              <div
                key={`newchatmodal-list-item-${idx}`}
                className="flex gap-x-2 px-2"
              >
                <div>
                  <Image
                    alt="logo"
                    className="rounded-md"
                    src={item.imageUrl}
                    width={48}
                    height={48}
                    priority={true}
                  />
                </div>
                <div className="flex flex-col flex-auto">
                  <span className="text-textdarkColor">{item.name}</span>
                  <span className="text-distlineColor">{item.status}</span>
                </div>
                <div>
                  <IconButton onClick={onClose}>
                    <MessageText />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
