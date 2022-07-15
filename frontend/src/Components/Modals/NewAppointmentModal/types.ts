import { CreateNewAttendanceProps } from "../../../Pages/Attendances/types";

export interface NewAttendanceModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  createNewAttendance(data: CreateNewAttendanceProps): Promise<void>;
}

export interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
