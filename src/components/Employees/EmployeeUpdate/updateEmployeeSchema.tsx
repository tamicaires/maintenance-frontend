import { z } from 'zod';

export const updateEmployeeSchema = z.object({
  id: z.string()
  .min(1),
  name: z.string()
    .min(1, 'O campo Colaborador é obrigatório'),
  jobTitleId: z.string()
    .min(1, 'O campo Cargo é obrigatório'),
  workShift: z.string()
    .min(1, 'O campo Turno é obrigatório'),
  status: z.string().default('ATIVO')
});