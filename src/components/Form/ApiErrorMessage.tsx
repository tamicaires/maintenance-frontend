import { RiAlertFill } from "react-icons/ri";

interface ApiErroMessageProps {
  message: string;
  hasError: boolean;
}

export function ApiErrorMessage({ message, hasError }: ApiErroMessageProps) {

  if (!hasError) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 text-xs text-red-500 mt-1">
      <span><RiAlertFill size={10}/></span>
      <span > {message}</span>
    </div>
  );
}