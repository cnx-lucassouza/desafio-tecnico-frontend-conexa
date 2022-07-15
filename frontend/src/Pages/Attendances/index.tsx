import React, { FC, useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AttendanceList } from "../../Components/AttendanceList";
import { FixedFooter } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { NewAttendanceModal } from "../../Components/Modals/NewAppointmentModal";
import { LogoutModal } from "../../Components/Modals/LogoutModal";
import { useAuth } from "../../Hooks";
import api from "../../Services/api";
import { AttendanceContainer } from "./styles";
import { Attendance, CreateNewAttendanceProps } from "./types";

const AttendancesPage: FC = () => {
  const [attendances, setAttendances] = useState<Attendance[]>([]);
  const [isNewAttendanceModalOpen, setIsNewAttendanceModalOpen] =
    useState(false);
  const [isLogoutModalOpen, setIsSignOutModalOpen] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const storedAttendance = localStorage.getItem("@conexa:appointments");

    if (storedAttendance) {
      const parsedAttendances = JSON.parse(storedAttendance);

      setAttendances(parsedAttendances);
    } else {
      const fetchAttendances = async () => {
        const requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get(
          "/consultations?_expand=patient",
          requestConfig
        );

        localStorage.setItem(
          "@conexa:appointments",
          JSON.stringify(response.data)
        );

        setAttendances(response.data);
      };

      fetchAttendances();
    }
  }, [setAttendances, token]);

  const createNewAttendance = useCallback(
    async (data: CreateNewAttendanceProps) => {
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requestData = {
        patientId: data.patientId,
        date: new Date(`${data.date} ${data.time}`).toString(),
      };

      const response = await api.post(
        "/consultations",
        requestData,
        requestConfig
      );

      const newAttendance = response.data;

      const patientResponse = await api.get(
        `/patients?id=${newAttendance.patientId}`,
        requestConfig
      );

      const attendance = {
        id: response.data.id,
        date: response.data.date,
        patientId: response.data.patientId,
        patient: patientResponse.data[0],
      };

      setAttendances([...attendances, attendance]);

      localStorage.setItem(
        "@conexa:appointments",
        JSON.stringify([...attendances, attendance])
      );
    },
    [token, attendances]
  );
  const handleOpenNewAttendanceModal = useCallback(() => {
    setIsNewAttendanceModalOpen(true);
  }, []);

  const handleCloseNewAttendanceModal = useCallback(() => {
    setIsNewAttendanceModalOpen(false);
  }, []);

  const handleOpenLogoutModal = useCallback(() => {
    setIsSignOutModalOpen(true);
  }, []);

  const handleCloseLogoutModal = useCallback(() => {
    setIsSignOutModalOpen(false);
  }, []);

  return token ? (
    <>
      <Header onOpenSignOutModal={handleOpenLogoutModal} />

      <AttendanceContainer>
        <h1>Consultas</h1>

        <AttendanceList attendances={attendances} />
      </AttendanceContainer>
      <FixedFooter onOpenNewTransactionModal={handleOpenNewAttendanceModal} />
      <NewAttendanceModal
        isOpen={isNewAttendanceModalOpen}
        onRequestClose={handleCloseNewAttendanceModal}
        createNewAttendance={createNewAttendance}
      />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onRequestClose={handleCloseLogoutModal}
      />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AttendancesPage;
