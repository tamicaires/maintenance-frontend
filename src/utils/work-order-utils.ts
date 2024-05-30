import { formatDate } from "./formatDate"

export const calculateDuration = (
  duration: number | undefined,
  entryDate: string | undefined
): string | null => {
  if (duration) return formatDate(duration, 'hh:mm');

  if (entryDate) {
    const currentTime = new Date();
    const currentEntryTime = new Date(entryDate);
    
    // Calcula a diferença de tempo em milissegundos
    const durationTime = currentTime.getTime() - currentEntryTime.getTime();
    
    // Converte a diferença de tempo para horas e minutos
    const hours = Math.floor(durationTime / (1000 * 60 * 60));
    const minutes = Math.floor((durationTime / (1000 * 60)) % 60);
    
    // Formata a duração em horas e minutos
    const formattedDuration = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    
    // Retorna a duração formatada
    return formattedDuration;
  }
  
  return null;
}
