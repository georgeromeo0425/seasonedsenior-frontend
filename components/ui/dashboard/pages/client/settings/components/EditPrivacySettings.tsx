import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import InputField from "@/components/ui/auth/client/InputField";
import React, { useState } from "react";
import RowSelection from "../../../../RowsSelection";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type Props = {
  handleSaveClicked: Function;
};

export default function EditPrivacySettings(props: Props) {
  return (
    <div className="w-[873px]">
      <div className="grid gap-2 grid-cols-1 pl-4 pt-4 pr-20 pb-4">
        <div className="flex items-center">
          <p className="text-black font-bold">Email Message Settings</p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Email me about seasonedsenior.com features, services, special offers
            and other cool stuff.
          </p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Email me newsletters with personal stories, topical articles,
            discussions, tips, and more
          </p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Email me about new caregivers near me who have recently joined
            seasonedsenior.com
          </p>
        </div>
        <div className="flex justify-center">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={"Weekly"}
            >
              <FormControlLabel
                value="Weekly"
                control={
                  <Radio
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Weekly"
              />
              <FormControlLabel
                value="Monthly"
                control={
                  <Radio
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Monthly"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 pl-4 pt-4 pr-20 pb-4">
        <div className="flex items-center">
          <p className="text-black font-bold">Privacy Preferences</p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Share my online status with other members of seasonedsenior.com.
          </p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Send read receipts with messages.
          </p>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p className="text-distlineColor">
            Include my profile in caregiver search results and certain caregiver
            emails.
          </p>
        </div>
        <p className="font-bold">Message Notification</p>
        <div className="grid justify-items-center">
          <p className="text-distlineColor text-sm">
            You will receive an email notification when you have new messages
            from other seasonsenior.com members or from admin.
          </p>
          <p className="text-distlineColor text-sm">
            Select your preference for receiving these notification
          </p>
        </div>
        <div className="flex justify-center">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group-1"
              defaultValue={"Immediately"}
            >
              <FormControlLabel
                value="Immediately"
                control={
                  <Radio
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Immediately"
              />
              <FormControlLabel
                value="Daily"
                control={
                  <Radio
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Daily"
              />
            </RadioGroup>
          </FormControl>
        </div>
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
