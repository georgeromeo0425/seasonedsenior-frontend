import React, { useState } from "react";
import Image from "next/image";
import MessagesPage from "../../client/messages";
import { useRouter } from "next/navigation";
import TerminateArea from "../contract/TerminateArea";
export default function Clientdetails() {
  const [showmessage, setshowmessage] = useState(false);
  const router = useRouter();
  const handleViewmessage = () => {
    router.push("/dashboard/admin/messages");
  };
  const handleViewcontract = () => {
    router.push("/dashboard/admin/");
  };
  const [opencontract, setopencontract] = useState(false);

  return (
    <div className="m-10">
      {!opencontract && (
        <div>
          <div className="flex gap-4">
            <div>
              <Image
                alt=""
                src="/images/admin/avatar.png"
                width={270}
                height={216}
                priority={true}
              />
            </div>
            <div className=" w-full flex flex-col">
              <div className="flex justify-between items-end">
                <div className="font-bold text-[20px]">
                  Jimmy Dunta
                  <span className="ml-4 font-normal text-[15px] text-[#828282]">
                    76 yrs/old
                  </span>
                </div>
                <div className="flex gap-4">
                  <div
                    className="border-solid border-2 border-sky-500 text-[#4285F4] p-2"
                    onClick={() => setopencontract(true)}
                  >
                    View Contract
                  </div>
                  <div
                    className="bg-red-400 rounded-lg text-[white] p-2"
                    onClick={handleViewmessage}
                  >
                    View Messages
                  </div>
                </div>
              </div>
              <div className="text-[14px] text-[#828282] mt-2">
                Maryland lane, Arizona, USA.{" "}
                <span className="ml-4">12miles away</span>
              </div>
              <div className="font-bold text-[#282828] mt-2">
                Hires:{" "}
                <span className="font-normal text-[#828282] ml-4">
                  45 caregivers
                </span>{" "}
                <span className="font-bold text-[#282828] ml-4">Offer: </span>{" "}
                <span className="font-normal text-[#282828] ml-4">
                  $ 12~35/hr
                </span>
              </div>
              <div
                className="mt-2 p-2"
                style={{ borderTop: "1px solid", borderTopColor: "#828282" }}
              >
                <div className="flex justify-normal gap-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "#FFF2F5", color: "#CB5A6F" }}
                  >
                    Housekeeping
                  </div>
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "#FFF2F5", color: "#CB5A6F" }}
                  >
                    Meal Preparation
                  </div>
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "#FFF2F5", color: "#CB5A6F" }}
                  >
                    Meal Preparation
                  </div>
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "#FFF2F5", color: "#CB5A6F" }}
                  >
                    24/7 Care
                  </div>
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: "#FFF2F5", color: "#CB5A6F" }}
                  >
                    Resipe Care
                  </div>
                </div>
                <div className="flex justify-normal gap-2 mt-4">
                  <div
                    className="px-4 py-2 rounded-lg"
                    style={{
                      border: "1px solid",
                      borderColor: "#828282",
                      color: "#828282",
                    }}
                  >
                    English
                  </div>
                  <div
                    className="px-4 py-2 rounded-lg"
                    style={{
                      border: "1px solid",
                      borderColor: "#828282",
                      color: "#828282",
                    }}
                  >
                    French
                  </div>
                  <div
                    className="px-4 py-2 rounded-lg"
                    style={{
                      border: "1px solid",
                      borderColor: "#828282",
                      color: "#828282",
                    }}
                  >
                    Christianity
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 mx-96 px-40 flex flex-col">
            <div className="text-[#282828] text-[20px] font-bold text-center">
              Client&apos;s Request
            </div>
            <div className="mt-4">
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div>Monday</div>
                <div>06:00 AM</div>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="text-left">Tuesday</div>
                <div>06:00 AM</div>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="text-left">Wednesday</div>
                <div>06:00 AM</div>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="text-left">Thursday</div>
                <span>06:00 AM</span>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="text-left">Friday</div>
                <span>06:00 AM</span>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="text-left">Saturday</div>
                <div>06:00 AM</div>
              </div>
              <div className="mt-4 flex justify-between font-bold text-[#282828]">
                <div className="">Sunday</div>
                <div>06:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {opencontract && (
        <div>
          <TerminateArea open={opencontract} setModalOpen={setopencontract} />
        </div>
      )}
    </div>
  );
}
