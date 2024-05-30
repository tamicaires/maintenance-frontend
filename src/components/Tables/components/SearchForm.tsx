import React, { FunctionComponent, useState } from 'react'

const SearchForm: FunctionComponent<{ onSearch: (searchTerm: string) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value

    setSearchTerm(target)
    onSearch(target)
  }
  return (
    <div>
      <form className=' flex items-center' >
        <label htmlFor="" className='sr-only'>
          <span>Buscar</span>
        </label>
        <div className='relative w-full'>
          <input
            type="Search"
            name="search"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-50 p-1.5 px-2.5 border-b-1 border-gray-300 text-gray-900 text-sm outline-none focus:border-blue-400 focus:border-b-2 hover:border-b-2 hover:border-blue-400" />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;