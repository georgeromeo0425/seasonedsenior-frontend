"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

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
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  return (
    <WithRightBG imgpathname="/images/registration_img_3.png">
      <LogoImg onClicked={() => router.push("/")} />
      <div className="ml-8 mt-8 flex items-center">
        <BackBtn onClicked={() => router.push("/auth/app/client/2")} />
        <ProgressStatusBar completeness={3} hasBack={true} />
      </div>
      <OptionalLbl />
      <div className="px-8 mx-auto mt-8 sm:w-full">
        <div className="text-center">
          <div className=" text-[32px] text-textdarkColor font-arial font-bold">
            Mobility and Physical Assistance
          </div>
          <div className="text-base text-distlineColor font-arial font-normal mt-4 mx-7">
            &nbsp;&nbsp;&nbsp; Does the senior require assistance with walking,
            transfers, or the use of mobility aids (such as a wheelchair,
            walker, or cane)? Please provide details.
          </div>
          <div className="text-base text-textdarkColor font-arial font-bold mt-6">
            What sort of assistance is required?
          </div>
        </div>
        <div className="mx-5 mt-6 px-7 pb-7">
          <InputField
            type="text"
            title="List of services required by senior"
            placholder="Walking, Transfer"
            value={name}
            handleChange={setName}
          />
          <div className="mt-7">
            <InputField
              type="text"
              title="List of Mobility aids"
              placholder="Wheelchair, Cane"
              value={address}
              handleChange={setAddress}
            />
          </div>
          <div className="mt-7">
            <InputField
              type="text"
              title="Note"
              placholder="Leave a note"
              value={mail}
              handleChange={setMail}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-8 mt-auto">
        <SaveExitBtn onClicked={() => {}} />
        <ContinueBtn onClicked={() => router.push("/auth/app/client/4")} />
      </div>
    </WithRightBG>
  );
};

export default Login;
