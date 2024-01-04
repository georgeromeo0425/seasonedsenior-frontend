import React from "react";

import Pagination from "@mui/material/Pagination";

import RowSelection from "../../../../RowsSelection";

const transactionData = [
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 2,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 1,
  },
  {
    transaction: "Gabby Alao",
    dateTime: "23 Sep, 2023",
    amount: 2300,
    status: 0,
  },
];

const transactionStatus = ["Completed", "In progress", "Cancelled"];

const statusBtnColor = [
  "bg-badgeBgColor text-badgeTextColor",
  "bg-badgeBlueBgColor text-badgeBlueTextColor",
  "bg-badgeRedBgColor text-badgeRedTextColor",
];

const PaymentHistory = () => {
  return (
    <div className="w-11/12 h-full flex flex-col justify-between items-center">
      <div className="w-full p-4 bg-white m-2 grid justify-items-center">
        <div className="w-11/12 pb-2">
          <p className="text-black font-bold">Transactions</p>
          <p className="text text-[#71717A]">
            This is a list of latest transactions.
          </p>
        </div>
        <table className="w-11/12 h-10/12 rounded-xl">
          <thead className="bg-[#F9FAFB]">
            <tr className="text-distlineColor text-xs">
              <th className="text-left p-4">TRANSACTION</th>
              <th className="text-left">DATE & TIME</th>
              <th className="text-left">AMOUNT</th>
              <th className="text-left">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((item, index) => (
              <tr
                key={`paymenthistory-transaction-${index}`}
                className="text-textdarkColor"
              >
                <td className="flex py-3">
                  <p className="font-normal font-arial">Payment</p>&nbsp;
                  <p className="font-thin font-arial">from</p>&nbsp;
                  <p className="font-semibold font-arial">{item.transaction}</p>
                </td>
                <td className="font-arial">
                  <p className="text-distlineColor text-sm">{item.dateTime}</p>
                </td>
                <td className="font-arial">
                  <p className="text-textdarkColor font-normal text-base">
                    ${item.amount}
                  </p>
                </td>
                <td className="font-arial">
                  <span
                    className={`px-2.5 py-0.5 text-xs rounded-xl ${
                      statusBtnColor[item.status]
                    }`}
                  >
                    {transactionStatus[item.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    </div>
  );
};

export default PaymentHistory;
