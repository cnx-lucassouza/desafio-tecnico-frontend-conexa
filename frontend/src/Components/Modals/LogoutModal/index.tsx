import { FunctionComponent } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { LogoutModalTitle, LogoutModalButtonsWrapper } from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import { ButtonStroke } from "../../ButtonStroke";
import { Button } from "../../Button";
import { LogoutModalProps } from "./types";

Modal.setAppElement("#root");

const LogoutModal: FunctionComponent<LogoutModalProps> = ({ isOpen, onRequestClose }) => {
  const { logout } = useAuth();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <LogoutModalTitle>Deseja fazer logout?</LogoutModalTitle>

      <LogoutModalButtonsWrapper>
        <ButtonStroke type="button" onClick={onRequestClose}>
          Não
        </ButtonStroke>
        <Button type="button" onClick={logout}>
          Sim
        </Button>
      </LogoutModalButtonsWrapper>
    </Modal>
  );
};

export { LogoutModal };
