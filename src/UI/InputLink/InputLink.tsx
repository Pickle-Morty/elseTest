import { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import "./style.css";
import { ArrowRight } from "@/assets/icons";
import { Link } from "@/UI/Link/Link";

export const InputLink: FC<TextFieldProps> = ({
  value = "",
  placeholder,
  onChange,
  label,
}) => {
  return (
    <>
      <Link to="/onbording" className="inputLink !text-black">
        <TextField
          className="w-full  custom_input"
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          variant="standard"
          disabled
          InputProps={{
            disableUnderline: true,
            className: "p-0!",
          }}
        />

        <ArrowRight className="inputLink__arrow" />
        <Link to="/onbording" className="inputLink__linkbox" />
      </Link>
      <div className="text-gray text-custom-text-xs">
        Работаем пока только в Москве
      </div>
    </>
  );
};
