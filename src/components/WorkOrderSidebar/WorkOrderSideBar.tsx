import CardWorkOrderSidebar from "./CardWorkOrderSidebar";
import Schedule from "./Schedule";

interface MaintenanceScheduleItem {
  fleet: string;
  carrier: string;
}

interface WorkOrderSidebarProps {
  scheduleData: MaintenanceScheduleItem[]
}

const WorkOrderSidebar: React.FC<WorkOrderSidebarProps> = ({ scheduleData }) => {
  return (
    <div className='pt-10 p-6 bg-white shadow-2xl'>
      <div className='bg-center text-center'>
        <button className='text-center bg-blue-100 text-blue-800 font-bold uppercase  py-1.5 px-10 rounded-xl'>
          Resumo do dia
        </button>
      </div>
      <div className='flex flex-col rounded-xl pt-4'>
        <CardWorkOrderSidebar
          typeResume='em fila'
          title='em fila'
          count='02'
        />
        <CardWorkOrderSidebar
          typeResume='em manutenção'
          title='em Manutenção'
          count='02'
        />
        <CardWorkOrderSidebar
          typeResume='finalizado'
          title='Finalizado'
          count='10'
        />
      </div>
      <div>
        <Schedule scheduleData={scheduleData} />
      </div>
    </div>
  )
}

export default WorkOrderSidebar;