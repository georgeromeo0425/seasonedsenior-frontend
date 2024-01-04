import React, { useState } from "react";
import HelpSolutionItem from "./HelpSolutionItem";

import GeneralImage from "@/public/images/support/1.png";
import TechnicalImage from "@/public/images/support/2.png";
import BillingImage from "@/public/images/support/3.png";
import { Divider } from "@mui/material";
import GeneralInquiries from "./GeneralInquiries";
import TechnicalIssues from "./TechnicalIssues";
import BillingPayment from "./BillingPayment";

const fakerData = [
  {
    image: GeneralImage,
    title: "General Inquiries",
    description: "Make inquiry on anything relating to the senior care app",
  },
  {
    image: TechnicalImage,
    title: "Technical Issues",
    description: "Get your technical issues resolved",
  },
  {
    image: BillingImage,
    title: "Billing and Payments",
    description: "All enquires on billings and payments",
  },
];

export default function HelpSupportPage() {
  const [curIdx, setCurIdx] = useState(-1);

  const handleItemClick = (newIdx: number) => {
    setCurIdx(newIdx);
  };

  const renderSolutionItems = () => {
    switch (curIdx) {
      case 0:
        return <GeneralInquiries />;
      case 1:
        return <TechnicalIssues />;
      case 2:
        return <BillingPayment />;
    }
  };

  return (
    <div className="w-full mt-4">
      <div>
        <p
          className="text  text-center font-bold font-arial text-textdarkColor"
          style={{ fontSize: "24px" }}
        >
          Find a solution as quickly as possible
        </p>
        <p
          className="text-center"
          style={{ fontSize: "14px", color: "#282828" }}
        >
          Select a category you need our assistance with
        </p>
      </div>
      <div className="flex flex-row gap-3 justify-center mt-10">
        {fakerData.map((item, idx) => (
          <div
            key={`helpsupport-item-${idx}`}
            onClick={() => handleItemClick(idx)}
          >
            <HelpSolutionItem {...item} selected={idx === curIdx} />
          </div>
        ))}
      </div>
      {curIdx > -1 && (
        <>
          <Divider className="my-4" />
          <div className="flex justify-center text-textdarkColor text-[20px] mb-4">
            Select which ever options meets your needs
          </div>
        </>
      )}
      {renderSolutionItems()}
    </div>
  );
}
