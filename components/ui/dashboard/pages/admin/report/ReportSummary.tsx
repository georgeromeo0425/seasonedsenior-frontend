import { Avatar } from "@mui/material";
import React from "react";

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

export default function ReportSummary(props: summary) {
  return (
    <div className="my-8 flex flex-col items-center">
      <Avatar sx={{ width: 64, height: 64 }} />
      <div className="mt-2 text-[#4285F4] font-bold">{props.name}</div>
      <div className="text-[15px]">{`${props.age} yrs/old`}</div>
      <div className="flex flex-col">
        <div className="mt-2 flex">
          <div className="w-[150px] font-bold">
            <span>Total Hours:</span>
          </div>
          <span>{props.totalHours}</span>
        </div>

        <div className="flex">
          <label className="w-[150px] font-bold">Services Required:</label>
          <span>{props.requiredService}</span>
        </div>
        <div className="flex">
          <label className="w-[150px] font-bold">Service Period:</label>
          <span className="font-bold">{props.servicePeriod}</span>
        </div>
        <div className="flex">
          <label className="w-[150px] font-bold">Service Details:</label>
          <div className="flex flex-col">
            {props.serviceDetails.map((detail, idx) => (
              <div
                key={`reportsummary-servicedetail-${idx}`}
                className="flex flex-col"
              >
                <div className="font-bold">{detail.title}</div>
                <ul
                  style={{
                    listStyle: "circle",
                  }}
                >
                  {detail.contents.map((content, index) => (
                    <li
                      key={`reportsummary-service-detail-content-${
                        idx * 10 + index
                      }`}
                      className="ml-8 text-[#828282]"
                    >
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
