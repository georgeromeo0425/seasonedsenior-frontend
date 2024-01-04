import React from "react";
import Image from "next/image";
import SeasonedLogoModal from "../SeasonedLogoModal";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";

export default function RegSentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  return (
    <SeasonedLogoModal
      open={open}
      onClose={onClose}
      content={
        <div className="flex flex-col items-center px-24  pt-6 text-[24px] font-bold py-4">
          <Image
            alt="logo"
            src="/gifs/mail_box.gif"
            width={300}
            height={210}
            priority={true}
          />
          <span>Registration Link Sent</span>
        </div>
      }
      footer={
        <>
          <PrimaryButton className="text-[16px] px-12" handleClick={onClose}>
            Ok
          </PrimaryButton>
        </>
      }
    ></SeasonedLogoModal>
  );
}
