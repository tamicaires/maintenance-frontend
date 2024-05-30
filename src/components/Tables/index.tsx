import { useEffect, useState } from "react";
import { ICarrier } from "../../interfaces/carrier.interface";
import { FaInfoCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import SearchForm from "./components/SearchForm";
import { format } from 'date-fns';
import useDeleteCarrier from "../../hooks/Carrier/useDeleteCarrier";
import { PaginationButtons } from "./PaginationButtons";

const Tables = ({ carrierData }: { carrierData: ICarrier[] }) => {
  const [filteredData, setFilteredData] = useState<ICarrier[]>(carrierData);

  const headers = [
    { key: 'carrierName', label: 'Transportadora' },    
    { key: 'managerName', label: 'Proprietário' },    
    { key: 'managerPhone', label: 'Contato' },    
    { key: 'createdAt', label: 'Criado em' },    
    { key: 'status', label: 'Status' },    
  ];

  const { mutate: mutateDelete } = useDeleteCarrier();

  useEffect(() => {
    setFilteredData(carrierData)
  }, [carrierData]);

  const handleSearch = (searchTerm: string) => {
    const filtered = carrierData.filter(carrier =>
      carrier.carrierName.toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const handleClickRemove = (id: string) => {
    mutateDelete(id);
  };

  return (
    <div className='overflow-auto rounded-lg shadow '>
      <div className="flex items-center justify-between">
        <SearchForm onSearch={handleSearch} />
        <div>
          {/* <FilterDropDown /> */}
        </div>
      </div>
      <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200 px-6'>
          <tr>
            {headers.map((row) => {
            return <th key={row.key} className='p-3 text-sm font-semibold tracking-wide text-left'>{row.label}</th>
            })}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {filteredData.map((carrier) => (
            <tr key={carrier.id} className={carrier.status === 'Ativo' ? 'bg-green-50' : 'bg-white'}>
              <td className='p-3 px-2 text-sm text-gray-700 whitespace-nowrap capitalize'>{carrier.carrierName}</td>
              <td className='p-3 px-4 text-sm text-gray-700 whitespace-nowrap'>{carrier.managerName}</td>
              <td className='p-3 px-4 text-sm text-gray-700 whitespace-nowrap text-left'>{carrier.managerPhone}</td>
              <td className='p-3 px-4 text-sm text-gray-700 whitespace-nowrap text-left'>{format(carrier.createdAt, 'dd/MM/yyyy hh:mm')}</td>
              <td className='p-3 px-4 text-sm text-gray-700 whitespace-nowrap text-left'>
                <span className={`px-2 py-1.5 text-xs rounded-full font-semibold tracking-wider text-${carrier.status === 'ATIVO' ? 'green' : 'red'}-800 bg-${carrier.status === 'ATIVO' ? 'green' : 'red'}-200 rounded-md bg-opacity-50`}>{carrier.status}</span>
              </td>
              <td className="text-blue-600 py-2"><FaInfoCircle size={14} /></td>
              <td className="text-blue-500 py-2"><CiEdit size={18} /></td>
              <td className="text-red-600 py-2 hover:text-red-800" onClick={() => handleClickRemove(carrier.id)}><MdOutlineDeleteOutline size={18} /></td>
            </tr>
          ))}
        </tbody>
        <div>
          <PaginationButtons />
        </div>
      </table>
    </div>
  );
};

export default Tables;
