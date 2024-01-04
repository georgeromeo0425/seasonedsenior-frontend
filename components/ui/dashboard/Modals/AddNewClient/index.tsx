import React, { useState } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "@/components/ui/auth/client/InputField";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";

export default function AddNewClientModal({
  open,
  title,
  onClose,
  onSubmit,
}: {
  open: boolean;
  title: string;
  onClose: any;
  onSubmit: any;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        <div className="flex flex-col p-2">
          <InputField
            type="text"
            title="Client Name"
            placholder="Enter client name"
            value={name}
            handleChange={setName}
          />
          <InputField
            type="text"
            title="Client Email"
            placholder="Enter email address"
            value={email}
            handleChange={setEmail}
          />
          <PrimaryButton
            className="text-[16px] text-center"
            handleClick={onSubmit}
          >
            Submit
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
