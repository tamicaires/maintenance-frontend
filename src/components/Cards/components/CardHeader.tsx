interface CardHeaderProps{
  displayId: string;
  fleet: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ displayId, fleet }) => {
  return (
    <div>
      <a href="#" className="text-xs text-blue-500 font-semibold hover:underline ">{displayId}</a>
      <h1 className="text-base text-gray-800 font-bold">Frota <span>{fleet}</span></h1>
    </div>
  )
}

export default CardHeader;