import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { tr } from "date-fns/locale";

export default function Viewclient({ set }: { set: Function }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [opencontract, setopencontract] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  const handleClose1 = () => {
    router.push("/dashboard/admin/clientsdetails");
  };

  return (
    <div className="flex justify-center gap-10 px-2 py-1 items-center">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="flex justify-center gap-10 px-2 py-1 items-center">
          <div className="text-[#828282] text-[14px]">View</div>
          <div className="">
            <Image
              alt=""
              src="/images/admin/group.png"
              className=""
              width={4}
              height={18}
              priority={true}
            />
          </div>
        </div>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose1}>Details</MenuItem>
        <MenuItem onClick={() => set(true)}>Contract</MenuItem>
        <MenuItem onClick={() => router.push("/dashboard/admin/payment")}>
          Payment
        </MenuItem>
      </Menu>
    </div>
  );
}
