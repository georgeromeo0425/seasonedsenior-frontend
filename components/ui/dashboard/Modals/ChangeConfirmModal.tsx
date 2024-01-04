import { Dialog, Divider, Modal } from "@mui/material";
import React from "react";
import Image from "next/image";

import app_logo from "@/public/icons/app_logo.svg";
import { useRouter } from "next/navigation";

export default function ChangeConfirmModal({
  open,
  onCancel,
  onDiscard,
}: {
  open: boolean;
  onCancel: any;
  onDiscard: any;
}) {
  const router = useRouter();
  return (
    <Dialog open={open}>
      <div className="px-12 py-8">
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
        <div className="text-bold text-[20px] mt-8 mb-4">
          Are you sure you want to cancel changes?
        </div>
        <Divider />
        <div className="flex justify-center gap-12 mt-4">
          <span
            className="cursor-pointer rounded-md border border-solid border-primary px-12 py-2 text-bold text-primary"
            onClick={onCancel}
          >
            Cancel
          </span>
          <span
            className="cursor-pointer rounded-md bg-primary px-12 py-2 text-bold text-white"
            onClick={onDiscard}
          >
            Discard
          </span>
        </div>
      </div>
    </Dialog>
  );
}
