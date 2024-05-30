import { MdOutlineAdd } from "react-icons/md";
import { useModalStore } from '../../store/showModal/showModal';
import { Card } from '../../components/Cards';
import Header from '../../components/Header.style';
import FilterBar from '../../components/WorkOrder/Components/FilterBar';
import { WorkOrderSidebar } from '../../components/WorkOrderSidebar';
import Button from '../../components/Buttons/DefaultButton/Button.style';
import { useThemeSettingsStore } from '../../store/themeSettings/themeSettings';
import { useWorkOrderData } from '../../hooks/WorkOrder/useWorkOrderData';
import { useMenuStore } from "../../store/menu/useMenuStore";
import { OpenWorkOrder } from "../../components/WorkOrder/OpenWorkOrder";

const WorkOrder = () => {
  const { showModal, setShowModal } = useModalStore()
  const { currentColor } = useThemeSettingsStore();
  const { data: workOrderDataRaw } = useWorkOrderData();

  const workOrderData = workOrderDataRaw || [];

  console.log(workOrderData)
  const handleOpenOs = () => {
    setShowModal(true);
  };

  const handleItemClick = (item) => {
    // setSelectedItem(item);
    // handleOs(item);
  };

  const addInputButton = (e) => {
    // e.preventDefault()

    // setServices([...services, '']);
  };
  const scheduleMaintenance = [
    {
      fleet: '22542',
      carrier: '3T Transportes'
    },
    {
      fleet: '22399',
      carrier: 'Tecnoserv'
    },
    {
      fleet: '22455',
      carrier: 'Truck Diesel'
    },
    {
      fleet: '22533',
      carrier: 'Solimões LTDA'
    },
  ]

  return (
    <div className='flex gap-2' >
      <div className="bg-white dark:bg-[#42464D] p-8 rounded-lg  w-2/3 shadow-2xl">
        <div className="flex justify-between">
          <div className='ml-4'>
            <Header
              title='Ordem de Serviços'
              category='Gerenciamento de Ordem de Serviço abertas'
            />
          </div>
          <div className='ml-auto'>
            <Button
              color='white'
              bgColor={currentColor}
              icon={<MdOutlineAdd size={18} />}
              text='Abrir Ordem de Serviço'
              textSize='25'
              onClick={handleOpenOs}
            />
          </div>
        </div>
        <div className="mt-1 bg-gray-50 px-4 pt-2 rounded-xl">
          <div>
            <FilterBar />
          </div>
          <div className='flex flex-col px-2 gap-4 mt-2 max-h-[650px] overflow-auto'>
            {workOrderData.map(workOrder => {
              return <Card key={workOrder.id} workOrder={workOrder} />
            })}
          </div>
        </div>
      </div>
      <WorkOrderSidebar scheduleData={scheduleMaintenance} />
      <OpenWorkOrder
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default WorkOrder; 