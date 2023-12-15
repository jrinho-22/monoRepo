import React, { FC, Fragment } from "react";
import { InputProps } from "./../interfaces/input";
import { StyledLabel, StyledText, StyledInput, StyledMessage  } from "./input.styled";
import TextField from '@mui/material/TextField';

const Input: React.FC<InputProps> = ({
    id,
    disabled,
    label,
    message,
    error,
    success,
    onChange,
    placeholder,
    value,
    type,
    inputProps,
    ...props
  }) => {
    return (
      // <div data-testid="input-wrapper">
      <TextField 
        sx={{
        padding: '10px'
        }} 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id="standard-basic"
        label={label}
        variant="standard"
        inputProps={inputProps}
      />
    // </div>
    );
  };
  
  export default Input;