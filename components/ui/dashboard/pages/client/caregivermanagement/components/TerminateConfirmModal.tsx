import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, Divider, Modal } from "@mui/material";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";

export default function TerminateConfirmModal({
  open,
  setModalOpen,
  setTerminated,
  imagePath,
}: {
  open: boolean;
  setModalOpen: any;
  setTerminated: any;
  imagePath: string;
}) {
  const router = useRouter();

  return (
    <Dialog
      className="rounded-md"
      open={open}
      onClose={() => setModalOpen(false)}
    >
      <div className="flex flex-col items-center px-20 py-4">
        <div className="flex justify-center mb-8">
          <Image
            alt="logo"
            src={app_logo}
            onClick={() => router.push("/")}
            width={135}
            priority={false}
            style={{ height: "auto" }}
          />
        </div>
        <Image
          className="rounded-full"
          src={imagePath}
          alt=""
          width={67}
          height={67}
        />
        <p className="font-bold mt-4 text-primary text-[24px] font-arial">
          Terminate Service?
        </p>
        <p className="font-bold mt-4 text-[20px] font-arial">
          Would you like to Terminate service?
        </p>
        <Divider className="my-4" />
        <div className="flex justify-center gap-4">
          <Button
            variant="outlined"
            className="text-[#DC0035] border-[#DC0035] hover:border-[#DC0035] normal-case"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="bg-[#DC0035] border-[#DC0035] hover:bg-[#DC0035] normal-case"
            onClick={() => {
              setModalOpen(false);
              // setTerminated(true);
            }}
          >
            Terminate
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
