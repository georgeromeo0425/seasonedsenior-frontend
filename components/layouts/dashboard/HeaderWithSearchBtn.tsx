"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import app_logo from "@/public/icons/app_logo.svg";
import sm_avatar from "@/public/avatars/sample.png";
import CollapseDown from "@/public/icons/collapse_down";
import { Badge, IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Notifications } from "@mui/icons-material";
import NotificationModal from "@/components/ui/dashboard/Modals/NotificationModal/NotificationModal";
import { useEffect, useState } from "react";

const HeaderWithSearchBtn = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [openNotification, setOpenNotification] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let pathArray = pathname.split("/");
    let endpoint = "";
    if (pathArray.find((item) => item === "caregiver")) {
      endpoint = "CAREGIVER";
    } else if (pathArray.find((item) => item === "client")) {
      endpoint = "CLIENT";
    } else if (pathArray.find((item) => item === "admin")) {
      endpoint = "ADMIN";
    }
    setRole(endpoint);
  }, [pathname]);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="h-[120px] flex justify-center items-center text-distlineColor">
        <div className="left-[41px] absolute cursor-pointer z-10">
          <Image
            alt="logo"
            src={app_logo}
            onClick={() => router.push("/")}
            width={135}
            priority={false}
            style={{ height: "auto" }}
          />
          <div className="text-[14px] mt-2">{role} PORTAL</div>
        </div>
        <div className="pl-[25px] flex flex-row items-center border h-[60px] w-[60%] sm:hidden md:hidden rounded-xl">
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Global search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>
        <div className="right-[37px] absolute z-10 flex flex-row gap-2 items-center cursor-pointer">
          <div className="flex items-center gap-x-1" onClick={handleMenuClick}>
            <Image
              alt="sm-avatar"
              src={sm_avatar}
              width={32}
              priority={true}
              style={{
                height: "auto",
                borderRadius: "50%",
                border: "0.6px solid rgba(255, 114, 140, 0.99)",
              }}
            />
            <span className="text-[16px] font-bold text-textdarkColor">
              Gabby
            </span>
            <CollapseDown color="#000" width={25} height={26} />
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Menu>

          <IconButton onClick={() => setOpenNotification(true)}>
            <Badge color="error" variant="dot">
              <Notifications />
            </Badge>
          </IconButton>
        </div>
        <NotificationModal
          name=""
          open={openNotification}
          setOpen={setOpenNotification}
        />
      </div>
    </>
  );
};

export default HeaderWithSearchBtn;
