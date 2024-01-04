import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, Divider, Modal } from "@mui/material";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";

export default function ServiceCatelogConfirmModal({
  open,
  setModalOpen,
}: {
  open: boolean;
  setModalOpen: any;
}) {
  const router = useRouter();

  return (
    <Dialog open={open} onClose={() => setModalOpen(false)}>
      <div className="flex flex-col items-center px-12 py-4">
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
        <p className="mt-4 text-primary font-bold text-[24px]">
          Service Catalog
        </p>
        <p className="font-bold mt-2 text-[18px]">
          Are you sure you want to save changes?
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
            className="bg-primary border-primary hover:bg-primary normal-case"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
