import { Link } from 'react-router-dom';
import { links } from './MenuLink';
import { NavLink } from 'react-router-dom';
import { useMenuStore } from '../../store/menu/useMenuStore';
import { MdClose } from "react-icons/md";
import { SiTreehouse } from "react-icons/si";
import { useThemeSettingsStore } from '../../store/themeSettings/themeSettings';
import { FunctionComponent } from 'react';

const Sidebar: FunctionComponent = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize
  } = useMenuStore();

  const { currentColor } = useThemeSettingsStore();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize && screenSize <= 900) {

      setActiveMenu(!activeMenu)
    }
    setActiveMenu(!activeMenu)
  };

  const activeLink = 'flex items-center gap-5 p-2 py-1.5 rounded-lg text-white text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-200 dark:text-gray-200 dark:hover:text-black hover:text-green-300 -m2';

  return (
    <>
      <div className='ml-0  h-screen md:overflow-hidden  md:hover:overflow-auto pb-10'>
        {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='ml-8 mt-10 flex font-extrabold tracking-tight  dark:text-white text-slate-900'>
              <span className='p-2 rounded-full bg-green-600'><SiTreehouse size={22} color={'white'} /></span>
              <span className='px-2 text-3xl text-white'>SoftTruck</span>
            </Link>
            <button
              type='button'
              onClick={() => { setActiveMenu(!activeMenu) }}
              className='text-xl text-white rounded-full px-3 hover:text-green-300 block'>
              <MdClose />
            </button>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.goes_to}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                    className={({ isActive }) => isActive ? activeLink : normalLink}>
                    {link.icon}
                    <div className=''>
                      <span className=''>
                        {link.name}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

        </>)}
        {!activeMenu && (<>
          <div>
            <div className='flex justify-between '>
              <Link to='/' onClick={handleCloseSideBar} className='ml-2 mt-10 flex font-extrabold tracking-tight rounded-full bg-green-600 dark:text-white text-slate-900'>
                <span className='p-2'><SiTreehouse size={22} color={'white'} /></span>
              </Link>
            </div>
            <div className='mt-10 '>
              {links.map((item) => (
                <div key={item.title}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.goes_to}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                      className={({ isActive }) => isActive ? activeLink : normalLink}>
                      <span className='text-white py-1'>{link.icon}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>)}
      </div></>
  )
};

export default Sidebar;