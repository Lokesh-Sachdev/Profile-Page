import logo from '../../assets/logo.png';
import { HiPlus } from 'react-icons/hi';
import {
  AiOutlineFolderOpen,
  AiOutlineSetting,
  AiOutlineUser,
} from 'react-icons/ai';
import { TbFileUpload } from 'react-icons/tb';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

import './sidenav.scss';

const navItems = [
  {
    icon: <HiPlus />,
    text: 'new',
  },
  {
    icon: <AiOutlineUser />,
    text: 'patient',
  },
  {
    icon: <AiOutlineFolderOpen />,
    text: 'folder',
  },
  {
    icon: <TbFileUpload />,
    text: 'upload',
  },
  {
    icon: <BsFileEarmarkText />,
    text: 'reports',
  },
  {
    icon: <AiOutlineSetting />,
    text: 'setting',
  },
  {
    icon: <FiLogOut />,
    text: 'logout',
  },
];

const Sidenav = () => {
  return (
    <nav>
      <div className="flex-center sidenav__logo">
        <img src={logo} alt="logo" />
      </div>
      {navItems.map((item, index) => (
        <Nav key={index} icon={item.icon} text={item.text} />
      ))}
    </nav>
  );
};

const Nav = ({ icon, text }) => (
  <div className="flex-center sidenav__items">
    <span>{icon}</span>
    <p>{text}</p>
  </div>
);

export default Sidenav;
