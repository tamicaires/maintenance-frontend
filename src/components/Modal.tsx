import { FunctionComponent, MouseEvent } from 'react';

interface ModalProps {
  isVisible: boolean;
  size?: string;
  children?: JSX.Element;
  onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  isVisible,
  onClose,
  children,
  size
}) => {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.id === 'wrapper') onClose();
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
      onClick={handleClose}>
      <div className={`${!size ? 'w-[600px]' : `w-[${size}px]`} flex flex-col`}>

        <div className='bg-white p-2 rounded text-xl'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;