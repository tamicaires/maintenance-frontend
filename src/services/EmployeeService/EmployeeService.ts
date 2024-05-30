import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { IEmployee } from "../../interfaces/employee.interface";

const token = getTokenLocalStorage();

const getAll = async (): Promise<any> => {
    const { data } = await Api().get('employees', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const getById = async (id: string): Promise<IEmployee> => {
    const { data } = await Api().get(`employees/${id}`);

    return data;
};

const create = async (dataToCreate: Omit<IEmployee, 'id'>): Promise<IEmployee> => {
    const { data } = await Api().post(`employees`, dataToCreate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const updateById = async (id: string, dataToUpdate: IEmployee): Promise<IEmployee> => {
    const { data } = await Api().put(`employees/${id}`, dataToUpdate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const deleteById = async (id: string): Promise<void> => {
    await Api().delete(`employees/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
};

export const EmployeeService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};