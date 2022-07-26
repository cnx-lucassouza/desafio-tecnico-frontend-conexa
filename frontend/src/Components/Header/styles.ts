import styled from "styled-components";
import { isMobileHeader } from "./types";

export const HeaderContainer = styled.header`
  background-color: var(--offwhite);
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

export const HeaderObject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  height: 3.563rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-left: 16px;

  @media (max-width: 768px) {
    justify-content: ${isMobileHeader};
  }
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  margin-right: -430px;

  p {
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }

  button {
    margin-left: 1rem;
  }
`;
