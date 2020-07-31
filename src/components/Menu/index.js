import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoFIlmx.png';
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import  { Button }  from '../Button';

export default function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="NFILMX" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}