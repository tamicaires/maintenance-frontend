/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { createEmployeeSchema } from "./createEmployeeSchema";
import { IEmployee } from "../../../interfaces/employee.interface";
import { useCreateEmployee } from "../../../hooks/Employee/useCreateEmployee";
import { useJobData } from "../../../hooks/Job/useJobData";

interface EmployeeRegistrationProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type CreateEmployeeData = z.infer<typeof createEmployeeSchema>

const EmployeeRegistrations: FunctionComponent<EmployeeRegistrationProps> = ({ showModal, setShowModal }) => {
  const { mutate: mutateCreate, isSuccess, isError } = useCreateEmployee();
  const { data: jobData } = useJobData();

  const createEmployeeForm = useForm<CreateEmployeeData>({
    resolver: zodResolver(createEmployeeSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = createEmployeeForm;

  function createEmployee(data: Omit<IEmployee, 'id'>) {
    const { name, jobTitleId, workShift, status, } = data;

    mutateCreate({
      name,
      jobTitleId,
      workShift,
      status
    });
    reset()
  }

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleClose();
  }, [isSuccess])

  const jobOptions = jobData?.map(job => ({
    labelOptions: job.jobTitle,
    value: job.id
  })) || [];

  return (
    <Modal
      open={showModal}
      footer={null}
      width={600}
      onCancel={() => setShowModal(false)}
    >
      <main className="flex px-6 py-4 items-center justify-center">
        <FormProvider {...createEmployeeForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(createEmployee)}>
            <Form.Header
              title='Cadastro de Colaborador'
              subtitle='Preencha os dados para cadasto' />
            <Form.Field>
              <Form.Label htmlFor='name'>
                Nome Colaborador
              </Form.Label>

              <Form.Input type='text' name='name' />
              <Form.ErrorMessage field='name' />
              <Form.ApiErrorMessage
                hasError={isError}
                message="Colaborador já cadastrado!"
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='carrierId'>
                Cargo
              </Form.Label>
              <Form.Select
                name='jobTitleId'
                label='Selecione um cargo'
                options={jobOptions} />
              <Form.ErrorMessage field='carrierId' />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='workShift'>
                Turno
              </Form.Label>

              <Form.Input type='text' name='workShift' />
              <Form.ErrorMessage field='workShift' />
            </Form.Field>
            <footer className='flex pt-4 p-3 justify-center'>
              <Button
                bgColor='#1E40AF'
                text='Cadastrar'
                textSize='sm'
                type='submit'
                color='white'
                isSubmitting={isSubmitting}
              />
              <Button
                bgColor='#EF4444'
                text='Cancelar'
                textSize='sm'
                type='button'
                color='white'
                onClick={() => setShowModal(false)}
              />
            </footer>
          </form>
        </FormProvider>
      </main>
    </Modal>
  )
};

export default EmployeeRegistrations;