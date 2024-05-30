import { useQuery } from "@tanstack/react-query";
import { EmployeeService } from "../../services/EmployeeService/EmployeeService";
import { IEmployee } from "../../interfaces/employee.interface";

export function useEmployeeData() {
  const data = useQuery<IEmployee[]>({
    queryKey: ['employees'],
    queryFn: EmployeeService.getAll,
    staleTime: 60 * 5 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return data;
}