import { FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'antd';
import { getColumns } from './columns';
import SearchForm from '../../Tables/components/SearchForm';
import { IFleet } from '../../../interfaces/fleet.interface';
import { useCurrentFleetStore } from '../../../store/currents/currentFleet/useCurrentFleetStore';
import { useModalStore } from '../../../store/showModal/showModal';
import FleetUpdate from '../../Fleets/FleetUpdate/FleetUpdate';

interface FleetTableProps {
  fleetData: IFleet[];
}

const FleetTable: FunctionComponent<FleetTableProps> = ({ fleetData }) => {
  const [filteredData, setFilteredData] = useState<IFleet[]>(fleetData);
  const { setCurrentFleet } = useCurrentFleetStore();
  const { setShowModal } = useModalStore();

  useEffect(() => {
    setFilteredData(fleetData)
  }, [fleetData]);

  const handleSearch = (searchTerm: string) => {
    const filtered = fleetData.filter(fleet =>
      fleet.fleetNumber
        .includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const handleEdit = (fleet: IFleet) => {
    setCurrentFleet(fleet);
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
      <FleetUpdate />
    </>
  );
};

export default FleetTable;