import { useQuery } from "@tanstack/react-query";
import { IJob } from "../../interfaces/job.interface";
import { JobService } from "../../services/JobService/JobService";

export function useJobData() {
  const data = useQuery<IJob[]>({
    queryKey: ['jobs'],
    queryFn: JobService.getAll,
    staleTime: 60 * 5 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return data;
}