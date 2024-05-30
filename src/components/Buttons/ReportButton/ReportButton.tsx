import { FunctionComponent, ReactElement } from "react";

interface ReportButtonProps {
  text: string;
  icon?: ReactElement;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const ReportButton: FunctionComponent<ReportButtonProps> = ({ text, icon, type, isSubmitting, onClick }) => {
  return (
    <button
      className="right-10 flex  text-base font-semibold items-center px-3 py-2 hover:drop-shadow-xl rounded-md m-4 border border-blue-600 text-blue-700"
      onClick={onClick}
      disabled={isSubmitting}
      type={type}
    >
      <span className="pr-2">{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default ReportButton;