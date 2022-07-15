export interface HelpModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export interface faqlist {
  id: number;
  question: string;
  answer: string;
}
