import { z } from 'zod';

export const createCarrierSchema = z.object({
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