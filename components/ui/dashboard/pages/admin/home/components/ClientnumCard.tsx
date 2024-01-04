import React from "react";
import Image from "next/image";
export default function ClientnumCard({ num }: { num: number }) {
  return (
    <div className="bg-[white] p-2 h-full">
      <div className="text-[#000] font-bold">Total Clients</div>
      <div className="flex justify-between mt-4 items-center">
        <div className="text text-[64px] font-bold">{num}</div>
        <div>
          <Image
            alt=""
            src="/images/admin/client.png"
            className="mx-auto mt-[]"
            width={54}
            height={54}
          />
        </div>
      </div>
    </div>
  );
}
