import { FunctionComponent } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../Form";
import Button from "../../Buttons/DefaultButton/Button.style";
import { ICarrier } from "../../../interfaces/carrier.interface";
import { useUpdateCarrier } from "../../../hooks/Carrier/useUpdateCarrier";
import { updateCarrierSchema } from "../../Carriers/CarriersUpdate/updateCarrierSchema";
import { useCurrentCarrierStore } from "../../../store/currents/currentCarrier/useCurrentCarrierStore";
import { useNavigate } from "react-router-dom";

type UpdateCarrierData = z.infer<typeof updateCarrierSchema>

const CarrierUpdate: FunctionComponent = () => {
  const { currentCarrier } = useCurrentCarrierStore();
  const { mutate: updateMutate } = useUpdateCarrier();
  const navigate = useNavigate();
  const updateCarrierForm = useForm<UpdateCarrierData>({
    resolver: zodResolver(updateCarrierSchema),
    defaultValues: currentCarrier ?? {}
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = updateCarrierForm;

  function updateCarrier(data: ICarrier) {
    const carrier = data;

    console.log(data)
    updateMutate(carrier);
    navigate('/transportadoras');
  }

  const handleReturn = () => {
    navigate('/transportadoras');
  };
  return (
    <main className="flex px-6 py-4 items-center justify-center bg-white rounded-lg shadow-md">
      <FormProvider {...updateCarrierForm}>
        <form className='flex flex-col gap-4 p-4 w-full max-w-xsspace-y-6' onSubmit={handleSubmit(updateCarrier)}>
          <div className="grid grid-cols-2 gap-6 px-2">
            <Form.Field>
              <Form.Label htmlFor='carrierName' >
                Nome Transportadora
              </Form.Label>
              <Form.Input type='text' name='carrierName' />
              <Form.ErrorMessage field='carrierName' />
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

            <Form.Field>
              <Form.Label htmlFor='status'>
                Status
              </Form.Label>
              <Form.Input type='text' name='status' />
              <Form.ErrorMessage field='status' />
            </Form.Field>
          </div>
          <footer className='flex p-3 pt-8 justify-center'>
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
              text='Voltar'
              textSize='sm'
              type='button'
              color='white'
              onClick={handleReturn}
            />
          </footer>
        </form>
      </FormProvider>
    </main>
    // </Modal>
  );
};

export default CarrierUpdate;
