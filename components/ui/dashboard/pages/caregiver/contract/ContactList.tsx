import React from "react";
import ConditionSelect from "../../../ConditionSelect";
import FilterIcon from "@/public/icons/Filter";
import ContractListItem from "./ContractListItem";

interface contactItem {
  type: string;
  createdAt: string;
  name: string;
  status: string;
}

const fakerData: contactItem[] = [
  {
    type: "Admin Contract",
    createdAt: "07 SEP 2023",
    name: "Tearia Alao",
    status: "Active",
  },
];

export default function ContactList({
  open,
  setModalOpen,
  handleTerminate,
  handleViewContact,
}: {
  open: boolean;
  setModalOpen: any;
  handleTerminate: any;
  handleViewContact: any;
}) {
  return (
    <div>
      <div className="text-center text-[24px] font-bold">
        Showing All Contracts
      </div>
      <div className="my-4 flex justify-end">
        <ConditionSelect
          icon={<FilterIcon />}
          method="filter"
          by="All"
          choices={["All", "Unread", "Pending", "Cancelled"]}
        />
      </div>
      <div>
        {fakerData.map((item, idx) => (
          <ContractListItem
            key={`contract-listitem-${idx}`}
            {...item}
            handleTerminate={handleTerminate}
            handleViewContact={handleViewContact}
          />
        ))}
      </div>
    </div>
  );
}
