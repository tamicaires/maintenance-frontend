interface CardTagProps {
  status: string;
}

const CardTag: React.FC<CardTagProps> = ({ status }) => {
  const statusFormatted = status.toLowerCase();
  console.log('status', statusFormatted)
  return (
    <>
      {statusFormatted === 'manutencao' &&
        <div>
          <span className='px-2.5 py-1.5 text-sm font-bold tracking-wider uppercase text-indigo-600 bg-indigo-200 rounded-md bg-opacity-50'>{status}</span>
        </div>
      }
      {statusFormatted === 'fila' &&
        <div>
          <span className='px-2.5 py-1.5 text-sm  font-bold tracking-wider uppercase text-yellow-600 bg-yellow-200 rounded-md bg-opacity-50'>{status}</span>
        </div>
      }
      {statusFormatted === 'aguardandopeca' &&
        <div>
          <span className='px-2.5 py-1.5 text-sm  font-bold tracking-wider uppercase text-red-600 bg-red-200 rounded-md bg-opacity-50'>Aguardando Peça</span>
        </div>
      }
    </>
  )
};

export default CardTag;