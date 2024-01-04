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
    },
  },
});

type StatusSelectionProps = {
  name: string;
  label: string;
  items?: string[]; // Make the 'items' prop optional
  onChange?: (value: string) => void; // Make this optional
};

const StatusSelection: FC<StatusSelectionProps> = ({
  name,
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
    <div className="w-full flex justify-center">
      <div className="text-xs font-arial font-normal text-distlineColor">
        {name}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1 }}>
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
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

StatusSelection.displayName = "StatusSelection";

export default StatusSelection;
