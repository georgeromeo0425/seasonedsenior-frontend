import React, { useState } from "react";

export default function TimesheetSubmitButton({
  statusProp,
}: {
  statusProp: string;
}) {
  const [status, setStatus] = useState(statusProp);

  const handleClick = () => {
    setStatus("waiting");
  };

  const getBGColor = () => {
    switch (status) {
      case "initial":
        return "#CB5A6F";
      case "waiting":
        return "#FFFFFF";
      case "approved":
        return "#FFFFFF";
      default:
        return "#CB5A6F";
    }
  };

  const getFGColor = () => {
    switch (status) {
      case "initial":
        return "#FFFFFF";
      case "waiting":
        return "#EDBB2A";
      case "approved":
        return "#30A64A";
      default:
        return "#FFFFFF";
    }
  };

  const getText = () => {
    switch (status) {
      case "initial":
        return "Submit";
      case "waiting":
        return "Waiting for approval";
      case "approved":
        return "approved";
      default:
        return "Submit";
    }
  };

  return (
    <div
      className={`flex px-12 py-2 justify-center items-center rounded-md cursor-pointer bg-[${getBGColor()}]`}
      onClick={handleClick}
    >
      <span
        style={{
          color: getFGColor(),
        }}
      >
        {getText()}
      </span>
    </div>
  );
}
