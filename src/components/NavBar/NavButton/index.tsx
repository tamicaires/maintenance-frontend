import { FunctionComponent, ReactNode } from "react";

interface NavButtonProps {
  color: string;
  dotColor?: string;
  icon: ReactNode;
  customFunc: () => void;
}

export const NavButton: FunctionComponent<NavButtonProps> = ({ color, dotColor, icon, customFunc }) => (
  <button
    type='button'
    onClick={customFunc}
    style={{ color }}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
    {dotColor &&
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
    }
    {icon}
  </button>
);
