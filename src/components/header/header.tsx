import React from 'react';
import {useNavigate} from "react-router-dom";
import './header.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={'Header'}>
      <img
        src={'/logo.webp'}
        className="Header-Logo"
        alt="logo"
        onClick={() => {navigate('/')}}
        title={'На головну'}
      />
    </header>
  );
};

export default Header;
