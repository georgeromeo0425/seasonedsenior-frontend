import React, { useState } from "react";
import RowSelection from "../../../RowsSelection";
import { Pagination } from "@mui/material";
import RegisterEventCard from "../../RegisterEventCard";

const RegisteredEventsPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleClose = () => {
    setIsEditing(false);
  };
  const onRegisterClicked = () => {};
  const onViewClicked = () => {};

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <RegisterEventCard
        creator={"Seasoned senior"}
        name={"Oldies Hangout"}
        fee={10}
        date={"10 Nov, 2023"}
        time={"03:32 PM"}
        onRegisterClick={onRegisterClicked}
        onViewClick={onViewClicked}
      />
      <div className="flex items-center justify-between w-3/5">
        <div className="inline-flex items-center">
          <span className="text-textdarkColor w-[130px] mr-2 font-arial">
            1 to 1 4 records
          </span>
          <RowSelection />
          <span className="text-textdarkColor w-[130px] ml-2 font-arial">
            items per page
          </span>
        </div>
        <Pagination count={1} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default RegisteredEventsPage;
