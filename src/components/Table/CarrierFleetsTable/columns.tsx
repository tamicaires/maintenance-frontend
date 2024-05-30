import { TableColumnsType, Tag } from "antd";
import { format } from "date-fns";
import { RiEdit2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { IFleet } from "../../../interfaces/fleet.interface";

export const getColumns = () => {
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
      dataIndex: 'first_trailer_plate',
    },
    {
      title: '2º Reboque',
      dataIndex: 'second_trailer_plate',
    },
    {
      title: '2º Reboque',
      dataIndex: 'third_trailer_plate',
    },
    {
      title: 'KM',
      dataIndex: 'km',
    },
    // {
    //   title: 'Transportadora',
    //   dataIndex: 'carrierId',
    // },
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
    // {
    //   title: 'Ações',
    //   align: 'center',
    //   render: (record) => {
    //     return <>
    //       <div className="flex justify-center items-center gap-4">
    //         <RiEdit2Line className="text-blue-500" size={16} onClick={() => onDelete(record)} />

    //         <div className="text-blue-500" onClick={() => onDelete(record)}>
    //           <p className="flex gap-1.5 font-semibold bg-blue-100 text-blue-700 rounded-full px-2 py-0 ">Frotas <FaChevronDown /></p>
    //         </div>
    //       </div>
    //     </>
    //   },
    //   width: '15%'
    // }
  ];
  return columns;
};