import React from 'react';
import { Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useCarrierData } from '../../hooks/Carrier/useCarrierData';
import { ICarrier } from '../../interfaces/carrier.interface';

interface TableComponentProps {
  carrierData: ICarrier[];
}

const TableComponent: React.FC<TableComponentProps> = ({carrierData}) => {

  const options = carrierData.map(carrier => ({
    text: carrier.carrierName,
    value: carrier.carrierName,
  }));


  const columns: TableColumnsType<ICarrier> = [
    {
      title: 'Transportadora',
      dataIndex: 'carrierName',
      filters: options,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string | boolean | React.Key, record) => {
        if (typeof value === 'undefined') {
          return true;
        }
        const carrierResult = record.carrierName.toLowerCase().includes(value.toString().toLowerCase());
        console.log(carrierResult)
        return carrierResult
      },
      width: '30%',
      sorter: (a, b) => a.carrierName.length - b.carrierName.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Proprietário',
      dataIndex: 'managerName',
      defaultSortOrder: 'descend',
      filters: [
        {
          text: 'Tecnoserv',
          value: 'tecnoserv',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value: string | boolean | React.Key, record) => {
        if (typeof value === 'string') {
          return record.carrierName.indexOf(value) === 0;
        }
        return false;
      },
    },
    {
      title: 'Contato',
      dataIndex: 'managerPhone',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string | boolean | React.Key, record) => {
        if (typeof value === 'string') {
          return record.managerPhone.indexOf(value) === 0;
        }
        return false;
      },
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) => {
        const color = status === 'inativo' ? 'volcano' : 'green';
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
  ];

  const onChange: TableProps<ICarrier>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table columns={columns} dataSource={carrierData} onChange={onChange} rowKey='id' />
  )
}


export default TableComponent;