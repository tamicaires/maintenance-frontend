interface CardInfoProps {
  typeMaintenance: string;
  severityLevel: string;
  carrier: string;
  openOn: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  typeMaintenance,
  carrier,
  openOn,
  severityLevel
}) => {
  const titles = {
    typeMaintenance: 'Tipo de Manutenção',
    severityLevel: 'Grau de Severidade',
    carrier: 'Transportadora',
    openOn: 'Abertura OS'
  };

  const maintenanceInfo = {
    typeMaintenance: 'Preventiva',
    severityLevel: 'Alta',
    carrier: 'Truck Diesel',
    openOn: '11/04/2024 14:00'
  };

  return (
    <div>
      <div className="flex gap-1">
        <div className="text-[13px] text-gray-400 font-body">
          {Object.entries(titles).map(([key, value]) =>
            <p className="p-1" key={key}>{value}</p>
          )};
        </div>
        {/* <div className="text-[13px] text-gray-800 font-semibold">
          {Object.entries(maintenanceInfo).map(([key, value]) =>
            <p className="p-1" key={key}>{value}</p>
          )}
          {carrier}
        </div> */}
        <div className="text-[13px] text-gray-800 font-semibold">
          {Object.entries({ typeMaintenance, severityLevel, carrier, openOn,  }).map(([key, value]) =>
            <p className="p-1" key={key}>{value}</p>
          )}
        </div>
      </div>
    </div>
  )
};

export default CardInfo;