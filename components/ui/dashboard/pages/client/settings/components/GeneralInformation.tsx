import SvgCrown from "@/public/icons/Crown";
import React, { useState } from "react";

type Props = {
    fullName: string,
    birthday: string,
    gender: string,
    address: string,
    email: string,
    password: string,
    mobileNumber: string,
    emFullName: string,
    emAddress: string,
    emEmail: string,
    emMobileNumber: string,
    handlePasswordChange: Function,
    handleEditClicked: Function
};

export default function GeneralInformation (props: Props) {

    const [verified, setVerified] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-1 gap-8">
            <div className="w-[873px] rounded-md border border-borderGreyColor">
                <div className="flex justify-between bg-[#FFF2F5] px-4 py-4">
                    <p className="font-bold">General Information</p>
                    <p className="text-[#4285F4] cursor-pointer"
                        onClick={()=>props.handleEditClicked()}>
                        Edit
                    </p>
                </div>
                <div className="grid gap-8 grid-cols-2 pl-4 pt-4 pr-20 pb-4">
                    <p className="font-bold">Full Name</p>
                    <p className="text-distlineColor text-sm">{ props.fullName }</p>
                    <p className="font-bold">Birthday</p>
                    <p className="text-distlineColor text-sm">{ props.birthday }</p>
                    <p className="font-bold">Gender</p>
                    <p className="text-distlineColor text-sm">{ props.gender }</p>
                    <p className="font-bold">Address</p>
                    <p className="text-distlineColor text-sm">{ props.address }</p>
                    <p className="font-bold">Email</p>
                    <div className="flex">
                        <p className="text-distlineColor text-sm mr-8">{ props.email }</p>
                        {
                            verified == true ?  
                                <div className="flex items-center">
                                    <SvgCrown />
                                    <p className="ml-4 text-sm text-[#30A64A]">Verified</p>
                                </div> :
                                <div className="flex items-center">
                                    <p className="text-sm text-distlineColor">{`Not verified [`}</p>
                                    <p className="text-[#4285F4] text-sm underline cursor-pointer"
                                        onClick={()=>setVerified(true)}>
                                        verify now
                                    </p>
                                    <p className="text-sm text-distlineColor">{`]`}</p>
                                </div>
                        }
                        
                    </div>
                    <p className="font-bold">Password</p>
                    <div className="flex items-center">
                        <p className="text-distlineColor text-sm mr-8">{ props.password }</p>
                        <p className="text-[#4285F4] text-sm underline cursor-pointer"
                            onClick={()=>{props.handlePasswordChange()}}>
                            Change Password
                        </p>
                    </div>
                    <p className="font-bold">Mobile Number</p>
                    <p className="text-distlineColor text-sm">{ props.mobileNumber }</p>
                </div>
            </div>

            <div className="w-[873px] rounded-md border border-borderGreyColor">
                <div className="flex justify-between bg-[#FFF2F5] px-4 py-4">
                    <p className="font-bold">Emergency Information</p>
                    <p className="text-[#4285F4] cursor-pointer">Edit</p>
                </div>
                <div className="grid gap-8 grid-cols-2 pl-4 pt-4 pr-20 pb-4">
                    <p className="font-bold">Full Name</p>
                    <p className="text-distlineColor text-sm">{ props.emFullName }</p>
                    <p className="font-bold">Address</p>
                    <p className="text-distlineColor text-sm">{ props.emAddress }</p>
                    <p className="font-bold">Email</p>
                    <p className="text-distlineColor text-sm mr-8">{ props.emEmail }</p>
                    <p className="font-bold">Mobile Number</p>
                    <p className="text-distlineColor text-sm">{ props.emMobileNumber }</p>
                </div>
            </div>
        </div>
    )
}
