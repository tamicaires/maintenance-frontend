import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ICarrier } from '../../../interfaces/carrier.interface';
import { getColumns } from './columns';
import SearchForm from '../../Tables/components/SearchForm';
import { useCurrentCarrierStore } from '../../../store/currents/currentCarrier/useCurrentCarrierStore';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../../store/showModal/showModal';
import CarrierFleetsTable from '../CarrierFleetsTable/CarrierFleetsTable';

interface CarrierTableProps {
  carrierData: ICarrier[];
  isLoading: boolean;
}

const CarrierTable: React.FC<CarrierTableProps> = ({ carrierData, isLoading }) => {
  const [filteredData, setFilteredData] = useState<ICarrier[]>(carrierData);
  const { setCurrentCarrier } = useCurrentCarrierStore();
  const { setShowModal } = useModalStore();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(carrierData);
  }, [carrierData]);

  const handleSearch = (searchTerm: string) => {
    const filtered = carrierData.filter(carrier =>
      carrier.carrierName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleEdit = (carrier: ICarrier) => {
    setCurrentCarrier(carrier)
    navigate(`/transportadoras/${carrier.id}/atualizar`);
  };

  const showRelatedFleets = (carrier: ICarrier) => {
    setCurrentCarrier(carrier)
    setShowModal(true);
  };

  const columns = getColumns(handleEdit, showRelatedFleets);


  return (
    <>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey='id'
        loading={isLoading}
        title={() => <SearchForm onSearch={handleSearch} />}
        locale={{ emptyText: 'Nenhuma transportadora encontrada' }}
      />
      <div>
        <CarrierFleetsTable />
      </div>
    </>
  );
};

export default CarrierTable;
