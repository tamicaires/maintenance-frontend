import { FunctionComponent, useEffect } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { Modal } from "antd";
import { useModalStore } from "../../../store/showModal/showModal";
import { updateFleetSchema } from "./updateFleetSchema";
import { useCurrentFleetStore } from "../../../store/currents/currentFleet/useCurrentFleetStore";
import { IFleet, IFleetUpdate } from "../../../interfaces/fleet.interface";
import { useUpdateFleet } from "../../../hooks/Fleet/useUpdateFleet";
import { useCarrierData } from "../../../hooks/Carrier/useCarrierData";

type UpdateFleetData = z.infer<typeof updateFleetSchema>

const FleetUpdate: FunctionComponent = () => {
  const { currentFleet } = useCurrentFleetStore();
  const { mutate: updateMutate, isSuccess } = useUpdateFleet();
  const { data } = useCarrierData();
  const { showModal, setShowModal } = useModalStore();
  
  const updateFleetForm = useForm<UpdateFleetData>({
    resolver: zodResolver(updateFleetSchema),
    defaultValues: currentFleet ?? {}
  });
  
  const carrierData = data || [];

  useEffect(() => {
    updateFleetForm.reset(currentFleet ?? {});
  }, [updateFleetForm, currentFleet]);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateFleetForm;

  function updateFleet(data: IFleet) {
    const fleet: IFleetUpdate = data;

    updateMutate(fleet);
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
        <FormProvider {...updateFleetForm}>
          <form className='flex flex-col gap-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(updateFleet)}>
            <Form.Header
              title='Atualizar de Transportadora'
              subtitle='Preencha os dados para atualizar transportadora' />
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
                options={carrierData.map(carrier => ({ labelOptions: carrier.carrierName, value: carrier.id }))}
                />
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

export default FleetUpdate;
