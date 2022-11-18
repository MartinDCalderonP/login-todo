import styled from "@emotion/styled";

export const IconsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }

  &:active {
    svg {
      transform: scale(0.8);
    }
`;
