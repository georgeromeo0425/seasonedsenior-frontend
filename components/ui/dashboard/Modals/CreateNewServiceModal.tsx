import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../../common/PrimaryButton";
import InputField from "../../auth/client/InputField";
import ChangeConfirmModal from "./ChangeConfirmModal";

export default function AddNewServiceModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (e: ProgressEvent<FileReader>) {
        const imageSrc = e.target?.result;
        if (imageSrc) setImgSrc(imageSrc.toString());
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setConfirmOpen(true)}
    >
      <div
        className="px-4 py-4 bg-white z-[1005] w-1/2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center">
          <div className="text-[#CB5A6F] font-bold text-xl w-full">
            Add New Service
          </div>
          <div className="ml-auto">
            <IconButton onClick={() => setConfirmOpen(true)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col mx-4 mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-distlineColor">
              Set service image
            </span>
            <div
              className="border border-dashed border-distlineColor rounded-lg flex justify-center items-center mt-2 w-2/5 cursor-pointer h-[150px]"
              onClick={() => {
                if (fileInputRef.current !== null) fileInputRef.current.click();
              }}
            >
              {imgSrc === "" ? (
                <span className="font-bold underline underline-offset-2">
                  Choose file
                </span>
              ) : (
                <img src={imgSrc} width="auto" height="100%d" />
              )}
            </div>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileSelected}
            />
          </div>
          <div className="mt-6">
            <InputField
              type="text"
              title="Set service name"
              placholder="Enter title"
              value={title}
              handleChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mt-6">
            <InputField
              type="text"
              title="Set service description"
              placholder=""
              value={desc}
              multiline={true}
              rows={6}
              handleChange={(e: any) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className="text-center my-6">
            <PrimaryButton className="text-[20px]" handleClick={() => {}}>
              Save
            </PrimaryButton>
          </div>
        </div>
        <ChangeConfirmModal
          open={confirmOpen}
          onCancel={() => {
            setConfirmOpen(false);
          }}
          onDiscard={() => {
            setImgSrc("");
            setTitle("");
            setDesc("");
            setOpen(false);
            setConfirmOpen(false);
          }}
        />
      </div>
    </div>
  );
}
