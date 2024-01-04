import React, { useState } from "react";
import HelpSolutionSubItem from "./HelpSolutionSubItem";
import SubmitMsgModal from "@/components/ui/dashboard/Modals/SubmitMsgModal";
import { useRouter } from "next/navigation";

interface data {
  title: string;
  content: string;
}

const fakedata: data[] = [
  {
    title: "App Crashes or Errors",
    content:
      "Use this category to report any technical glitches, app crashes, or unusual behavior while using our app",
  },
  {
    title: "Connectivity Issues",
    content:
      "If you're experiencing problems connecting to our service, poor network performance, or issues related to internet connectivity, please choose this category",
  },
  {
    title: "Trouble with Notifications",
    content:
      "We value your feedback and ideas for improvement. Select this category to share your thoughts or suggest enhancements to our service.",
  },
  {
    title: "Other Technical Inquiries",
    content:
      "For technical problems that don't fall into the above categories, use this option to describe your issue in detail",
  },
];

const dialogData = [
  {
    title: "App Crashes or Error",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Connectivity Issues",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Trouble with Notification",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Other General Inquiries",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
];

export default function TechnicalIssues() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleItemClick = (idx: number) => {
    setTitle(fakedata[idx].title);
    setDescription(fakedata[idx].content);
    setOpen(true);
  };

  return (
    <div className="mx-10" style={{ border: "1px", borderTopColor: "#282828" }}>
      <div className="mx-10 grid grid-cols-3 gap-3">
        {fakedata.map((item, idx) => (
          <div
            key={`keysolutionsubitem-${idx}`}
            onClick={() => handleItemClick(idx)}
          >
            <HelpSolutionSubItem {...item} />
          </div>
        ))}
      </div>
      <SubmitMsgModal
        title={title}
        description={description}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
