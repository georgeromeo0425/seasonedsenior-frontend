import React, { useState } from "react";

import InputField from "@/components/ui/auth/client/InputField";

import StatusSelection from "./components/StatusSelection";
import FilteredTable from "./components/FilteredTable";
import DateSelect from "./components/DateSelect";

export default function BackgroundChecksPage() {
  const [filtered, setFiltered] = useState<boolean>(false);
  const [caregiverName, setCaregiverName] = useState<string>("");
  const [filterValue, setFilterValue] = useState<number>(0);

  const onChangeFilterValue = (selectedValue: string) => {
    setFilterValue(selectedValue == "Pending" ? 0 : 2);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      {filtered ? (
        <FilteredTable filterValue={filterValue} />
      ) : (
        <div className="w-full h-full flex flex-col gap-x-2 gap-y-4 p-4">
          <div className="w-full h-1/6 flex items-center justify-between bg-white border border-distlineColor border-opacity-50 px-6">
            <p className="text-2xl font-bold">Pending Background Checks</p>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div className="w-full h-1/6 flex items-center justify-between bg-white border border-distlineColor border-opacity-50 px-6">
            <p className="text-2xl font-bold">Completed Background Tasks</p>
            <p className="text-2xl font-bold">100</p>
          </div>
          <div className="w-full h-2/3 flex flex-col justify-between bg-white border border-distlineColor border-opacity-50 p-6">
            <div>
              <p className="text-2xl font-bold">Filter Option</p>
            </div>
            <div className="w-full flex flex-col justify-between gap-y-2">
              <div>
                <p className="text-black text-base tracking-wider">
                  Date Range
                </p>
                <div className="grid grid-cols-2 gap-x-4">
                  <DateSelect title={"Start Date"} />
                  <DateSelect title={"End Date"} />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-base tracking-wider">Status</p>
                <StatusSelection
                  name={""}
                  label={"Pending"}
                  items={["Pending", "Completed"]}
                  onChange={onChangeFilterValue}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-black text-base tracking-wider">
                  Caregiver Name/ID
                </p>
                <InputField
                  title=""
                  type="text"
                  placholder="Enter caregiver name or ID"
                  value={caregiverName}
                  handleChange={setCaregiverName}
                />
              </div>
            </div>
            <div
              className="w-full py-3 bg-primary text-white text-base text-center font-bold tracking-wide cursor-pointer"
              onClick={() => setFiltered(true)}
            >
              Apply Filter
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
