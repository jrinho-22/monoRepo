import React from "react";
import { ButtonProps } from "../interfaces/button";
import ButtonMui from '@mui/material/Button';

const Button: React.FC<ButtonProps> = (props) => {
    return (
      <ButtonMui 
      onClick={props.onClick}
      disabled={props.disabled}
      sx={props.sx}
      variant="contained">
        {props.text}
      </ButtonMui>
    );
  };
  
  export default Button;