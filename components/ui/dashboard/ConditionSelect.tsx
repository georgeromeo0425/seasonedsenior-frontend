import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fade from "@mui/material/Fade";

const MenuButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #282828;
  text-transform: none;
  font-weight: 700;
`;

export default function ConditionSelect({
  icon,
  method,
  by,
  choices,
}: {
  icon: any;
  method: string;
  by: string;
  choices: string[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center">
      <div className="text-[#828282] flex items-center ml-1">
        {icon}
        <span
          className="text-center"
          style={{ fontFamily: "Arial", fontSize: "14px" }}
        >{`${method.toUpperCase()} BY`}</span>
      </div>
      <div>
        <MenuButton
          aria-controls={isMenuOpen ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? "true" : undefined}
          onClick={handleClick}
        >
          {choices[selectedIndex]}
          {<ArrowDropDownIcon />}
        </MenuButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          TransitionComponent={Fade}
        >
          {choices.map((choice, idx) => (
            <MenuItem
              key={`condition-select-menu-item-${idx}`}
              selected={idx == selectedIndex}
              onClick={(event) => handleMenuItemClick(event, idx)}
            >
              {choice}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}
