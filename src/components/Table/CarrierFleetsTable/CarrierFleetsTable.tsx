import { FunctionComponent, useEffect, useState } from 'react';
import { Modal, Table } from 'antd';
import { IFleet } from '../../../interfaces/fleet.interface';
import { useFleetData } from '../../../hooks/Fleet/useFleetData';
import { useModalStore } from '../../../store/showModal/showModal';
import { useCurrentCarrierStore } from '../../../store/currents/currentCarrier/useCurrentCarrierStore';
import { getColumns } from './columns';
import { FaTruckFast } from "react-icons/fa6";
import DashboardCard from '../../Cards/DashboardCard/DashboardCard';

const CarrierFleetsTable: FunctionComponent = () => {
  const { showModal, setShowModal } = useModalStore();
  const { data: fleetData, isLoading } = useFleetData();
  const { currentCarrier } = useCurrentCarrierStore()
  const [relatedFleets, setRelatedFleets] = useState<IFleet[]>([]);

  useEffect(() => {
    if (currentCarrier) {
      const fleets = fleetData?.filter(fleet => fleet.carrierId === currentCarrier.id) || [];
      setRelatedFleets(fleets);
    }
  }, [currentCarrier, fleetData]);

  const columns = getColumns();

  const countFleets = relatedFleets.filter(fleet => fleet.status === 'ATIVO').length;

  const formattedFleetCount = countFleets < 10 ? `0${countFleets}` : `${countFleets}`;

  return (
    <main>
      {currentCarrier && (
        <Modal
          open={showModal}
          width='80%'
          onCancel={() => setShowModal(false)}
          footer={null}
        >
          <div className='flex justify-between mt-4 p-4'>
            <div className=''>
              <span className='text-gray-500 text-base'>Transportadora</span>
              <h1 className='text-3xl font-semibold mt-0'>{currentCarrier.carrierName}</h1>
            </div>
            <DashboardCard
              title='Frotas Ativas'
              count={formattedFleetCount}
              icon={<FaTruckFast size={22} />}
            />
          </div>
          <Table
            columns={columns}
            dataSource={relatedFleets}
            rowKey='id'
            loading={isLoading}
            locale={{ emptyText: 'Nenhuma Frota encontrada para Transportadora' }}
          />
        </Modal>
      )}
    </main>
  );
};

export default CarrierFleetsTable;
