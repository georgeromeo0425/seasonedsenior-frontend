import React from "react";
import Image from "next/image";
import SvgWorkFilled from "@/public/icons/WorkFilled";

type EducationCardProps = {
    school: string;
    course: string;
    from: number;
    to: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
    school,
    course,
    from,
    to
}) => {
    return (
        <div className="flex justify-between items-center px-4 py-8 rounded-md bg-[#FAFAFB]">
            <div className="flex gap-2">
                <div className="flex items-center bg-distlineColor rounded-full p-4 bg-opacity-10">
                    <SvgWorkFilled />
                </div>
                <div className="flex flex-col">
                    <p>{course}</p>
                    <p className="text-distlineColor">{`${from} - ${to}`}</p>
                </div>
            </div>
            <span className="bg-[#FFF741] px-8 py-2 rounded-full cursor-pointer text-black">
                { school }
            </span>
        </div>
    )
};

export default EducationCard;
