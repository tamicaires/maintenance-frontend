import { FunctionComponent, ReactElement } from "react";

interface DashboardCardProps {
  title: string;
  count: string;
  icon: ReactElement;
}

const DashboardCard: FunctionComponent<DashboardCardProps> = ({ title, count, icon }) => {
  return (
    <div className='flex items-center bg-green-50 border-l-2 border-l-green-600 text-gray-800 gap-6 px-6 py-4 rounded-md shadow'>
      <div className='text-gray-800'>
        <span className='text-4xl font-bold'>{count}</span>
        <h3 className='text-xs text-gray-600'>{title}</h3>
      </div>
      <div className='p-2 bg-green-600 text text-white rounded-full'>
        {icon}
      </div>
    </div>
  )
};

export default DashboardCard;