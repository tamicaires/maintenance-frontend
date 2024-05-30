import { z } from 'zod';

export const createWorkOrderSchema = z.object({
  fleetId: z.string().min(1, 'O campo Frota é obrigatório'),
  severityLevel: z.string().min(1, 'O campo Grau de Severidade é obrigatório'),
  typeOfMaintenance: z.string().min(1, 'O campo Tipo de manutenção é obrigatório'),
  entryQueue: z.date().optional(),
  entryMaintenance: z.date().optional(),
  Box: z.string(),
  status: z.string().default('ATIVO'),
})
