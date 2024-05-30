import { TableColumnsType, Tag } from "antd";
import { format } from "date-fns";
import { IFleet } from "../../../interfaces/fleet.interface";

type HandleEditType = (fleet: IFleet) => void;

export const getColumns = (handleEdit: HandleEditType) => {
  const columns: TableColumnsType<IFleet> = [
    {
      title: 'Frota',
      dataIndex: 'fleetNumber',
      key: 'fleetNumber',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Placa',
      dataIndex: 'plate',
    },
    {
      title: '1º Reboque',
      dataIndex: 'firstTrailerPlate',
    },
    {
      title: '2º Reboque',
      dataIndex: 'secondTrailerPlate',
    },
    {
      title: '2º Reboque',
      dataIndex: 'thirdTrailerPlate',
    },
    {
      title: 'KM',
      dataIndex: 'km',
    },
    {
      title: 'Transportadora',
      dataIndex: 'carrierName',
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
      render: (createdAt: string) => format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        const color = status === 'INATIVO' ? 'red' : 'green';
        return (
          <Tag color={color}>
            {status.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        {
          text: 'Ativo',
          value: 'ATIVO',
        },
        {
          text: 'Inativo',
          value: 'INATIVO',
        },
      ],
      onFilter: (value, record) => record.status === value,
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