import styled from "@emotion/styled";
import { ButtonVariant } from "../Button";

interface IDefaultButton {
  variant: ButtonVariant;
}

export const DefaultButton = styled("button")<IDefaultButton>`
  width: 100%;
  margin-top: 1rem;
  background-color: ${({ variant }) =>
    variant === "default" ? "#000" : "#fff"};
  color: ${({ variant }) => (variant === "default" ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.9);

  &:disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
