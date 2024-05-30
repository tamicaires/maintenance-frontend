/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { createCarrierSchema } from "./createCarrierSchema";
import { useCreateCarrier } from "../../../hooks/Carrier/useCreateCarrier";
import { ICarrier } from "../../../interfaces/carrier.interface";

interface CarrierRegistrationProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type CreateCarrierData = z.infer<typeof createCarrierSchema>

const CarrierRegistrations: FunctionComponent<CarrierRegistrationProps> = ({ showModal, setShowModal }) => {
  const { mutate: mutateCreate, isSuccess, isError } = useCreateCarrier();

  const createCarrierForm = useForm<CreateCarrierData>({
    resolver: zodResolver(createCarrierSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = createCarrierForm;

  function createUser(data: Omit<ICarrier, 'id'>) {
    mutateCreate(data);
    reset()
  }

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleClose();
  }, [isSuccess])

  return (
    <Modal
      open={showModal}
      footer={null}
      onCancel={() => setShowModal(false)}
    >
      <main className="flex px-6 py-4 items-center justify-center">
        <FormProvider {...createCarrierForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(createUser)}>
            <Form.Header
              title='Cadastro de Transportadoras'
              subtitle='Preencha os dados para cadasto' />
            <Form.Field>
              <Form.Label htmlFor='carrierName'>
                Nome Transportadora
              </Form.Label>

              <Form.Input type='text' name='carrierName' />
              <Form.ErrorMessage field='carrierName' />
              <Form.ApiErrorMessage
                hasError={isError}
                message="Transportadora já cadastrada!"
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='managerName'>
                Nome Proprietário
              </Form.Label>

              <Form.Input type='name' name='managerName' />
              <Form.ErrorMessage field='managerName' />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='managerPhone'>
                Contato
              </Form.Label>

              <Form.Input type='text' name='managerPhone' />
              <Form.ErrorMessage field='managerPhone' />
            </Form.Field>

            <footer className='flex px-3 justify-center'>
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

export default CarrierRegistrations;