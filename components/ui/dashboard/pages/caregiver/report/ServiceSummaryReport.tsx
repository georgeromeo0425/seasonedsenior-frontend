import React, { Component } from "react";
import ReportSummary from "./ReportSummary";

interface serviceDetail {
  title: string;
  contents: string[];
}

interface summary {
  avatar: string;
  name: string;
  age: number;
  totalHours: string;
  requiredService: string;
  servicePeriod: string;
  serviceDetails: serviceDetail[];
}

const fakerData: summary[] = [
  {
    avatar: "",
    name: "Stacy Gallow",
    age: 73,
    totalHours: "230h : 23m : 42s",
    requiredService: "Personal Care Assistance",
    servicePeriod: "[23 SEP 2023] to [30 SEP 2023]",
    serviceDetails: [
      {
        title: "Dressing and Grooming:",
        contents: [
          "Helped the client get dressed daily.",
          "Assisted with grooming tasks such as combing hair and brushing teeth.",
        ],
      },
      {
        title: "Mobility Support:",
        contents: [
          "HAssisted with mobility and transferring from bed to chair, as needed.",
        ],
      },
      {
        title: "Toileting Assistance:",
        contents: [
          "Provided support with toileting, including transferring to and from the toilet.",
          "Maintained client's privacy and dignity.",
        ],
      },
    ],
  },
  {
    avatar: "",
    name: "Benjamin Franklyn",
    age: 73,
    totalHours: "230h : 23m : 42s",
    requiredService: "Personal Care Assistance",
    servicePeriod: "[23 SEP 2023] to [30 SEP 2023]",
    serviceDetails: [
      {
        title: "Dressing and Grooming:",
        contents: [
          "Helped the client get dressed daily.",
          "Assisted with grooming tasks such as combing hair and brushing teeth.",
        ],
      },
      {
        title: "Mobility Support:",
        contents: [
          "HAssisted with mobility and transferring from bed to chair, as needed.",
        ],
      },
      {
        title: "Toileting Assistance:",
        contents: [
          "Provided support with toileting, including transferring to and from the toilet.",
          "Maintained client's privacy and dignity.",
        ],
      },
    ],
  },
];

export default function ServiceSummaryReport() {
  return (
    <div className="mt-4 flex flex-col items-center">
      <p className="font-bold text-[20px]">Summary of services provided</p>
      <p className="text-[#828282]">
        Showing details of most recent client from 23 SEP 2023 - 12 Oct 2023
      </p>
      <div>
        {fakerData.map((item, idx) => (
          <ReportSummary key={`service-summary-report-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
}
