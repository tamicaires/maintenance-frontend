import { IoIosArrowForward } from "react-icons/io";

const CardButton: React.FC = () => {
  return (
    <div>
      <button className="flex items-center mt-2 gap-1 p-2 px-3 pl-4 text-xs text-center text-white bg-[#1d4ed8] uppercase rounded-full font-bold hover:bg-blue-600">
        <span>Ver Detalhes</span>
        <span><IoIosArrowForward /></span>
      </button>
    </div>
  )
}

export default CardButton;