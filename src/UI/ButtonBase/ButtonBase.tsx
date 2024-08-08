import type { FC } from "react";

type ButtonBaseProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const ButtonBase: FC<ButtonBaseProps> = ({
  text,
  className,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`${className} group flex items-center justify-center gap-[5px] rounded-t-3xl rounded-b-3xl border border-basicBlue bg-basicBlue px-5 py-3 transition-colors  `}
  >
    <span className="text-base-m text-white transition-colors ">
      {text}
    </span>
    <span className=" text-white leading-4 text-[20px]">&#x203A;</span>
  </button>
);
