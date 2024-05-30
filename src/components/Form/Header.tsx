interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle, ...rest }: HeaderProps) {
  return (
    <div className='flex flex-col-2 justify-between' {...rest}>
      <div className='mb-5'>
        <p className='text-2xl font-semibold'>
          {title}
        </p>
        <p className='text-gray-500 text-base '>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Header;
