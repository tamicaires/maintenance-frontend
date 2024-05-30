import Header from "../../components/Header.style";
import { FunctionComponent } from "react";
import { CarrierUpdate } from "../../components/Carriers/CarriersUpdate";

const CarriersUpdate: FunctionComponent = () => {
  return (
    <div className='m-4 w-full min-h-screen p-2 place-content-start  bg-gray-100 rounded-xl   sm:px-10 sm:py-8'>
      <div className="flex flex-col-2 justify-between pl-2">
        <Header category='Preencha os dados atualizados' title='Atualizar Transportadora' />
      </div>
      <div>
        <CarrierUpdate />
      </div>
    </div>
  )
};

export default CarriersUpdate;
