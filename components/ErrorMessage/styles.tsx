import styled from "@emotion/styled";

export const DefaultErrorMessage = styled("span")<{ textAlign?: string }>`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  text-align: ${({ textAlign }) => textAlign};
`;
