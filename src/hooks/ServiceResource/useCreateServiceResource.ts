import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { ServiceResourceService } from "../../services/ServiceResource/ServicesResourceService";

export function useCreateServiceResource() {
  const mutate = useMutation({
    mutationFn: ServiceResourceService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['service-resources']})
    }
  });
  
  return mutate;
}