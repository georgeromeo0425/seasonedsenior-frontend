import React, { useState } from "react";

import PaymentHistory from "./components/PaymentHistory";

const PaymentPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <PaymentHistory />
    </div>
  );
};

export default PaymentPage;
