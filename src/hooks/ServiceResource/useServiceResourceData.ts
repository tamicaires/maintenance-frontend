import { useQuery } from "@tanstack/react-query";
import { ServiceResourceService } from "../../services/ServiceResource/ServicesResourceService";
import { IServiceResource } from "../../interfaces/service-resource.interface";

export function useServiceResourceData() {
  const data = useQuery<IServiceResource[]>({
    queryKey: ['service-resources'],
    queryFn: ServiceResourceService.getAll,
    staleTime: 60 * 5 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  
  return data;
}
