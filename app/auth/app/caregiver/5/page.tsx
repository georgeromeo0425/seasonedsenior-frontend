"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import WorkHoursSelection from "@/components/ui/auth/caregiver/WorkHoursSelection";
import BackBtn from "@/components/ui/auth/client/BackBtn";

type comMethodDataType = {
  id: number;
  title: string;
};

const Login = () => {
  const router = useRouter();
  const [role, setrole] = useState<string>("");
  const [selectedTimeTypeId, setSelectedTimeTypeId] = useState<number>(0);

  const timeData = [
    {
      id: 0,
      type: "Morning",
      start: 6,
      end: 24,
    },
    {
      id: 1,
      type: "Afternoon",
      start: 24,
      end: 18,
    },
    {
      id: 2,
      type: "Evening",
      start: 18,
      end: 12,
    },
    {
      id: 3,
      type: "Night",
      start: 12,
      end: 6,
    },
  ];

  const comMethodData: comMethodDataType[] = [
    {
      id: 0,
      title: "Phone call",
    },
    {
      id: 1,
      title: "Text message",
    },
    {
      id: 2,
      title: "E-mail",
    },
    {
      id: 3,
      title: "In person Meetings",
    },
    {
      id: 4,
      title: "Virtual Meeting",
    },
  ];

  return (
    <>
      <WithRightBG imgpathname="/images/caregiver_registration4.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="ml-8 mt-8 flex items-center">
          <BackBtn onClicked={() => router.push("/auth/app/caregiver/4")} />
          <ProgressStatusBar completeness={5} hasBack={true} />
        </div>

        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Caregiver Availability
            </div>
            <div className="text-[22px] text-distlineColor font-arial font-normal mt-4">
              Please share your availability and preferred caregiving schedule
              to help us <br />
              match you with suitable opportunities. Your input will help us
              create a flexible <br />
              and personalized caregiving experience for you and our clients.
            </div>
          </div>
        </div>

        <div className="mt-5 ml-4 px-7">
          <p className="text-[18px] text-textdarkColor font-normal">
            Preferred Work Hours: (Select all that apply)
          </p>
        </div>

        <div className="mt-1 ml-4 px-7 pb-6">
          <div className="grid grid-cols-4 mt-2 gap-7 items-center sm:grid-cols-1">
            {timeData.map((item, index) => (
              <WorkHoursSelection
                key={`auth-app-caregiver-5-${index}`}
                timetype={item.type}
                start={item.start}
                end={item.end}
                status={item.id === selectedTimeTypeId ? true : false}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 ml-4 px-7 pb-7">
          <div className="text-base text-textdarkColor font-arial font-bold mt-2">
            Note
          </div>
          <InputField
            type="text"
            title=""
            placholder="Leave a note"
            value={role}
            handleChange={setrole}
          />
        </div>

        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/auth/app/caregiver/6")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;
