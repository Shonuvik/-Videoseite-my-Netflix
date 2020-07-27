import React from 'react';
import Logo from '../../assets/img/logoFIlmx.png';
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import { Button } from '../Button';

export default function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="NFILMX" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}