"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import CustomSelection from "@/components/ui/auth/client/CustomSelection";

const Login = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("Yourself");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyAddress, setEmergencyAddress] = useState<string>("");
  const [emergencyMail, setEmergencyMail] = useState<string>("");
  const [emergencyPhone, setEmergencyPhone] = useState<string>("");
  const [formIndex, setFormIndex] = useState<number>(1);
  const [formCount, setFormCount] = useState<number[]>([2]);

  const genderItems = ["Prefer not to say", "Male", "Female"];
  const relationshipItems = [
    "Son",
    "Daughter",
    "Wife",
    "Brother",
    "Family friend",
    "Guardian",
    "Manger",
    "Others",
  ];

  const addNewContact = () => {
    let newArray = [...formCount, formCount.length + 2];
    setFormCount(newArray);
  };

  const handleRoleChange = (e: any) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };

  return (
    <WithRightBG imgpathname="/images/registration_img_1.png">
      <LogoImg onClicked={() => router.push("/")} />
      <div className="ml-8 mt-8 flex items-center">
        <ProgressStatusBar completeness={1} hasBack={false} />
      </div>
      <div className="flex flex-col flex-auto overflow-auto">
        <div className="px-8 mx-auto sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Personal Information
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              Information about senior looking for care
            </div>
            <div className="flex justify-center  mt-6">
              <div className=" text-xs text-textdarkColor font-arial leading-normal">
                {" "}
                Are you filling this out for{" "}
              </div>
              <span className="flex items-center ml-2">
                <input
                  type="radio"
                  id="yourself"
                  value="Yourself"
                  className="accent-[#CB5A6F] w-4 h-4 cursor-pointer"
                  onChange={handleRoleChange}
                  checked={role === "Yourself"}
                />
                <label
                  htmlFor="yourself"
                  className={`ml-2 text-xs dark:text-gray-300 font-arial cursor-pointer ${
                    role === "Yourself" ? "text-primary" : "text-distlineColor"
                  }`}
                >
                  Yourself
                </label>
              </span>
              <span className="flex items-center ml-4">
                <input
                  type="radio"
                  id="somebody"
                  value="Somebody"
                  className="accent-[#CB5A6F] w-4 h-4 cursor-pointer"
                  onChange={handleRoleChange}
                  checked={role === "Somebody"}
                />
                <label
                  htmlFor="somebody"
                  className={`ml-2 text-xs dark:text-gray-300 font-arial cursor-pointer ${
                    role === "Somebody" ? "text-primary" : "text-distlineColor"
                  }`}
                >
                  Somebody
                </label>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto overflow-auto mt-4">
          <div className="mx-5 pl-8 mt-5" onFocus={() => setFormIndex(1)}>
            <div className="flex items-center gap-x-2">
              <span
                className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${
                  formIndex == 1
                    ? "bg-textdarkColor text-sectionBgColor border-textdarkColor"
                    : "bg-white text-distlineColor border-distlineColor"
                } rounded-full flex justify-center items-center text-center`}
              >
                1
              </span>
              <label>General Information</label>
            </div>
            <div className="mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor">
              <InputField
                type="text"
                title="Full Name of Senior"
                placholder="Enter Full Name"
                value={name}
                handleChange={setName}
              />
              <div className="grid grid-cols-2 mt-8 gap-7 items-center sm:grid-cols-1">
                <DatePickerCom title="Desired Start Date" />
                <div>
                  <CustomSelection
                    name="Gender"
                    label="Select"
                    items={genderItems}
                  />
                </div>
              </div>
              <div className="mt-7">
                <InputField
                  type="text"
                  title="Address"
                  placholder="Enter Address"
                  value={address}
                  handleChange={setAddress}
                />
              </div>
              {!(role === "Yourself") && (
                <div className="mt-7">
                  <CustomSelection
                    name="Relationship"
                    label="Choose an option"
                    items={relationshipItems}
                  />
                </div>
              )}
              <div className="mt-7">
                <InputField
                  type="email"
                  title="Email (optional)"
                  placholder="Enter you Email"
                  value={mail}
                  handleChange={setMail}
                />
              </div>
              <div className="mt-7">
                <InputField
                  type="text"
                  title="Phone (optional)"
                  placholder="7465165196"
                  value={phone}
                  handleChange={setPhone}
                />
              </div>
            </div>
          </div>
          {formCount.map((item, idx) => (
            <div
              key={`contact-form-${idx}`}
              className="mx-5 pl-8 mt-5"
              onFocus={() => setFormIndex(item)}
            >
              <div className="flex items-center gap-x-2">
                <span
                  className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${
                    formIndex == item
                      ? "bg-textdarkColor text-sectionBgColor border-textdarkColor"
                      : "bg-white text-distlineColor border-distlineColor"
                  } rounded-full flex justify-center items-center text-center`}
                >
                  {item}
                </span>
                <label>Emergency Contact (optional)</label>
              </div>
              <div className="mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor">
                <InputField
                  type="text"
                  title="Full Name of Contract"
                  placholder="Enter Full name"
                  value={emergencyName}
                  handleChange={setEmergencyName}
                />
                <div className="mt-7">
                  <InputField
                    type="text"
                    title="Address"
                    placholder="Enter Address"
                    value={emergencyAddress}
                    handleChange={setEmergencyAddress}
                  />
                </div>
                <div className="mt-7">
                  <InputField
                    type="email"
                    title="Email (optional)"
                    placholder="Enter you Email"
                    value={emergencyMail}
                    handleChange={setEmergencyMail}
                  />
                </div>
                <div className="mt-7">
                  <InputField
                    type="text"
                    title="Phone (optional)"
                    placholder="7465165196"
                    value={emergencyPhone}
                    handleChange={setEmergencyPhone}
                  />
                </div>
              </div>
            </div>
          ))}
          <div
            className="mx-[90px] text-primary text-base font-arial font-bold cursor-pointer"
            onClick={addNewContact}
          >
            Add another Emergency Contact +
          </div>
          <div className="flex justify-between mx-8 mt-2">
            <SaveExitBtn onClicked={() => {}} />
            <ContinueBtn onClicked={() => router.push("/auth/app/client/2")} />
          </div>
        </div>
      </div>
    </WithRightBG>
  );
};

export default Login;
