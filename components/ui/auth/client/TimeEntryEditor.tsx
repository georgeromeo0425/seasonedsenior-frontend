import { ChangeEvent, useContext, useState } from "react";
import InputField from "./InputField";
import TimeEntryContext from "@/contexts/TimeEntryContext";
import CustomSelection from "./CustomSelection";
import CheckMarkSelection from "./CheckMarkSelection";
import DurationPane from "./DurationPane";

const hoursPerDayItems = [
  "5 hrs",
  "6 hrs",
  "7 hrs",
  "8 hrs",
  "9 hrs",
  "10 hrs",
  "11 hrs",
  "12 hrs",
  "13 hrs",
  "14 hrs",
  "15 hrs",
  "16 hrs",
  "17 hrs",
  "18 hrs",
  "19 hrs",
  "20 hrs",
  "21 hrs",
  "22 hrs",
  "23 hrs",
  "24 hrs",
];

const timeItems = [
  "0 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "0 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const TimeEntryEditor = () => {
  const [show, setShow] = useState<boolean>(true);
  const { dayOfWeek, setDayOfWeek } = useContext(TimeEntryContext);
  const { timeTo, setTimeTo } = useContext(TimeEntryContext);
  const { timeFrom, setTimeFrom } = useContext(TimeEntryContext);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSetShow = () => {
    setShow(!show);
  };

  const handleSetTimeTo = (to: number) => {
    setTimeTo(to);
    if (dayOfWeek.length === 0 || Number.isNaN(to) || Number.isNaN(timeFrom)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  const handleSetDayOfWeek = (e: string[]) => {
    setDayOfWeek(e);
    if (e.length === 0 || Number.isNaN(timeTo) || Number.isNaN(timeFrom)) {
      console.log(dayOfWeek, timeTo, timeFrom);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  const handleSetTimeFrom = (from: number) => {
    setTimeFrom(from);
    if (dayOfWeek.length === 0 || Number.isNaN(timeTo) || Number.isNaN(from)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const getDuration = () => {
    const duration = timeTo - timeFrom;
    if (duration > 0) return duration;
    else return 0;
  };

  const buttonClassName = `${
    isDisabled
      ? "bg-borderGreyColor text-[#f6f6f6]"
      : "bg-primaryHover focus:bg-primaryDisabled"
  } rounded-lg px-4 py-3 mt-4 mb-9 text-white font-arial w-[40%] font-bold cursor-pointer`;

  return (
    <>
      <button
        onClick={handleSetShow}
        style={{ display: "flex" }}
        className={
          "text-xs font-arial mt-[9px] " +
          (show ? "text-primary" : "text-distlineColor")
        }
        // onClick={()=>{handleTimeEntryPickerBox()}}
      >
        Customize time
      </button>
      <div className={"mt-3 " + (show ? "hidden" : "")}>
        <div className="text-textdarkColor font-arial border border-[#F6F6F6]">
          <div className="flex justify-between bg-[#F6F6F6]">
            <div className="text-left text-[12px] leading-[18px] pt-[7px] pr-[12px] pb-[7px] pl-[13px]">
              Edit time entry
            </div>
            <button
              onClick={handleSetShow}
              className="text-right text-[20px] leading-[18px] pt-[7px] pr-[12px] pb-[7px] pl-[13px]"
            >
              &#10006;
            </button>
          </div>
          <div
            className="pr-[34px] pb-[9px] pl-[34px]"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="w-full mt-6 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
              <CheckMarkSelection
                name="Days of the Week"
                label="Select days"
                items={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ]}
                onChange={handleSetDayOfWeek}
              />
              <DurationPane name="Duration" duration={getDuration()} />
            </div>
            <div className="w-full mt-2 grid gap-[14px] grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
              <CustomSelection
                label="From"
                name="Time"
                items={timeItems}
                onChange={handleSetTimeFrom}
              />
              <CustomSelection
                label="To"
                name="Time"
                items={timeItems}
                onChange={handleSetTimeTo}
              />
              {/* <InputField
            type="text"
            title="Time"
            placholder="From"
            value={timeFrom}
            handleChange={handleSetTimeFrom}
          />
          <InputField
            type="text"
            title="Time"
            placholder="To"
            value={timeTo}
            handleChange={handleSetTimeTo}
          /> */}
            </div>
            {/* <div className="w-[60%] rounded-md mt-6 p-4 text-[14px] bg-borderGreyColor">
          Save
        </div> */}
            <button
              type="submit"
              disabled={isDisabled ? true : false}
              className={buttonClassName}
              onClick={handleSetShow}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeEntryEditor;
