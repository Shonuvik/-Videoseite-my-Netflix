import React from 'react';
import Logo from '../../assets//img/logoFIlmx.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/Shonuvik">
        <img src={Logo} alt="Logo Nfilmx" />
      </a>
      <p>
      Created in ReactJS by 
        {' '}
        <a href="https://github.com">
        Marlon
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
