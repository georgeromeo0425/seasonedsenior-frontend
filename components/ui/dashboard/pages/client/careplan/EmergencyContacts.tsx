import exp from "constants";
import React, { useState } from "react";
import InputField from "@/components/ui/auth/client/InputField";

const EmergencyContacts = () => {
  const [Name, setName] = useState<boolean>(false);
  const handle = () => {
    setName(true);
  };
  return (
    <div className="mx-24 my-8">
      <div className="flex justify-center font-bold">
        <p style={{ color: "#282828", fontSize: "28px" }}>
          Your emergency contact
        </p>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <div className="px-36 mt-4">
          <InputField
            type="text"
            title="Full Name of Contact"
            placholder="Enter Full Name"
            value=""
            handleChange={handle}
          />
        </div>
        <div className="px-36 mt-4">
          <InputField
            type="text"
            title="Address"
            placholder=""
            value=""
            handleChange={handle}
          />
        </div>
        <div className="px-36 mt-4">
          <InputField
            type="text"
            title="Email"
            placholder=""
            value=""
            handleChange={handle}
          />
        </div>
        <div className="px-36 ,t-6">
          <InputField
            type="text"
            title="Phone"
            placholder=""
            value=""
            handleChange={handle}
          />
        </div>
      </div>
      <div className="p-8 flex justify-center">
        <button
          style={{
            borderRadius: "8px",
            background: "#CB5A6F",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Edit Emergency Contact
        </button>
      </div>
    </div>
  );
};

export default EmergencyContacts;
