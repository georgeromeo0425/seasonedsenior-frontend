import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import HourlyRate from "./components/HourlyRate";
import Availability from "./components/Availability";
import Location from "./components/Location";

import SvgFilter from "@/public/icons/Filter";
import RaceSelection from "./components/RaceSelection";
import GenderSelection from "./components/GenderSelection";
import SvgClose from "@/public/icons/Close";
import { useRouter } from "next/navigation";
import RecommendedClient from "./components/RecommendedClient";

const recommendedClientsData = [
  {
    isBestMatch: true,
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
  {
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 76,
    address: "Maryland lane, Arizona, USA.",
    distance: 1.4,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 99.8,
  },
];

const raceItems = [
  "White & European American",
  "Hispanic & Latino American",
  "African American",
  "Asian American",
  "Native American & Alaska Natives",
  "Native Hawaiians & Pacific Islanders",
  "Middle Easterners & North African",
  "Asian American",
  "Others",
];

const genderItems = ["Any", "Male", "Female", "Prefer not to say"];

export default function RecommendationsPage() {
  const [filterMenuState, setFilterMenuState] = useState<boolean>(false);
  const [showCaregiver, setShowCaregiver] = useState<boolean>(false);

  const toggleFilterMenu = (open: boolean) => {
    setFilterMenuState(open);
  };

  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 h-full m-10 p-10 bg-white">
        <div className="flex justify-between">
          <div className="text-gray-700 font-arial font-bold ">
            <p>Recommended Clients</p>
          </div>
          <div
            className="flex items-center border border-black pl-4 pr-4 cursor-pointer"
            onClick={() => toggleFilterMenu(true)}
          >
            <SvgFilter></SvgFilter>
            <p className="text-black font-bold font-arial ml-1">FILTER</p>
          </div>
        </div>
        <div className="p-10">
          {!showCaregiver && (
            <div className="flex flex-col items-center pt-40">
              <p className="text-bannerTextColor text-xl">
                &quot;Clients in need of a caregiver will show up here&quot;
                view
              </p>
              <p className="text-bannerTextColor text-xl">
                <span
                  className="text-primary cursor-pointer text-xl"
                  onClick={() => setShowCaregiver(true)}
                >
                  recommendations
                </span>{" "}
                to get started
              </p>
            </div>
          )}
          {showCaregiver &&
            recommendedClientsData.map((item, index) => (
              <RecommendedClient
                key={index}
                {...item}
                onConnect={() => {
                  router.push("/dashboard/caregiver/client_profile");
                }}
              />
            ))}
        </div>
      </div>
      <Drawer
        anchor="right"
        open={filterMenuState}
        onClose={() => toggleFilterMenu(false)}
      >
        <div className="flex justify-between ml-8 mr-8 mt-4">
          <p className="text-lg font-bold">FILTER</p>
          <SvgClose
            className="cursor-pointer"
            onClick={() => toggleFilterMenu(false)}
          ></SvgClose>
        </div>
        <HourlyRate />
        <Availability />
        <Location />
        <RaceSelection label="Any" items={raceItems} />
        <GenderSelection label="Any" items={genderItems} />
      </Drawer>
    </div>
  );
}
