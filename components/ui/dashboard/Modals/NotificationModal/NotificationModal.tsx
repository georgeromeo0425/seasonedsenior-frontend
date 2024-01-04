import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import ChooseDay from "../../ChooseDay";
import ChooseTime from "../../ChooseTime";
import { PrimaryButton } from "../../../common/PrimaryButton";
import Image from "next/image";
import avatar from "/public/avatars/sample.png";
import Notifications from "./Notifications";

export default function NotificationModal({
  name,
  open,
  setOpen,
}: {
  name: string;
  open: boolean;
  setOpen: any;
}) {
  return (
    <div
      className="flex pr-11 pt-11 justify-end items-start w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-5 backdrop-blur-[2px] z-[1000]"
      style={{ display: open ? "flex" : "none" }}
      onClick={() => setOpen(false)}
    >
      <Notifications />
    </div>
  );
}
