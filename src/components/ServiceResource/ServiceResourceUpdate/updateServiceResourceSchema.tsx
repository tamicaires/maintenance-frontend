import { z } from 'zod';

export const updateServiceResourceSchema = z.object({
  id: z.string()
    .min(1),
  serviceName: z.string()
    .min(5, 'O campo Nome do Serviço é obrigatório'),
  serviceCategory: z.string()
    .min(6, 'O campo Categoria é obrigatório'),
});