import { FunctionComponent, useState, useCallback } from "react";

import { ButtonStroke } from "../ButtonStroke";
import { Button } from "../Button";

import { FixedFooterContainer } from "./styles";
import { FixedFooterProps } from "./types";
import { HelpModal } from "../Modals/HelpModal";

const FixedFooter: FunctionComponent<FixedFooterProps> = ({ onOpenNewTransactionModal }) => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleOpenHelpModal = useCallback(() => {
    setIsHelpModalOpen(true);
  }, []);

  const handleCloseHelpModal = useCallback(() => {
    setIsHelpModalOpen(false);
  }, []);

  return (
    <>
      <FixedFooterContainer data-testid="pure_footer">
        <div>
          <ButtonStroke type="button" onClick={handleOpenHelpModal}>
            Ajuda
          </ButtonStroke>
          <Button type="button" onClick={onOpenNewTransactionModal}>
            Agendar Consulta
          </Button>
        </div>
      </FixedFooterContainer>

      <HelpModal
        isOpen={isHelpModalOpen}
        onRequestClose={handleCloseHelpModal}
      />
    </>
  );
};

export { FixedFooter };
