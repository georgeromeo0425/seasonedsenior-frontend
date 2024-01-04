import { Avatar } from "@mui/material";
import React from "react";

interface serviceDetail {
  title: string;
  contents: string[];
}

interface invoiceDetail {
  id: string;
  period: string;
  totalHours: string;
  details: serviceDetail;
  subtotal: number;
}

interface paymentHistory {
  date: string;
  received: number;
  method: string;
  balance: number;
}

const fakerData = {
  invoiceDetails: [
    {
      id: "001",
      period: "[23 SEP 2023] to [30 SEP 2023]",
      totalHours: "80h : 00m : 00s",
      details: {
        title: "Mobility Support:",
        contents: [
          "For client with mobility challenges, caregiver assists with trasferring from bed to chair, using mobility aids, and manitaining safe mobility withing thr home",
        ],
      },
      subtotal: 80,
    },
    {
      id: "002",
      period: "[23 SEP 2023] to [30 SEP 2023]",
      totalHours: "80h : 00m : 00s",
      details: {
        title: "Mobility Support:",
        contents: [
          "For client with mobility challenges, caregiver assists with trasferring from bed to chair, using mobility aids, and manitaining safe mobility withing thr home",
        ],
      },
      subtotal: 80,
    },
  ],
  paymentHistory: [
    {
      date: "01 OCT 2023",
      received: 80,
      method: "Stripe",
      balance: 0,
    },
    {
      date: "01 OCT 2023",
      received: 80,
      method: "Stripe",
      balance: 0,
    },
  ],
};

const InvoiceDetail = (props: invoiceDetail) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="font-bold text-[#282828] text-[18px]">
        Invoice Details({props.id})
      </div>
      <div>
        <div className="mt-4 flex">
          <div className="w-[200px] text-right mr-24">Service Period:</div>
          <div className="font-bold">{props.period}</div>
        </div>
        <div className="mt-4 flex">
          <div className="w-[200px] text-right mr-24">
            Total Hours of Service:
          </div>
          <div className="font-bold">{props.totalHours}</div>
        </div>
        <div className="mt-4 flex">
          <div className="w-[200px] text-right mr-24">Service Details:</div>
          <div className="flex flex-col">
            <div className="font-bold">{props.details.title}</div>
            <div>{props.details.contents[0]}</div>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-20 text-[#CB5A6F]">
          <div>Subtotal: </div>
          <div className="font-bold">${props.subtotal}.00</div>
        </div>
      </div>
    </div>
  );
};

const PaymentHistory = (props: paymentHistory) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="text-[#CB5A6F] text-center font-bold">{`Payment Date: ${props.date}`}</div>
      <div className=" mt-4 flex justify-between">
        <div>Amount Received:</div>
        <div className="text-[#30A64A] font-bold w-[60px] ml-20">
          ${props.received}.00
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div>Payment method:</div>
        <div className="text-[#4285F4] font-bold w-[60px] ml-20">
          {props.method}
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div>Outstanding Balance:</div>
        <div className="text-[#828282 font-bold] w-[60px] ml-20">
          ${props.balance}
        </div>
      </div>
    </div>
  );
};

export default function BillingStatement() {
  return (
    <div className="mt-4 flex flex-col items-center">
      <p className="font-bold text-[20px]">Billing Statements</p>
      <p className="text-[#828282]">
        Showing details of most recent client from 23 SEP 2023 - 12 Oct 2023
      </p>
      <div className="my-8 flex flex-col items-center">
        <Avatar sx={{ width: 64, height: 64 }} />
        <div className="mt-2 text-[#4285F4] font-bold">Benjamin Franklyn</div>
        <div className="text-[15px]">75 yrs/old</div>
      </div>
      <div className="mt-8 w-3/5 flex justify-between">
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-[150px]">Statement Date:</div>
            <div className="font-bold">30/09/2023</div>
          </div>
          <div className="flex mt-2">
            <div className="w-[150px]">Invoice Number:</div>
            <div className="font-bold">8763456134</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-2">
            <div className="w-[150px]">Total Amount Due:</div>
            <div className="font-bold">$160.00</div>
          </div>
          <div className="flex">
            <div className="w-[150px]">Hourly Rate:</div>
            <div className="font-bold">$10/hr</div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-4/5 flex flex-col">
        {fakerData.invoiceDetails.map((detail, idx) => (
          <InvoiceDetail key={`invoicedetail-${idx}`} {...detail} />
        ))}
      </div>
      <div className="mt-8 text-[20px] font-bold">Payment History</div>
      <div className="mt-8 flex gap-20">
        {fakerData.paymentHistory.map((history, idx) => (
          <PaymentHistory key={`paymenthistory-${idx}`} {...history} />
        ))}
      </div>
    </div>
  );
}
