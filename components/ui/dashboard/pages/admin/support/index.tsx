import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface AdminSupportItem {
  datetime: string;
  name: string;
  type: string;
  issue: string;
}

const fakeData: AdminSupportItem[] = [
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
  {
    datetime: "23 Oct, 2023  12:32pm",
    name: "Gabby Alao",
    type: "client",
    issue: "Refund Request",
  },
];

export default function SupportPage() {
  return (
    <div
      className="p-4 m-8"
      style={{
        borderRadius: "16.963px",
        background: "var(--mainwhite, #FFF)",
        boxShadow:
          "0px 1.06021px 3.18062px 0px rgba(0, 0, 0, 0.10), 0px 1.06021px 2.12041px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow className="text-distlineColor bg-[#F9FAFB]">
            <TableCell sx={{ width: "25%" }}>Date/Time</TableCell>
            <TableCell sx={{ width: "30%" }}>User</TableCell>
            <TableCell sx={{ width: "25%" }}>Issue</TableCell>
            <TableCell sx={{ width: "20%" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeData.map((item, idx) => (
            <TableRow key={`adminiservicetable-row-${idx}`}>
              <TableCell className="">{item.datetime}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-distlineColor">{item.type}</span>
                  <span className="text-textdarkColor font-bold">
                    {item.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-textdarkColor font-bold">
                {item.issue}
              </TableCell>
              <TableCell>
                <span className="px-12 py-3 rounded-md cursor-pointer text-white bg-[#4285F4]">
                  View
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
