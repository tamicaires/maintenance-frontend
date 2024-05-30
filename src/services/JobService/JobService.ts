import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { IJob } from "../../interfaces/job.interface";

const token = getTokenLocalStorage();

const getAll = async (): Promise<IJob[]> => {
    const { data } = await Api().get('jobs', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    return data;
};

const getById = async (id: string): Promise<IJob> => {
    const { data } = await Api().get(`jobs/${id}`);

    return data;
};

const create = async (dataToCreate: Omit<IJob, 'id'>): Promise<IJob> => {
    const { data } = await Api().post(`jobs`, dataToCreate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const updateById = async (id: string, dataToUpdate: IJob): Promise<IJob> => {
    const { data } = await Api().put(`jobs/${id}`, dataToUpdate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const deleteById = async (id: string): Promise<void> => {
    await Api().delete(`jobs/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
};

export const JobService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};