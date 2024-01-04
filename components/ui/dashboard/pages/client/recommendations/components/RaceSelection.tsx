"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { FC } from "react";

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

type raceSelectionProps = {
  label: string;
  items?: string[]; // Make the 'items' prop optional
  onChange?: (value: string) => void; // Make this optional
};

const RaceSelection: FC<raceSelectionProps> = ({
  label,
  items,
  onChange = () => {}, // Provide a default empty function as the value
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
    console.log(event.target.value);
  };

  return (
    <div>
        <p className="text-primary font-bold text-lg ml-8 mt-2 mr-8 mb-2">Race</p>
    <div className="w-full flex justify-center">
      <FormControl fullWidth={false} sx={{ my: 1, minWidth: 300 }}>
        <InputLabel
          id="select-value-label"
          shrink={false}
          sx={{ "&.Mui-focused": { color: "transparent" } }}
        >
          {value ? "" : label}
        </InputLabel>
        <ThemeProvider theme={theme}>
          <Select
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ borderRadius: "6px" }}
          >
            {Array.isArray(items) && // Check if 'items' is an array
              items.map((item, index) => (
                <MenuItem key={`men_item_${index}`} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div></div>
  );
};

RaceSelection.displayName = "RaceSelection";

export default RaceSelection;
