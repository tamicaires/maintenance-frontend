import Sidebar from '../Sidebar';
import { FiSettings } from 'react-icons/fi';
import Navbar from '../NavBar';
import { useMenuStore } from '../../store/menu/useMenuStore';
import { useThemeSettingsStore } from '../../store/themeSettings/themeSettings';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { activeMenu } = useMenuStore();
  const { currentColor } = useThemeSettingsStore();
  return (
    <div className=''>
      <div className="flex relative dark:bg-main-dark-bg" >
        <div className="fixed right-4 bottom-4 " style={{ zIndex: '1000' }}>
          <button type="button" className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            onClick={() => { }}
            style={{
              background: currentColor,
              borderRadius: '50%'
            }}>
            <FiSettings />
          </button>
        </div>
 
        {activeMenu ? (
          <div className="w-72 fixed sidebar rounded-tr-xl rounded-br-xl dark:bg-secondary-dark-bg bg-blue-900">
            <Sidebar />
          </div>
        ) : (
          <div className="w-14 rounded-tr-xl rounded-br-xl bg-blue-900  dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={
          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
        ${activeMenu
            ? 'md:ml-72'
            : 'flex-2'}`
        }>
          <div className="fixed md:static bg-gray-100 dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;