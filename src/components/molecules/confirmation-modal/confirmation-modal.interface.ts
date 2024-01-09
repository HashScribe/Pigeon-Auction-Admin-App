export interface IConfirmationModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  bodyText: string;
  textField: React.ReactNode;
  buttonText?: string;
  onSubmit: () => void;
}
