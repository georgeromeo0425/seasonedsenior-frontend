import React, { useState } from "react";
import MicMuteIcon from "@/public/icons/MicrophoneMute";
import MicUnmuteIcon from "@/public/icons/MicrophoneUnmute";
import VideoButton from "@/public/icons/Video";
import VolumeHighButton from "@/public/icons/VolumeHigh";
import Webcam from "react-webcam";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import ChatArea from "./ChatArea";

const RoleTag = ({ role }: { role: string }) => {
  return (
    <span
      className="rounded-full flex justify-center items-center px-4 py-2 text-white"
      style={{
        background: "rgba(24, 24, 24, 0.32)",
        backdropFilter: "blur(10px)",
      }}
    >
      {role}
    </span>
  );
};

const MicCtrlButton = () => {
  const [curStatus, setCurStatus] = useState(false);

  return (
    <span
      className="w-[50px] h-[50px] flex justify-center items-center bg-gray-100 rounded-full cursor-pointer"
      style={{
        boxShadow:
          "2.38154px 2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25), -2.38154px -2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25)",
      }}
      onClick={() => setCurStatus(!curStatus)}
    >
      {curStatus ? <MicMuteIcon /> : <MicUnmuteIcon />}
    </span>
  );
};

const VideoCtrlButton = () => {
  const [curStatus, setCurStatus] = useState(false);

  return (
    <span
      className="w-[50px] h-[50px] flex justify-center items-center bg-primary text-white rounded-full cursor-pointer"
      style={{
        boxShadow:
          "2.38154px 2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25), -2.38154px -2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25)",
      }}
      onClick={() => setCurStatus(!curStatus)}
    >
      {curStatus ? <VideoButton /> : <VideoButton />}
    </span>
  );
};

const VolumeCtrlButton = () => {
  const [curStatus, setCurStatus] = useState(false);

  return (
    <span
      className="w-[50px] h-[50px] flex justify-center items-center bg-primary text-white rounded-full cursor-pointer"
      style={{
        boxShadow:
          "2.38154px 2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25), -2.38154px -2.38154px 4.76309px 0px rgba(0, 0, 0, 0.25)",
      }}
      onClick={() => setCurStatus(!curStatus)}
    >
      {curStatus ? <VolumeHighButton /> : <VolumeHighButton />}
    </span>
  );
};

export default function chatbar({
  open,
  setopen,
}: {
  open: boolean;
  setopen: Function;
}) {
  const partnerName = "Gabby Alio";
  const subTitle = "medical support";

  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setopen(false)}
    >
      <div
        className="w-4/5 h-9/10 flex gap-x-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-4/5 flex flex-col gap-y-4">
          <div className="flex gap-x-4 h-2/5">
            <div className="w-1/2 bg-gray-200 rounded-lg relative ">
              <Webcam audio width="100%" height="100%" />
              <div className="flex flex-col justify-between absolute w-full h-full px-4 py-4 left-0 top-0">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <RoleTag role="Caregiver" />
                  </div>
                  <VolumeCtrlButton />
                </div>
                <div>
                  <span className="text-white font-bold">Taria Alao</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-gray-300 rounded-lg relative">
              <Webcam audio width="100%" height="100%" />
              <div className="flex flex-col justify-between absolute w-full h-full px-4 py-4 left-0 top-0">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <RoleTag role="Client" />
                  </div>
                  <MicCtrlButton />
                </div>
                <div>
                  <span className="text-white font-bold">Pamela Sandals</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-3/5 bg-gray-400 rounded-lg relative">
            <Webcam audio width="100%" height="100%" />
            <div className="flex flex-col justify-between absolute w-full h-full px-4 py-4 left-0 top-0">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <RoleTag role="You" />
                </div>
                <div className="text-white text-[24px]">01:30:34</div>
              </div>
              <div></div>
              <div className="flex items-center justify-between absolute w-full h-[100px] p-4 left-0 bottom-0 rounded-lg bg-white">
                <div>
                  <VolumeCtrlButton />
                </div>
                <div className="flex gap-x-4">
                  <MicCtrlButton />
                  <VideoCtrlButton />
                </div>
                <div>
                  <PrimaryButton>Leave Call</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] bg-white rounded-lg">
          <ChatArea partner={partnerName} subtitle={subTitle} />
        </div>
      </div>
    </div>
  );
}
