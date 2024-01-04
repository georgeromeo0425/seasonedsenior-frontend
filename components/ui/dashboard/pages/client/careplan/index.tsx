import React, { useState } from "react";
import CurrentPlan from "./CurrentPlan";
import DailyActivities from "./DailyActivities";
import DietaryPreferences from "./DietaryPreferences";
import EmergencyContacts from "./EmergencyContacts";

const CareplanPage = () => {
  const [page, setPage] = useState<number>(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <CurrentPlan />;
      case 2:
        return <DailyActivities />;
      case 3:
        return <DietaryPreferences />;
      case 4:
        return <EmergencyContacts />;
      default:
        return <div>Invalid Page</div>;
    }
  };

  return (
    <div className="flex flex-col my-12 px-36 w-full">
      <div
        className="flex flex-row  px-36 sm:flex-col justify-between "
        style={{ color: "#282828", fontSize: "20px" }}
      >
        <p
          onClick={() => setPage(1)}
          style={{
            borderBottom: "1px solid",
            borderBottomColor: page === 1 ? "#CB5A6F" : "white",
            color: page === 1 ? "#CB5A6F" : "",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Current Plan
        </p>
        <p
          onClick={() => setPage(2)}
          style={{
            borderBottom: "1px solid",
            borderBottomColor: page === 2 ? "#CB5A6F" : "white",
            color: page === 2 ? "#CB5A6F" : "",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Daily Activities
        </p>
        <p
          onClick={() => setPage(3)}
          style={{
            borderBottom: "1px solid",
            borderBottomColor: page === 3 ? "#CB5A6F" : "white",
            color: page === 3 ? "#CB5A6F" : "",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Dietary Preferences
        </p>
        <p
          onClick={() => setPage(4)}
          style={{
            borderBottom: "1px solid",
            borderBottomColor: page === 4 ? "#CB5A6F" : "white",
            color: page === 4 ? "#CB5A6F" : "",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Emergency Contacts
        </p>
      </div>
      <div>{renderPage()}</div>
    </div>
  );
};

export default CareplanPage;
