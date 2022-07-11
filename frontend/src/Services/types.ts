export interface Appointment {
  patientId: number;
  id: number;
  date: Date;
  patient: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}
export interface CreateAppointmentData {
  patientId: string;
  date: string;
  time: string;
}
export interface Patient {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }