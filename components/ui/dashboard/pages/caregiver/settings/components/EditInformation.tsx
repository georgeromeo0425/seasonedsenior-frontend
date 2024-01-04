import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import InputField from "@/components/ui/auth/client/InputField";
import React, { useState } from "react";
import RowSelection from "../../../client/payment/components/RowsSelection";

type Props = {
  handleSaveClicked: Function;
};

export default function EditInformation(props: Props) {
  return (
    <div className="w-[873px]">
      <div className="grid gap-2 grid-cols-1 pl-4 pt-4 pr-20 pb-4">
        <p className="font-bold">Full Name</p>
        <InputField
          title="Full name of Senior"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <div className="grid grid-cols-2 gap-x-2">
          <DatePickerCom title="Birthday" />
          <RowSelection name="Male" label="Male" items={["Male", "Female"]} />
        </div>
        <InputField
          title="Address"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <InputField
          title="Email (optional)"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <InputField
          title="Phone (optional)"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <p className="font-bold">Emergency Contact (optional)</p>
        <InputField
          title="Full name of Contact"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <InputField
          title="Address"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <InputField
          title="Email"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
        <InputField
          title="Phone"
          placholder=""
          type="password"
          value=""
          handleChange={() => {}}
        />
      </div>
      <span
        className="bg-primary rounded-xl font-semibold cursor-pointer text-white flex justify-center py-4 mx-48"
        onClick={() => props.handleSaveClicked()}
      >
        <p>Save changes</p>
      </span>
    </div>
  );
}
