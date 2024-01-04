import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ThemeProvider, createTheme } from "@mui/material";
import { MouseEventHandler, useState } from "react";

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

export default function CalendarCollapse(props: { handleDateClick: any }) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  return (
    <div className="mx-[8px] 2xl:mx-[30px] 3xl:mx-[30px] 4xl:mx-[30px] mt-[16px]">
      {/* <div className="flex flex-row justify-between items-center">
        <div className="text-[16px] font-bold text-textdarkColor">Calendar</div>
        <IconButton onClick={props.handleSetChecked} size="small">
          <CollapseDown color="#5F647E" width={22} height={22} />
        </IconButton>
      </div> */}
      <div>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newDate) => {
                props.handleDateClick(newDate);
                setSelectedDate(newDate);
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
