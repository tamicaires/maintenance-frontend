import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { IServiceResourceUpdate } from "../../interfaces/service-resource.interface";
import { ServiceResourceService } from "../../services/ServiceResource/ServicesResourceService";

export function useUpdateServiceResource() {
  const mutate = useMutation({
    mutationFn: ({id, ...data}: IServiceResourceUpdate) => {
      return ServiceResourceService.updateById(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['service-resources']})
    }, 
    onError: (error) => {
      console.log(error)
    }
  });

  return mutate;
}