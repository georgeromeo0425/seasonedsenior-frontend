import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarIcon } from "@/components/ui/common/Icons";
import { TimeIcon } from "@mui/x-date-pickers";
import DatePickerModal from "../../../Modals/DatePickerModal";
import TimePickerModal from "../../../TimePickerModal";

import AcceptConfirmModal from "../../../Modals/CaregiversMeetingRequest/AcceptConfirm";
import AcceptedModal from "../../../Modals/CaregiversMeetingRequest/Accepted";
import RejectConfirmModal from "../../../Modals/CaregiversMeetingRequest/RejectConfirm";
import RejectedModal from "../../../Modals/CaregiversMeetingRequest/Rejected";

export default function Caregivermeetingrequest() {
  const router = useRouter();
  const [showday, setshowday] = useState(false);
  const [showtime, setshowtime] = useState(false);

  const [showAcceptConfirm, setShowAcceptConfirm] = useState(false);
  const [showacceptedmodal, setshowacceptedmodal] = useState(false);
  const [showRejectConfirm, setShowRejectConfirm] = useState(false);
  const [showRejected, setShowRejected] = useState(false);
  const [requests, setRequests] = useState([true, true, true]);

  return (
    <div className="mx-10 mt-4">
      <div className="text-[#000] text-[24px] font-bold text-center">
        Caregivers Meeting Request
      </div>
      <div className="text-[#282828] text-center text-[14px]">
        Showing all 3 requests
      </div>
      <div className="mt-10 flex flex-col gap-y-4">
        {requests.map((item, idx) => (
          <Accordion key={`accordion-${idx}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex justify-start gap-2 items-center">
                <div>
                  <Avatar sx={{ bgcolor: "#B271C2" }}>FS</Avatar>
                </div>
                <div>
                  <div className="text-[20px] text-[#828282]">Caregiver</div>
                  <div className="text-[#282828] font-bold">
                    franksergio@rocketmail.com
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="text-[24px]">Meeting Details</div>
                <div className="mt-4">
                  <div className="w-2/3 flex justify-between">
                    <div className="flex gap-2">
                      <CalendarIcon className="text-primary" />
                      <span>Date</span>
                    </div>
                    <div className="text-[#282828] text-[20px] font-bold">
                      Wed, 23/10/2023
                    </div>
                    {/* <div
                      className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                      onClick={() => setshowday(true)}
                    >
                      Edit
                    </div> */}
                  </div>
                  <div className="w-2/3 flex justify-between mt-4">
                    <div className="flex gap-2">
                      <TimeIcon className="text-primary" />
                      <span>Time</span>
                    </div>
                    <div className="text-[#282828] text-[20px] font-bold">
                      02 : 34 PM
                    </div>
                    {/* <div
                      className="text-[#4285F4] text-[20px] font-bold cursor-pointer"
                      onClick={() => setshowtime(true)}
                    >
                      Edit
                    </div> */}
                  </div>
                  <div className="w-3/4 flex justify-between mt-4">
                    <div className="flex gap-2">
                      <TimeIcon className="text-primary" />
                      <span>Description</span>
                    </div>
                    <div className="text-[#282828] text-[20px] font-bold">
                      I want a caregiver that listens and has empathy
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-brightRedColor border border-solid border-brightRedColor hover:bg-brightRedColor hover:text-white px-12 rounded-md"
                    onClick={() => setShowRejectConfirm(true)}
                  >
                    Reject
                  </button>
                  <button
                    className="text-white bg-success px-12 py-2 rounded-md"
                    onClick={() => setShowAcceptConfirm(true)}
                  >
                    Approve
                  </button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <DatePickerModal
        title={"Select Date"}
        open={showday}
        setOpen={setshowday}
        setValue="Select Day"
      />
      <TimePickerModal
        title={"Select Time"}
        open={showtime}
        setOpen={setshowtime}
        setValue={"____ ____"}
      />

      <AcceptConfirmModal
        open={showAcceptConfirm}
        onClose={() => setShowAcceptConfirm(false)}
        onConfirm={() => {
          setShowAcceptConfirm(false);
          setshowacceptedmodal(true);

          let newRequests = [...requests];
          newRequests.pop();
          setRequests([...newRequests]);
        }}
      />
      <AcceptedModal
        open={showacceptedmodal}
        onClose={() => setshowacceptedmodal(false)}
      />
      <RejectedModal
        open={showRejected}
        onClose={() => setShowRejected(false)}
      />
      <RejectConfirmModal
        open={showRejectConfirm}
        onClose={() => setShowRejectConfirm(false)}
        onReject={() => {
          setShowRejectConfirm(false);
          setShowRejected(true);
        }}
      />
    </div>
  );
}
