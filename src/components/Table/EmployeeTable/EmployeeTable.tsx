import { FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'antd';
import { getColumns } from './columns';
import SearchForm from '../../Tables/components/SearchForm';
import { useModalStore } from '../../../store/showModal/showModal';
import { IEmployee } from '../../../interfaces/employee.interface';
import { useCurrentEmployeeStore } from '../../../store/currents/currentEmployee/useCurrentEmployeeStore';
import EmployeeUpdate from '../../Employees/EmployeeUpdate/EmployeeUpdate';

interface EmployeeTableProps {
  employeeData: IEmployee[];
}

const EmployeeTable: FunctionComponent<EmployeeTableProps> = ({ employeeData }) => {
  const [filteredData, setFilteredData] = useState<IEmployee[]>(employeeData);
  const { setCurrentEmployee } = useCurrentEmployeeStore();
  const { setShowModal } = useModalStore();

  useEffect(() => {
    setFilteredData(employeeData)
  }, [employeeData]);

  const handleSearch = (searchTerm: string) => {
    const filtered = employeeData.filter(employee =>
      employee.name
        .includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const handleEdit = (employee: IEmployee) => {
    setCurrentEmployee(employee);
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
      <EmployeeUpdate />
    </>
  );
};

export default EmployeeTable;