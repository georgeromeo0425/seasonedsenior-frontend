import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Requests() {
  const [showCaregiver, setShowCaregiver] = useState(false);
  const [ShowCaregiverjob, setShowCaregiverjob] = useState(false);
  const router = useRouter();
  return (
    <div className="p-4 bg-[white]">
      <div className="font-bold">Meeting Requests</div>
      <div className="flex justify-between items-center">
        <div
          className="pt-2  mt-4 pr-8"
          style={{ borderTop: "4px solid", borderTopColor: "#FFA236" }}
        >
          <div className="text-[24px] font-bold text-[black]">12</div>
          <div className="text-[#828282] text-[24px]">Caregiver</div>
        </div>
        <div>
          <Image
            alt=""
            src="/images/admin/request1.png"
            className="mx-auto mt-[]"
            width={93}
            height={22}
          />
        </div>
      </div>
      <div
        className="bg-[#FFA236] text-[white] text-center mt-4 py-2 cursor-pointer"
        onClick={() => router.push("/dashboard/admin/caregivermeetingrequest")}
      >
        view
      </div>
      <div className="flex justify-between mt-4 items-center">
        <div
          className="pt-2  mt-4"
          style={{ borderTop: "4px solid", borderTopColor: "#1A75FF" }}
        >
          <div className="text-[24px] font-bold text-[black]">05</div>
          <div className="text-[#828282] text-[24px]">Caregiver Job</div>
        </div>
        <div>
          <Image
            alt=""
            src="/images/admin/request2.png"
            className="mx-auto mt-[]"
            width={93}
            height={22}
          />
        </div>
      </div>
      <div
        className="bg-[#1A75FF] text-[white] text-center mt-4 py-2 cursor-pointer"
        onClick={() =>
          router.push("/dashboard/admin/caregiverjobmeetingrequest")
        }
      >
        view
      </div>
    </div>
  );
}
