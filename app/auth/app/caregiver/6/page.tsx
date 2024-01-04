"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import ComMethodSel from "@/components/ui/auth/client/ComMethodSel";
import BackBtn from "@/components/ui/auth/client/BackBtn";

type comMethodDataType = {
  id: number;
  title: string;
};

const Login = () => {
  const router = useRouter();
  const [selectedComMethodID, setComMethodId] = useState<number>(1);

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
      <WithRightBG imgpathname="/images/registration_img_6.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="ml-8 mt-8 flex items-center">
          <BackBtn onClicked={() => router.push("/auth/app/caregiver/5")} />
          <ProgressStatusBar completeness={6} hasBack={true} />
        </div>

        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="flex flex-col items-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Communication and Family Involvement
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              How would you prefer to stay informed about the senior&apos;s
              well-being and care updates?(Choose one or specify any additional
              preferences)
            </div>
            <div
              className="text-base text-textdarkColor font-arial font-bold mt-6"
              // style={{ width: "max-content" }}
            >
              Choose preferred method of communication
              <div className="mt-6">
                {comMethodData.map((item, index) => (
                  <ComMethodSel
                    key={`communication_method_selection_${index}`}
                    title={item.title}
                    index={index}
                  />
                ))}
                <div className="mt-5 flex justify-between items-center border border-distlineColor rounded-md h-10 p-6 cursor-pointer">
                  <p className="text-sm font-arial font-normal leading-5 text-textdarkColor">
                    Others{" "}
                    <span className=" text-distlineColor">
                      {" "}
                      (Please specify){" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mx-8 mt-auto">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/auth/app/caregiver/7")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;
