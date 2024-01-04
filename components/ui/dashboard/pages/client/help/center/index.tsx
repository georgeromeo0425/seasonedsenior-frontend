import React from "react";
import Image, { StaticImageData } from "next/image";
import listening_woman from "@/public/images/center/listening_woman.png";
import { PhoneIcon, SmsIcon } from "@/components/ui/common/Icons";

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-[32px]">Help Center</div>
      <Image
        className="py-4"
        alt="solution"
        src={listening_woman}
        width={240}
        height={240}
      />
      <div className="text-center text-[24px] font-bold">
        Hi, here at your service
      </div>
      <div className="mt-4 w-full flex justify-center">
        <div className="w-4/5 text-center">
          Thank you for your interest in the Seasoned Senior Home Care Agency.
          We are here to assist you and <br />
          provide the best possible care for your loved ones. Please feel free
          to reach out to us using the <br />
          following contact information:
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="flex">
          <span className="w-[50px]">
            <PhoneIcon />
          </span>
          <span className="font-bold text-primary">+1 347-866-1828</span>
        </div>
        <div className="mt-4 flex">
          <span className="w-[50px]">
            <SmsIcon />
          </span>
          <span className="font-bold">care@seasonedsenior.com</span>
        </div>
      </div>
    </div>
  );
}
