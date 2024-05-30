import { FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'antd';
import { getColumns } from './columns';
import SearchForm from '../../Tables/components/SearchForm';
import { useModalStore } from '../../../store/showModal/showModal';
import EmployeeUpdate from '../../Employees/EmployeeUpdate/EmployeeUpdate';
import { IServiceResource } from '../../../interfaces/service-resource.interface';
import { useCurrentServiceResourceStore } from '../../../store/currents/currentServiceResource/useCurrentServiceResourceStore';
import ServiceResourceUpdate from '../../ServiceResource/ServiceResourceUpdate/ServiceResourceUpdate';

interface ServiceResourceTableProps {
  serviceResourceData: IServiceResource[];
}

const ServiceResourceTable: FunctionComponent<ServiceResourceTableProps> = ({ serviceResourceData }) => {
  const [filteredData, setFilteredData] = useState<IServiceResource[]>(serviceResourceData);
  const { setCurrentServiceResource } = useCurrentServiceResourceStore();
  const { setShowModal } = useModalStore();

  useEffect(() => {
    setFilteredData(serviceResourceData)
  }, [serviceResourceData]);

  const handleSearch = (searchTerm: string) => {
    const filtered = serviceResourceData.filter(service =>
      service.serviceName
        .includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const handleEdit = (serviceResource: IServiceResource) => {
    setCurrentServiceResource(serviceResource);
    setShowModal(true);
  };

  const columns = getColumns(handleEdit);
  return (
    <>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey='id'
        title={() => <SearchForm onSearch={handleSearch} />}
      />
      {/* <EmployeeUpdate /> */}
      <ServiceResourceUpdate />
    </>
  );
};

export default ServiceResourceTable;