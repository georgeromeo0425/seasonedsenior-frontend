import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Meal Preparation",
  "Physical Assistance",
  "House keeping",
  "Medication Management",
  "Recipe care",
];

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

export default function ServiceSelect({ onSelect }: { onSelect: any }) {
  const [personName, setServiceName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    onSelect(value);
    setServiceName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <div className="font-bold">Select Services</div>
      <div className="mt-2">
        <ThemeProvider theme={theme}>
          <FormControl sx={{ width: "100%" }}>
            <Select
              multiple
              value={personName}
              onChange={handleChange}
              // input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
}
