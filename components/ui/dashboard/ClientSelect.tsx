import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";
import Fade from "@mui/material/Fade";

const MenuButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #cb5a6f;
  text-transform: none;
  font-weight: 700;
`;

const clients = [
  {
    image: "",
    name: "Kat Gwen",
  },
  {
    image: "",
    name: "Florence Stacy",
  },
  {
    image: "",
    name: "Gabby Alao",
  },
];

export default function ClientSelect({
  onSelect
}: {
  onSelect: any;
}) {
  const [curIdx, setCurIdx] = React.useState<number>(-1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (newIdx: number) => {
    setCurIdx(newIdx);
    onSelect(clients[newIdx].name);
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuButton
        aria-controls={isMenuOpen ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : undefined}
        onClick={handleClick}
      >
        {curIdx === -1 ? (
          "Select Client"
        ) : (
          <div className="flex items-center">
            <Avatar sx={{ width: "48px", height: "48px" }} />
            <span className="ml-2 font-bold text-[18px]">
              {clients[curIdx].name}
            </span>
          </div>
        )}
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
        {clients.map((client, idx) => (
          <MenuItem
            key={`condition-select-menu-item-${idx}`}
            onClick={() => handleItemClick(idx)}
          >
            <div className="flex items-center">
              <Avatar sx={{ width: "48px", height: "48px" }} />
              <span className="ml-2 font-bold">{client.name}</span>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
