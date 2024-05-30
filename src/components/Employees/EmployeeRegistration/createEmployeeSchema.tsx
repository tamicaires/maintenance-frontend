import { z } from 'zod';

export const createEmployeeSchema = z.object({
  name: z.string()
    .min(1, 'O campo Colaborador é obrigatório'),
  jobTitleId: z.string()
    .min(1, 'O campo Cargo é obrigatório'),
  workShift: z.string()
    .min(1, 'O campo Turno é obrigatório'),
  status: z.string().default('ATIVO')
});