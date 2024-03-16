import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginLayout from './components/PageLayout/LoginLayout';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedLayout } from './components/ProtectedLayout';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
    <>
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
    </>
  );
}

export default App;
