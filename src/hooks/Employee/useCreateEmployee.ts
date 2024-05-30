import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { EmployeeService } from "../../services/EmployeeService/EmployeeService";

export function useCreateEmployee() {
  const mutate = useMutation({
    mutationFn: EmployeeService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['employees']})
    }
  });
  
  return mutate;
}