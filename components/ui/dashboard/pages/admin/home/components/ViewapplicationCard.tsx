import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";
ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      data: [19, 7],
      backgroundColor: ["#FFF2F5", "#CB5A6F"],
      borderColor: ["transparent", "transparent"],
      borderWidth: 1,
      borderRadius: 24,
    },
  ],
};

const options = {
  width: 200,
  height: 200,
  responsive: true,
  cutout: "65%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ViewapplicationCard({}: {}) {
  const router = useRouter();
  return (
    <div className="flex flex-col border border-solid border-borderGreyColor p-4 bg-white h-full">
      <div className="font-bold text-[20px]">Applications</div>
      <div className="flex">
        <div className="px-4 py-8" style={{ width: "250px", height: "250px" }}>
          <Doughnut data={chartData} options={options} />
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <div className="flex items-center gap-x-4">
            <div className="bg-primary rounded-md w-[36px] h-[36px]"></div>
            <div className="flex flex-col">
              <span className="font-bold text-[24px]">30%</span>
              <span className="text-distlineColor text-[24px]">Pending</span>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="bg-[#FFF2F5] rounded-md w-[36px] h-[36px]"></div>
            <div className="flex flex-col">
              <span className="font-bold text-[24px]">70%</span>
              <span className="text-distlineColor text-[24px]">Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <div
          className="ml-4 text-[#CB5A6F] text-[16px] font-bold cursor-pointer"
          onClick={() => {
            router.push("/dashboard/admin/application");
          }}
        >
          View Application
        </div>
        <div>
          <Image
            alt=""
            src="/images/admin/vector.png"
            className="mx-auto mt-[]"
            width={24}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
