import React from "react";
import AdminServiceTable from "./AdminServiceTable";

export default function MyServices() {
  return (
    <div
      className="p-4 m-8"
      style={{
        borderRadius: "16.963px",
        background: "var(--mainwhite, #FFF)",
        boxShadow:
          "0px 1.06021px 3.18062px 0px rgba(0, 0, 0, 0.10), 0px 1.06021px 2.12041px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <AdminServiceTable />
    </div>
  );
}
