import { Message } from "@mui/icons-material";
import React, { useState } from "react";
import ChatPanel from "./ChatPanel";
import { SmsIcon } from "@/components/ui/common/Icons";

const summaries = [
  {
    name: "Chat",
    icon: SmsIcon,
    fgcolor: "#C75167",
    bgcolor: "#C7516750",
    unreadCount: 6,
  },
  {
    name: "Email",
    icon: SmsIcon,
    fgcolor: "#5042F4",
    bgcolor: "#5042F450",
    unreadCount: 6,
  },
  {
    name: "SMS",
    icon: SmsIcon,
    fgcolor: "#F442A2",
    bgcolor: "#F442A250",
    unreadCount: 6,
  },
];

const ChatSummaryItem = (props: any) => {
  return (
    <div
      className="bg-sectionBgColor flex rounded-md w-[250px] h-[120px] p-4 cursor-pointer"
      onClick={props.onClick}
    >
      <div className=" flex justify-center items-center ">
        <span
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
          style={{
            backgroundColor: props.bgcolor,
          }}
        >
          <props.icon style={{ color: props.fgcolor }} />
        </span>
      </div>
      <div className="flex flex-col justify-between ml-4">
        <span className="font-bold text-[24px] text-textdarkColor">
          {props.name}
        </span>
        <span
          className="font-bold text-[20px]"
          style={{ color: props.fgcolor }}
        >
          {props.unreadCount} unread
        </span>
      </div>
    </div>
  );
};

export default function MessagesPage() {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <div>
      {!showPanel ? (
        <div className="w-full h-full p-4 flex justify-center gap-8">
          {summaries.map((summary, idx) => (
            <ChatSummaryItem
              key={`chatsummaryitem-${idx}`}
              {...summary}
              onClick={() => setShowPanel(true)}
            />
          ))}
        </div>
      ) : (
        <ChatPanel />
      )}
    </div>
  );
}
