import  { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import './style.css'

export const InputBase: FC<TextFieldProps> = ({
  value = "",
  placeholder,
  onChange,
  label,
}) => {
  return (
    <TextField
      className="w-full  custom_input"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="standard"
      InputProps={{
        disableUnderline: true, 
        className : 'p-0!'
      }}
    />
  );
};
