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
    title: "Account Information",
    content:
      "Use this option if you have questions about your account settings, profile information, or need assistance with account-related matters.",
  },
  {
    title: "Service Overview",
    content:
      "Choose this option if you'd like more information about the services we offer, how our platform works, or any general questions about senior care.",
  },
  {
    title: "Feedback and Suggestions",
    content:
      "We value your feedback and ideas for improvement. Select this category to share your thoughts or suggest enhancements to our service.",
  },
  {
    title: "Application Usage",
    content:
      "If you're experiencing difficulties using our app, facing navigation issues, or have questions about specific features, this is the right category.",
  },
  {
    title: "Privacy Concerns",
    content:
      "If you have concerns about data privacy, security, or confidentiality, please choose this option.",
  },
  {
    title: "Other General Inquiries",
    content:
      "For inquiries that don't fit into the above categories, use this option to describe your question or concern.",
  },
];

const dialogData = [
  {
    title: "Account Information",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Feedback and Suggestions",
    description:
      "Be aware that this form is only a feedback and you won’t receive a reply. Please don’t include personal information about you or someone else..",
  },
  {
    title: "Other Related Enquires",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
];

export default function GeneralInquiries() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleItemClick = (idx: number) => {
    switch (idx) {
      case 0:
        setTitle(fakedata[0].title);
        setDescription(fakedata[0].content);
        setOpen(true);
        break;
      case 1:
        router.push("/dashboard/caregiver/service-overview");
        break;
      case 2:
        setTitle(fakedata[2].title);
        setDescription(fakedata[2].content);
        setOpen(true);
        break;
      case 3:
        router.push("/dashboard/caregiver/appusage");
        break;
      case 4:
        router.push("/dashboard/caregiver/privacy_concern");
        break;
      case 5:
        setTitle(fakedata[5].title);
        setDescription(fakedata[5].content);
        setOpen(true);
        break;
    }
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
