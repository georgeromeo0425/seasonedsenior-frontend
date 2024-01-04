import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import { FormControl, TextField, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { PropaneSharp } from "@mui/icons-material";

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

const TimePickerCom = (props: { title: string, handleTimeSelected: any }) => {
  return (
    <div>
      <div className="text-left text-xs font-arial font-normal text-distlineColor">
        {props.title}
      </div>
      <FormControl
        style={{ borderRadius: "6px" }}
        fullWidth={true}
        sx={{ my: 1, minWidth: 120 }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={["TimePicker"]}> */}
          <ThemeProvider theme={theme}>
            <TimePicker
              label=""
              sx={[
                {
                  svg: { color: "#E5ACB7" },
                  input: { color: "#828282" },
                  label: { color: "#E5ACB7" },
                },
                {
                  backgroundColor: "white",
                },
              ]}
              onChange={(newTime) => {
                props.handleTimeSelected(newTime);
              }}
            />
            {/* </DemoContainer> */}
          </ThemeProvider>
        </LocalizationProvider>
      </FormControl>
    </div>
  );
};

export default TimePickerCom;
