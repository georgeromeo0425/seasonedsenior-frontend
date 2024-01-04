import React, { useState } from "react";
import Image from "next/image";

import avatar from "/public/avatars/sample.png";
import SvgRibbon from "@/public/icons/Ribbon";
import ScheduleMettingModal from "@/components/ui/dashboard/Modals/ScheduleMettingModal";
import CustomRatingCom from "@/components/ui/dashboard/CustomRatingCom";
import SvgLike from "@/public/icons/Like";
import SvgDislike from "@/public/icons/Dislike";
import { useRouter } from "next/navigation";

type Props = {
  isBestMatch?: boolean;
  imagePath?: string;
  name: string;
  age: number;
  address: string;
  distance: number;
  hireNumber: number;
  offerMin: number;
  offerMax: number;
  workItems: string[];
  goodNumber: number;
  badNumber: number;
  experience: number;
  matchPercentage: number;
  earned: number;
  description: string;
  onConnect: () => void;
};

const RecommendedClient: React.FC<Props> = ({
  isBestMatch,
  imagePath,
  name,
  age,
  address,
  distance,
  offerMin,
  offerMax,
  workItems,
  goodNumber,
  badNumber,
  experience,
  earned,
  description,
  matchPercentage,
  onConnect,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      className="my-4"
      style={{
        border: isBestMatch ? "0.5px solid #000;" : "none",
        boxShadow: isBestMatch
          ? "rgba(0, 0, 0, 0.25) 6px 7px 18px 0px"
          : "none",
      }}
      onClick={() => router.push("/dashboard/client/caregiver_profile")}
    >
      {isBestMatch && (
        <div className="block">
          <SvgRibbon></SvgRibbon>
        </div>
      )}
      <div className="flex p-4 font-arial cursor-pointer">
        <Image
          className="w-20 h-20 rounded-xl border-2   border-pink-600 mr-5"
          src={avatar}
          alt="Avatar"
        ></Image>
        <div className="inline-flex flex-col justify-center gap-x-2">
          <div className="flex flex-col gap-x-4 gap-y-2">
            <div className="flex gap-x-12 justify-between gap-y-2">
              <div className="flex flex-col flex-auto gap-y-2">
                <div className="flex justify-between flex-auto">
                  <div className="flex items-center">
                    <p className="text-black font-bold text-[20px] mr-2">
                      {name}
                    </p>
                    <p className="text-distlineColor text-sm">
                      {age + "yrs/old"}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <p className="text-sm text-textdarkColor underline font-arial">
                      Reviews
                    </p>
                    <div className="flex items-center gap-x-2">
                      <SvgLike />
                      <p className="text-sm text-[#00FF50] font-bold underline font-arial">
                        {goodNumber}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <SvgDislike />
                      <p className="text-sm text-[#EB4336] font-bold underline font-arial">
                        {badNumber}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <p className="text-sm text-distlineColor">{address}</p>
                  <p className="text-sm text-distlineColor">{`${distance}miles away`}</p>
                  <p className="text-sm text-distlineColor">{`$${offerMin} - ${offerMax}/hr.`}</p>
                  <p className="text-sm text-distlineColor">{`${experience}yrs experience`}</p>
                </div>
                <div className="flex justify-between gap-x-6 mr-4">
                  <CustomRatingCom />
                  <span>
                    <b>{`$${earned}k+`}</b> earned
                  </span>
                  <p className="text-primary font-bold mr-8 ml-auto">
                    {matchPercentage + "% Match"}
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-6">{description}</div>
            <div className="flex items-center">
              {workItems.map((item, index) => (
                <span
                  key={index}
                  className="bg-red-200 rounded-3xl text-bannerTextColor text-xs m-1 px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScheduleMettingModal
        open={modalOpen}
        setOpen={setModalOpen}
        name="Jimmy Dunta"
      />
    </div>
  );
};

export default RecommendedClient;
