"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import BackBtn from "@/components/ui/auth/client/BackBtn";
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  return (
    <WithRightBG imgpathname="/images/registration_img_4.png">
      <LogoImg onClicked={() => router.push("/")} />
      <div className="ml-8 mt-8 flex items-center">
        <BackBtn onClicked={() => router.push("/auth/app/client/3")} />
        <ProgressStatusBar completeness={4} hasBack={true} />
      </div>
      <OptionalLbl />
      <div className="px-8 mx-auto mt-8 sm:w-full">
        <div className="text-center">
          <div className=" text-[32px] leading-normal text-textdarkColor font-arial font-bold">
            Dietary Restrictions and Preferences
          </div>
          <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
            &nbsp;&nbsp;&nbsp; Are there any specific dietary restrictions,
            preferences, or allergies we should be aware of?
          </div>
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            What allergies or restrictions does the person have?
          </div>
        </div>
      </div>
      <div className="mx-5 pl-8 mt-6 ml-4 px-7 pb-7">
        <InputField
          type="text"
          title="List of Allergies"
          placholder="Milk, Tea"
          value={name}
          handleChange={setName}
        />
        <div className="mt-7">
          <InputField
            type="text"
            title="Note"
            placholder="Leave a detailed note"
            value={mail}
            handleChange={setMail}
          />
        </div>
      </div>
      <div className="flex justify-between mx-8 mt-auto">
        <SaveExitBtn onClicked={() => {}} />
        <ContinueBtn onClicked={() => router.push("/auth/app/client/5")} />
      </div>
    </WithRightBG>
  );
};

export default Login;
