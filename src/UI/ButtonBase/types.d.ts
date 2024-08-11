import { ReactNode } from "react";
import { type LinkProps } from 'react-router-dom';

export interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: "arrow";
  isLink?: LinkProps;
}