import { ReactNode, MouseEvent } from "react";
import { DefaultButton } from "./styles";

type ButtonType = "submit" | "reset" | "button";
export type ButtonVariant = "default" | "white" | "black";

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  disabled,
  onClick,
  type = "button",
  variant = "default",
}: IButton) => {
  return (
    <DefaultButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {children}
    </DefaultButton>
  );
};

export default Button;
