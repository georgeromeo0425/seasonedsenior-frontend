"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Children, useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import OptionalLbl from "@/components/ui/auth/client/OptionalLbl";
import ProgressStatusBar from "@/components/ui/auth/client/ProgressStatusBar";
import SaveExitBtn from "@/components/ui/auth/client/SaveExitBtn";
import ContinueBtn from "@/components/ui/auth/client/ContinueBtn";
import BackBtn from "@/components/ui/auth/client/BackBtn";
import ComMethodSel from "@/components/ui/auth/client/ComMethodSel";
import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import DaySelection from "@/components/ui/auth/client/DaySelection";
import WeekSelection from "@/components/ui/auth/client/WeekSelection";
import MonthSelection from "@/components/ui/auth/client/MonthSelection";
import BasicModal from "@/components/ui/auth/AppFinishModal";
type comMethodDataType = {
  id: number;
  title: string;
};

const comMethodData: comMethodDataType[] = [
  {
    id: 0,
    title: "No",
  },
  {
    id: 1,
    title: "Yes",
  },
];
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [selectedComMethodID, setComMethodId] = useState<number>();
  return (
    <div className="flex flex-col w-screen h-screen">
      <LogoImg onClicked={() => router.push("/")} />
      <div className="ml-8 mt-8 flex items-center">
        <BackBtn onClicked={() => router.push("/auth/app/caregiver/10")} />
        <ProgressStatusBar completeness={11} hasBack={true} />
      </div>

      <div className="flex flex-col flex-auto overflow-auto items-center px-8 mx-auto mt-8 sm:w-full font-arial">
        <div className="text-center">
          <div className=" text-[32px] text-textdarkColor font-arial font-bold">
            Caregiver Agreement
          </div>
          <div className="text-base text-distlineColor font-arial font-normal mt-6 mx-7">
            &nbsp;&nbsp;&nbsp; Please read carefully and click checkbox if you
            agree with our terms and policies
          </div>
        </div>
        <div className="w-[75%]">
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Employment
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            The employer shall employ an Employee as a Caregiver on a part-time
            basis under this Contract. In this capability, the Employee shall
            have the following duties and undertake the following
            responsibilities:
            <br />
            <br />
            <li>
              Direct care regarding grooming, assisting with dressing (as
              needed), cooking, and light housekeeping.
            </li>
            <li>
              Assist also with day and night activities per the discretion of
              the employer.
            </li>
            <li>
              The employee shall perform such other duties as are customarily
              performed by other persons in similar positions, including other
              duties as may arise from time to time and as may be assigned.
            </li>
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Performance of Duties
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee shall perform assigned duties and responsibilities in a
            professional manner, in good faith, and to the best of the
            Employee&apos;s skills, abilities, talents, and experience.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Term
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee’s employment under this Agreement shall begin on August
            15th, 2023, and be for an unspecified term on an “at will” basis.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Compensation
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            <li>
              Base Salary: As compensation for the services provided by the
              employee under this Agreement, The employer will pay the employee
              $25.00 per hour. The amount will be paid to the employee weekly on
              Wednesdays.
            </li>
            <li>
              Overtime: Employee shall not receive overtime compensation for
              services performed as a salaried or exempt employee.
            </li>
            <li>
              Additional Compensation: The employee shall also be entitled to
              additional compensation for services rendered under this agreement
              on the following basis: if services rendered go beyond the set
              schedule, Seasoned Senior will further compensate for time spent
              at $25 per hour. Any additional compensation or bonuses paid to
              the Employee shall be paid at the sole discretion of the Employer.
            </li>
          </div>

          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Disclosure of Information
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee is not to disclose pay rate to the client or any other
            employee.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Transportation
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee understands that the client is not responsible for paying
            for Uber or gas unless the employee is running errands, in which
            case the client is responsible for paying $1 per mile driven. The
            employee will not accept cash from the client for any reason unless
            approved by the employer.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Work Location
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employees will primarily perform their duties at 409 Palos Verdes
            Dr, Lakeway, TX 78734 between 9 am-5 pm or 10 am-6 pm unless
            otherwise discussed prior to the shift.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Employee Benefits
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Both parties will comply with Employer policy regarding employee
            benefits or as required by law.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Paid Time Off
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee shall not be entitled to paid time off as required by state
            and local laws.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Personal Leave
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            Employee is not entitled to paid personal leave.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Confidentiality
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            The Employee shall adhere to the confidentiality agreement outlined
            in the attached terms and conditions.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Termination
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            This Agreement may be terminated immediately by the employer for
            cause or in the event the Employee violates any provision of this
            Agreement. In addition, the Employer may terminate this Agreement
            and Employee&apos;s employment at any time by giving 30 days&apos;
            notice in writing to the Employee. Employees may terminate this
            Agreement and the employment at any time by giving fourteen (14)
            days&apos; notice in writing to the Employer. During the notice
            period, Employee and Employer agree to continue diligently
            fulfilling their duties and obligations in good faith with the best
            efforts. At the time of termination, Employee agrees to return all
            Employer property, including but not limited to computers, cell
            phones, and any other electronic devices. Employee shall reimburse
            Employer for any Employer property lost or damaged in an amount
            equal to the market price of such property. The rights and
            obligations of the Parties set forth in Non-Compete,
            Confidentiality, Ownership of Work Product, Termination, and
            Miscellaneous are intended to survive termination, and will survive
            termination of this Agreement.
          </div>
          <div className="text-left font-bold text-[24px] text-textdarkColor font-arial mt-6 mx-7">
            Miscellaneous
          </div>
          <div className="text-[20px] text-distlineColor font-arial mt-[14px] mx-7">
            <li>
              Authority to Contract: Employee acknowledges and agrees that
              Employee does not have authority to enter into any binding
              contracts or commitments for or on behalf of Employer without
              first obtaining the prior written consent of Employer.
            </li>
            <li>
              Governing Law: The terms of this Agreement shall be governed
              exclusively by the laws of the State of Texas (not including its
              conflicts of law provisions). Any dispute arising from this
              Agreement shall be resolved through mediation.
            </li>
            <li>
              Entire Agreement and Amendment: This Agreement constitutes the
              entire agreement between the Parties and supersedes all prior
              understandings of the Parties. No supplement, modification, or
              amendment of this Agreement will be binding unless executed in
              writing by both of the Parties.
            </li>
            <li>
              Notices: Any notice or other communication given or made to either
              Party under this Agreement shall be in writing and delivered by
              hand
            </li>
          </div>
        </div>
        <br />
        <br />
        <div
          className="text-distlineColor text-[20px] font-bold"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            className="my-2 accent-[#CB5A6F] w-5 h-5 text-textdarkColor bg-gray-100 border-gray-300 "
            name="checkbox"
            // checked={status}
            onChange={(val) => {
              console.log(val);
            }}
          />
          &nbsp;By signing I Agree to to abide by the terms of agreement between
          myself and Season senior LLC.
        </div>
        <br />
        <br />
        <BasicModal path="/dashboard/caregiver" />
      </div>
    </div>
  );
};

export default Login;
