import React from 'react';
import logo from '../assets/logo.svg';

const Login = () => {
  return (
    <div className='grid grid-cols-2 rounded-full'>
      <div className='bg-gray-50 p-32 '>
        <div className=''>
          <img src={logo} alt="Soft Truck" className='p-4 left-2 pl-7' />
          <main className='flex flex-col gap-10 w-full max-w-[384px]'>
            <header className='flex flex-col gap-1 w-full ma-w-[350px]'>
              <h1 className='text-2xl font-extrabold tracking-tight text-slate-900 text-center'>
                Acesse a plataforma
              </h1>
              <p className='text-gray-600'>
                Faça login para acessar o sistema
              </p>
            </header>
            <form className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label
                  className='font-sans font-semibold text-sm text-gray-700'
                  htmlFor="email">
                  E-mail
                </label>
                <input
                  className='text-sm p-2 rounded-lg border border-gray-200 hover:border-green-300 outline-none focus:border-green-400'
                  type="email"
                  id='email'
                  placeholder='Digite seu e-mail'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  className='flex justify-between font-sans font-semibold text-sm text-gray-700'
                  htmlFor="">
                  Senha
                  <a 
                  className='text-xs text-green-600 hover:text-green-500 hover:underline'
                  href="#"
                  >
                    Esqueceu a senha?
                  </a>
                </label>
                <input
                  className='text-sm p-2 rounded-lg border border-gray-200 hover:border-green-300 outline-none focus:border-green-400'
                  type="password"
                  id='password'
                  placeholder='Digite sua senha'
                />
              </div>
              <button className='bg-green-600 text-white  py-2 rounded outline-none hover:bg-green-500 hover:ring-1 hover:ring-green-400 focus:ring-2 focus:ring-green-300 px-4'>
                  Entrar
                </button>
            </form>
          </main>
        </div>
      </div>
      <div className='bg-login-pattern bg-cover bg-no-repeat' />
    </div>
  );
};

export default Login;