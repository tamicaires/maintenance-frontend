import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { Modal } from "antd";
import { useModalStore } from "../../../store/showModal/showModal";
import { updateServiceResourceSchema } from "./updateServiceResourceSchema";
import { useCurrentServiceResourceStore } from "../../../store/currents/currentServiceResource/useCurrentServiceResourceStore";
import { IServiceResourceUpdate } from "../../../interfaces/service-resource.interface";
import { useUpdateServiceResource } from "../../../hooks/ServiceResource/useUpdateServiceResource";
import { useServiceResourceData } from "../../../hooks/ServiceResource/useServiceResourceData";

type UpdateServiceResourceData = z.infer<typeof updateServiceResourceSchema>

const ServiceResourceUpdate: FunctionComponent = () => {
  const { currentServiceResource } = useCurrentServiceResourceStore();
  const { mutate: updateMutate, isSuccess } = useUpdateServiceResource();
  const { showModal, setShowModal } = useModalStore();
  const { data } = useServiceResourceData();

  const serviceResourceData = data || [];

  const updateServiceResourceForm = useForm<UpdateServiceResourceData>({
    resolver: zodResolver(updateServiceResourceSchema),
    defaultValues: currentServiceResource ?? {}
  });

  useEffect(() => {
    updateServiceResourceForm.reset(currentServiceResource ?? {});
  }, [updateServiceResourceForm, currentServiceResource]);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateServiceResourceForm;

  function updateServiceResource(data: IServiceResourceUpdate) {
    const serviceResource: IServiceResourceUpdate = data;

    updateMutate(serviceResource);
    if (isSuccess) setShowModal(false)
  }
  return (
    <Modal
      open={showModal}
      footer={null}
      width={600}
      onCancel={() => setShowModal(false)}
    >
      <main className="flex px-6 py-4 items-center justify-center">
        <FormProvider {...updateServiceResourceForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(updateServiceResource)}>
            <Form.Header
              title='Atualizar Serviços'
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
            <footer className='flex pt-4 px-3 justify-center'>
              <Button
                bgColor='#1E40AF'
                text='Atualizar'
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

export default ServiceResourceUpdate;
