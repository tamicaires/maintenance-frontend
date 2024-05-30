import { TableColumnsType, Tag } from "antd";
import { ICarrier } from "../../../interfaces/carrier.interface";
import { format } from "date-fns";
import { FaChevronDown } from "react-icons/fa";

type OnEditFunction = (carrier: ICarrier) => void;
type ShowRelatedFleetsFunction = (carrier: ICarrier) => void;

export const getColumns = (onEdit: OnEditFunction, showRelatedFleets: ShowRelatedFleetsFunction): TableColumnsType<ICarrier> => {
  const columns: TableColumnsType<ICarrier> = [
    {
      title: 'Transportadora',
      dataIndex: 'carrierName',
      key: 'carrierName',
      width: '30%',
      sorter: (a, b) => a.carrierName.length - b.carrierName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Proprietário',
      dataIndex: 'managerName',
    },
    {
      title: 'Contato',
      dataIndex: 'managerPhone',
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
      sorter: (a, b) => a.carrierName.length - b.carrierName.length,
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
      title: 'Ações',
      align: 'center',
      render: (record: ICarrier) => {
        return (
          <div className="flex justify-center items-center gap-4">
            <div className="text-blue-500" onClick={() => onEdit(record)}>
              <p className="flex items-center gap-1.5 font-semibold  text-blue-500 rounded-lg px-2 py-0 hover:text-blue-400">Editar</p>
            </div>
            <div className="text-blue-500" onClick={() => showRelatedFleets(record)}>
              <p className="flex items-center gap-1.5 font-semibold text-blue-500 rounded-md px-2 py-0 hover:text-blue-400">Frotas <FaChevronDown /></p>
            </div>
          </div>
        );
      },
    }
  ];
  return columns;
};
