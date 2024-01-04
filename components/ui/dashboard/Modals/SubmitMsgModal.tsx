import {
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { PrimaryButton } from "../../common/PrimaryButton";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

export default function SubmitMsgModal({
  title,
  description,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  open: boolean;
  setOpen: any;
}) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="px-4 py-4 bg-white z-[1005] w-1/2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex">
          <div className="text-[#CB5A6F] font-bold ml-4 text-xl w-full">
            {title}
          </div>
          <div className="ml-auto">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="text-dislintColor ml-4 mr-12">{description}</div>
        <div className="flex flex-col mx-4 mt-4">
          <div className="mt-4">
            <ThemeProvider theme={theme}>
              <TextField
                multiline
                rows={6}
                variant="outlined"
                label="Leave a message"
                fullWidth
              />
            </ThemeProvider>
          </div>
          <div className="text-right mt-8">
            <PrimaryButton href="" handleClick={() => {}}>
              Submit
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
