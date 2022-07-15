import { FC } from "react";
import { WaitingRoomContainer } from "./styles";
import { useAuth } from "../../Hooks";

export const WaitingRoomInform: FC = () => {
  const { user } = useAuth();
  const haveToken = localStorage.getItem("@conexa:token");
  return (
    <>
      {haveToken ? (
        <WaitingRoomContainer>
          <strong>Olá, {user}, Sua consulta já vai começar</strong>
        </WaitingRoomContainer>
      ) : null}
    </>
  );
};
