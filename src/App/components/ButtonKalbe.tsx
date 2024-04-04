import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";

// Correct the type of 'type' to match MUI ButtonProps
interface ButtonKalbeProps extends ButtonProps {
  type?: "button" | "submit" | "reset"; // Align this with MUI's ButtonProps definition
  name?: string;
  id?: string;
}

// Use a correct approach to type the parameters of the styled component function
const ButtonKalbe = styled(Button)<ButtonKalbeProps>(
  ({
    theme,
    variant,
    color,
  }: {
    theme: Theme;
    variant: "text" | "contained" | "outlined";
    color:
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning";
  }) => ({
    fontSize: 16,
    width: "100%",
    lineHeight: "20px",
    padding: "6px 12px",
    minHeight: "auto",
    color: "#24292e",
    textTransform: "none",
    fontWeight: 600,
    "& svg": {
      fontSize: 24,
      marginLeft: -2,
      marginRight: theme.spacing(0.5),
    },
    ...(variant === "contained" && {
      borderRadius: "4px",
      transition: "none",
      boxShadow: "none",
      border: "1px solid rgba(27,31,35,.2)",
      backgroundPosition: "-1px -1px",
      backgroundRepeat: "repeat-x",
      backgroundSize: "110% 110%",
      backgroundColor: "#eff3f6",
      backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
      "&:hover": {
        color: "#24292e",
        backgroundColor: "#e6ebf1",
        backgroundImage: "linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)",
        backgroundPosition: "-0.5em",
        borderColor: "rgba(27,31,35,.35)",
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: "#e9ecef",
        backgroundImage: "none",
        borderColor: "rgba(27,31,35,.35)",
        boxShadow: "inset 0 0.15em 0.3em rgba(27,31,35,.15)",
      },
    }),
    ...(variant === "contained" &&
      color === "primary" && {
        color: theme.palette.common.white,
        backgroundColor: "#00AF7B",
        "&:hover": {
          color: "#00AF7B",
          backgroundColor: "#ffffff",
        },
        "&:active": {
          backgroundColor: "#279f43",
          borderColor: "rgba(27,31,35,.35)",
        },
      }),
  })
);

const KalbeButton: React.FC<ButtonKalbeProps> = ({
  type = "button", // Provide a default type to ensure it always has a valid value
  name,
  id,
  ...props
}) => {
  return (
    <ButtonKalbe
      variant="contained"
      color="primary"
      type={type}
      name={name}
      id={id}
      {...props} // Spread any additional props
    />
  );
};

export default KalbeButton;
