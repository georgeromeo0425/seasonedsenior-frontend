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

const yearItems = ["2+", "4+", "8+", "10+"];

const serviceItems = [
  "Housekeeping",
  "Meal preparation",
  "Personal Care Assistance",
  "Respite Care",
  "Medication Management",
  "Medication Reminders",
  "Fall Prevention and Home Safety",
  "24/7 Care",
  "Companionship and Social Support",
  "Memory Care",
  "Palliative Care",
  "Regular Assessments and Care Plans",
  "Monitoring Health Conditions",
  "Care Coordination",
  "Specialized Care Services",
  "Emotional Support and Companionship for Families",
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
    },
  },
});

type raceSelectionProps = {
  label: string;
  items?: string[]; // Make the 'items' prop optional
  onChange?: (value: string) => void; // Make this optional
};

const Experience: FC<raceSelectionProps> = ({
  label,
  onChange = () => {}, // Provide a default empty function as the value
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div>
      <p className="text-primary font-bold text-lg ml-8 mt-2 mr-8 mb-2">
        YEARS OF EXPERIENCE
      </p>
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
              {Array.isArray(yearItems) &&
                yearItems.map((item, index) => (
                  <MenuItem key={`men_item_${index}`} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </ThemeProvider>
        </FormControl>
      </div>
      <p className="text-primary font-bold text-lg ml-8 mt-2 mr-8 mb-2">
        SERVICES
      </p>
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
              {Array.isArray(serviceItems) &&
                serviceItems.map((item, index) => (
                  <MenuItem key={`men_item_${index}`} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </ThemeProvider>
        </FormControl>
      </div>
    </div>
  );
};

Experience.displayName = "Experience";

export default Experience;
