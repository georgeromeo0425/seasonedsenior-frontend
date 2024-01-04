import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, Divider, Modal } from "@mui/material";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";

export default function ApproveDlg({
  open,
  setModalOpen,
  imagePath,
}: {
  open: boolean;
  setModalOpen: any;
  imagePath: string;
}) {
  const router = useRouter();

  return (
    <Dialog className="rounded-md" open={open} onClose={() => setModalOpen}>
      <div className="flex flex-col items-center mx-24 px-4 py-4">
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
          Gabby Alio
        </p>
        <p className="font-bold mt-4 text-[20px] font-arial">
          Approve Timesheet
        </p>
        <Divider className="my-4" />
        <div className="flex justify-center gap-4">
          <Button
            variant="outlined"
            className="text-[#DC0035] border-[#DC0035] hover:border-[#DC0035] normal-case px-4"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="bg-[#DC0035] border-[#DC0035] hover:bg-[#DC0035] normal-case px-4"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Approve
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
