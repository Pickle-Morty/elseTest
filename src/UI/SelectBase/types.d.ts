import { SelectProps as MUISelectProps } from '@mui/material'

export interface Option {
  id: number | string;
  name: string;
}

export interface SelectBaseProps {
  mainClassName?: string;
  label?: string;
  options: Option[];
  onChange?: (value: string | number) => void;
  defaultValue?: string;
}