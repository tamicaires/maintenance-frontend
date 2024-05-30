import Header from "../../components/Header.style";
import { FunctionComponent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useCarrierData } from "../../hooks/Carrier/useCarrierData";
import CarrierTable from "../../components/Table/CarrierTable/CarrierTable";
import { CarrierRegistrations } from "../../components/Carriers/CarriersRegistration";
import { ReportButton } from "../../components/Buttons";
import { FaFilePdf } from "react-icons/fa6";
import Button from "../../components/Buttons/DefaultButton/Button.style";
import { useThemeSettingsStore } from "../../store/themeSettings/themeSettings";
import exportFromJSON from "export-from-json";
import { ICarrier } from "../../interfaces/carrier.interface";

const Carriers: FunctionComponent = () => {
  const { currentColor } = useThemeSettingsStore();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data, isLoading } = useCarrierData();

  const carrierData = data || [];

  const onExportExcel = (data: ICarrier[]) => {
    const fileName = 'Relatório de Trasnportadoras';
    const exportType = exportFromJSON.types.xls;

    exportFromJSON({ data, fileName, exportType })
  };

  return (
    <div className='m-4 w-full min-h-screen p-2 place-content-start  bg-gray-50 rounded-xl   sm:px-10 sm:py-8'>
      <div className="flex flex-col-2 justify-between">
        <Header category='Cadastro de Transportadoras' title='Transportadoras' />
        <div className='flex items-center'>
        <ReportButton
            text="Gerar Relatório"
            icon={<FaFilePdf />}
            onClick={() => onExportExcel(carrierData)}
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
        <CarrierTable carrierData={carrierData} isLoading={isLoading} />
      </div>
      <CarrierRegistrations
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
};

export default Carriers;
