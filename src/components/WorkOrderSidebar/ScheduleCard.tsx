import { MdKeyboardArrowDown } from "react-icons/md";

interface ScheduleCardProps {
  fleet: string;
  carrier: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ fleet, carrier }) => {
  return (
    <main className='border-l-2 border-blue-500 bg-white p-3 pl-4 rounded-sm shadow-md'>
      <div className="flex justify-between items-center">
        <div>
          <div className='flex gap-3'>
            <span className='text-sm text-gray-400'>Numero Frota</span>
            <span className='text-sm text-gray-800 font-semibold'>{fleet}</span>
          </div>
          <div className='flex gap-3'>
            <span className='text-sm text-gray-400'>Transportador</span>
            <span className='text-sm text-gray-800 font-semibold'>{carrier}</span>
          </div>
          <div className='flex gap-2 pt-1'>
            <span className='text-xs italic text-gray-400'>Última preventiva</span>
            <span className='text-xs text-gray-400 italic'>12/03/2024</span>
          </div>
        </div>
        <div className="text-blue-500 hover:text-blue-800 hover:text-3xl">
          <MdKeyboardArrowDown size={24}/>
        </div>
      </div>
    </main>

  )
}

export default ScheduleCard;