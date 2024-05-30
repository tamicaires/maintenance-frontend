import { useMutation } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { queryClient } from "../../services/QueryClient";

export function useCreateCarrier() {
  const mutate = useMutation({
    mutationFn: CarrierService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['carriers']})
    }
  });
  
  return mutate;
}