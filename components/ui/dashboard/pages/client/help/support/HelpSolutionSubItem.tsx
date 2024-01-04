import styled from "@emotion/styled";
import React from "react";

export function HelpSolutionSubItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div
      className="p-4 cursor-pointer"
      style={{
        border: "1px solid",
        borderColor: "#C4C4C4",
        borderRadius: "6px",
      }}
    >
      <p
        className="text font-bold"
        style={{ color: "#282828", fontSize: "20px" }}
      >
        {title}
      </p>
      <p className="mt-2" style={{ color: "#282828", fontSize: "12px" }}>
        {content}
      </p>
    </div>
  );
}

export default HelpSolutionSubItem;
