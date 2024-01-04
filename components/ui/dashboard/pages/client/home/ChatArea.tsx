import { Avatar, Divider, IconButton, InputBase } from "@mui/material";
import React from "react";
import { PhoneIcon, UserAddIcon } from "../../../../common/Icons";
import MoodIcon from "@mui/icons-material/Mood";
import LinkIcon from "@mui/icons-material/Link";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SendIcon from "@mui/icons-material/Send";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const chatHistory = [
  {
    time: "11:20",
    name: "Jessica Watson",
    who: "you",
    content: "Hey Gabby, Nice to meet you. How are you holding up?",
  },
  {
    time: "11:20",
    name: "Gabby",
    who: "me",
    content:
      "Hi Jessica! What’s up? I’m not doing great but firstly i would like to know what your work experience is like if you dont mind.",
  },
  {
    time: "11:20",
    name: "Jessica Watson",
    who: "you",
    content: "When would you be free for an appointment?",
  },
  {
    time: "11:20",
    name: "Gabby",
    who: "me",
    content: "I’ll check my calendar and will update you :)",
  },
];

const ChatItem = ({
  time,
  name,
  who,
  content,
}: {
  time: string;
  who: string;
  name: string;
  content: string;
}) => {
  return (
    <div className="flex w-full">
      <div
        className={`flex flex-col w-3/5 mb-4 ${who === "you" ? "" : "ml-auto"}`}
      >
        <div className="flex items-center">
          <Avatar sx={{ width: 16, height: 16 }} />
          <div className="ml-2 text-[#828282]">{name}</div>
          <div className="ml-2 text-[#AFAFAF] text-sm">{time}</div>
        </div>
        <div
          className="mt-2 rounded-md p-4 border-solid border border-gray-300 text-[#202020]"
          style={
            who === "you"
              ? {
                  borderTopLeftRadius: 0,
                }
              : {
                  borderWidth: 0,
                  borderTopRightRadius: 0,
                  backgroundColor: "#FFF2F5",
                  color: "#CB5A6F",
                }
          }
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default function ChatArea({
  partner,
  subtitle,
}: {
  partner: string;
  subtitle: string;
}) {
  const curDate = new Date();

  return (
    <div className="flex flex-col h-full relative">
      <div className="p-4 flex border-b border-solid border-black bg-sectionBgColor rounded-t-lg">
        <div className="font-bold text-[24px]">Chats</div>
        <div></div>
      </div>
      <div className="p-4">
        <div className="flex justify-center">
          <div className="text-[#828282]">{`${weeks[curDate.getDay()]}, ${
            months[curDate.getMonth()]
          } ${curDate.getDate()} ${curDate.getFullYear()}`}</div>
        </div>
        <div>
          {chatHistory.map((history, idx) => (
            <ChatItem key={`chathistory-${idx}`} {...history} />
          ))}
        </div>
      </div>
      <div className="flex p-3 w-full border-t border-solid border-black absolute bottom-0">
        <div className="flex">
          <IconButton>
            <MoodIcon />
          </IconButton>
          <Divider orientation="vertical" />
        </div>
        <InputBase placeholder="Input here" className="flex-auto mx-2" />
        <IconButton sx={{ color: "#CB5A6F" }}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
