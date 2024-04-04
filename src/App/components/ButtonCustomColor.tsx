import Button from "@mui/material/Button";
import { green, purple } from "@mui/material/colors";
import { styled, Theme } from "@mui/material/styles"; // Import Theme here
import type { ButtonProps } from "@mui/material/Button";

// Adjust your styled component to explicitly type the theme parameter
const ButtonCustomColor = styled(Button)<ButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[500],
    },
  })
);

// Styled component for a Bootstrap button
const ButtonsCustomized = () => {
  return (
    <div className="flex gap-4">
      <ButtonCustomColor variant="contained">Custom Color</ButtonCustomColor>
    </div>
  );
};

export default ButtonsCustomized; 
