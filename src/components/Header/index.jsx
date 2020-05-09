import React from 'react'
import './index.scss';

import * as Routes from '../../assets/js/Routes'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../Icon';

const Logo = process.env.PUBLIC_URL + 'img/logo.svg';


const Header = () => {
    const [ scrollY, setScrollY ] = React.useState(0);

    
    React.useEffect( () => {
        window.addEventListener("scroll", function ( event ){
            var scroll = this.scrollY;
            setScrollY(scroll);
        })

    })

    return(
    <>
        <header className="header">
            <div className="header__wrapper">
                <Link to={Routes.INDEX} className="header__wrapper__logo"> <img src={Logo} alt="Logo Vakros" /> </Link>
                
                <nav className="header__wrapper__items">
                    <NavLink activeClassName="activedLink" to={Routes.INDEX} className="header__wrapper__items__link">Conócenos</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.INIVERTE} className="header__wrapper__items__link">Invierte</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.PREGUNTAS} className="header__wrapper__items__link">Preguntas</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.CONTACTANOS} className="header__wrapper__items__link">Contáctanos</NavLink>
                </nav>

                <div className="header__wrapper__menu">
                    <Icon value="menu" bg={ false }/>
                </div>
            </div>

        </header>

        <header className={scrollY >= 130 ? "header-down show-header" : 'header-down'}>
            <div className="header__wrapper">
                <Link to={Routes.INDEX} className="header__wrapper__logo"> <img src={Logo} alt="Logo Vakros" /> </Link>
                
                <nav className="header__wrapper__items">
                    <NavLink activeClassName="activedLink" to={Routes.INDEX} className="header__wrapper__items__link">Conócenos</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.INIVERTE} className="header__wrapper__items__link">Invierte</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.PREGUNTAS} className="header__wrapper__items__link">Preguntas</NavLink>
                    <NavLink activeClassName="activedLink" to={Routes.CONTACTANOS} className="header__wrapper__items__link">Contáctanos</NavLink>
                </nav>

                <div className="header__wrapper__menu">
                    <Icon value="menu" bg={ false }/>
                </div>
            </div>

        </header>
    </>
    )
}

export default Header;