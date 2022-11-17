import styled from "@emotion/styled";
import { ButtonVariant } from "../Button";

interface IDefaultButton {
  variant: ButtonVariant;
}

const currentButtonVariant = (variant: ButtonVariant) => {
  const variants = {
    default: {
      backgroundColor: "var(--defaultButton)",
      color: "#fff",
    },
    white: {
      backgroundColor: "#fff",
      color: "#000",
    },
    black: {
      backgroundColor: "#000",
      color: "#fff",
    },
  };

  return variants[variant];
};

export const DefaultButton = styled("button")<IDefaultButton>`
  background-color: ${({ variant }) =>
    currentButtonVariant(variant).backgroundColor};
  color: ${({ variant }) => currentButtonVariant(variant).color};
  width: 100%;
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
