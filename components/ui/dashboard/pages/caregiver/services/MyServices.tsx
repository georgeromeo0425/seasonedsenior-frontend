import React from "react";

const ServiceFigure = ({
  title,
  bgColor,
  fgColor,
}: {
  title: string;
  bgColor: string;
  fgColor: string;
}) => {
  return (
    <div
      className={`flex mx-4 justify-center items-center w-[128px] h-[128px] rounded-full cursor-pointer`}
      style={{
        backgroundColor: `${bgColor}`,
        boxShadow: "4px 8px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <span className={`font-bold text-center`} style={{ color: `${fgColor}` }}>
        {title}
      </span>
    </div>
  );
};

const Services1 = [
  {
    title: "Respite\nCare",
    bgColor: "#FFF2F5",
    fgColor: "#CB5A6F",
  },
  {
    title: "Monitoring\nHealth\nConditions",
    bgColor: "#4255F41A",
    fgColor: "#4285F4",
  },
  {
    title: "Medication\nManagement",
    bgColor: "#30A64A1A",
    fgColor: "#30A64A",
  },
];

const Services2 = [
  {
    title: "Housekeeping",
    bgColor: "#6631FC1A",
    fgColor: "#6631FC",
  },
  {
    title: "Meal\nPreparation",
    bgColor: "#F82CCB1A",
    fgColor: "#F82CCB",
  },
];

export default function MyServices() {
  return (
    <div className="flex flex-col">
      <div className="mt-8 flex flex-col justify-center">
        <span className="text-center font-bold text-[24px]">
          Showing a list of services you are qualified for
        </span>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-2/5">
          <div className="mt-12 flex justify-center">
            {Services1.map((service, idx) => (
              <ServiceFigure key={`services1-${idx}`} {...service} />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {Services2.map((service, idx) => (
              <ServiceFigure key={`services2-${idx}`} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
