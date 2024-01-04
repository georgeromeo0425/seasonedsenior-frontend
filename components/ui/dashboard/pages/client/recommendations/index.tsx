import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import RecommendedClient from "./components/RecommendedClient";
import HourlyRate from "./components/HourlyRate";
import Availability from "./components/Availability";
import Location from "./components/Location";
import Experience from "./components/Experience";

import SvgFilter from "@/public/icons/Filter";
import RaceSelection from "./components/RaceSelection";
import GenderSelection from "./components/GenderSelection";
import SvgClose from "@/public/icons/Close";
import ScheduleMettingModal from "../../../Modals/ScheduleMettingModal";

const recommendedClientsData = [
  {
    isBestMatch: true,
    imagePath: "public/avatars/sample.png",
    name: "Jimmy Dunta",
    age: 32,
    address: "Maryland lane, Arizona, USA.",
    distance: 12,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    experience: 8,
    earned: 70,
    goodNumber: 90,
    badNumber: 3,
    description:
      "I have a strong blah blah blah, basically a bio describing caregiver self but just for guidiance i will just leave a bunch of rubbish text here so i see what it’d look.",
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
    isBestMatch: false,
    imagePath: "public/avatars/sample.png",
    name: "Gabby Alao",
    age: 43,
    address: "Maryland lane, Arizona, USA.",
    distance: 12,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    experience: 8,
    earned: 60,
    goodNumber: 90,
    badNumber: 3,
    description:
      "I have a strong blah blah blah, basically a bio describing caregiver self but just for guidiance i will just leave a bunch of rubbish text here so i see what it’d look.",
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 90.2,
  },
  {
    isBestMatch: false,
    imagePath: "public/avatars/sample.png",
    name: "Gabby Alao",
    age: 43,
    address: "Maryland lane, Arizona, USA.",
    distance: 12,
    hireNumber: 45,
    offerMin: 12,
    offerMax: 35,
    experience: 8,
    earned: 60,
    goodNumber: 90,
    badNumber: 3,
    description:
      "I have a strong blah blah blah, basically a bio describing caregiver self but just for guidiance i will just leave a bunch of rubbish text here so i see what it’d look.",
    workItems: [
      "Housekeeping",
      "Meal Preparation",
      "Meal Preparation",
      "24/7 Care",
      "Resipe Care",
    ],
    matchPercentage: 90.2,
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
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFilterMenu = (open: boolean) => {
    setFilterMenuState(open);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 h-full m-10 p-10 bg-white">
        <div className="flex justify-between">
          <div className="text-gray-700 font-arial font-bold ">
            <p>Recommended Caregivers</p>
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
              <RecommendedClient key={index} {...item} onConnect={() => {}} />
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
        <Availability />
        <div className="w-full border-b border-borderGreyColor"></div>
        <HourlyRate />
        <div className="w-full border-b border-borderGreyColor"></div>
        <Experience label={"Any"} />
        <div className="w-full border-b border-borderGreyColor"></div>
        <Location />
        <div className="w-full border-b border-borderGreyColor"></div>
        <RaceSelection label="Any" items={raceItems} />
        <div className="w-full border-b border-borderGreyColor"></div>
        <GenderSelection label="Any" items={genderItems} />
      </Drawer>
      <ScheduleMettingModal
        open={modalOpen}
        setOpen={setModalOpen}
        name="Jimmy Dunta"
      />
    </div>
  );
}
