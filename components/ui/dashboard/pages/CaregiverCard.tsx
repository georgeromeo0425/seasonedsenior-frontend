import React, { useState } from "react";
import CustomRatingCom from "../CustomRatingCom";
import DashboardPrimaryBtn from "../DashboardPrimaryBtn";

const CaregiverCard = ({
  name,
  age,
  rec,
  opt,
  region,
  dis,
  hourly,
  exp,
  rating,
  earn,
  match,
  text,
}: {
  name: string;
  age: number;
  rec: number;
  opt: number;
  region: string;
  dis: number;
  hourly: string;
  exp: string;
  rating: number;
  earn: number;
  match: number;
  text: string;
}) => {
  const [scheduleMeeting, setschedleMeeting] = useState(false);
  const handleprimary = () => {
    setschedleMeeting(true);
  };

  return (
    <div
      className="flex flex-row gap-4 m-6 p-6"
      style={{ border: "2px solid", borderColor: "darkred" }}
    >
      <div className="w-20">
        <img src="/avatars/sample.png" />
      </div>
      <div className="flex flex-col" style={{ width: "100%" }}>
        <div className="flex flex-row justify-between">
          <div style={{ width: "70%" }}>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div
                  className="flex flex-row gap-2"
                  style={{ alignItems: "center" }}
                >
                  <p
                    className="text-black font-bold"
                    style={{ fontSize: "20px" }}
                  >
                    {name}
                  </p>
                  <p className="text-center" style={{ color: "#828282" }}>
                    {`${age}yrs/old`}
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <p style={{ color: "#828282" }}>Reviews</p>
                  <img src="/images/like.png" />
                  <p style={{ color: "#00FF50" }}>{rec}</p>
                  <img src="/images/dislike.png" />
                  <p style={{ color: "#EB4336" }}>{opt}</p>
                </div>
              </div>

              <div className="flex flex-row mt-4 gap-5 justify-between">
                <p style={{ color: "#828282" }}>{region}</p>
                <p style={{ color: "#828282" }}>{`${dis}miles away`}</p>
                <p style={{ color: "#828282" }}>{hourly}</p>
                <p style={{ color: "#828282" }}>{exp}</p>
              </div>

              <div className="flex flex-row mt-4 gap-5 justify-between">
                <CustomRatingCom />
                <p className="text-black font-bold">{`${earn}k+ earned`}</p>
                <p style={{ color: "#CB5A6F" }}>{`${match}% Match`}</p>
              </div>
            </div>
          </div>

          <div>
            <DashboardPrimaryBtn
              btnValue="Schedule meeting"
              onClicked={handleprimary}
            />
          </div>
        </div>
        <div>
          <div className="mt-4">
            <p style={{ color: "#464646" }}>{text}</p>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>Housekeeping</p>
            </div>
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>Meal Preparation</p>
            </div>
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>24/7 Care</p>
            </div>
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>Resipe Care</p>
            </div>
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>Personal Care Assistance</p>
            </div>
            <div
              className="p-3"
              style={{
                borderRadius: "8px",
                background: "rgba(203, 90, 111, 0.10)",
              }}
            >
              <p style={{ color: "#5A5A5A" }}>Memory Care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverCard;
