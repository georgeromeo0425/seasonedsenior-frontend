import React, { useState } from "react";
import { Avatar, Button, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import ChatToggleButtonGroup from "./ChatToggleButtonGroup";
import ConditionSelect from "../../../ConditionSelect";
import FilterIcon from "@/public/icons/Filter";
import UserCard from "./UserCard";
import ChatArea from "./ChatArea";

const users = [
  {
    name: "Jessica Watson",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "14 Mins ago",
  },
  {
    name: "Ashley Gwen",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "YESTERDAY",
  },
  {
    name: "Sharon Lanister",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "SEP 13",
  },
  {
    name: "Kimberly Shannon",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "AUG 31",
  },
  {
    name: "Gabby Alao",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "JUN 19",
  },
  {
    name: "Gabby Alao",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "MAR 23",
  },
  {
    name: "Gabby Alao",
    subtitle: "HEC certified",
    latest: "When would you be free our appoint...",
    time: "FEB 23",
  },
];

export default function ChatPanel(props: any) {
  const [curUser, setCurUser] = useState(-1);
  const [partnerName, setPartnerName] = useState("Jessica Watson");
  const [subTitle, setSubTitle] = useState("HEC certified");

  const handleCardClick = (idx: number, name: string, subtitle: string) => {
    setPartnerName(name);
    setSubTitle(subtitle);
    setCurUser(idx);
  };

  return (
    <div className="w-full h-full flex bg-white">
      <div
        className="w-[375px] overflow-hidden"
        style={{
          borderRight: "1px solid var(--grey-text, #828282)",
        }}
      >
        <div className="mt-2 px-4">
          <ChatToggleButtonGroup chatTypes={["Client", "Caregiver"]} />
          <div className="mt-2 flex">
            <ConditionSelect
              icon={<FilterListIcon />}
              method="sort"
              by="Recent"
              choices={["Most recent", "Oldest to Newest", "Newest to Oldest"]}
            />
            <ConditionSelect
              icon={<FilterIcon />}
              method="filter"
              by="All"
              choices={["All", "Unread"]}
            />
          </div>
          <div className="mt-2">
            <div className="flex flex-row items-center h-[50px] sm:hidden md:hidden rounded-xl w-full bg-[#FAFAFB]">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Global search"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 h-[calc(100% - 66px)] overflow-y-auto">
          {users.map((user, idx) => (
            <UserCard
              {...user}
              selected={idx === curUser}
              key={`messages-usercard-${idx}`}
              onCardClick={() => handleCardClick(idx, user.name, user.subtitle)}
            />
          ))}
        </div>
      </div>
      <div className="w-[calc(100%-375px)] relative">
        <ChatArea partner={partnerName} subtitle={subTitle} />
      </div>
    </div>
  );
}
