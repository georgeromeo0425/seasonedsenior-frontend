import React, { useState } from "react";
import PaymentMethod from "./components/PaymentMethod";
import PaymentHistory from "./components/PaymentHistory";

const PaymentPage = () => {
  const [tabNumber, setTabNumber] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex items-center justify-between w-1/4">
        <div
          className={`cursor-pointer ${
            tabNumber == 0
              ? "border border-t-0 border-l-0 border-r-0 border-b-primary"
              : ""
          }`}
          onClick={() => setTabNumber(0)}
        >
          <p
            className={`font-arial font-bold ${
              tabNumber == 0 ? "text-primary" : "text-textdarkColor"
            }`}
          >
            Payment Method
          </p>
        </div>
        <div
          className={`cursor-pointer ${
            tabNumber == 1
              ? "border border-t-0 border-l-0 border-r-0 border-b-primary"
              : ""
          }`}
          onClick={() => setTabNumber(1)}
        >
          <p
            className={`font-arial font-bold ${
              tabNumber == 1 ? "text-primary" : "text-textdarkColor"
            }`}
          >
            Payment History
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center">
        {tabNumber == 0 ? <PaymentMethod /> : <PaymentHistory />}
      </div>
    </div>
  );
};

export default PaymentPage;
