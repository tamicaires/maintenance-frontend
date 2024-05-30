import { FunctionComponent } from 'react';

interface HeaderProps {
  title: string;
  category: string;
}

const Header: FunctionComponent<HeaderProps> = ({ category, title }) => {
  return (
    <div className='flex flex-col-2 justify-between'>
      <div className='mb-5'>
        <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
          {title}
        </p>
        <p className='text-gray-400'>
          {category}
        </p>

      </div>

    </div>
  );
};

export default Header;