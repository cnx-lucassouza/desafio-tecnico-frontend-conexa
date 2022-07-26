import { FunctionComponent } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import questionIcon from "../../../assets/question.svg";

import { AccordionAction } from "../../Accordion";

import { HelpModalTitle, HelpModalContent } from "./styles";
import { faqlist, HelpModalProps } from "./types";
import { FAQ_LIST } from "../../../constants";

Modal.setAppElement("#root");

const HelpModal: FunctionComponent<HelpModalProps> = ({ isOpen, onRequestClose }) => {
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

      <HelpModalTitle>
        <img src={questionIcon} alt="ajuda" aria-hidden="true" />
        <strong>Ajuda</strong>
      </HelpModalTitle>
      <HelpModalContent>
        {FAQ_LIST.map(({ id, question, answer }: faqlist) => {
          return (
            <AccordionAction key={id} question={question} answer={answer} />
          );
        })}
      </HelpModalContent>
    </Modal>
  );
};

export { HelpModal };
