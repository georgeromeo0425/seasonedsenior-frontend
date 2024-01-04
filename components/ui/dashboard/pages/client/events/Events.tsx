import React, { useState } from "react";
import RowSelection from "../../../RowsSelection";
import { Pagination } from "@mui/material";
import BrowseRegisterEvents from "./BrowseRegisterEvents";
import EventViewModal from "./EventViewModal";

const Events = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      {isEditing ? (
        <BrowseRegisterEvents />
      ) : (
        <div className="flex flex-col items-center pt-10 h-5/6">
          <p className="text-black text-2xl font-bold font-arial">
            You have not registered for any event
          </p>
          <span
            className="bg-primary px-20 py-2 font-bold rounded mt-48 cursor-pointer text-white"
            onClick={() => setIsEditing(!isEditing)}
          >
            Browse Events
          </span>
        </div>
      )}
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

export default Events;
