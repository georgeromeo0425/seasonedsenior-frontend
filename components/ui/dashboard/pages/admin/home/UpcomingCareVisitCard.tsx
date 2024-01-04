import React, { useState } from "react";
import Image from "next/image";
import mdmd_avatar from "@/public/avatars/sample.png";
import SmRoundedBtn from "../../../SmRoundedBtn";
import { Paper } from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";
import AppointmentRescheduleModal from "../../../Modals/AppointmentRescheduleModal";
import { useRouter } from "next/navigation";

const UpcomingCareVisitCard = () => {
  const [open, setOpen] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const router = useRouter();
  const handleAccept = () => {
    router.push("/dashboard/client/caregiver_profile");
  };

  return (
    <Paper className="flex flex-col w-full h-full p-4">
      <span className="font-bold text-[16px]">Upcoming Care Visit</span>
      <div
        style={{ border: "0.699px solid rgba(196, 196, 196, 0.30)" }}
        className="flex flex-col p-4 mt-2"
      >
        <div className="flex">
          <Image
            className="rounded-xl"
            style={{
              border: "2px solid rgba(255, 114, 140, 0.99)",
              width: "80px",
              height: "80px",
            }}
            alt="appointment card avatar"
            src={mdmd_avatar}
            priority={false}
            onClick={() => handleAccept()}
          />
          <div className="ml-4 flex flex-col w-full">
            <div className="flex flex-row flex-wrap items-center">
              <span className="font-bold text-[18px]">Pamela Sandals</span>
              <div className="flex flex-row ml-auto gap-1">
                {["Housekeeping", "Meal Preparation", "+3"].map(
                  (item, index) => {
                    return (
                      <SmRoundedBtn
                        key={`sm_rounded_btn_${index}`}
                        value={item}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="mt-2">
              <span className="text-distlineColor text-[14px] mr-[14px]">
                76yrs/old
              </span>
              <span className="text-distlineColor text-[14px] mr-[14px]">
                Maryland lane, Arizona, USA.
              </span>
              <span className="text-distlineColor text-[14px] mr-[14px]">
                12miles away
              </span>
              <span className="text-distlineColor text-[14px] mr-[14px]">
                $12 - 35/hr.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md py-2 px-4 mt-4  border border-solid border-distlineColor flex justify-between">
          <div className="mt-2 flex items-center text-distlineColor">
            <ClockIcon />
            <span className="ml-2">Mon, Aug 30, 09:00am - 3:30pm</span>
          </div>
          <div
            className="bg-primary p-4 text-white font-bold rounded-md text-[14px] cursor-pointer"
            onClick={() => setOpen(true)}
          >
            RESCHEDULE APPOINTMENT
          </div>
        </div>
        <AppointmentRescheduleModal
          open={open}
          handleClose={() => setOpen(false)}
        />
      </div>
    </Paper>
  );
};

export default UpcomingCareVisitCard;
