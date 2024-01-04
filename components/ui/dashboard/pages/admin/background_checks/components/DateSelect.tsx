import React, { useState } from "react";

import DatePickerModal from "@/components/ui/dashboard/Modals/DatePickerModal";

type DateSelectProps = {
  title: string;
};

const DateSelect = ({ title }: DateSelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <div
        className="w-full text-distlineColor px-2 py-4 border border-distlineColor rounded flex justify-between"
        onClick={handleClick}
      >
        <p>{value == "" ? title : value}</p>
      </div>
      <DatePickerModal
        title={"Select Date"}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
      />
    </div>
  );
};

export default DateSelect;
