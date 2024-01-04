import React, { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import TimePickerModal from "./TimePickerModal";

const ChooseTime = ({
  onSelect
}: {
  onSelect?: any
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("__ __");
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <div
        className="w-full text-distlineColor px-2 py-4 border border-distlineColor rounded flex justify-between"
        onClick={handleClick}
      >
        <p>ChooseTime</p>
        <div className="flex">
          <p className="text-black">{value}</p>
          <KeyboardArrowRightIcon className="text-black" />
        </div>
      </div>
      <TimePickerModal
        title={"Select Time"}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
        onSelect={onSelect}
      />
    </div>
  );
};

export default ChooseTime;
