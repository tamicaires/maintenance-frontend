import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa";
import { NavButton } from './NavButton';
import UserProfile from '../Widgets/UseProfile';
import Notification from '../Widgets/Notification';
import { useMenuStore } from '../../store/menu/useMenuStore';
import { useThemeSettingsStore } from '../../store/themeSettings/themeSettings';

export const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    isClicked,
    handleClick
  } = useMenuStore();

  const { currentColor } = useThemeSettingsStore();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize && screenSize <= 900) {

      setActiveMenu(false);
    } else {

      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className='flex justify-between p-2 mr-0 md:mx-6 relative'>
      <NavButton customFunc={() => setActiveMenu(!activeMenu)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className='flex '>
        <NavButton
          dotColor-='#03C9D7'
          customFunc={() => { handleClick('notification') }}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
          {<FaUserCircle  size={20} color={currentColor} />}
          <p>
            <span className='text-gray-400 text-14'>Olá, </span> {' '}
            <span className='text-gray-40 font-bold ml-1 text-14'>Elves</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>
      </div>

      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}

    </div>
  )
};

export default Navbar;