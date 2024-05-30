import { TableColumnsType } from "antd";
import { format } from "date-fns";
import { IEmployee } from "../../../interfaces/employee.interface";

type HandleEditType = (employee: IEmployee) => void;

export const getColumns = (handleEdit: HandleEditType) => {
  const columns: TableColumnsType<IEmployee> = [
    {
      title: 'Colaborador',
      dataIndex: 'name',
      key: 'name',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Cargo',
      dataIndex: 'jobTitle',
      key: 'jobTitle'
    },
    {
      title: 'Turno',
      dataIndex: 'workShift',
      key: 'workShift'
    },
    {
      title: 'Cadastrado em',
      dataIndex: 'createdAt',
      render: (createdAt: string) => format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss'),
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