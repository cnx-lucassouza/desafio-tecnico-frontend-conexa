import { FunctionComponent, useState, useEffect, useRef, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Modal from 'react-modal';

import { NewAttendanceTitle, NewAttendanceForm } from './styles';
import getValidationErrors from '../../../utils';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Select } from '../../Select';
import { NewAttendanceModalProps, Patient } from './types';
import { CreateNewAttendanceProps } from '../../../pages/Attendances/types';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';

Modal.setAppElement('#root');

const NewAttendanceModal: FunctionComponent<NewAttendanceModalProps> = ({
  isOpen,
  onRequestClose,
  createNewAttendance,
}) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();

  useEffect(() => {
    const storagedPatients = localStorage.getItem('@conexa:patients');

    if (storagedPatients) {
      const parsedPatients: Patient[] = JSON.parse(storagedPatients);

      setPatients(parsedPatients);
    } else {
      const fetchPatients = async () => {
        const requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get('/patients', requestConfig);

        localStorage.setItem('@conexa:patients', JSON.stringify(response.data));
      };

      fetchPatients();
    }
  }, [token]);

  const handleCreateNewAttendance = useCallback(
    async (data: CreateNewAttendanceProps) => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          patientId: Yup.string().notOneOf(['0'], 'Paciente obrigatório'),
          date: Yup.string().required('Data obrigatória'),
          time: Yup.string().required('Hora obrigatória'),
        });

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        await createNewAttendance(data);

        onRequestClose();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [createNewAttendance, onRequestClose],
  );

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

      <NewAttendanceTitle>Nova Consulta</NewAttendanceTitle>

      <NewAttendanceForm ref={formRef} onSubmit={handleCreateNewAttendance}>
        <Select name="patientId" label="Paciente" defaultValue="0">
          <option disabled value="0">
            Selecione um paciente
          </option>
          {patients.map(patient => (
            <option key={patient.first_name} value={patient.id}>
              {patient.first_name} {patient.last_name}
            </option>
          ))}
        </Select>
        <Input name="date" type="date" label="Data" />

        <Input name="time" type="time" label="Hora" />

        <Button type="submit">Agendar</Button>
      </NewAttendanceForm>
    </Modal>
  );
};

export { NewAttendanceModal };
