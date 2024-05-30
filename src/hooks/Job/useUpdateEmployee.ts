import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { IEmployeeUpdate } from "../../interfaces/employee.interface";
import { EmployeeService } from "../../services/EmployeeService/EmployeeService";

export function useUpdateEmployee() {
  const mutate = useMutation({
    mutationFn: ({id, ...data}: IEmployeeUpdate) => {
      return EmployeeService.updateById(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['employees']})
    }, 
    onError: (error) => {
      console.log(error)
    }
  });

  return mutate;
}