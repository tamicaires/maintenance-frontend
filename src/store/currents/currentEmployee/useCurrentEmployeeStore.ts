import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IEmployee } from '../../../interfaces/employee.interface';

interface EmployeeState {
  currentEmployee: IEmployee | null;
  setCurrentEmployee: (employee: IEmployee | null) => void;
}

const createStoreWithPersist = (set: (state: EmployeeState) => void): EmployeeState => ({
  currentEmployee: null,
  setCurrentEmployee: (employee: IEmployee | null) => set({ currentEmployee: employee }),
});

export const useCurrentEmployeeStore = create(
  persist(
    createStoreWithPersist,
    { name: 'current-employee' }
  )
);
