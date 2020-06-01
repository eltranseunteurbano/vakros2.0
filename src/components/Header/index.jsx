import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss';

import * as Routes from '../../assets/js/Routes'
import Icon from '../Icon';
import onElementHeightChange from '../../assets/js/elementWidth';

const Logo = process.env.PUBLIC_URL + 'img/logo.svg';

const Header = ( props ) => {
    const [ scrollY, setScrollY ] = React.useState(0);
    const [ responsive, setResponsive ] = React.useState(false);
    
    React.useEffect( () => {
        window.addEventListener("scroll", function ( event ){
            var scrollY = this.scrollY;
            setScrollY(scrollY);
        });

        onElementHeightChange(document.body, function( width ) {
            if ( width > 850 ){
                setResponsive(false)
            }
        })

    }, [])

    const close = () => {
        setResponsive(false);
        setScroll();
    }

    const setScroll = () => {
        window.scrollTo(0,0);
    }


    return(
    <>
        <header className="header">
            <div className="header__wrapper">
                <Link to={Routes.INDEX} className="header__wrapper__logo" onClick={() => setScroll() }> <img src={Logo} alt="Logo Vakros" /> </Link>
                
                <nav className="header__wrapper__items">
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.INDEX} className="header__wrapper__items__link">Conócenos</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.INIVERTE} className="header__wrapper__items__link">Invierte</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.PREGUNTAS} className="header__wrapper__items__link">Preguntas</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.CONTACTANOS} className="header__wrapper__items__link">Contáctanos</NavLink>
                </nav>

                <div className="header__wrapper__menu" onClick={() => setResponsive(true)}>
                    <Icon value="menu" bg={ false }/>
                </div>
            </div>

        </header>

        <header className={scrollY >= 130 ? "header-down show-header" : 'header-down'}>
            <div className="header__wrapper">
                <Link to={Routes.INDEX} className="header__wrapper__logo" onClick={() => setScroll() }> <img src={Logo} alt="Logo Vakros" /> </Link>
                
                <nav className="header__wrapper__items">
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.INDEX} className="header__wrapper__items__link">Conócenos</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.INIVERTE} className="header__wrapper__items__link">Invierte</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.PREGUNTAS} className="header__wrapper__items__link">Preguntas</NavLink>
                    <NavLink activeClassName="activedLink" onClick={() => setScroll() } exact to={Routes.CONTACTANOS} className="header__wrapper__items__link">Contáctanos</NavLink>
                </nav>

                <div className="header__wrapper__menu" onClick={() => setResponsive(true)} >
                    <Icon value="menu" bg={ false }/>
                </div>
            </div>

        </header>

        {
            responsive &&

            <section className="MenuResponsive appear">

            <article className="MenuResponsive__body">

                <Link to={Routes.INDEX} className="MenuResponsive__body__logo" onClick={() => setScroll() }>
                    <img src={Logo} alt="Vakros"/>
                </Link>
                
                <nav className="MenuResponsive__body__nav">
                    <NavLink activeClassName="activedLink" onClick={ () => close() } exact to={Routes.INDEX} className="MenuResponsive__body__nav__item">Cónocenos</NavLink>
                    <NavLink activeClassName="activedLink" onClick={ () => close() } exact to={Routes.INIVERTE} className="MenuResponsive__body__nav__item">Invierte</NavLink>
                    <NavLink activeClassName="activedLink" onClick={ () => close() } exact to={Routes.PREGUNTAS} className="MenuResponsive__body__nav__item">Preguntas</NavLink>
                    <NavLink activeClassName="activedLink" onClick={ () => close() } exact to={Routes.CONTACTANOS} className="MenuResponsive__body__nav__item">Contáctanos</NavLink>
                </nav>

                <div className="MenuResponsive__body__redes">
                    <div className="MenuResponsive__body__redes__items">
                        <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'wp' } bg={ false } /> </a>
                        <a href="https://www.instagram.com/vakros.co/" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'ig' } bg={ false } /> </a>
                        <a href="https://www.facebook.com/vakros/" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'fb' } bg={ false } /> </a>
                    </div>
                    
                    <div className="MenuResponsive__body__redes__data">
                        <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer"> +57 302 288 0083 </a>
                        <a href="mailto:vakroscolombia@gmail.com" target="_blank" rel="noopener noreferrer"> vakroscolombia@gmail.com </a>
                    </div>

                </div>


            </article>

            <article className="MenuResponsive__close">
                <div className="MenuResponsive__close__item" onClick={() => setResponsive(false)}>
                    <Icon value="menu" bg={ false } color={ "#ffffff" }/>
                </div>
            </article>
        </section>
        }

    </>
    )
}

export default Header;