import React, { useState } from "react";
import DatePickerModal from "./Modals/DatePickerModal";

export default function DatePicker({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(title);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        className="w-[240px] border border-solid border-[#828282] mt-2 px-4 py-2 cursor-pointer text-[#828282]"
        onClick={handleClick}
      >
        {value}
      </div>
      <DatePickerModal
        title={title}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
      />
    </>
  );
}
