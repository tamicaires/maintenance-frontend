export interface IEmployee {
  id: string;
  name: string;
  workShift: string;
  jobTitleId: string;
  status?: string;
  createdAt?: string;
}

export interface IEmployeeUpdate {
  id: string;
  name: string;
  workShift: string;
  jobTitleId: string;
  status?: string;
}