import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import DatePickerModal from "@/components/ui/dashboard/Modals/DatePickerModal";

const ChooseDay = ({
  onSelect
}: {
  onSelect?: any
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("__ / __ / ____");
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <div
        className="w-full text-distlineColor px-2 py-4 border border-distlineColor rounded flex justify-between"
        onClick={handleClick}
      >
        <p>ChooseDay</p>
        <div className="flex">
          <p className="text-textdarkColor">{value}</p>
          <KeyboardArrowRightIcon className="text-black" />
        </div>
      </div>
      <DatePickerModal
        title={"Select Date"}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
        onSelect={onSelect}
      />
    </div>
  );
};

export default ChooseDay;
