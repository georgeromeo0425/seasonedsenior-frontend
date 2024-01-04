"use client";

import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import TimePickerCom from "@/components/ui/auth/client/TimePickerCom";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import CustomSelection from "@/components/ui/auth/client/CustomSelection";

const Login = () => {
  type Dates = {
    date1: string;
    date2: string;
    date3: string;
    date4: string;
    date5: string;
    date6: string;
    date7: string;
    date8: string;
    date9: string;
    date10: string;
  };
  const router = useRouter();
  const [dates, setDates] = useState<Dates>({
    date1: "",
    date2: "",
    date3: "",
    date4: "",
    date5: "",
    date6: "",
    date7: "",
    date8: "",
    date9: "",
    date10: "",
  });

  const handleSetDates =
    (name: keyof Dates) =>
    (value: string): void => {
      setDates((prevDates) => ({
        ...prevDates,
        [name]: value,
      }));
    };

  return (
    <WithRightBG imgpathname="/images/registration_img_5.png">
      <LogoImg onClicked={() => router.push("/")} />
      <div className="ml-8 mt-8 flex items-center">
        <BackBtn onClicked={() => router.push("/auth/app/client/4")} />
        <ProgressStatusBar completeness={5} hasBack={true} />
      </div>
      <div className="px-8 mx-auto mt-8 sm:w-full">
        <div className="text-center">
          <div className=" text-[32px] text-textdarkColor font-arial font-bold">
            Daily Routine and Schedule
          </div>
          <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
            Please provide information about the senior&apos;s typical daily
            routine, including preferred waking and sleeping times, meal times,
            and any specific activities or routines that are important to them
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto overflow-auto mx-5 pl-8 mt-6">
        <div className="text-center text-base font-bold font-arial text-textdarkColor">
          <label>Tell us about the senior routine and schedule</label>
        </div>
        <div className="flex flex-col flex-auto overflow-auto mt-6 ml-4 px-7 pb-7">
          <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
            Waking Time
          </p>
          <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1 sm:gap-0">
            <TimePickerCom
              title="Preferred waking time"
              handleTimeSelected={() => {}}
            />
            <div className="col-span-2">
              <InputField
                type="text"
                title="Note"
                placholder=""
                value={dates.date1}
                handleChange={handleSetDates("date1")}
              />
            </div>
          </div>

          <div className="mt-4">
            <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
              Sleeping Time
            </p>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <TimePickerCom
                title="Preferred sleeping time"
                handleTimeSelected={() => {}}
              />
              <div className="col-span-2">
                <InputField
                  type="text"
                  title="Note"
                  placholder=""
                  value={dates.date2}
                  handleChange={handleSetDates("date2")}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
              Meal Times
            </p>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <TimePickerCom
                title="Breakfast time"
                handleTimeSelected={() => {}}
              />
              <TimePickerCom title="Lunch time" handleTimeSelected={() => {}} />
              <TimePickerCom
                title="Dinner time"
                handleTimeSelected={() => {}}
              />
            </div>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <TimePickerCom title="Snack time" handleTimeSelected={() => {}} />
              <div className=" col-span-2">
                <InputField
                  type="text"
                  title="Note"
                  placholder=""
                  value={dates.date3}
                  handleChange={handleSetDates("date3")}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className=" text-textdarkColor text-base font-normal font-arial ml-2">
              Activities and Routines
            </p>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <InputField
                type="text"
                title="Activity/Routine 1"
                placholder="Name of Activity"
                value={dates.date4}
                handleChange={handleSetDates("date4")}
              />
              <CustomSelection
                label="Daily/Weekly"
                items={["Daily", "Weekly", "Monthly"]}
                name="Frequency"
              />
              <TimePickerCom
                title="Time of the day"
                handleTimeSelected={() => {}}
              />
            </div>
            <InputField
              type="text"
              title="Note"
              placholder="Leave a detailed note"
              value={dates.date6}
              handleChange={handleSetDates("date6")}
            />
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <InputField
                type="text"
                title="Activity/Routine 2"
                placholder="Name of Activity"
                value={dates.date7}
                handleChange={handleSetDates("date7")}
              />
              <CustomSelection
                label="Daily/Weekly"
                items={["Daily", "Weekly", "Monthly"]}
                name="Frequency"
              />
              <TimePickerCom
                title="Time of the day"
                handleTimeSelected={() => {}}
              />
            </div>
            <InputField
              type="text"
              title="Note"
              placholder="Leave a detailed note"
              value={dates.date9}
              handleChange={handleSetDates("date9")}
            />
            <div className="grid grid-cols-3 mt-4 gap-7 items-center sm:grid-cols-1">
              <TimePickerCom title="Snack time" handleTimeSelected={() => {}} />
              <div className=" col-span-2">
                <InputField
                  type="text"
                  title="Note"
                  placholder=""
                  value={dates.date10}
                  handleChange={handleSetDates("date10")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-8 mt-auto">
        <SaveExitBtn onClicked={() => {}} />
        <ContinueBtn onClicked={() => router.push("/auth/app/client/6")} />
      </div>
    </WithRightBG>
  );
};

export default Login;
