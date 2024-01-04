"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import InputField from "@/components/ui/auth/client/InputField";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import CustomSelection from "@/components/ui/auth/client/CustomSelection";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import DocumentUpload from "@/public/icons/DocumentUpload";
import { InputLabel } from "@mui/material";

const UploadDocumentArea = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const newFiles: File[] = Array.from(fileList);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleAddClick = (e: any) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div>
      {files.length == 0 ? (
        <div>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Describe any specific skills or expertise you possess that are
            relevant to caregiving
          </InputLabel>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
            accept=".csv, .pdf, .txt"
          />
          <div
            className="flex gap-4 justify-center items-center mt-2 border border-solid border-[#F4AAB7] py-4 rounded-md cursor-pointer"
            style={{ backgroundColor: "rgba(203, 90, 111, 0.1)" }}
            onClick={handleAddClick}
          >
            <DocumentUpload />
            <span className="text-primary font-bold text-[16px]">
              Add a file
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-wrap gap-2">
            {files.map((file, idx) => (
              <div
                key={`uploaded-file-${idx}`}
                className="flex w-1/4 gap-4 justify-center items-center mt-2 border border-solid border-[#F4AAB7] py-4 rounded-md cursor-pointer"
                style={{ backgroundColor: "rgba(203, 90, 111, 0.1)" }}
              >
                <DocumentUpload />
                <span className="text-primary font-bold text-[16px]">
                  {file.name}
                </span>
              </div>
            ))}
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
              accept=".csv, .pdf, .txt"
            />
            <div
              className="text-primary font-bold text-[16px] cursor-pointer"
              onClick={handleAddClick}
            >
              Add another file +
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Login = () => {
  const router = useRouter();
  const [role, setrole] = useState<string>("");

  const expItems = ["1", "2+", "4+", "8+", "10+"];
  const eduLevelItems = [
    "High School",
    "Advanced Diploma",
    "College/University",
    "Professional Certifications",
    "Others",
  ];

  return (
    <>
      <WithRightBG imgpathname="/images/caregiver_registration4.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="ml-8 mt-8 flex items-center">
          <BackBtn onClicked={() => router.push("/auth/app/caregiver/3")} />
          <ProgressStatusBar completeness={4} hasBack={true} />
        </div>

        <OptionalLbl />
        <div className="px-8 mx-auto mt-8 sm:w-full">
          <div className="text-center">
            <div className=" text-[32px] text-textdarkColor font-arial font-bold">
              Caregiver Qualification
            </div>
            <div className="text-base text-distlineColor font-arial font-normal mt-4">
              Please provide detailed information about your qualifications,
              education, certifications, and specialized skills relevant to
              caregiving. you can also upload supporting documents, sucah as
              your resume and certificates, to showcase your expertise and
              experience
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-auto overflow-auto mt-4">
          <div className="ml-4 px-7">
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
              Caregiving Experience
            </div>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center ">
              <div className="col start-1 col-span-1">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Years of Caregiving Experience
                </InputLabel>
                <CustomSelection name="" label="Select" items={expItems} />
              </div>
              <div className="col start-2 col-span-2">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Description of Previous Caregiving Roles
                </InputLabel>
                <InputField
                  type="text"
                  title=" "
                  placholder="Describe your last role"
                  value={role}
                  handleChange={setrole}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 ml-4 px-7">
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
              Educational Qualifications*
            </div>
            <div className="grid grid-cols-3 mt-4 gap-7 items-center">
              <div className="col start-1 col-span-1">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Highest Level of Education Completed
                </InputLabel>
                <CustomSelection
                  name=""
                  label="Select Level"
                  items={eduLevelItems}
                />
              </div>
              <div className="col start-2 col-span-1">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Name of School/Institution
                </InputLabel>
                <InputField
                  type="text"
                  title=""
                  placholder="Middlesex University"
                  value={role}
                  handleChange={setrole}
                />
              </div>
              <div className="col start-3 col-span-1">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Diploma, Degree & Certificate
                </InputLabel>
                <InputField
                  type="text"
                  title=""
                  placholder="Bachelor's"
                  value={role}
                  handleChange={setrole}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 ml-4 px-7">
            <div className="mb-4 text-base text-textdarkColor font-arial font-bold mt-6">
              Professional Certifications*
            </div>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              List any relevant caregiving or healthcare certifications
            </InputLabel>
            <InputField
              type="text"
              title=""
              placholder="Senior care cert, CCLLC 012..."
              value={role}
              handleChange={setrole}
            />
          </div>
          <div className="mt-5 ml-4 px-7">
            <div className="mb-4 text-base text-textdarkColor font-arial font-bold mt-6">
              Specialized Skills
            </div>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Describe any specific skills or expertise you possess that are
              relevant to caregiving
            </InputLabel>
            <InputField
              type="text"
              title=""
              placholder="Heavy lifting..."
              value={role}
              handleChange={setrole}
            />
          </div>
          <div className="mt-5 ml-4 px-7">
            <div className="text-base text-textdarkColor font-arial font-bold mt-6">
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
          <div className="mt-5 ml-4 px-7 pb-7 ">
            <div className="mb-2 text-base text-textdarkColor font-arial font-bold mt-6">
              Upload Document*
            </div>
            <UploadDocumentArea />
          </div>

          <div className="flex justify-between mx-8 mt-2 ">
            <SaveExitBtn onClicked={() => {}} />
            <ContinueBtn
              onClicked={() => router.push("/auth/app/caregiver/5")}
            />
          </div>
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;
