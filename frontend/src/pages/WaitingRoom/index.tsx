import React, { FunctionComponent, useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LogoutModal } from "../../Components/Modals/LogoutModal";
import { WaitingRoomInform } from "../../Components/WaitingRoomInform";
import { useAuth } from "../../hooks";
import { AttendanceContainer } from "../Attendances/styles";

const WaitingRoom: FunctionComponent = () => {
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
      <Header onOpenLogoutModal={handleOpenSignOutModal} />

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
