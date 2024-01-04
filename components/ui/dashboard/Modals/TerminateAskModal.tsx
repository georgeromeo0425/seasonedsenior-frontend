import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, Divider, Modal } from "@mui/material";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";

export default function TerminateAskModal({
  open,
  setModalOpen,
  setTerminated,
}: {
  open: boolean;
  setModalOpen: any;
  setTerminated: any;
}) {
  const router = useRouter();

  return (
    <Dialog open={open} onClose={() => setModalOpen(false)}>
      <div className="flex flex-col p-4">
        <div className="flex justify-center">
          <Image
            alt="logo"
            src={app_logo}
            onClick={() => router.push("/")}
            width={135}
            priority={false}
            style={{ height: "auto" }}
          />
        </div>
        <p className="font-bold mt-8 text-[18px]">
          Are you sure you want to Terminate contract?
        </p>
        <div className="my-4">
          <Divider />
        </div>
        <div className="flex justify-center gap-x-4">
          <span
            className="text-[#DC0035] border border-solid border-[#DC0035] hover:border-[#DC0035] normal-case rounded-lg px-4 py-2 cursor-pointer font-bold"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </span>
          <span
            className="bg-brightRedColor hover:bg-brightRedColor font-bold text-white flex items-center rounded-lg px-4 py-2 cursor-pointer"
            onClick={() => {
              setModalOpen(false);
              setTerminated(true);
            }}
          >
            Terminate
          </span>
        </div>
      </div>
    </Dialog>
  );
}
