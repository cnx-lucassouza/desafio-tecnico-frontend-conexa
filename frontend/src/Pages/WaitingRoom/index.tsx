import React, { FC, useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LogoutModal } from "../../Components/Modals/LogoutModal";
import { WaitingRoomInform } from "../../Components/WaitingRoomInform";
import { useAuth } from "../../Hooks";
import { AttendanceContainer } from "../Attendances/styles";

const WaitingRoom: FC = () => {
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const { token } = useAuth();
  const handleOpenSignOutModal = useCallback(() => {
    setIsSignOutModalOpen(true);
  }, []);

  const handleCloseSignOutModal = useCallback(() => {
    setIsSignOutModalOpen(false);
  }, []);

  return token ? (
    <>
      <Header onOpenSignOutModal={handleOpenSignOutModal} />

      <AttendanceContainer>
        <h1>Sala de espera</h1>
        <WaitingRoomInform />
      </AttendanceContainer>
      <LogoutModal
        isOpen={isSignOutModalOpen}
        onRequestClose={handleCloseSignOutModal}
      />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default WaitingRoom;
