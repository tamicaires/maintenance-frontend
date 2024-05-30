/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "antd";
import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { createFleetSchema } from "./createFleetSchema";
import { IFleet } from "../../../interfaces/fleet.interface";
import { useCreateFleet } from "../../../hooks/Fleet/useCreateFleet";
import { useCarrierData } from "../../../hooks/Carrier/useCarrierData";

interface FleetRegistrationProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type CreateFleetData = z.infer<typeof createFleetSchema>

const FleetRegistrations: FunctionComponent<FleetRegistrationProps> = ({ showModal, setShowModal }) => {
  const { mutate: mutateCreate, isSuccess } = useCreateFleet();
  const { data } = useCarrierData();

  const carrierData = data || [];

  const createFleetForm = useForm<CreateFleetData>({
    resolver: zodResolver(createFleetSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = createFleetForm;

  function createFleet(data: Omit<IFleet, 'id'>) {
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
        <FormProvider {...createFleetForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(createFleet)}>
            <Form.Header
              title='Cadastro de Transportadoras'
              subtitle='Preencha os dados para cadasto' />
            <div className="grid grid-cols-3 gap-5">
              <Form.Field>
                <Form.Label htmlFor='fleetNumber'>
                  Número Frota
                </Form.Label>

                <Form.Input type='text' name='fleetNumber' />
                <Form.ErrorMessage field='fleetNumber' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='plate'>
                  Placa
                </Form.Label>

                <Form.Input type='text' name='plate' />
                <Form.ErrorMessage field='plate' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='first_trailer_plate'>
                  1º Reboque
                </Form.Label>

                <Form.Input type='text' name='first_trailer_plate' />
                <Form.ErrorMessage field='first_trailer_plate' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='second_trailer_plate'>
                  2º Reboque
                </Form.Label>

                <Form.Input type='text' name='second_trailer_plate' />
                <Form.ErrorMessage field='second_trailer_plate' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='third_trailer_plate'>
                  3º Reboque
                </Form.Label>

                <Form.Input type='text' name='third_trailer_plate' />
                <Form.ErrorMessage field='third_trailer_plate' />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor='km'>
                  KM
                </Form.Label>

                <Form.Input type='text' name='km' />
                <Form.ErrorMessage field='km' />
              </Form.Field>
            </div>
            <Form.Field>
              <Form.Label htmlFor='carrierId'>
                Transportadora
              </Form.Label>
              <Form.Select
                name='carrierId'
                label='Selecione uma transportadora'
                options={carrierData.map(carrier => ({ labelOptions: carrier.carrierName, value: carrier.id }))} />
              <Form.ErrorMessage field='carrierId' />
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

export default FleetRegistrations;