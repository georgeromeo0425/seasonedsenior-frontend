import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@/public/icons/rating_star";
import { useState } from "react";

const labels: { [index: string]: string } = {
  0.5: "0.5",
  1: "1.0",
  1.5: "1.5",
  2: "2.0",
  2.5: "2.5",
  3: "3.0",
  3.5: "3.5",
  4: "4.0",
  4.5: "4.5",
  5: "5.0",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const CustomRatingCom = () => {
  const [value, setValue] = useState<number | null>(4.5);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon opacity="0" fontSize="inherit" />}
        icon={<StarIcon fontSize="inherit" />}
      />
      {value !== null && (
        <div className="text-[14px] text-distlineColor">
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        </div>
      )}
    </Box>
  );
};

export default CustomRatingCom;
