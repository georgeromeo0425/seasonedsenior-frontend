import React from "react";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";

export default function UserCard({
  name,
  subtitle,
  latest,
  time,
  selected,
  onCardClick,
}: {
  name: string;
  subtitle: string;
  latest: string;
  time: string;
  selected: boolean;
  onCardClick: any;
}) {
  return (
    <div
      className={
        "w-full p-2 flex rounded-r-lg border-b border-solid border-gray-300 cursor-pointer"
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
        <div className="flex">
          <span style={{ color: "#282828" }}>{name}</span>
          <span className="ml-auto text-[#828282]">{time}</span>
        </div>
        <div className="text-[#828282] mt-2">{subtitle}</div>
        <div
          className="text-[#282828] mt-2"
          style={{ fontWeight: 700, fontSize: "13px" }}
        >
          {latest}
        </div>
      </div>
    </div>
  );
}
