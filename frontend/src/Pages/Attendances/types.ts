export interface Attendance {
  id: number;
  patientId: number;
  date: Date;
  patient: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}
export interface CreateNewAttendanceProps {
  patientId: string;
  date: string;
  time: string;
}
