import { DownloadIcon, PrinterIcon } from "@/components/ui/common/Icons";
import { Button, IconButton } from "@mui/material";
import React from "react";

export default function TerminateArea({
  open,
  setModalOpen,
}: {
  open: boolean;
  setModalOpen: any;
}) {
  return (
    <>
      <div className="flex flex-col px-24 text-distlineColor">
        <div className="flex">
          <div className="flex flex-col w-full">
            <p className="text-center text-[24px] text-black font-bold w-full">
              Signed Employment Contract
            </p>
            <p className="my-4 text-center text-[16px] text-distlineColor">
              Please read carefully and click checkbox if you agree with our
              terms and policies
            </p>
          </div>
          <div className="flex gap-4 ml-auto">
            <div className="flex flex-col items-center text-[#30A64A]">
              <IconButton>
                <DownloadIcon />
              </IconButton>
              <span className="font-bold">Download</span>
            </div>
            <div className="flex flex-col items-center text-[#4285F4]">
              <IconButton>
                <PrinterIcon />
              </IconButton>
              <span className="font-bold">Print</span>
            </div>
          </div>
        </div>
        <p className="text-[18px]">
          This Senior Care Services Agreement is made as of the 13th day of
          October 2023 by and between <b>Frank Sergio</b> and{" "}
          <b>Seasoned Senior LLC</b>. The Parties agree and covenant to be bound
          by the terms set forth in this Agreement as follows:
        </p>

        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Employment
          </p>
          <div>
            <p className="text-[18px]">
              The employer shall employ an Employee as a Caregiver on a
              part-time basis under this Contract. In this capacity, the
              Employee shall have the following duties and undertake the
              following responsibilities:
            </p>
            <ul
              className="mt-2"
              style={{ listStyle: "circle", marginLeft: "28px" }}
            >
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
            </ul>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Performance of Duties
          </p>
          <p className="text-[18px]">
            Employee shall perform assigned duties and responsibilities in a
            professional manner, in good faith, and to the best of the
            Employee&apos;s skills, abilities, talents, and experience.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">Term</p>
          <p className="text-[18px]">
            Employee&apos;s employment under this Agreement shall begin on
            August 15th, 2023, and be for an unspecified term on an “at will”
            basis.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Compensation
          </p>
          <div>
            <ul
              className="mt-2"
              style={{ listStyle: "circle", marginLeft: "28px" }}
            >
              <li>
                <b className="text-black">Base Salary</b>: As compensation for
                the services provided by the employee under this Agreement, The
                employer will pay the employee $25.00 per hour. The amount will
                be paid to the employee weekly on Wednesdays.
              </li>
              <li>
                <b className="text-black">Overtime</b>: Employee shall not
                receive overtime compensation for services performed as a
                salaried or exempt employee.
              </li>
              <li>
                <b className="text-black">Additional Compensation</b>: The
                employee shall also be entitled to additional compensation for
                services rendered under this agreement on the following basis:
                if services rendered go beyond the set schedule, Seasoned Senior
                will further compensate for time spent at $25 per hour. Any
                additional compensation or bonuses paid to the Employee shall be
                paid at the sole discretion of the Employer.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Disclosure of Information
          </p>
          <p className="text-[18px]">
            Employee is not to disclose pay rate to the client or any other
            employee.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Transportation
          </p>
          <p className="text-[18px]">
            Employee understands that the client is not responsible for paying
            for Uber or gas unless the employee is running errands, in which
            case the client is responsible for paying $1 per mile driven. The
            employee will not accept cash from the client for any reason unless
            approved by the employer.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Work Location
          </p>
          <p className="text-[18px]">
            Employees will primarily perform their duties at 409 Palos Verdes
            Dr, Lakeway, TX 78734 between 9 am-5 pm or 10 am-6 pm unless
            otherwise discussed prior to the shift.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Employee Benefits
          </p>
          <p className="text-[18px]">
            Both parties will comply with Employer policy regarding employee
            benefits or as required by law.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Paid Time Off
          </p>
          <p className="text-[18px]">
            Employee shall not be entitled to paid time off as required by state
            and local laws.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Personal Leave
          </p>
          <p className="text-[18px]">
            {" "}
            Employee is not entitled to paid personal leave.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Confidentiality
          </p>
          <p className="text-[18px]">
            The Employee shall adhere to the confidentiality agreement outlined
            in the attached terms and conditions.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Termination
          </p>
          <p className="text-[18px]">
            &nbsp;This Agreement may be terminated immediately by the employer
            for cause or in the event the Employee violates any provision of
            this Agreement. In addition, the Employer may terminate this
            Agreement and Employee&apos;s employment at any time by giving 30
            days&apos; notice in writing to the Employee. Employees may
            terminate this Agreement and the employment at any time by giving
            fourteen (14) days&apos; notice in writing to the Employer. During
            the notice period, Employee and Employer agree to continue
            diligently fulfilling their duties and obligations in good faith
            with the best efforts. At the time of termination, Employee agrees
            to return all Employer property, including but not limited to
            computers, cell phones, and any other electronic devices. Employee
            shall reimburse Employer for any Employer property lost or damaged
            in an amount equal to the market price of such property. The rights
            and obligations of the Parties set forth in Non-Compete,
            Confidentiality, Ownership of Work Product, Termination, and
            Miscellaneous are intended to survive termination, and will survive
            termination of this Agreement.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-2 text-[20px] text-black font-bold">
            Miscellaneous
          </p>
          <ul
            className="mt-2"
            style={{ listStyle: "circle", marginLeft: "28px" }}
          >
            <li>
              <b className="text-black">Authority to Contract</b>: Employee
              acknowledges and agrees that Employee does not have authority to
              enter into any binding contracts or commitments for or on behalf
              of Employer without first obtaining the prior written consent of
              Employer.
            </li>
            <li>
              <b className="text-black">Governing Law</b>: The terms of this
              Agreement shall be governed exclusively by the laws of the State
              of Texas (not including its conflicts of law provisions). Any
              dispute arising from this Agreement shall be resolved through
              mediation.
            </li>
            <li>
              <b className="text-black">Entire Agreement and Amendment</b>: This
              Agreement constitutes the entire agreement between the Parties and
              supersedes all prior understandings of the Parties. No supplement,
              modification, or amendment of this Agreement will be binding
              unless executed in writing by both of the Parties.
            </li>
            <li>
              <b className="text-black">Notices</b>: Any notice or other
              communication given or made to either Party under this Agreement
              shall be in writing and delivered by hand
            </li>
          </ul>
          <div>
            <p className="mt-4">
              WITNESS WHEREOF, this Agreement has been executed and delivered as
              of the date first written above.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 text-black font-bold text-[20px]">
        <div className="flex flex-col">
          <div className="my-8">Employer Name: Seasoned Senior LLC</div>
          <div className="">
            Employer’s Signature and date: _____________________
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-8">Employer Name: Seasoned Senior LLC</div>
          <div className="">
            Employer’s Signature and date: _____________________
          </div>
        </div>
      </div>
      <div className="my-12 flex justify-center">
        <span
          className="bg-brightRedColor hover:bg-brightRedColor font-bold text-white flex items-center rounded-lg px-4 py-2 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Terminate Contract
        </span>
      </div>
    </>
  );
}
