"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import ComMethodSel from "@/components/ui/auth/client/ComMethodSel";
import MultiRangeSlider from "@/components/ui/auth/MultiRangeSlider";

type comMethodDataType = {
  id: number;
  title: string;
};

const stayTypeData = [
  {
    imageUrl: "/gifs/caregiver.gif",
    title: "Live-In Care",
    description: "For continuous, around-the-clock care",
  },
  {
    imageUrl: "/gifs/caregive_job.gif",
    title: "Overnight Care",
    description: "For care during nighttime hours",
  },
  {
    imageUrl: "/gifs/caregiver.gif",
    title: "Short Notice Care",
    description: "For emergency or last-minute care",
  },
  {
    imageUrl: "/gifs/caregive_job.gif",
    title: "Daily Care",
    description: "For regular, scheduled care during the day",
  },
];

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "Daily",
  },
  {
    id: 1,
    title: "Weekly",
  },
  {
    id: 2,
    title: "Bi Weekly",
  },
];

const SelectOption = () => {
  const router = useRouter();
  const [stayTypeSelectedStatus, setStayTypeStatus] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [selectedComMethodID, setComMethodId] = useState<number>();

  return (
    <>
      <WithRightBG imgpathname="/images/registration_img_7.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="ml-8 mt-8 flex items-center">
          <BackBtn onClicked={() => router.push("/auth/app/client/6")} />
          <ProgressStatusBar completeness={7} hasBack={true} />
        </div>

        {/* <OptionalLbl /> */}
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Care-Budget
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
              &nbsp;&nbsp;&nbsp; Please indicate your budget for the care
              services on a [weekly/monthly] basis. Your input will help us
              tailor our care options to align with your preferences and
              financial requirements
            </div>
            <div
              className="text-base text-textdarkColor font-arial font-bold mt-6"
              style={{ width: "max-content" }}
            >
              Create your budget
              <div className="text-sm mt-6">Choose type of stay (optional)</div>
              <div className="justify-center gap-2 grid grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2">
                {stayTypeData.map((item, idx) => (
                  <div
                    key={`staytype-data-${idx}`}
                    onClick={() => {
                      let newStatus = [...stayTypeSelectedStatus];
                      newStatus[idx] = !newStatus[idx];
                      setStayTypeStatus(newStatus);
                    }}
                  >
                    <div
                      className={`w-[146px] h-[156px] relative text-center border-solid ${
                        stayTypeSelectedStatus[idx] === true
                          ? "border-borderSelectColor"
                          : "border-borderGreyColor"
                      } ${
                        stayTypeSelectedStatus[idx] === true
                          ? "border-[3px]"
                          : "border-[1px]"
                      } mx-auto mt-[9px]`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Image
                        alt="sketch"
                        src={item.imageUrl}
                        width={70}
                        height={70}
                        className="mx-auto mt-[9px]"
                      />
                      <div className="mb-2">
                        <div className="text-sm font-arial font-bold mt-4">
                          {item.title}
                        </div>
                        <div className="text-xs text-distlineColor font-arial font-light mx-[5px]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">Preferred Payment Plan</div>
              <div className="justify-center sm:gap-[10px] lg:gap-[10px] xl:gap-[10px] gap-[39px] grid grid-cols-3 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 mt-[-11px] my-[-15px]">
                {comMethodData.map((item, index) => (
                  <ComMethodSel
                    key={`com_method_sel_${index}`}
                    title={item.title}
                    statusProp={item.id === selectedComMethodID ? true : false}
                    onClick={(e: any) => {
                      if (
                        e.type === "click" &&
                        e.clientX !== 0 &&
                        e.clientY !== 0
                      ) {
                        setComMethodId(item.id);
                      }
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mt-20"
              ></div>
              <div>
                <MultiRangeSlider
                  min={0}
                  max={200}
                  onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-[50px]">
          <SaveExitBtn onClicked={() => {}} />
          <ContinueBtn onClicked={() => router.push("/auth/app/client/8")} />
        </div>
      </WithRightBG>
    </>
  );
};

export default SelectOption;
