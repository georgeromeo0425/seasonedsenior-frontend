import { Dialog } from "@mui/material";
import React from "react";
import ChatArea from "../messages/ChatArea";
import Image from "next/image";
export default function chatbar({
  open,
  setopen,
}: {
  open: boolean;
  setopen: Function;
}) {
  const partnerName = "Gabby Alio";
  const subTitle = "medical support";

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setopen(false)}
    >
      <div>asdfasdfa</div>
    </div>
  );
}
