import { useState } from 'react';
import { RiCloseCircleFill, RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { DinamicField } from '.';
import logoCompany from '../data/logo-company.png';
import { useOsActiveStore } from '../../store/osActive/osActive';
import { useCurrentFleetStore } from '../../store/currents/currentFleet/useCurrentFleetStore';

const Order = () => {
  const { osActive, setOsActive } = useOsActiveStore();
  const [status, setStatus] = useState();
  const { currentFleet, setCurrentFleet} = useCurrentFleetStore();
  // const {

  //   // currentFleet, setCurrentFleet,
  //   currentCompany,
  //   currentLicensePlate,
  //   currentEntryReason,
  //   currentStatus,
  //   handleStatus, handleOs
  // } = useContext(OrderContext);

  // const { currentColor } = useStateContext();

  // const [phones, setPhones] = useState([]);

  // const addInputButton = (e) => {
  //   e.preventDefault();

  //   setPhones([...phones, ''])
  //   console.log(phones)
  // };
  return (
    <div className="bg-white dark:bg-[#42464D] p-12 shadow-2xl rounded-lg w-3/4">
      <button
        className="absolute top-20 right-10 pb-2"
        onClick={() => setOsActive(false)}
      >
        <RiCloseCircleFill size={22} />
      </button>
      <div className="relative">
        <button
          style={{ background: '#00008B' }}
          className="right-20 pb-2 flex text-white text-base font-semibold items-center px-3 py-2 hover:drop-shadow-xl rounded-lg"
          onClick={() => setOsActive(false)}
        >
          Imprimir
        </button>
        <div className='bg-[#fbfbfb] border border-gray-300 rounded-lg p-20 mt-4 py-6 px-4 lg:px-8 text-left'>
          <div className="grid grid-cols-2 py-6">
            <div>
              <img src='' className="h-16" />
            </div>

            <div className="pr-2">
              <div className='text-2xl text-right font-extrabold tracking-tight text-slate-900'>
                <h2>Ordem de Serviço</h2>
              </div>
              <div>
                <p className="text-slate-400 text-right">Nº Ordem: <span className="text-gray-800 font-bold text-main text-right">MP-0190</span></p>
                <p className="text-slate-400 text-sm text-right">Criado por: <span className="text-gray-800 font-bold text-main text-right">Elves Caires</span> 02/01 15:00</p>
              </div>
            </div>
          </div>
          <div className={`bg-gradient-to-r from-[#00008B] to-[#00bd4e] m-0 px-8 py-0.5 mb-4`}></div>

          <form className='space-y-6'>
            <div className='grid gap-4 grid-cols-4'>
              <div className=''>
                <label htmlFor="frota" className='block mb-2 text-sm font-medium text-gray-900'>
                  Frota
                </label>
                <p
                  // type="text"
                  // name='fleetNumber'
                  id='fleetNumber'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-3 p-1.5 md:w-auto min-w-3'>
                  {currentFleet?.fleetNumber}
                </p>
              </div>
              <div className=''>
                <label htmlFor="frota" className='block mb-2 text-sm font-medium text-gray-900'>
                  Empresa
                </label>
                <p
                  // name='fleet'
                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 p-1.5 md:w-auto min-w-3'>
                  Truck Diesel </p>
              </div>
              <div className=''>
                <label htmlFor="frota" className='block mb-2 text-sm font-medium text-gray-900'>
                  Placa
                </label>
                <p
                  // type="text"

                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 p-1.5 md:w-auto min-w-3'>
                  PDF5455 </p>
              </div>
              <div className=''>
                <label htmlFor="frota" className='block mb-2 text-sm font-medium text-gray-900'>
                  KM
                </label>
                <p
                  // type="text"

                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 p-1.5 md:w-auto min-w-3'>
                  888435 </p>
              </div>
            </div>
            <div className={`bg-gradient-to-r from-[#00008B] to-[#00bd4e] m-0 px-8 py-0.5 mb-4`}></div>
            <div className='grid grid-cols-4 gap-4'>
              <div className=''>
                <label htmlFor="entryReason" className='block mb-2 text-sm font-medium text-gray-900'>
                  Motivo Entrada
                </label>
                <p
                  // type="text"

                  id='entry-reason'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 p-1.5 md:w-auto min-w-3' >
                  Preventiva
                </p>
              </div>

              <div className=''>
                <label htmlFor="entryReason" className='block mb-2 text-sm font-medium text-gray-900'>
                  Status
                </label>
                <select
                  // type="text"
                  name='status'
                  id='status'
                  className='
                  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full' onChange={() => {}} >
                  <option value=''>Em manutenção</option>
                  <option value='Fila de Espera'>Fila de Espera</option>
                  <option value='box'>Em box</option>
                  <option value='waitindParts'>Aguardando Peça</option>
                </select>
              </div>

              <div>
                <label htmlFor="entryReason" className='block mb-2 text-sm font-medium text-gray-900'>
                  Entrada Fila
                </label>
                <input
                  type="datetime-local"
                  name='entryQueue'
                  id='entryQueue'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full' />
              </div>

              <div>
                <label htmlFor="entryBox" className='block mb-2 text-sm font-medium text-gray-900'>
                  Entrada Box
                </label>
                <input
                  type="datetime-local"
                  name='entryBox'
                  id='entryBox'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full' />
              </div>
              <div>
                <label htmlFor="entryBox" className='block mb-2 text-sm font-medium text-gray-900'>
                  Severidade
                </label>
                <select

                  name='fleet'
                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full'>
                  <option value=''>Nivel de Severidade</option>
                  <option value='queue'>Alto</option>
                  <option value='box'>Baixo</option>

                </select>
              </div>
              <div>
                <label htmlFor="entryBox" className='block mb-2 text-sm font-medium text-gray-900'>
                  Box
                </label>
                <select

                  name='fleet'
                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full'>
                  <option value=''>Escolha o Box</option>
                  <option value='queue'>1</option>
                  <option value='box'>2</option>
                  <option value='waitindParts'>3</option>
                  <option value=''>4</option>
                  <option value='queue'>5</option>
                  <option value='box'>6</option>
                  <option value='waitindParts'>7</option>
                </select>
              </div>
              <div>
                <label htmlFor="entryReason" className='block mb-2 text-sm font-medium text-gray-900'>
                  Saida Box
                </label>
                <input
                  type="datetime-local"
                  name='fleet'
                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full' />
              </div>
              <div>
                <label htmlFor="entryReason" className='block mb-2 text-sm font-medium text-gray-900'>
                  Supervisor Saída
                </label>
                <select

                  name='fleet'
                  id='fleet'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-full'>
                  <option value=''>Selecione um Supervisor</option>
                  <option value='queue'>Francisco</option>
                  <option value='box'>Paulo</option>
                  <option value='waitindParts'>Tok</option>
                </select>
              </div>
            </div>

            <div className=" py-6 text-sm text-neutral-700">
              <div>
                <button className='text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:outline none font-medium text-sm rounded-lg px-5 py-1.5' onClick={() => {}}>Adicionar Serviço</button>
              </div>
              <table className="w-full border-collapse border-spacing-0">
                <thead className=' pt-10 text-gray-800'>
                  <tr className=''>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-3 font-bold text-main">ID</td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-2 font-bold text-main">Serviço</td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-2 text-center font-bold text-main">Reboque</td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-1 text-center font-bold text-main">Placa SR</td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-2 text-center font-bold text-main">Mecânico</td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-2 text-center font-bold text-main"></td>
                    <td className="border-b-2 border-main pt-3 pb-3 pl-2 text-center font-bold text-main"></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className=''>
                    <td className="border-b py-3 pl-3">1.</td>
                    <td className="border-b py-3 pl-2">Trocar Montanheira</td>
                    <td className="border-b py-3 pl-2 text-center">1º</td>
                    <td className="border-b py-3 pl-0 text-center">PDT3C54</td>
                    <td className="border-b py-3 pl-2 text-center">Francisco</td>
                    <td className="border-b py-3 pl-2 text-center"><FiEdit color='blue' /></td>
                    <td className="border-b py-3 pl-2 text-center"><RiDeleteBin5Line color='red' /></td>
                  </tr>
                  <tr className=''>
                    <td className="border-b py-3 pl-3">2.</td>
                    <td className="border-b py-3 pl-2">Regular freios e suspensão</td>
                    <td className="border-b py-3 pl-2 text-center">2º</td>
                    <td className="border-b py-3 pl-0 text-center">ODT54D4</td>
                    <td className="border-b py-3 pl-2 text-center">Lucas</td>
                    <td className="border-b py-3 pl-2 text-center"><FiEdit color='blue' /></td>
                    <td className="border-b py-3 pl-2 text-center"><RiDeleteBin5Line color='red' /></td>
                  </tr>
                </tbody>
                <tr className=''>
                  <td className="border-b py-3 pl-3">3.</td>
                  <td className="border-b py-3 pl-2">Trocar Montanheira</td>
                  <td className="border-b py-3 pl-2 text-center">1º, 2º</td>
                  <td className="border-b py-3 pl-0 text-center">PDT3C54</td>
                  <td className="border-b py-3 pl-2 text-center">Francisco</td>
                  <td className="border-b py-3 pl-2 text-center"><FiEdit color='blue' /></td>
                  <td className="border-b py-3 pl-2 text-center"><RiDeleteBin5Line color='red' /></td>
                </tr>
                <tr className=''>
                  <td className="border-b py-3 pl-3">4.</td>
                  <td className="border-b py-3 pl-2">Regular freios e suspensão</td>
                  <td className="border-b py-3 pl-2 text-center">3º</td>
                  <td className="border-b py-3 pl-0 text-center">PDT3C54</td>
                  <td className="border-b py-3 pl-2 text-center">Francisco</td>
                  <td className="border-b py-3 pl-2 text-center"><FiEdit color='blue' /></td>
                  <td className="border-b py-3 pl-2 text-center"><RiDeleteBin5Line color='red' /></td>
                </tr>
                <tr className=''>
                  <td className="border-b py-3 pl-3">5.</td>
                  <td className="border-b py-3 pl-2">Alinhamento de Cambagem</td>
                  <td className="border-b py-3 pl-2 text-center">1º, 2º, 3º</td>
                  <td className="border-b py-3 pl-0 text-center">PDT3C54</td>
                  <td className="border-b py-3 pl-2 text-center">Francisco</td>
                  <td className="border-b py-3 pl-2 text-center"><FiEdit color='blue' /></td>
                  <td className="border-b py-3 pl-2 text-center"><RiDeleteBin5Line color='red' /></td>
                </tr>
              </table>
            </div>
            <div>
            </div>
            <div className='flex px-3'>
              <button className='text-white bg-red-500 hover:bg-red-400 focus:outline none font-medium text-sm rounded-lg px-5 py-2.5 mr-2' onClick={() => setOsActive(false)} >Fechar</button>
              <button className='text-white bg-orange-500 hover:bg-orange-600 focus:outline none font-medium text-sm rounded-lg px-5 py-2.5'>Editar</button>
            </div>
          </form>
        </div>
      </div>
      {/* <DinamicField /> */}
    </div>
  )
};

export default Order;