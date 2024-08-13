import { SelectProps as MUISelectProps } from '@mui/material'
import { ReactElement, SVGProps,  FC } from 'react';

export interface Option {
  id: number | string;
  name: string;
  icon?: any;
}

export interface SelectBaseProps {
  mainClassName?: string;
  label?: string;
  options: Option[];
  onChange?: (value: string | number) => void;
  defaultValue?: string;
}