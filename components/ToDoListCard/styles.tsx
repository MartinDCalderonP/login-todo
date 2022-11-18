import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.9);
  padding: 1rem 0;
  width: 90%;
  max-width: 500px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 4rem;
  padding: 0 1rem 1rem;
`;
