import { ReactNode, MouseEvent } from "react";
import { DefaultButton } from "./styles";

type ButtonType = "submit" | "reset" | "button";

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: ButtonType;
}

const Button = ({ children, disabled, onClick, type }: IButton) => {
  return (
    <DefaultButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </DefaultButton>
  );
};

export default Button;
