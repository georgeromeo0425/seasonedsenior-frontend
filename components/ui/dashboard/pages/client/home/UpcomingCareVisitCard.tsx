import React, { useState } from "react";
import Image from "next/image";
import mdmd_avatar from "@/public/avatars/sample.png";
import SmRoundedBtn from "../../../SmRoundedBtn";
import { Paper } from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";
import AppointmentRescheduleModal from "../../../Modals/AppointmentRescheduleModal";
import { useRouter } from "next/navigation";
import CustomRatingCom from "../../../CustomRatingCom";
import SvgLike from "@/public/icons/Like";
import SvgDislike from "@/public/icons/Dislike";

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
              <span className="font-bold text-[18px]">Frank Sergio</span>
              <div className="flex flex-row ml-10 gap-1">
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
              <span className="text-distlineColor text-[14px] mr-[14px] tracking-wider">
                Maryland lane, Arizona, USA.
              </span>
              <span className="text-distlineColor text-[14px] mr-[14px] tracking-wider">
                12miles away
              </span>
              <span className="text-distlineColor text-[14px] mr-[14px] tracking-wider">
                $12 - 35/hr.
              </span>
            </div>
            <div className="flex mt-1">
              <CustomRatingCom />
              <div className="flex items-center gap-x-4">
                <p className="text-sm text-bannerTextColor underline font-arial">
                  Reviews
                </p>
                <div className="flex items-center gap-x-2">
                  <SvgLike />
                  <p className="text-sm text-[#00FF50] font-bold font-arial">
                    {90}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <SvgDislike />
                  <p className="text-sm text-[#EB4336] font-bold font-arial">
                    {12}
                  </p>
                </div>
              </div>
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
