import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";

import RowSelection from "../../../../RowsSelection";
import DetailModal from "../../background_checks/components/DetailModal";

const caregiverData = [
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 1,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 1,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 2,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 2,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
  {
    date: "23 Oct 2023",
    caregiverName: "Wendall Flynn",
    status: 0,
    applicationID: 32133,
  },
];

const evaluationStatus = ["Processing", "Approved", "Attention"];

const statusBtnColor = [
  "bg-forgotColor text-forgotColor bg-opacity-10",
  "bg-success text-success bg-opacity-10",
  "bg-[#EDBB2A] text-[#EDBB2A] bg-opacity-10",
];

type FilteredTableProps = {
  filterValue: number;
};

const FilteredTable = ({ filterValue }: FilteredTableProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleCurrentIndex = (index: number) => {
    if (index >= 0) setOpen(true);
    setCurrentIndex(index);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full p-4 m-2 grid justify-items-center gap-y-4">
        <div className="w-full p-2 rounded-xl bg-white grid justify-items-center">
          <table className="w-full h-10/12 ">
            <thead className="bg-[#F9FAFB]">
              <tr className="text-distlineColor text-xs">
                <th className="text-left p-4">Date</th>
                <th className="text-left">Caregiver Name</th>
                <th className="text-left">Evaluation Status</th>
                <th className="text-left">Application ID</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {caregiverData
                .filter((item) => item.status == filterValue)
                .map((item, index) => (
                  <tr
                    key={`filtered-background-checks-${index}`}
                    className="text-textdarkColor"
                  >
                    <td className="flex py-3 text-base text-textdarkColor">
                      {item.date}
                    </td>
                    <td className="font-arial">
                      <p className="text-textdarkColor text-base font-bold">
                        {item.caregiverName}
                      </p>
                    </td>
                    <td className="font-arial">
                      <span
                        className={`px-2.5 py-0.5 text-xs rounded-xl ${
                          statusBtnColor[item.status]
                        }`}
                      >
                        {evaluationStatus[item.status]}
                      </span>
                    </td>
                    <td className="font-arial">
                      <p className="text-textdarkColor font-normal text-base">
                        {item.applicationID}
                      </p>
                    </td>
                    <td className="font-arial">
                      <p
                        className="text-[#4285F4] font-normal text-base cursor-pointer"
                        onClick={() => handleCurrentIndex(index)}
                      >
                        View Details
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
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
      <DetailModal
        open={open}
        handleClose={handleClose}
        name={
          caregiverData.filter((item) => item.status == filterValue)[
            currentIndex
          ].caregiverName
        }
        date={
          caregiverData.filter((item) => item.status == filterValue)[
            currentIndex
          ].date
        }
        status={
          caregiverData.filter((item) => item.status == filterValue)[
            currentIndex
          ].status
        }
        applicationID={
          caregiverData.filter((item) => item.status == filterValue)[
            currentIndex
          ].applicationID
        }
      />
    </div>
  );
};

export default FilteredTable;
