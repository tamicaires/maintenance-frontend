import Header from "../../components/Header.style";
import { FunctionComponent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useFleetData } from "../../hooks/Fleet/useFleetData";
import FleetTable from "../../components/Table/FleetTable/FleetTable";
import { FleetRegistrations } from "../../components/Fleets/FleetRegistration";
import Button from "../../components/Buttons/DefaultButton/Button.style";
import { useThemeSettingsStore } from "../../store/themeSettings/themeSettings";
import { ReportButton } from "../../components/Buttons";

const Fleets: FunctionComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { currentColor } = useThemeSettingsStore()
  const { data } = useFleetData();

  const fleetData = data || [];
  return (
    <div className='w-full min-h-screen p-2 place-content-start  bg-gray-50 rounded-xl   sm:px-10 sm:py-8'>
      <div className="flex flex-col-2 justify-between">
        <Header category='Cadastro de Frotas' title='Frotas' />
        <div className='flex items-center'>
          <ReportButton
            text="Gerar Relatório"
            icon={<FaFilePdf />}
          />
          <Button
            bgColor={currentColor}
            color="white"
            textSize="25"
            text="Cadastrar Novo"
            icon={<FaPlus size={12} />}
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      <div>
        <FleetTable fleetData={fleetData} />
      </div>
      <FleetRegistrations
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
};

export default Fleets;
