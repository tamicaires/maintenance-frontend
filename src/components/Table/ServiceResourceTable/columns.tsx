import { TableColumnsType } from "antd";
import { IServiceResource } from "../../../interfaces/service-resource.interface";

type HandleEditType = (serviceResource: IServiceResource) => void;

export const getColumns = (handleEdit: HandleEditType) => {
  const columns: TableColumnsType<IServiceResource> = [
    {
      title: 'Serviço',
      dataIndex: 'serviceName',
      key: 'serviceName',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Categoria',
      dataIndex: 'serviceCategory',
      key: 'serviceCategory'
    },
    {
      title: '',
      align: 'center',
      render: (record) => {
        return <>
          <div className="flex justify-center items-center gap-4">
            <p
              onClick={() => handleEdit(record)}
              className="flex items-center gap-1.5 font-semibold  text-blue-500 rounded-lg px-2 py-0 hover:text-blue-400">
              Editar
            </p>
          </div>
        </>
      },
    }
  ];
  return columns;
};