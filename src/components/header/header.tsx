import React from 'react';
import './header.scss';
import {useNavigate} from "react-router-dom";

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
