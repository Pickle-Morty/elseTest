import { TextFieldProps } from '@mui/material';

export interface InputBaseProps extends TextFieldProps {
  mainClassName?: string;
  onChange?: (value: string | number) => void;
}
