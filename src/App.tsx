import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import Dashboard from './pages/Dashboard';
import { LoginLayout } from './components';
import { ProtectedLayout } from './components/ProtectedLayout';
import MainLayout from './components/PageLayout/MainLayout';
import { Carriers, CarriersUpdate } from './pages/Carriers';
import { Fleets } from './pages/Fleets';
import { Employees } from './pages/Employees';
import { Jobs } from './pages/Jobs';
import { ServiceResource } from './pages/ServiceResource';
import WorkOrder from './pages/WorkOrder/WorkOrder';

function App(): JSX.Element {
  return (
    <>
    <div className='bg-gray-100'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/login'
              element={
                <LoginLayout>
                  <Login />
                </LoginLayout>
              }
            />
             <Route
              path='/transportadoras'
              element={
                <MainLayout>
                  <Carriers /> 
                </MainLayout>
              }
            />
             <Route
              path='/ordem-de-servico'
              element={
                <MainLayout>
                  <WorkOrder /> 
                </MainLayout>
              }
            />
             <Route
              path='/transportadoras/:id/atualizar'
              element={
                <MainLayout>
                  <CarriersUpdate /> 
                </MainLayout>
              }
            />
             <Route
              path='/frotas'
              element={
                <MainLayout>
                  <Fleets /> 
                </MainLayout>
              }
            />
             <Route
              path='/colaboradores'
              element={
                <MainLayout>
                  <Employees /> 
                </MainLayout>
              }
            />
             <Route
              path='/cargos'
              element={
                <MainLayout>
                  <Jobs  /> 
                </MainLayout>
              }
            />
             <Route
              path='/servicos'
              element={
                <MainLayout>
                  <ServiceResource  /> 
                </MainLayout>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              }
            >
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </div>
    </>
  );
}

export default App;
