import { FunctionComponent, ReactElement } from "react";

interface ButtonProps {
  bgColor?: string;
  color: string;
  text: string;
  icon?: ReactElement;
  textSize: string;
  border?: string;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  bgColor,
  color,
  text,
  textSize,
  border,
  type,
  isSubmitting,
  onClick,
  icon
}) => {
  return (
    <div>
      <button
        type={type ?? 'button'}
        style={{ backgroundColor: bgColor, color }}
        className={`hover:bg-${color}-900 focus:outline-none font-medium text-${textSize} 
        ${border ? `border border-blue-600 text-blue-700` : ''} rounded-lg  hover:drop-shadow-lg w-[230px] py-2.5 mr-2`}
        onClick={onClick}
        disabled={isSubmitting}
      >
        <div className="flex justify-center items-center">
          <span className="pr-2">{icon}</span>
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
