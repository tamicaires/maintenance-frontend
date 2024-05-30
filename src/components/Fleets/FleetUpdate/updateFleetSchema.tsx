import { z } from 'zod';

export const updateFleetSchema = z.object({
  id: z.string()
  .min(1),
  fleetNumber: z.string()
    .min(5, 'O campo Frota é obrigatório'),
  plate: z.string()
    .min(6, 'O campo Placa é obrigatório'),
  first_trailer_plate: z.string()
    .min(6, 'O campo 1º Reboque é obrigatório'),
  second_trailer_plate: z.string()
    .min(6, 'O campo 2º Reboque é obrigatório'),
  third_trailer_plate: z.string()
    .min(6, 'O campo 3º Reboque é obrigatório'),
  km: z.string()
    .min(1, 'O campo KM é obrigatório'),
  carrierId: z.string()
    .min(1, 'O campo Transportadora é obrigatório'),
  status: z.string().default('ATIVO')
});