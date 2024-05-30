import Header from "../../components/Header.style";
import { FunctionComponent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Button from "../../components/Buttons/DefaultButton/Button.style";
import { useThemeSettingsStore } from "../../store/themeSettings/themeSettings";
import { ReportButton } from "../../components/Buttons";
import { useEmployeeData } from "../../hooks/Employee/useEmployeeData";
import EmployeeTable from "../../components/Table/EmployeeTable/EmployeeTable";
import { EmployeeRegistrations } from "../../components/Employees/EmployeeRegistration";
import exportFromJSON from 'export-from-json'; 
import { IEmployee } from "../../interfaces/employee.interface";

const Employees: FunctionComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { currentColor } = useThemeSettingsStore()
  const { data } = useEmployeeData();

  const employeeData = data || [];

  const onExportExcel = (data: IEmployee[]) => {
    const fileName = 'Relatório de Colaboradores';
    const exportType = exportFromJSON.types.xls;

    exportFromJSON({ data, fileName, exportType })
  };


  return (
    <div className='w-full min-h-screen p-2 place-content-start  bg-gray-50 rounded-xl   sm:px-10 sm:py-8'>
      <div className="flex flex-col-2 justify-between">
        <Header category='Cadastro de Colaboradores' title='Colaboradores' />
        <div className='flex items-center'>
          <ReportButton
            text="Gerar Relatório"
            icon={<FaFilePdf />}
            onClick={() => onExportExcel(employeeData)}
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
        <EmployeeTable employeeData={employeeData} />
      </div>
      <EmployeeRegistrations
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
};

export default Employees;
