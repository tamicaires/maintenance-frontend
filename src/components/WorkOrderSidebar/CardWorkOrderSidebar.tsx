import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { PiTimerBold } from "react-icons/pi";

interface CardWorkOrderSidebarProps {
  typeResume: string;
  title: string;
  count: string;
}

const CardWorkOrderSidebar: React.FC<CardWorkOrderSidebarProps> = ({ typeResume, title, count }) => {
  const typeformatted = typeResume.toLowerCase()
  return (
    <div className='text-center p-2'>
      <div className='flex justify-between items-center rounded-lg gap-3 bg-[#F9F9F9] p-3 px-4'>
        {typeformatted === 'em fila' &&
          <span className='text-yellow-600 bg-yellow-200 bg-opacity-50 rounded-lg p-2'><PiTimerBold size={22} /></span>
        }
        {typeformatted === 'em manutenção' &&
          <span className='text-blue-600 bg-blue-200 bg-opacity-50 rounded-lg p-2'><MdOutlineSettings size={22} /></span>
        }
        {typeformatted === 'finalizado' &&
          <span className='text-green-600 bg-green-200 bg-opacity-50 rounded-lg p-2'><BsCheck2Circle size={22} /></span>
        }

        <span className='text-gray-500 text-sm font-semibold px-4 max-w-max'>Frotas <span>{title}</span></span>
        <span className='text-gray-600 text-3xl font-extrabold'>{count}</span>
      </div>
    </div>
  )
}

export default CardWorkOrderSidebar;