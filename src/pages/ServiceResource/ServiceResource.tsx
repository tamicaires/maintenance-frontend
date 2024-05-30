import Header from "../../components/Header.style";
import { FunctionComponent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Button from "../../components/Buttons/DefaultButton/Button.style";
import { useThemeSettingsStore } from "../../store/themeSettings/themeSettings";
import { ReportButton } from "../../components/Buttons";
import exportFromJSON from 'export-from-json';
import { useServiceResourceData } from "../../hooks/ServiceResource/useServiceResourceData";
import { IServiceResource } from "../../interfaces/service-resource.interface";
import ServiceResourceTable from "../../components/Table/ServiceResourceTable/ServiceResourceTable";
import { ServiceResourceRegistration } from "../../components/ServiceResource/ServiceResourceRegistration";

const ServiceResource: FunctionComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { currentColor } = useThemeSettingsStore()
  const { data } = useServiceResourceData();

  const serviceResourceData = data || [];

  const onExportExcel = (data: IServiceResource[]) => {
    const fileName = 'Relatório de Colaboradores';
    const exportType = exportFromJSON.types.xls;

    exportFromJSON({ data, fileName, exportType })
  };

  return (
    <div className='w-full min-h-screen p-2 place-content-start  bg-gray-50 rounded-xl   sm:px-10 sm:py-8'>
      <div className="flex flex-col-2 justify-between">
        <Header category='Cadastro de Serviços' title='Serviços' />
        <div className='flex items-center'>
          <ReportButton
            text="Gerar Relatório"
            icon={<FaFilePdf />}
            onClick={() => onExportExcel(serviceResourceData)}
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
        <ServiceResourceTable serviceResourceData={serviceResourceData} />
      </div>
      <ServiceResourceRegistration
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
};

export default ServiceResource;
