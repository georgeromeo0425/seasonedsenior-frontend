import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CreateNewTaskModal from "../../../Modals/CreateNewTaskModal";
import { FormatListNumbered } from "@mui/icons-material";

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fakeData = [
  {
    serviceName: "Meal Preparation",
    imageUrl: "/avatars/sample.png",
    clientName: "Gabby Alao",
    day: 0,
    startHour: 0,
    endHour: 3,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    clientName: "Kimberly Alao",
    day: 1,
    startHour: 0,
    endHour: 2,
  },
  {
    serviceName: "Regular assessment and care plans",
    imageUrl: "/avatars/sample.png",
    clientName: "Kimberly Alao",
    day: 2,
    startHour: 2,
    endHour: 3,
  },
  {
    serviceName: "Meal Preparation",
    imageUrl: "/avatars/sample.png",
    clientName: "Gabby Alao",
    day: 3,
    startHour: 0,
    endHour: 3,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    clientName: "Kimberly Alao",
    day: 4,
    startHour: 1,
    endHour: 2,
  },
  {
    serviceName: "House Keeping",
    imageUrl: "/avatars/sample.png",
    clientName: "Kimberly Alao",
    day: 5,
    startHour: 0,
    endHour: 1,
  },
];

const bgColorList = [
  "#FFF2F5",
  "rgba(91, 147, 255, 0.10)",
  "rgba(237, 108, 2, 0.10)",
  "rgba(10, 207, 131, 0.10)",
];

const borderColorList = ["#CB5A6F", "#5B93FF", "#ED6C02", "#0ACF83"];

const getRandomColor = (colorArray: string[]) => {
  let randIdx = Math.floor(Math.random() * 10) % 4;
  return bgColorList[randIdx];
};

const get24LenArray = () => {
  let arr = [];
  for (let i = 0; i < 24; i++) arr.push("");
  return arr;
};

export default function TaskManagement() {
  const [open, setOpen] = useState(false);
  const [serviceSchedule, setServiceSchedule] = useState<any[]>([]);
  const handleCreateTask = () => {
    setOpen(true);
  };

  const serviceList = useMemo(() => {
    let retData: any[] = [];
    for (let i = 0; i < 7; i++) {
      let items = serviceSchedule.filter((item) => item.day == i);
      retData.push([]);
      for (let item of items) {
        retData[i].push(item);
      }
    }
    return retData;
  }, [serviceSchedule]);

  const formatTimeStr = (hour: number) => {
    const prefix = hour > 12 ? "PM" : "AM";
    const suffix = hour > 10 ? `${hour}` : `0${hour}`;
    return `${suffix}:00 ${prefix}`;
  };

  const handleSaveNewTask = (newData: any) => {
    let newSchedule = [...serviceSchedule];
    newSchedule.push({
      serviceName: newData.selServices.toString(),
      imageUrl: "/avatars/sample.png",
      day: newData.selDate.getDay(),
      clientName: newData.clientName,
      startHour: newData.startHour.getHours(),
      endHour: newData.endHour.getHours(),
    });
    setServiceSchedule(newSchedule);
    setOpen(false);
  };

  return (
    <div className="w-full px-8 flex flex-col">
      <div className="ml-auto">
        <div onClick={handleCreateTask}>
          <div
            className="w-full p-2 rounded-md border border-solid border-primary flex justify-center items-center cursor-pointer bg-primary text-white font-bold"
            onClick={() => setOpen(false)}
          >
            Create New Task +
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col items-center relative">
        <div>
          <div className="w-full flex">
            <div className="w-[100px]"></div>
            {weekNames.map((name, idx) => (
              <div
                key={`weekname-${idx}`}
                className="text-[20px] font-bold w-[150px] text-center"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-[100px]">
              {get24LenArray().map((item, idx) => (
                <div
                  key={`formattimestr-${idx}`}
                  className="h-[150px] bg-white px-2 text-distlineColor text-center font-bold"
                >
                  {formatTimeStr(idx)}
                </div>
              ))}
            </div>
            <div className="flex flex-auto">
              {serviceList?.map((serviceItem: any[], idx: number) => (
                <div
                  key={`servicelist-col-${idx}`}
                  className={`flex flex-col flex-1 h-[${
                    150 * 24
                  }px] relative bg-white`}
                >
                  {serviceItem?.map((item, idx1) => (
                    <div
                      key={`serviceitem-block-${idx * 7 + idx1}`}
                      className={`flex flex-col items-center gap-y-1 w-[150px] left-0 absolute border-solid border-t-2 p-2`}
                      style={{
                        height: `${150 * (item.endHour - item.startHour)}px`,
                        top: `${150 * item.startHour}px`,
                        backgroundColor: `${bgColorList[(idx * 7 + idx1) % 4]}`,
                        borderTopColor: `${
                          borderColorList[(idx * 7 + idx1) % 4]
                        }`,
                      }}
                    >
                      <span className="font-bold text-[16px] px-2 text-center">
                        {item.serviceName}
                      </span>
                      <div className="flex items-center gap-x-2">
                        <Image
                          alt="service-img"
                          src="/avatars/sample.png"
                          className="rounded-md"
                          width={24}
                          height={24}
                        />
                        <span className="text-distlineColor text-[14px]">
                          {item.clientName}
                        </span>
                      </div>
                      <div className="text-[12px] mt-auto font-bold text-[#333]">{`${formatTimeStr(
                        item.startHour
                      )}-${formatTimeStr(item.endHour)}`}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {serviceSchedule.length === 0 && (
          <div className="absolute flex justify-center items-center h-[400px]">
            <div className="font-bold text-[18px]">
              Set tasks reminders, click “
              <span className="text-primary">Create New Task</span>” to set up
            </div>
          </div>
        )}
      </div>
      <CreateNewTaskModal
        open={open}
        setOpen={setOpen}
        onSave={(data: any) => handleSaveNewTask(data)}
      />
    </div>
  );
}
