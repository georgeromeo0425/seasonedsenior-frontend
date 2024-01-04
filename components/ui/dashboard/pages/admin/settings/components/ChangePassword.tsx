import InputField from "@/components/ui/auth/client/InputField";
import React from "react";


export default function ChangePassword (props: {
    onSaveClicked: Function,
}) {

    return (
        <div className="flex flex-col items-center">
            <div className="w-[873px] rounded-md border border-borderGreyColor">
                <div className="bg-[#FFF2F5] px-4 py-4">
                    <p className="font-bold">Change Password</p>
                </div>
                <div className="grid gap-8 grid-cols-1 pl-10 pt-4 pr-10 pb-4">
                    <InputField title="Old Password"
                                placholder=""
                                type="password"
                                value=""
                                handleChange={() => {}}
                                />
                    <InputField title="New Password"
                                placholder=""
                                type="password"
                                value=""
                                handleChange={() => {}}
                                />
                    <InputField title="Confirm Password"
                                placholder=""
                                type="password"
                                value=""
                                handleChange={() => {}}
                                />
                    <span className="bg-primary rounded-2xl font-semibold cursor-pointer text-white flex justify-center py-4 mx-48"
                            onClick={()=>props.onSaveClicked()}>
                        <p>Save changes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
