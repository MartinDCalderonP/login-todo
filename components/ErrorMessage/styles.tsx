import styled from "@emotion/styled";

export const DefaultErrorMessage = styled("span")<{ textAlign?: string }>`
  display: block;
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  text-align: ${({ textAlign }) => textAlign};
  max-width: 100%;
`;
