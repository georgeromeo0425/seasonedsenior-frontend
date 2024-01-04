import React, { useState } from "react";
import ChooseDay from "../ChooseDay";
import ChooseTime from "../ChooseTime";
import { Dialog, Modal } from "@mui/material";
import ServiceSelect from "../ServiceSelect";
import { PrimaryButton } from "../../common/PrimaryButton";
import ClientSelect from "../ClientSelect";

export default function CreateNewTaskModal({
  open,
  setOpen,
  onSave,
}: {
  open: boolean;
  setOpen: any;
  onSave: any;
}) {
  const [clientName, setClientName] = useState<string>("");
  const [selServices, setSelServices] = useState<string[]>([]);
  const [selDate, setDate] = useState<Date | null>(null);
  const [startHour, setStartHour] = useState<Date | null>(null);
  const [endHour, setEndHour] = useState<Date | null>(null);

  const handleSave = () => {
    if (
      clientName === "" ||
      selServices.length === 0 ||
      selDate == null ||
      startHour == null ||
      endHour == null
    ) {
      alert("Please select all fields. You might be forgotten client name");
    } else {
      setClientName("");
      setSelServices([]);
      setDate(null);
      setStartHour(null);
      setEndHour(null);
      onSave({
        clientName,
        selServices,
        selDate,
        startHour,
        endHour,
      });
    }
  };

  return (
    <Modal
      open={open}
      className="flex justify-center items-center"
      onClose={() => setOpen(false)}
    >
      <div className="p-8 bg-white">
        <div className="flex">
          <div className="text-[24px] font-bold">Create New Task</div>
          <div className="ml-auto font-bold text-primary">
            <ClientSelect
              onSelect={(newName: string) => setClientName(newName)}
            />
          </div>
        </div>
        <div className="mt-8">
          <ServiceSelect
            onSelect={(newServices: string[]) =>
              setSelServices([...newServices])
            }
          />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Select Days</div>
            <div className="w-[240px] mt-2">
              <ChooseDay onSelect={(date: Date) => setDate(date)} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Time-From</div>
            <div className="w-[240px] mt-2">
              <ChooseTime onSelect={(time: Date) => setStartHour(time)} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-[24px] font-bold ">Time-To</div>
            <div className="w-[240px] mt-2">
              <ChooseTime onSelect={(time: Date) => setEndHour(time)} />
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex-1">
            <div
              className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <span className="text-primary text-[20px]">Cancel</span>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center bg-primary cursor-pointer"
              onClick={handleSave}
            >
              <span className="text-white text-[20px]">Save</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
