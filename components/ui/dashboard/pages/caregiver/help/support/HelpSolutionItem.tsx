import React from "react";
import Image, { StaticImageData } from "next/image";

interface helpSolutionItem {
  image: StaticImageData;
  title: string;
  description: string;
  selected: boolean;
}

export default function HelpSolutionItem(props: helpSolutionItem) {
  return (
    <div
      className={`flex flex-col items-center px-2 py-4 border border-solid w-[220px] h-[220px] cursor-pointer ${
        props.selected
          ? "bg-[#FCF4FC] border-primary"
          : "bg-white border-textdarkColor"
      }`}
    >
      <div>
        <Image alt="solution" src={props.image} width={110} height={110} />
      </div>
      <div className="text-[20px] text-dislintColor font-bold">
        {props.title}
      </div>
      <div className="mt-4 text-xs text-distlineColor text-center">
        {props.description}
      </div>
    </div>
  );
}
