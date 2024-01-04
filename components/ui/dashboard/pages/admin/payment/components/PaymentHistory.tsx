import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import RowSelection from "@/components/ui/dashboard/RowsSelection";
import PaymentDetailModal from "./PaymentDetailModal";

const transactionData = [
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 0,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 0,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 1,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 2,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 0,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
    amount: 2300,
    status: 0,
  },
  {
    sender: "Gabby Alao",
    receiver: "Frank Sergio",
    dateTime: "23 Sep, 2023 | 21:32 PM",
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

const rowsPerPage = ["1", "2", "4", "8"];

const PaymentHistory = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClose = () => setOpen(false);

  const handleCurrentIndex = (index: number) => {
    if (index >= 0) setOpen(true);
    setCurrentIndex(index);
  };

  return (
    <div className="w-11/12 h-full grid justify-items-center">
      <p className="text-2xl font-bold text-black">Paymet History</p>
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
              <th className="text-left p-4">SENDER</th>
              <th className="text-left">RECEIVER</th>
              <th className="text-left">DATE & TIME</th>
              <th className="text-left">AMOUNT</th>
              <th className="text-left">STATUS</th>
              <th className="text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((item, index) => (
              <tr
                key={`paymenthistory-transaction-${index}`}
                className="text-textdarkColor"
              >
                <td className="font-arial py-4">
                  <p className="font-semibold font-arial">{item.sender}</p>
                </td>
                <td className="font-arial">
                  <p className="font-semibold font-arial">{item.sender}</p>
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
      <div className="h-full flex items-center justify-between w-3/5">
        <div className="inline-flex items-center justify-between">
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
      <PaymentDetailModal
        open={open}
        handleClose={handleClose}
        sender={transactionData[currentIndex].sender}
        receiver={transactionData[currentIndex].receiver}
        amount={transactionData[currentIndex].amount}
        dateTime={transactionData[currentIndex].dateTime}
        status={transactionData[currentIndex].status}
      />
    </div>
  );
};

export default PaymentHistory;
