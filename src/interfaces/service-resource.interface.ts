export interface IServiceResource {
  id: string;
  serviceName: string;
  serviceCategory: string;
  createdAt?: string;
}

export interface IServiceResourceUpdate {
  id: string;
  serviceName: string;
  serviceCategory: string;
}