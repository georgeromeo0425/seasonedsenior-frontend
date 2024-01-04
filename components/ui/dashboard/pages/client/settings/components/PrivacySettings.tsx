import SvgCheck from "@/public/icons/Check";
import SvgCrown from "@/public/icons/Crown";
import React, { useState } from "react";

type SettingType = {
    checked: boolean;
    text: string;
};

const settingData: SettingType[] = [
    {
        checked: true,
        text: "Email me about seasonedsenior.com features, services, special offers and other cool stuff."
    },
    {
        checked: true,
        text: "Email me newsletters with personal stories, topical articles, discussions, tips, and more"
    },
    {
        checked: true,
        text: "Email me about new caregivers near me who have recently joined seasonedsenior.com"
    },
    {
        checked: true,
        text: "Share my online status with other members of seasonedsenior.com."
    },
    {
        checked: true,
        text: "Send read receipts with messages."
    },
    {
        checked: true,
        text: "Include my profile in caregiver search results and certain caregiver emails."
    },
]

type Props = {
    handleEditClicked: Function
};

export default function PrivacySettings (props: Props) {

    const [verified, setVerified] = useState<boolean>(false);

    return (
        <div className="w-[873px] rounded-md border border-borderGreyColor">
            <div className="flex justify-between bg-[#FFF2F5] px-4 py-4">
                <p className="font-bold">Privacy Settings and Preferences</p>
                <p className="text-[#4285F4] cursor-pointer"
                    onClick={()=>props.handleEditClicked()}>
                    Edit
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 p-8">
                {
                    settingData.map((item, index) => 
                        <div key={index}
                            className="flex">
                            <SvgCheck />
                            <p className="text-distlineColor pl-2">{ item.text }</p>
                        </div>)
                }
            </div>
        </div>
    )
}
