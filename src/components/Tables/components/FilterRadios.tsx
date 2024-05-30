import React, { FunctionComponent, useState } from 'react'

const FilterRadios: FunctionComponent<{ radioFilter: (filter: string) => void }> = ({ radioFilter }) => {
  const [showAll, setShowAll] = useState(false);
  const [showActive, setShowActive] = useState(false);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;

    if (target === 'all') {
      setShowAll(true);
      setShowActive(false);
      radioFilter('all');
    } else {
      setShowAll(false);
      setShowActive(true);
      radioFilter('active');
    }
  };
  return (
    <div className='flex mr-4 gap-4 items-center text-sm font-bold capitalize flex-nowrap'>
      <label htmlFor="showAll" >
        <input
          type="radio"
          name="show"
          value="all"
          checked={showAll}
          onChange={handleFilter}
          className='size-3'
        />
        <span className='whitespace-nowrap ml-1'>Mostrar todos</span>
      </label>
      <label htmlFor="showActive" className='flex mr-4 items-center text-sm flex-nowrap'>
        <input
          type="radio"
          name="show"
          value="active"
          checked={showActive}
          onChange={handleFilter}
          className='size-3'
        />
        <span className='whitespace-nowrap ml-1'>Mostrar ativo</span>
      </label>
    </div>
  );
};

export default FilterRadios;