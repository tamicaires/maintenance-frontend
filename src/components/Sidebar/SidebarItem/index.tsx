import { FunctionComponent } from "react";

interface SidebarProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  children?: JSX.Element;
}

const SidebarItem: FunctionComponent<SidebarProps> = ({ icon, text, active, children }) => {
  return (
    <div className={`relative py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover: bg-indigo-50 text-gray-700"
      }`}>
      <div className="flex items-center">
        {icon}
        <span>{text}</span>
      </div>
      <div className="text-gray-500 text-sm">{children}</div>
      
    </div>
  )
}

export default SidebarItem;