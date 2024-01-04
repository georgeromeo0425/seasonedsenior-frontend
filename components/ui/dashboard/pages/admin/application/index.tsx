import React, { useState } from "react";
import RecommendedClient from "../../../RecommendedCaregiver";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";

const fakeData = [
  {
    name: "Jane Alonso",
    type: "caregiver",
    status: "Cancelled",
  },
  {
    name: "Frank Sergio",
    type: "caregiver",
    status: "Approved",
  },
  {
    name: "Kate Hyndai",
    type: "caregiver",
    status: "Pending",
  },
];

export default function RecommendationsPage() {
  const router = useRouter();

  const renderStatus = (status: string) => {
    let bgColor = "#FBD5D5";
    let fgColor = "#9B1C1C";
    switch (status) {
      case "Approved":
        bgColor = "#DEF7EC";
        fgColor = "#03543F";
        break;
      case "Pending":
        bgColor = "#E1EFFE";
        fgColor = "#1E429F";
        break;
    }
    return (
      <span
        className="px-4 py-2 rounded-full"
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        {status}
      </span>
    );
  };

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
            <TableCell>Application Name</TableCell>
            <TableCell>Application Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeData.map((item, idx) => (
            <TableRow key={`application-index-row-${idx}`}>
              <TableCell className="font-bold">{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{renderStatus(item.status)}</TableCell>
              <TableCell className="py-2">
                <PrimaryButton
                  className="px-8"
                  handleClick={() => {
                    localStorage.setItem("application_status", item.status);
                    router.push("/dashboard/admin/caregiver_profile");
                  }}
                >
                  {item.status === "Pending" ? "Review" : "Details"}
                </PrimaryButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
