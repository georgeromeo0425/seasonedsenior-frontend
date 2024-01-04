import React, { useState } from "react";
import Viewemployer from "./Viewemployer";
import TerminateArea from "../contract/TerminateArea";

export default function EmployeesPage() {
  interface employerinform {
    name: string;
    status: number;
    createdate: string;
    enddate: string;
    applicationID: string;
  }

  const employerdata: employerinform[] = [
    {
      name: "Frank Sergio",
      status: 0,
      createdate: "23 Oct 2021",
      enddate: "Ongoing",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "Ongoing",
      applicationID: "32133",
    },
    {
      name: "Kim Kerby",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
    {
      name: "Frank Sergio",
      status: 1,
      createdate: "23 Oct 2022",
      enddate: "23 Jan 2023",
      applicationID: "32133",
    },
  ];
  const [showcontract, setshowcontract] = useState(false);
  const statustext = ["Active", "Inactive"];
  const statusbtn = ["bg-green-200 text-[green]", "bg-red-300 text-[#DC0035]"];
  return (
    <div className="mt-10">
      {!showcontract && (
        <div>
          <div className="text-[24px] text-[#282828] font-bold text-center">
            Showing list of employers
          </div>
          <div className="mt-4 mx-20 bg-white rounded-lg p-10">
            <table className="w-full h-10/12 rounded-xl">
              <thead className="bg-[#F9FAFB]">
                <tr className="text-distlineColor text-xs">
                  <th className="text-left py-2">Caregiver Name</th>
                  <th className="text-center py-2">Employment</th>
                  <th className="text-center py-2">Start Date</th>
                  <th className="text-center py-2">End Date</th>
                  <th className="text-center py-2">Application ID</th>
                  <th className="text-center py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {employerdata.map((item, index) => (
                  <tr
                    key={`clients-clientsinform-${index}`}
                    className="text-textdarkColor mt-4"
                  >
                    <td className="py-3">
                      <div className="font-semibold font-arial text-left">
                        {item.name}
                      </div>
                    </td>
                    <td className="py-3">
                      <div
                        className={`text-center rounded-2xl py-2 ${
                          statusbtn[item.status]
                        }`}
                      >
                        {statustext[item.status]}
                      </div>
                    </td>
                    <td className="font-arial text-center py-3">
                      <p className="text-textdarkColor font-bold text-base">
                        {item.createdate}
                      </p>
                    </td>
                    <td className="font-arial text-center py-3">
                      <p className="text-textdarkColor font-bold text-base">
                        {item.enddate}
                      </p>
                    </td>
                    <td className="font-arial text-center py-3">
                      <p className="text-textdarkColor font-bold text-base">
                        {item.applicationID}
                      </p>
                    </td>
                    <td className="font-arial py-3">
                      <Viewemployer set={setshowcontract} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showcontract && (
        <div>
          <TerminateArea open={showcontract} setModalOpen={setshowcontract} />
        </div>
      )}
    </div>
  );
}
