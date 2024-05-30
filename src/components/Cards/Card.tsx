import CardButton from "./components/CardButton";
import CardTimeDuration from "./components/CardTimeDuration";
import CardTag from "./components/CardTag";
import CardInfo from "./components/CardInfo";
import CardHeader from "./components/CardHeader";
import OpenOsInfo from "./components/OpenInfo";
import { IWorkOrder } from "../../interfaces/work-order.interface";
import { useGetFleetById } from "../../hooks/Fleet/useGetFleet";
import { format } from "date-fns";
import { calculateDuration } from "../../utils/work-order-utils";

interface CardProps {
  workOrder: IWorkOrder;
}

const Card: React.FC<CardProps> = ({ workOrder }) => {
  const { data: fleetData } = useGetFleetById(workOrder.fleetId)
  const openOnFormatted = format(new Date(workOrder.createdAt), 'dd/MM/yyyy HH:mm');
  console.log('fleet', fleetData)

  const queueDuration = calculateDuration(
    workOrder.queueDuration,
    workOrder.entryQueue
  );
  const maintenanceDuration = calculateDuration(
    workOrder.maintenanceDuration,
    workOrder.entryMaintenance
  );
  const waitingPartsDuration = calculateDuration(
    workOrder.waitingPartsDuration,
    workOrder.startWaitingParts
  );

   console.log('queueduration',  workOrder.startWaitingParts)
  return (
    fleetData && (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-start justify-between px-4">
              <CardHeader
                displayId={workOrder.displayId}
                fleet={fleetData.fleetNumber}
              />
              <div>
                <CardInfo 
                  carrier={fleetData.carrierName}
                  openOn={openOnFormatted}
                  severityLevel={workOrder.severityLevel}
                  typeMaintenance={workOrder.typeOfMaintenance}
                />
              </div>
              <CardTag status={workOrder.status} />
            </div>
            <footer className="flex justify-between items-center border-t-1 p-2">
              <OpenOsInfo userName={workOrder?.createdBy} />
              <div className="flex justify-between gap-4">
                {queueDuration &&

                  <CardTimeDuration
                    title="Tempo Fila"
                    duration={queueDuration}
                  />
                }
                {maintenanceDuration &&
                  <CardTimeDuration
                    title="Tempo Manu."
                    duration={maintenanceDuration}
                  />
                }
                {waitingPartsDuration &&
                  <CardTimeDuration
                    title="Aguard. Peça"
                    duration={waitingPartsDuration}
                  />
                }
              </div>
              <CardButton />
            </footer>
          </div>
        </div>
      </div>
    )
  )
}

export default Card;