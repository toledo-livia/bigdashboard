import {
  FaHome,
  FaChalkboardTeacher,
  FaUserPlus,
  FaBullhorn,
  FaBell,
} from 'react-icons/fa';
import { ReactNode } from 'react';

interface IMenu {
  id: number;
  name: string;
  icon: ReactNode;
}

export const menuTitle: IMenu[] = [
  {
    id: 1,
    name: 'Painel',
    icon: <FaHome />,
  },
  {
    id: 2,
    name: 'Projetos',
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 3,
    name: 'Leads',
    icon: <FaUserPlus />,
  },
  {
    id: 4,
    name: 'Campanhas',
    icon: <FaBullhorn />,
  },
  {
    id: 5,
    name: 'Notificações',
    icon: <FaBell />,
  },
];
