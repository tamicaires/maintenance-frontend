/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { createWorkOrderSchema } from "./createWorkOrderSchema";
import { useCreateCarrier } from "../../../hooks/Carrier/useCreateCarrier";
import { ICarrier } from "../../../interfaces/carrier.interface";
import { useFleetData } from "../../../hooks/Fleet/useFleetData";

interface OpenWorkOrderProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type CreateWorkOrderData = z.infer<typeof createWorkOrderSchema>

const OpenWorkOrder: FunctionComponent<OpenWorkOrderProps> = ({ showModal, setShowModal }) => {
  const { mutate: mutateCreate, isSuccess, isError } = useCreateCarrier();
  const { data: fleetData } = useFleetData();

  const createCarrierForm = useForm<CreateWorkOrderData>({
    resolver: zodResolver(createWorkOrderSchema),
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

  const fleetOptions = fleetData?.map(fleet => ({
    labelOptions: fleet.fleetNumber,
    value: fleet.id
  })) || [];

  return (
    <Modal
      open={showModal}
      footer={null}
      onCancel={() => setShowModal(false)}
      width={600}
    >
      <main className="flex px-6 py-4 items-center justify-center">
        <FormProvider {...createCarrierForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(createUser)}>
            <Form.Header
              title='Abrir Ordem de Serviço'
              subtitle='Preencha os dados para abrir ordem de serviço'
            />
            <div className="grid grid-cols-2 gap-3 ">
              <Form.Field>
                <Form.Label htmlFor='fleetId'>
                  Frota
                </Form.Label>
                <Form.Select
                  name='fleetId'
                  label='Selecione uma frota'
                  options={fleetOptions} />
                <Form.ErrorMessage field='fleetId' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='fleetId'>
                  Motivo de Entrada
                </Form.Label>
                <Form.Select
                  name='fleetId'
                  label='Selecione uma frota'
                  options={fleetOptions} />
                <Form.ErrorMessage field='fleetId' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='fleetId'>
                  Grau de Severidade
                </Form.Label>
                <Form.Select
                  name='fleetId'
                  label='Selecione uma frota'
                  options={fleetOptions} />
                <Form.ErrorMessage field='fleetId' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='fleetId'>
                  Status
                </Form.Label>
                <Form.Select
                  name='fleetId'
                  label='Selecione uma frota'
                  options={fleetOptions} />
                <Form.ErrorMessage field='fleetId' />
              </Form.Field>
            </div>

            <Form.Field>
              <Form.Label htmlFor='carrierName'>
                Entrada Fila
              </Form.Label>

              <Form.Input type='date' name='carrierName' />
              <Form.ErrorMessage field='carrierName' />
              <Form.ApiErrorMessage
                hasError={isError}
                message="Transportadora já cadastrada!"
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='carrierName'>
                Entrada Manutenção
              </Form.Label>

              <Form.Input type='date' name='carrierName' />
              <Form.ErrorMessage field='carrierName' />
              <Form.ApiErrorMessage
                hasError={isError}
                message="Transportadora já cadastrada!"
              />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor='fleetId'>
                Box
              </Form.Label>
              <Form.Select
                name='fleetId'
                label='Selecione uma frota'
                options={fleetOptions} />
              <Form.ErrorMessage field='fleetId' />
            </Form.Field>

            <footer className='flex px-3 justify-center'>
              <Button
                bgColor='#1E40AF'
                text='Abrir Ordem de Serviço'
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

export default OpenWorkOrder;