import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginLayout from './components/PageLayout/LoginLayout';
import Login from './pages/Login';

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
