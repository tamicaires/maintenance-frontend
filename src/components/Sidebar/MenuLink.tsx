import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineCalendar, AiOutlineStock } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { BiSolidPlusSquare } from "react-icons/bi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { HiClipboardDocument } from "react-icons/hi2";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { BsKanban } from "react-icons/bs";
import { FaTools, FaUsersCog } from "react-icons/fa";

export const links = [
  {
    title: 'Dashboards',
    links: [
      {
        name: 'Dashboard',
        goes_to:'dashboard',
        icon: <GiNetworkBars size={18}/>,
      },
      {
        name: 'Oficina',
        goes_to:'oficina',
        icon: <FaTools />,
      },
    ],
  },
  {
    title: 'Manutenção',
    links: [
      {
        name: 'Ordens de Serviço',
        goes_to:'ordem-de-servico',
        icon: <HiClipboardDocument size={22}/>,
      },
      {
        name: 'Manutenções',
        goes_to:'manutencoes',
        icon: <HiMiniCog6Tooth size={18} />,
      },
      {
        name: 'Planejamento',
        goes_to:'planejamento',
        icon: <IoCalendar size={18}/>,
      },
    ],
  },
  {
    title: 'cadastros',
    links: [
      {
        name: 'Cadastros',
        goes_to:'transportadoras',
        icon: <BiSolidPlusSquare size={19} />,
        toggle:[ 
          { 
            name: 'Frotas',
            goes_to: 'frotas'
          },
          { 
            name: 'Transportadoras',
            goes_to: 'transportadoras'
          },
          { 
            name: 'Colaboradores',
            goes_to: 'colaboradores'
          },
          { 
            name: 'Serviços',
            goes_to: 'servicos'
          },
        ]
      },
      {
        name: 'Colaboradores',
        goes_to:'colaboradores',
        icon: <FaUsersCog size={18} />,
      },
      {
        name: 'Relatórios',
        goes_to:'relatorios',
        icon: <FaFileContract size={19} />,
      },
    ],
  },
];