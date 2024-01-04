import React, { useState } from "react";

import Image from "next/image";
import CustomRatingCom from "@/components/ui/dashboard/CustomRatingCom";
import SvgLike from "@/public/icons/Like";
import SvgDislike from "@/public/icons/Dislike";
import SvgSms from "@/public/icons/Sms";
import SvgWorkFilled from "@/public/icons/WorkFilled";
import CertificationCard from "./CertificationCard";
import EducationCard from "./EducationCard";
import TerminateConfirmModal from "./TerminateConfirmModal";

const certifications = [
    {
        name: "CNA 101",
        year: 2020,
        level: "Beginner Level"
    },
    {
        name: "CNA 501",
        year: 2023,
        level: "Beginner Level"
    },
    {
        name: "CNA13",
        year: 2021,
        level: "Beginner Level"
    },
];

const assistance = [
    "Exercise", "Eating and drinking assistance"
];

const hobies = [
    "Reading", "Swimming", "Cooking"
];

const languages = [
    "English", "French", "Mandarin"
];

const others = [
    "Christian", "African-American", "Cooking"
];

const availabilities = [
    "Monday", "Thuesday", "Wednesday", "Thursday", "Friday"
];

type Props = {
    imagePath: string;
    name: string;
    goodNumber: number;
    badNumber: number;
    address: string;
    distance: number;
    hourlyMin: number;
    hourlyMax: number;
    certification: string;
    details: string;
    onTerminateClick: Function;
}

const ProfileDetailPage: React.FC<Props> = ({
    imagePath,
    name,
    goodNumber,
    badNumber,
    address,
    distance,
    hourlyMin,
    hourlyMax,
    certification,
    details,
    onTerminateClick,
}) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <Image src={imagePath} alt="" width={216} height={216}/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                            <p className="font-bold text-xl">{ name }</p>
                            <span className="rounded-2xl bg-[#30A674] px-2 py-1 text-white text-sm opacity-60">Available</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <SvgSms />
                            <span className="bg-primary px-8 py-2 rounded-md font-semibold cursor-pointer text-white text-xl"
                                    onClick={()=>setModalOpen(true)}>
                                Terminate Service
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <CustomRatingCom />
                            <p className="text-sm text-textdarkColor underline font-arial">Reviews</p>
                            <SvgLike />
                            <p className="text-sm text-textdarkColor underline font-arial">{ goodNumber }</p>
                            <SvgDislike />
                            <p className="text-sm text-textdarkColor underline font-arial">{ badNumber }</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-sm text-distlineColor">{ address }</p>
                            <p className="text-sm text-distlineColor">{`${distance}miles away`}</p>
                            <p className="text-sm text-distlineColor">{`$${hourlyMin} - ${hourlyMax}/hr.`}</p>
                            <p className="text-sm text-distlineColor">{`${certification} Certified`}</p>
                        </div>
                    </div>
                    <div className="border border-textdarkColor border-t-1 border-l-0 border-r-0 border-b-0 pt-2">
                        <p className="text-textdarkColor">{ details }</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-white gap-8">
                <div className="flex w-2/3 border border-textdarkColor border-l-0 border-t-0 border-r-1 border-b-0 gap-8">
                    <div className="flex w-full h-5/6">
                        <div className="w-1/2 flex flex-col gap-4 p-6">
                            <p className="text-xl font-bold">Professional certification</p>
                            {
                                certifications.map((item, index) => (
                                    <CertificationCard 
                                                key={index}
                                                name={item.name}
                                                year={item.year}
                                                level={item.level} />
                                ))
                            }
                        </div>
                        <div className=" flex flex-col w-1/2">
                            <div>
                                <p className="text-xl font-bold">Education</p>
                                <EducationCard school="Yale Univeristy"
                                                course="Bachelor in Health Science"
                                                from={2015}
                                                to={2019} />
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-xl font-bold">Specialized Skills</p>
                                <div className="flex flex-col gap-4 p-6 bg-[#FAFAFB]">
                                    <div className="flex gap-8 justify-center">
                                        <span className="bg-[#FF9CF5] text-sm px-8 py-2 rounded-full cursor-pointer text-black">
                                            Respiratory care
                                        </span>
                                        <span className="bg-[#A9FF81] text-sm px-8 py-2 rounded-full cursor-pointer text-black">
                                            Nutrition and Dietary Expertise
                                        </span>
                                    </div>
                                    <div className="flex gap-8 justify-center">
                                        <span className="bg-[#8FFFF8] text-sm px-8 py-2 rounded-full cursor-pointer text-black">
                                            Professional certification
                                        </span>
                                        <span className="bg-[#FF9CF5] text-sm px-8 py-2 rounded-full cursor-pointer text-black">
                                            Hospice Care
                                        </span>
                                    </div>
                                    <div className="flex gap-8 justify-center">
                                        <span className="bg-[#81CAFF] text-sm px-8 py-2 rounded-full cursor-pointer text-black">
                                            Stroke recover
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 gap-2">
                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-bold">Mobility Assistance</p>
                        <div className="flex gap-4">
                            {
                                assistance.map((item, index) => (
                                    <span key={index} className="border border-distlineColor rounded-2xl px-4 py-2">{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-bold">Hobbies</p>
                        <div className="flex gap-4">
                            {
                                hobies.map((item, index) => (
                                    <span key={index} className="border border-distlineColor rounded-2xl px-4 py-2">{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-bold">Languages spoken</p>
                        <div className="flex gap-4">
                            {
                                languages.map((item, index) => (
                                    <span key={index} className="border border-distlineColor rounded-2xl px-4 py-2">{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-bold">Others</p>
                        <div className="flex gap-4">
                            {
                                others.map((item, index) => (
                                    <span key={index} className="border border-distlineColor rounded-2xl px-4 py-2">{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-bold">Availability</p>
                        <div className="flex gap-4">
                            {
                                availabilities.map((item, index) => (
                                    <span key={index} className="border border-distlineColor rounded-2xl px-4 py-2">{item}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <TerminateConfirmModal
                open={modalOpen}
                setModalOpen={setModalOpen}
                setTerminated={onTerminateClick}
                imagePath={imagePath} />
        </div>
    )
};

export default ProfileDetailPage;
