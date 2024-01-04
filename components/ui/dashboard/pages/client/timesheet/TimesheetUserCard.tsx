import React from "react";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";
import { CalendarIcon } from "@/components/ui/common/Icons";

export default function TimesheetUserCard({
  name,
  dateRange,
  onCardClick,
  selected,
}: {
  name: string;
  dateRange: string;
  onCardClick: any;
  selected: boolean;
}) {
  return (
    <div
      className={
        "w-full px-2 py-4 flex border-b border-solid border-gray-300 cursor-pointer"
      }
      style={
        selected
          ? {
              borderLeftWidth: "4px",
              borderLeftColor: "#C75167",
              borderBottomWidth: "0.5px",
              borderBottomColor: "#828282",
              backgroundColor: "#FFF2F5",
            }
          : {}
      }
      onClick={onCardClick}
    >
      <div className="flex items-center">
        <Badge
          color="success"
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/public/avatars/sample.png"
            sx={{ width: 64, height: 64 }}
          />
        </Badge>
      </div>
      <div className="ml-4 flex flex-col">
        <div style={{ color: "#282828" }}>{name}</div>
        <div
          className={`mt-2 flex items-center ${
            selected ? "text-[#282828]" : "text-[#828282]"
          }`}
        >
          <CalendarIcon />
          <span>{dateRange}</span>
        </div>
      </div>
    </div>
  );
}
