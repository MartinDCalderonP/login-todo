import styled from "@emotion/styled";

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

interface IInputWrapper {
  validInput: boolean;
}

export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ validInput }) => (validInput ? "#ccc" : "red")};
  border-radius: 4px;
  padding: 0.5rem;

  svg {
    margin: 0 0.5rem;
  }
`;

export const DefaultInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  width: 100%;
  background-color: transparent;
`;
