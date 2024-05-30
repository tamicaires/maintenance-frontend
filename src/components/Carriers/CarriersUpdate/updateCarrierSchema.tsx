import { z } from 'zod';

export const updateCarrierSchema = z.object({
  id: z.string()
    .min(1),
  carrierName: z.string()
    .min(1, 'O campo Transportadora é obrigatório')
    .transform(carrierName => {
      return carrierName.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  managerName: z.string()
    .min(1, 'O campo Proprietário é obrigatório'),
  managerPhone: z.string()
    .min(1, 'O campo Contato é obrigatório'),
  status: z.string().default('ATIVO')
});