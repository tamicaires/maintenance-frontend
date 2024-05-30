/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { createServiceResourceSchema } from "./createServiceResourceSchema";
import { useServiceResourceData } from "../../../hooks/ServiceResource/useServiceResourceData";
import { IServiceResource } from "../../../interfaces/service-resource.interface";
import { useCreateServiceResource } from "../../../hooks/ServiceResource/useCreateServiceResource";

interface ServiceResourceRegistrationProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type CreateServiceResourceData = z.infer<typeof createServiceResourceSchema>

const ServiceResourceRegistration: FunctionComponent<ServiceResourceRegistrationProps> = ({ showModal, setShowModal }) => {
  const { mutate: mutateCreate, isSuccess } = useCreateServiceResource();
  const { data } = useServiceResourceData();

  const serviceResourceData = data || [];

  const createServiceResourceForm = useForm<CreateServiceResourceData>({
    resolver: zodResolver(createServiceResourceSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = createServiceResourceForm;

  function createServiceResource(data: Omit<IServiceResource, 'id'>) {
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
      width={600}
      onCancel={() => setShowModal(false)}
    >
      <main className="flex px-6 py-4 items-center justify-center">
        <FormProvider {...createServiceResourceForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(createServiceResource)}>
            <Form.Header
              title='Cadastro de Serviços'
              subtitle='Preencha os dados para atualizar dados' />
            <Form.Field>
              <Form.Label htmlFor='serviceName'>
                Nome Serviço
              </Form.Label>

              <Form.Input type='text' name='serviceName' />
              <Form.ErrorMessage field='serviceName' />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='serviceCategory'>
                Transportadora
              </Form.Label>
              <Form.Select
                name='serviceCategory'
                label='Selecione uma categoria'
                options={serviceResourceData.map(service => ({ labelOptions: service.serviceCategory, value: service.serviceCategory }))} />
              <Form.ErrorMessage field='carrierId' />
            </Form.Field>
            <footer className='flex px-3 pt-4 justify-center'>
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

export default ServiceResourceRegistration;