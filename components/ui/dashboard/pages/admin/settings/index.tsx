import React, { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import PrivacySettings from "./components/PrivacySettings";
import ChangePassword from "./components/ChangePassword";
import EditInformation from "./components/EditInformation";
import EditPrivacySettings from "./components/EditPrivacySettings";

const personalInfo = {
  fullName: "Alao Gabriel",
  birthday: "12 August, 1945",
  gender: "Male",
  address: "Reklaw, Tx, Chicago, west 123, USA",
  email: "alaogabriel@seasonedsenior.com",
  password: "123456",
  mobileNumber: "123288648234",
  emFullName: "Kunle Remi Ashton",
  emAddress: "Reklaw, Tx, Chicago, west 123, USA",
  emEmail: "kunleremiashton@gmail.com",
  emMobileNumber: "123288648234",
};

const SettingPage = () => {
  const [tabNumber, setTabNumber] = useState<number>(0);
  const [editPassword, setEditPassword] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [editSetting, setEditSetting] = useState<boolean>(false);

  const changePasswordClicked = () => {
    setEditPassword(true);
  };

  const savePasswordClicked = () => {
    setEditPassword(false);
  };

  const onEditClicked = () => {
    console.log("editing clicked");
    setEditing(true);
  };

  const onSaveClicked = () => {
    setEditing(false);
  };

  const onSettingEditClicked = () => {
    setEditSetting(true);
  };

  const onSaveSettingClicked = () => {
    setEditSetting(false);
  };

  return (
    <div>
      {editPassword == true ? (
        <ChangePassword onSaveClicked={savePasswordClicked} />
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-1/4">
            <div
              className={`cursor-pointer ${
                tabNumber == 0
                  ? "border border-t-0 border-l-0 border-r-0 border-b-primary"
                  : ""
              }`}
              onClick={() => setTabNumber(0)}
            >
              <p
                className={`font-arial font-bold ${
                  tabNumber == 0 ? "text-primary" : "text-textdarkColor"
                }`}
              >
                General Information
              </p>
            </div>
            <div
              className={`cursor-pointer ${
                tabNumber == 1
                  ? "border border-t-0 border-l-0 border-r-0 border-b-primary"
                  : ""
              }`}
              onClick={() => setTabNumber(1)}
            >
              <p
                className={`font-arial font-bold ${
                  tabNumber == 1 ? "text-primary" : "text-textdarkColor"
                }`}
              >
                Private Setting and Preferences
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-4">
            {editSetting && (
              <EditPrivacySettings handleSaveClicked={onSaveSettingClicked} />
            )}
            {editing && <EditInformation handleSaveClicked={onSaveClicked} />}
            {editing == false &&
              editSetting == false &&
              (tabNumber == 0 ? (
                <GeneralInformation
                  {...personalInfo}
                  handlePasswordChange={changePasswordClicked}
                  handleEditClicked={onEditClicked}
                />
              ) : (
                <PrivacySettings handleEditClicked={onSettingEditClicked} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingPage;
