import React, { useState } from "react";
import MyEvents from "./components/MyEvents";
import BrowseEvents from "./components/BrowseEvents";

const EventsPage = () => {
  const [tabNumber, setTabNumber] = useState<number>(0);

  return (
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
            My Events
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
            Browse Events
          </p>
        </div>
      </div>
      <div className="w-full px-40 py-2">
        {tabNumber == 0 ? <MyEvents /> : <BrowseEvents />}
      </div>
    </div>
  );
};

export default EventsPage;
