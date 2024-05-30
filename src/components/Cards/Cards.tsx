const Cards = () => {
  return (
    <div>
      <span className="text-lg font-bold p-2 text-center pb-7">VERSÃO ANTIGA</span>
      <div className="grid grid-cols-1 gap-3 pt-6 ">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline ">#MP1000</a>
              </div>
              <div className="text-gray-500 text-right">Aberto em 18/03/2024 18:30</div>
            </div>
            <div>
              <span className='px-2 py-1.5 text-xs  font-semibold tracking-wider uppercase text-red-800 bg-red-200 rounded-md bg-opacity-50'> Aguardando peça</span>
            </div>
          </div>
          <div className="py-2 text-base text-gray-700">
            <div >
              <span className="font-semibold ">Nº Frota: 22575</span>

            </div>
            <span className="text-sm">Tipo de manutenção: Preventiva</span>
          </div>
          <div className="flex border-t-1 pt-2 text-xs text-gray-500 font-medium justify-between">
            <div className=" ">
              Inicio aguardando peça: 21/03/2024 15:24
            </div>
            <div className="text-xs text-gray-500  font-medium">
              <span > Transportadora: Tecnoserv</span>

            </div>
          </div>

        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline ">#MC1010</a>
              </div>
              <div className="text-gray-500 text-right">Aberto em 18/03/2024 18:30</div>
            </div>
            <div>
              <span className='px-2 py-1.5 text-xs  font-semibold tracking-wider uppercase text-blue-800 bg-blue-200 rounded-md bg-opacity-50'> Em manutenção</span>
            </div>
          </div>
          <div className="py-2 text-base text-gray-700">
            <div >
              <span className="font-semibold ">Nº Frota: 22575</span>

            </div>
            <span className="text-sm">Tipo de manutenção: Preventiva</span>
          </div>
          <div className="flex border-t-1 pt-2 text-xs text-gray-500 font-medium justify-between">
            <div className=" ">
              Entrada Box: 21/03/2024 15:24
            </div>
            <div className="text-xs text-gray-500  font-medium">
              <span > Transportadora: Tecnoserv</span>

            </div>
          </div>

        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" className="text-blue-500 font-bold hover:underline ">#MC1081</a>
                </div>
                <div className="text-gray-500 text-right">Aberto em 18/03/2024 18:30</div>
              </div>
              <div>
                <span className='px-2 py-1.5 text-xs  font-semibold tracking-wider uppercase text-yellow-800 bg-yellow-200 rounded-md bg-opacity-50'> Em Fila</span>
              </div>
            </div>
            <div className="py-2 text-base text-gray-700">
              <div >
                <span className="font-semibold ">Nº Frota: 22575</span>

              </div>
              <span className="text-sm">Tipo de manutenção: Preventiva</span>
            </div>
          </div>
          <div className="flex border-t-1 pt-2 text-xs text-gray-500 font-medium justify-between bg-gray-100 ">
            <div className=" ">
              Entrada fila: 21/03/2024 15:24
            </div>
            <div className="text-xs text-gray-500  font-medium">
              <span > Transportadora: Tecnoserv</span>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards;