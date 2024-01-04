import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContractCard() {
  const router = useRouter();
  return (
    <div className="bg-[white] p-4">
      <div className="text-[20px] font-bold">Contracts</div>
      <div className="flex justify-between items-center bg-[#F6F6F6] mt-4 p-4">
        <div className="w-1/2 flex justify-between items-center">
          <div>
            <Image
              alt=""
              src="/images/admin/clientavatar.png"
              className="mx-auto mt-[]"
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4">
            <div className="font-bold">Felica Dumm</div>
            <div>Client</div>
          </div>
          <div className="bg-green-100 rounded-xl text-[#30A64A] ml-4 py-1 px-2">
            Active
          </div>
        </div>
        <div className="text-[#CB5A6F] text-[16px]">View Contract</div>
      </div>
      <div className="flex justify-between items-center bg-[#F6F6F6] mt-4 p-4">
        <div className="w-1/2 flex justify-between items-center">
          <div>
            <Image
              alt=""
              src="/images/admin/caregiveravatar.png"
              className="mx-auto mt-[]"
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4">
            <div className="font-bold">Steve Doe</div>
            <div>Caregiver</div>
          </div>
          <div className="bg-green-100 rounded-xl text-[#30A64A] ml-4 py-1 px-2">
            Active
          </div>
        </div>
        <div className="text-[#CB5A6F] text-[16px]">View Contract</div>
      </div>
      <div className="mt-4 flex gap-2">
        <div
          className="text-[#CB5A6F] text-[16px] font-bold cursor-pointer"
          onClick={() => {
            router.push("/dashboard/admin/contract");
          }}
        >
          View All Contracts
        </div>
        <div>
          <Image
            alt=""
            src="/images/admin/vector.png"
            className="mx-auto mt-[]"
            width={24}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
