import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { Modal } from "antd";
import { useModalStore } from "../../../store/showModal/showModal";
import { updateEmployeeSchema } from "./updateEmployeeSchema";
import { IEmployee, IEmployeeUpdate } from "../../../interfaces/employee.interface";
import { useCurrentEmployeeStore } from "../../../store/currents/currentEmployee/useCurrentEmployeeStore";
import { useUpdateEmployee } from "../../../hooks/Employee/useUpdateEmployee";
import { useJobData } from "../../../hooks/Job/useJobData";

type UpdateEmployeeData = z.infer<typeof updateEmployeeSchema>

const EmployeeUpdate: FunctionComponent = () => {
  const { currentEmployee } = useCurrentEmployeeStore();
  const { mutate: updateMutate, isSuccess, isError } = useUpdateEmployee();
  const { data: jobData } = useJobData();
  const { showModal, setShowModal } = useModalStore();
  
  const updateEmployeeForm = useForm<UpdateEmployeeData>({
    resolver: zodResolver(updateEmployeeSchema),
    defaultValues: currentEmployee ?? {}
  });
  
  useEffect(() => {
    updateEmployeeForm.reset(currentEmployee ?? {});
  }, [updateEmployeeForm, currentEmployee]);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateEmployeeForm;

  function updateEmployee(data: IEmployee) {
    const employee: IEmployeeUpdate = data;

    updateMutate(employee);
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
      <FormProvider {...updateEmployeeForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(updateEmployee)}>
            <Form.Header
              title='Atualizar Colaborador'
              subtitle='Preencha os dados para atualizar cadastro' />
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
  );
};

export default EmployeeUpdate;
