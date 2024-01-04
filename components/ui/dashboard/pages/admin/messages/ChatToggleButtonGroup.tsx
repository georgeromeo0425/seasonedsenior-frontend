import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const ChatToggleButton = styled(Button)`
  height: 30px;
  border: 1px solid #828282;
  color: #282828;
  text-transform: none;
  &:hover {
    border: 1px solid #828282;
  }
`;

export default function ChatToggleButtonGroup({
  chatTypes,
}: {
  chatTypes: string[];
}) {
  const [curIndex, setCurIndex] = useState(1);
  const handleButtonClick = (idx: number) => {
    setCurIndex(idx);
  };
  const activeStyle = {
    backgroundColor: "#CB5A6F",
    border: "none",
    color: "white",
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      fullWidth
    >
      {chatTypes.map((item, idx) => (
        <ChatToggleButton
          key={`chattogglebutton-${idx}`}
          onClick={() => handleButtonClick(idx)}
          style={idx === curIndex ? activeStyle : {}}
        >
          {item}
        </ChatToggleButton>
      ))}
    </ButtonGroup>
  );
}
