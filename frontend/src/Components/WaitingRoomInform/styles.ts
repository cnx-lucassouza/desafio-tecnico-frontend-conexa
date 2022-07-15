import styled from "styled-components";
import waitingImg from "../../assets/waiting-room.svg";

export const WaitingRoomContainer = styled.div`
  width: 100%;
  max-width: 14.688rem;

  @media (max-width: 768px) {
    max-width: 17rem;
  }

  div {
    + div {
      margin-top: 2rem;
    }
  }
  &::before {
    content: url(${waitingImg});
    position: absolute;
    display: block;

    @media (max-width: 768px) {
      top: -50rem;
      right: -3.75rem;
    }
    strong {
      width: 100%;
      margin-top: 4.75rem;
      @media (max-width: 768px) {
        margin-top: 2.5rem;
      }
    }
  }
`;
