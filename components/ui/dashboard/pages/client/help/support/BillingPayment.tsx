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
    title: "Payment Errors",
    content:
      "Select this option if you've encountered payment processing errors or issues with completing payments.",
  },
  {
    title: "Refund Request",
    content:
      "If you're experiencing problems connecting to our service, poor network performance, or issues related to internet connectivity, please choose this category",
  },
  {
    title: "Trouble with Notifications",
    content:
      "We value your feedback and ideas for improvement. Select this category to share your thoughts or suggest enhancements to our service.",
  },
  {
    title: "Other Billing Inquiries",
    content:
      "For billing questions or issues that aren't covered by the above options, describe your inquiry in detail under this category.",
  },
];

const dialogData = [
  {
    title: "Payment Errors",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Refund Request",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Trouble with Notification",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
  {
    title: "Other Billing Inquiries",
    description:
      "Please leave us a message about what issue you are having on your account. Note that we will send a reply to your registered email and continue the conversation there",
  },
];

export default function BillingPayment() {
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
