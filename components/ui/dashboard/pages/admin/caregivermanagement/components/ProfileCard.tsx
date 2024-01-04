import React from "react";
import Image from "next/image";

type ProfileCardProps = {
    imagePath: string;
    fullName: string;
    specialization: string;
    onViewClick: Function;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    imagePath,
    fullName,
    specialization,
    onViewClick
}) => {
    return (
        <div className="flex flex-col w-[290px] h-[337px] bg-white">
            <Image src={imagePath} alt="" width={290} height={153}/>
            <div className="flex flex-col items-center py-4 justify-between w-[290px] h-[184px]">
                <div>
                    <p className="text-2xl font-bold">{ fullName }</p>
                </div>
                <div>
                    <p className="text-xl text-center font-normal">{`Specialization: ${specialization}`}</p>
                </div>
                <span className="bg-primary px-8 py-4 rounded-md font-semibold cursor-pointer text-white"
                        onClick={()=>onViewClick()}>
                    View Profile
                </span>
            </div>
        </div>
    )
};

export default ProfileCard;
