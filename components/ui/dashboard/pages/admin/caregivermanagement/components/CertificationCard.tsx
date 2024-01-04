import React from "react";
import Image from "next/image";
import SvgWorkFilled from "@/public/icons/WorkFilled";

type CertificationCardProps = {
    name: string;
    year: number;
    level: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
    name,
    year,
    level
}) => {
    return (
        <div className="flex justify-between items-center px-4 py-8 rounded-md bg-[#FAFAFB]">
            <div className="flex gap-2">
                <div className="flex items-center bg-distlineColor rounded-full p-4 bg-opacity-10">
                    <SvgWorkFilled />
                </div>
                <div className="flex flex-col">
                    <p>{name}</p>
                    <p className="text-distlineColor">{year}</p>
                </div>
            </div>
            <span className="bg-primary px-8 py-2 rounded-full cursor-pointer text-white">
                {level}
            </span>
        </div>
    )
};

export default CertificationCard;
