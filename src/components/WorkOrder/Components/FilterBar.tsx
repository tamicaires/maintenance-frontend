import { useState } from "react";

const FilterBar = () => {
  const [tabActive, setTabActive] = useState('all');
  console.log(tabActive)
  return (
    <div className="mt-1 bg-gray-50 px-4 pt-2 rounded-xl">
      <div className=''>
        <div className="flex justify-between mx-4 bg-white rounded-full">
          <button className={`p-1 text-sm  rounded-3xl ${tabActive === 'all' ? 'font-bold bg-blue-100 text-blue-500' : ' font-semibold text-gray-700'} flex-grow hover:bg-gray-300 hover:bg-opacity-40`} onClick={() => setTabActive('all')}>Todas</button>
          <button className={`p-2 text-sm  rounded-3xl ${tabActive === 'queue' ? 'font-bold bg-blue-100 text-blue-700' : ' font-semibold text-gray-700'} flex-grow hover:bg-gray-300 hover:bg-opacity-40`} onClick={() => setTabActive('queue')}>Fila</button>
          <button className={`p-2 text-sm rounded-3xl ${tabActive === 'maintenance' ? 'font-bold bg-[#fdc8729b] text-orange-500' : ' font-semibold text-gray-700'} flex-grow hover:bg-gray-300 hover:bg-opacity-40`} onClick={() => setTabActive('maintenance')}>Manutenção</button>
          <button className={`p-2 text-sm   rounded-3xl ${tabActive === 'waitingParts' ? 'font-bold bg-red-200 text-red-600' : ' font-semibold text-gray-700'} flex-grow hover:bg-gray-300 hover:bg-opacity-40`} onClick={() => setTabActive('waitingParts')}>Aguard. Peça</button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar;