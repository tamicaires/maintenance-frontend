import { z } from 'zod';

export const createServiceResourceSchema = z.object({
  serviceName: z.string()
    .min(5, 'O campo Nome do Serviço é obrigatório'),
  serviceCategory: z.string()
    .min(6, 'O campo Categoria é obrigatório'),
});