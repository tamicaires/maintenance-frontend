interface OpenOsInfoProps{
  userName: string;
}

const OpenOsInfo: React.FC<OpenOsInfoProps> = ({ userName }) => {
  return (
    <div className="pl-2">
      <p className="text-[11px] text-gray-400">Criado por</p>
      <span className="text-sm text-gray-700 font-semibold">{userName}</span>
    </div>
  );
};

export default OpenOsInfo;