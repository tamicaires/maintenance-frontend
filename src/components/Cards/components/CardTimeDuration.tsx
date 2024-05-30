import { CiStopwatch } from "react-icons/ci";

interface CardTimeDurationProps {
  title: string;
  duration: string;
}

const CardTimeDuration: React.FC<CardTimeDurationProps> = ({ title, duration }) => {
  
  return (
    <div className="text-center">
      <span className="text-[11px] text-gray-400">{title}</span>
      <div className="flex justify-center items-center gap-1 p-1 px-3 bg-gray-100 rounded-full">
        <span className="text-blue-600 "><CiStopwatch size={17} /></span>
        <p className="text-sm font-medium">{duration}</p>
      </div>
    </div>
  )
}

export default CardTimeDuration;