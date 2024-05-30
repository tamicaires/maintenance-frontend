import { format, startOfToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ScheduleCard from './ScheduleCard';

interface MaintenanceScheduleItem {
  fleet: string;
  carrier: string;
}

interface ScheduleCardProps {
  scheduleData: MaintenanceScheduleItem[]
}

const Schedule: React.FC<ScheduleCardProps> = ({ scheduleData }) => {
  const today = startOfToday();
  const formattedToday = format(today, 'dd MMMM yyyy', { locale: ptBR });
  return (
    <div className='flex flex-col gap-4 mt-10 p-6 bg-gray-50 rounded-xl shadow-md'>
      <header>
        <h1 className='text-sm text-center font-bold'>Planejamento para {formattedToday}</h1>
      </header>
      {scheduleData.map(schedule => {
        return <ScheduleCard key={schedule.fleet}
          fleet={schedule.fleet}
          carrier={schedule.carrier}
        />
      })}
    </div>
  )
}

export default Schedule;